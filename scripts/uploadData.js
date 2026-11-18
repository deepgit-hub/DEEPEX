

import fs from "fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import htmlTopics from "../src/data/webDevelopment/html/topics.js";
import htmlQuestions from "../src/data/webDevelopment/html/questions.js";

import cssTopics from "../src/data/webDevelopment/css/topics.js";
import cssQuestions from "../src/data/webDevelopment/css/questions.js";

import jsTopics from "../src/data/webDevelopment/javascript/topics.js";
import jsQuestions from "../src/data/webDevelopment/javascript/questions.js";

// Firebase Admin initialization
const serviceAccount = JSON.parse(
  fs.readFileSync(
    new URL("../serviceAccountKey.json", import.meta.url),
    "utf8"
  )
);

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// Web Development data
const languages = {
  html: { topics: htmlTopics, questions: htmlQuestions },
  css: { topics: cssTopics, questions: cssQuestions },
  javascript: { topics: jsTopics, questions: jsQuestions },
};

// Upload data
async function uploadAll() {
  console.log("Starting Web Development upload...\n");

  for (const [languageId, data] of Object.entries(languages)) {
    console.log(`Uploading ${languageId.toUpperCase()}...`);

    const languageRef = db
      .collection("webDevelopment")
      .doc(languageId);

    for (const topic of data.topics) {
      const topicId = String(topic.id);

      const topicRef = languageRef
        .collection("concepts")
        .doc(topicId);

      const batch = db.batch();

      batch.set(topicRef, topic);

      const questions = data.questions.filter(
        (question) => question.topicId === topic.id
      );

      if (questions.length !== 10) {
        throw new Error(
          `${languageId} topic ${topicId} has ${questions.length} questions`
        );
      }

      for (const question of questions) {
        const questionRef = topicRef
          .collection("questions")
          .doc(String(question.id));

        batch.set(questionRef, question);
      }

      await batch.commit();

      console.log(
        `  Topic ${topicId}: 1 topic + ${questions.length} questions uploaded`
      );
    }

    console.log(`${languageId.toUpperCase()} completed!\n`);
  }

  console.log("WEB DEVELOPMENT UPLOAD COMPLETE!");
}

uploadAll()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("UPLOAD FAILED:", error);
    process.exit(1);
  });
