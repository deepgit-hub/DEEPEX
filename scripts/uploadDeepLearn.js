const fs = require("fs");
const path = require("path");
const vm = require("vm");

const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// --------------------------------------------------
// Firebase Admin initialization
// --------------------------------------------------

const serviceAccount = require("../firebase-service-account.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// --------------------------------------------------
// Load concept files
// --------------------------------------------------

function loadConceptFile(filePath) {
  const absolutePath = path.resolve(filePath);

  let code = fs.readFileSync(absolutePath, "utf8");

  code = code.replace(
    /export\s+default\s+concepts\s*;?/,
    "module.exports = concepts;"
  );

  const sandbox = {
    module: { exports: {} },
    exports: {},
  };

  vm.runInNewContext(code, sandbox);

  return sandbox.module.exports;
}

// --------------------------------------------------
// Deep Learn category files
// --------------------------------------------------

const categories = {
  communication: "../src/data/deepLearn/communication.js",
  interview: "../src/data/deepLearn/interview.js",
  workspace: "../src/data/deepLearn/workspace.js",
  professional: "../src/data/deepLearn/professional.js",
  personal: "../src/data/deepLearn/personal.js",
};

// --------------------------------------------------
// Upload one category
// --------------------------------------------------

async function uploadCategory(categoryId, filePath) {
  console.log(`\n📚 Uploading: ${categoryId}`);

  const concepts = loadConceptFile(
    path.join(__dirname, filePath)
  );

  console.log(`Found ${concepts.length} concepts.`);

  const batch = db.batch();

  concepts.forEach((concept) => {
    const conceptRef = db
      .collection("deepLearn")
      .doc(categoryId)
      .collection("concepts")
      .doc(String(concept.conceptId));

    batch.set(conceptRef, concept);
  });

  await batch.commit();

  console.log(
    `✅ ${categoryId}: ${concepts.length} concepts uploaded`
  );
}

// --------------------------------------------------
// Upload everything
// --------------------------------------------------

async function uploadAll() {
  console.log("🚀 Starting DEEP LEARN upload...\n");

  let total = 0;

  for (const [categoryId, filePath] of Object.entries(categories)) {
    await uploadCategory(categoryId, filePath);

    const concepts = loadConceptFile(
      path.join(__dirname, filePath)
    );

    total += concepts.length;
  }

  console.log("\n====================================");
  console.log("🎉 DEEP LEARN UPLOAD COMPLETE");
  console.log("====================================");
  console.log(`Total concepts uploaded: ${total}`);
  console.log("");
  console.log("Firestore structure:");
  console.log("deepLearn/");
  console.log("  ├── communication/concepts/");
  console.log("  ├── interview/concepts/");
  console.log("  ├── workplace/concepts/");
  console.log("  ├── professional/concepts/");
  console.log("  └── personal/concepts/");
}

// --------------------------------------------------
// Run
// --------------------------------------------------

uploadAll()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n❌ Upload failed:");
    console.error(error);
    process.exit(1);
  });