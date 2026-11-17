
const topics = [
  {
    id: 1,
    title: "Introduction to JavaScript",
    englishDefinition:
      "JavaScript is a programming language used to make websites interactive and dynamic. It can respond to user actions, update webpage content, and perform calculations.",
    tamilDefinition:
      "JavaScript என்பது இணையதளங்களைச் செயல்பாடுகளுடன் மற்றும் ஊடாடும் வகையில் உருவாக்கப் பயன்படும் ஒரு programming language ஆகும். பயனரின் செயல்களுக்கு பதிலளிக்கவும், webpage உள்ளடக்கத்தை மாற்றவும், கணக்கீடுகளைச் செய்யவும் உதவுகிறது.",
    realWorldUsage:
      "JavaScript is used to create interactive buttons, form validation, animations, online shopping websites, and dynamic web applications.",
    realWorldUsageTamil:
      "Interactive buttons, form validation, animations, online shopping websites மற்றும் dynamic web applications உருவாக்க JavaScript பயன்படுகிறது.",
    syntax: `console.log("Hello, World!");`,
    syntaxExplanationEnglish: [
      "`console.log()` is used to display information in the console.",
      "The text inside quotation marks is called a string.",
      "The semicolon marks the end of the statement."
    ],
    syntaxExplanationTamil: [
      "`console.log()` என்பது console-ல் தகவல்களைக் காட்டப் பயன்படுகிறது.",
      "Quotation marks-க்குள் உள்ள text string எனப்படும்.",
      "Semicolon ஒரு statement முடிவைக் குறிக்கிறது."
    ],
    exampleProgram: `console.log("Hello, World!");
console.log("My name is Deepak.");
console.log("I want to become a Cyber Security professional.");`,
    programExplanationEnglish: [
      "The first statement displays Hello, World! in the console.",
      "The second statement displays the name Deepak.",
      "The third statement displays a career goal."
    ],
    programExplanationTamil: [
      "முதல் statement console-ல் Hello, World! என்பதைக் காட்டுகிறது.",
      "இரண்டாவது statement Deepak என்ற பெயரைக் காட்டுகிறது.",
      "மூன்றாவது statement career goal-ஐக் காட்டுகிறது."
    ],
    output: `Hello, World!
My name is Deepak.
I want to become a Cyber Security professional.`
  },
  {
    id: 2,
    title: "Adding JavaScript to HTML",
    englishDefinition:
      "JavaScript can be added to an HTML document using the script tag. It can be written directly inside HTML or connected through an external JavaScript file.",
    tamilDefinition:
      "HTML document-ல் script tag பயன்படுத்தி JavaScript-ஐ இணைக்கலாம். HTML கோப்பிற்குள்ளேயே JavaScript எழுதலாம் அல்லது தனியாக உள்ள JavaScript கோப்பையும் இணைக்கலாம்.",
    realWorldUsage:
      "Web developers use JavaScript with HTML to make buttons work, display messages, and respond to user interactions.",
    realWorldUsageTamil:
      "Buttons செயல்படவும், messages காட்டவும், பயனரின் செயல்களுக்கு பதிலளிக்கவும் HTML உடன் JavaScript பயன்படுத்தப்படுகிறது.",
    syntax: `<!-- Internal JavaScript -->
<script>
  console.log("Hello from JavaScript");
</script>

<!-- External JavaScript -->
<script src="script.js"></script>`,
    syntaxExplanationEnglish: [
      "The script tag is used to write or connect JavaScript.",
      "Internal JavaScript is written between the opening and closing script tags.",
      "The src attribute connects an external JavaScript file."
    ],
    syntaxExplanationTamil: [
      "JavaScript எழுத அல்லது இணைக்க script tag பயன்படுகிறது.",
      "Internal JavaScript என்பது script tags-க்கு இடையில் எழுதப்படுகிறது.",
      "src attribute வெளிப்புற JavaScript கோப்பை இணைக்கிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <h1>Welcome</h1>

  <script>
    console.log("JavaScript is connected!");
  </script>
</body>
</html>`,
    programExplanationEnglish: [
      "The HTML document creates a webpage.",
      "The script tag contains JavaScript code.",
      "The console.log statement displays a message in the browser console."
    ],
    programExplanationTamil: [
      "HTML document ஒரு webpage-ஐ உருவாக்குகிறது.",
      "script tag-க்குள் JavaScript code எழுதப்பட்டுள்ளது.",
      "console.log statement browser console-ல் ஒரு செய்தியைக் காட்டுகிறது."
    ],
    output: `Webpage:
Welcome

Browser Console:
JavaScript is connected!`
  },
  {
    id: 3,
    title: "JavaScript Syntax and Statements",
    englishDefinition:
      "JavaScript syntax refers to the rules used to write JavaScript code. A statement is an instruction that tells the browser or JavaScript engine to perform an action.",
    tamilDefinition:
      "JavaScript syntax என்பது JavaScript code எழுதுவதற்கான விதிமுறைகளைக் குறிக்கிறது. Statement என்பது browser அல்லது JavaScript engine ஒரு செயலைச் செய்ய வழங்கப்படும் instruction ஆகும்.",
    realWorldUsage:
      "Syntax and statements are used in every JavaScript program to organize instructions and perform operations correctly.",
    realWorldUsageTamil:
      "ஒவ்வொரு JavaScript program-லும் instructions-ஐ ஒழுங்குபடுத்தவும் செயல்பாடுகளைச் சரியாகச் செய்யவும் syntax மற்றும் statements பயன்படுகின்றன.",
    syntax: `// This is a comment
console.log("Welcome");

let age = 20;`,
    syntaxExplanationEnglish: [
      "Comments are used to explain code and are ignored during execution.",
      "console.log() is a JavaScript statement.",
      "A variable declaration is also a statement."
    ],
    syntaxExplanationTamil: [
      "Comments code-ஐ விளக்கப் பயன்படுகின்றன; execution நேரத்தில் அவை செயல்படுத்தப்படாது.",
      "console.log() ஒரு JavaScript statement ஆகும்.",
      "Variable declaration-ம் ஒரு statement ஆகும்."
    ],
    exampleProgram: `// Student information
let name = "Deepak";
let age = 20;

console.log(name);
console.log(age);`,
    programExplanationEnglish: [
      "The first line is a comment.",
      "The name variable stores a string.",
      "The age variable stores a number.",
      "The console.log statements display both values."
    ],
    programExplanationTamil: [
      "முதல் வரி ஒரு comment ஆகும்.",
      "name variable ஒரு string-ஐ சேமிக்கிறது.",
      "age variable ஒரு எண்ணைச் சேமிக்கிறது.",
      "console.log statements இரண்டு values-ஐயும் காட்டுகின்றன."
    ],
    output: `Deepak
20`
  },
  {
    id: 4,
    title: "Variables – var, let and const",
    englishDefinition:
      "Variables are containers used to store data in JavaScript. JavaScript provides var, let, and const to declare variables, each with different scope and reassignment rules.",
    tamilDefinition:
      "Variables என்பது JavaScript-ல் data-ஐ சேமிக்கப் பயன்படும் containers ஆகும். Variables உருவாக்க var, let, const ஆகியவை பயன்படுகின்றன. இவை scope மற்றும் value மாற்றும் விதிகளில் வேறுபடுகின்றன.",
    realWorldUsage:
      "Variables store usernames, passwords, product prices, login status, and other information used by applications.",
    realWorldUsageTamil:
      "Applications-ல் username, password, product price, login status மற்றும் பிற தகவல்களைச் சேமிக்க variables பயன்படுகின்றன.",
    syntax: `var name = "Deepak";
let age = 20;
const country = "India";`,
    syntaxExplanationEnglish: [
      "var declares a function-scoped variable.",
      "let declares a block-scoped variable that can be reassigned.",
      "const declares a block-scoped variable that cannot be reassigned."
    ],
    syntaxExplanationTamil: [
      "var என்பது function scope கொண்ட variable-ஐ உருவாக்குகிறது.",
      "let என்பது block scope கொண்டது; அதன் value-ஐ மாற்றலாம்.",
      "const என்பது block scope கொண்டது; அதன் value-ஐ மீண்டும் assign செய்ய முடியாது."
    ],
    exampleProgram: `let studentName = "Deepak";
let age = 20;

age = 21;

const course = "Computer Science";

console.log(studentName);
console.log(age);
console.log(course);`,
    programExplanationEnglish: [
      "studentName stores the student's name.",
      "age stores 20 initially.",
      "The age variable is reassigned to 21 because it was declared using let.",
      "course stores the course name using const.",
      "All three values are displayed."
    ],
    programExplanationTamil: [
      "studentName மாணவரின் பெயரைச் சேமிக்கிறது.",
      "age ஆரம்பத்தில் 20-ஐச் சேமிக்கிறது.",
      "let பயன்படுத்தப்பட்டதால் age-ன் value 21 ஆக மாற்றப்படுகிறது.",
      "course variable const பயன்படுத்தி course பெயரைச் சேமிக்கிறது.",
      "மூன்று values-ம் காட்டப்படுகின்றன."
    ],
    output: `Deepak
21
Computer Science`
  },
  {
    id: 5,
    title: "JavaScript Data Types",
    englishDefinition:
      "Data types describe the kind of value stored in a variable. JavaScript includes primitive types such as string, number, boolean, undefined, null, bigint, and symbol, along with the object type.",
    tamilDefinition:
      "Data types என்பது ஒரு variable-ல் சேமிக்கப்பட்டுள்ள value-ன் வகையைக் குறிக்கிறது. JavaScript-ல் string, number, boolean, undefined, null, bigint, symbol போன்ற primitive types மற்றும் object type உள்ளன.",
    realWorldUsage:
      "Data types are used to store names as strings, ages as numbers, login status as booleans, and structured information as objects.",
    realWorldUsageTamil:
      "பெயர்களை string-ஆகவும், வயதை number-ஆகவும், login status-ஐ boolean-ஆகவும், தகவல்களை object-ஆகவும் சேமிக்க data types பயன்படுகின்றன.",
    syntax: `let name = "Deepak";
let age = 20;
let isStudent = true;
let result;
let emptyValue = null;

console.log(typeof name);`,
    syntaxExplanationEnglish: [
      "A string stores text.",
      "A number stores numeric values.",
      "A boolean stores true or false.",
      "undefined means a variable has been declared but not assigned a value.",
      "null represents an intentional absence of a value.",
      "typeof is used to check the type of a value."
    ],
    syntaxExplanationTamil: [
      "String என்பது text-ஐச் சேமிக்கிறது.",
      "Number என்பது எண் மதிப்புகளைச் சேமிக்கிறது.",
      "Boolean என்பது true அல்லது false மதிப்பைச் சேமிக்கிறது.",
      "ஒரு variable உருவாக்கப்பட்டும் value வழங்கப்படாமலும் இருந்தால் undefined கிடைக்கும்.",
      "ஒரு value இல்லாததைத் திட்டமிட்டு குறிக்க null பயன்படுகிறது.",
      "ஒரு value-ன் type-ஐ அறிய typeof பயன்படுகிறது."
    ],
    exampleProgram: `let name = "Deepak";
let age = 20;
let isStudent = true;
let result;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof result);`,
    programExplanationEnglish: [
      "Four variables are declared with different values.",
      "typeof checks the data type of each variable.",
      "The results are displayed in the console."
    ],
    programExplanationTamil: [
      "வெவ்வேறு values கொண்ட நான்கு variables உருவாக்கப்படுகின்றன.",
      "ஒவ்வொரு variable-ன் data type-ஐ typeof கண்டறிகிறது.",
      "கிடைக்கும் முடிவுகள் console-ல் காட்டப்படுகின்றன."
    ],
    output: `string
number
boolean
undefined`
  },
  {
    id: 6,
    title: "JavaScript Operators",
    englishDefinition:
      "Operators are symbols used to perform operations on values and variables. JavaScript supports arithmetic, assignment, comparison, logical, and other operators.",
    tamilDefinition:
      "Operators என்பது values மற்றும் variables மீது செயல்பாடுகளைச் செய்யப் பயன்படும் குறியீடுகள் ஆகும். JavaScript-ல் arithmetic, assignment, comparison, logical போன்ற operators உள்ளன.",
    realWorldUsage:
      "Operators are used to calculate shopping bills, compare passwords, check user permissions, and make decisions in applications.",
    realWorldUsageTamil:
      "Shopping bill கணக்கிடவும், passwords ஒப்பிடவும், user permissions சரிபார்க்கவும், applications-ல் முடிவுகள் எடுக்கவும் operators பயன்படுகின்றன.",
    syntax: `let a = 10;
let b = 5;

console.log(a + b);
console.log(a > b);
console.log(a === b);`,
    syntaxExplanationEnglish: [
      "Arithmetic operators perform mathematical operations.",
      "Assignment operators assign values to variables.",
      "Comparison operators compare two values and return a boolean.",
      "Logical operators combine or reverse conditions."
    ],
    syntaxExplanationTamil: [
      "Arithmetic operators கணிதச் செயல்பாடுகளைச் செய்கின்றன.",
      "Assignment operators variables-க்கு values வழங்குகின்றன.",
      "Comparison operators இரண்டு values-ஐ ஒப்பிட்டு boolean முடிவை வழங்குகின்றன.",
      "Logical operators conditions-ஐ இணைக்க அல்லது மாற்றப் பயன்படுகின்றன."
    ],
    exampleProgram: `let price = 100;
let quantity = 3;

let total = price * quantity;

console.log("Total:", total);
console.log(price > quantity);
console.log(price === 100);`,
    programExplanationEnglish: [
      "price stores 100 and quantity stores 3.",
      "The multiplication operator calculates the total.",
      "The greater-than operator compares price and quantity.",
      "The strict equality operator checks whether price is exactly 100."
    ],
    programExplanationTamil: [
      "price variable 100-ஐயும் quantity variable 3-ஐயும் சேமிக்கின்றன.",
      "Multiplication operator மொத்தத் தொகையைக் கணக்கிடுகிறது.",
      "Greater-than operator price மற்றும் quantity-ஐ ஒப்பிடுகிறது.",
      "Strict equality operator price சரியாக 100 தானா எனச் சரிபார்க்கிறது."
    ],
    output: `Total: 300
true
true`
  },
  {
    id: 7,
    title: "Type Conversion and Type Coercion",
    englishDefinition:
      "Type conversion is the process of changing a value from one data type to another. Type coercion is the automatic conversion of values performed by JavaScript during certain operations.",
    tamilDefinition:
      "Type conversion என்பது ஒரு value-ஐ ஒரு data type-லிருந்து மற்றொரு data type-ஆக மாற்றும் செயல்முறை. Type coercion என்பது சில செயல்பாடுகளின்போது JavaScript தானாகவே data type-ஐ மாற்றுவதாகும்.",
    realWorldUsage:
      "Type conversion is useful when converting form input into numbers, handling user-entered values, and processing data from APIs.",
    realWorldUsageTamil:
      "Form input-ஐ number-ஆக மாற்றவும், பயனர் உள்ளிடும் values-ஐ கையாளவும், API data-ஐ செயலாக்கவும் type conversion பயன்படுகிறது.",
    syntax: `let value = "25";

let numberValue = Number(value);
let textValue = String(100);

console.log(numberValue);
console.log(textValue);`,
    syntaxExplanationEnglish: [
      "Number() converts a value into a number when possible.",
      "String() converts a value into a string.",
      "JavaScript may also automatically convert values during operations; this is called type coercion."
    ],
    syntaxExplanationTamil: [
      "Number() ஒரு value-ஐ இயன்றால் number-ஆக மாற்றுகிறது.",
      "String() ஒரு value-ஐ string-ஆக மாற்றுகிறது.",
      "சில செயல்பாடுகளின்போது JavaScript தானாக values-ஐ மாற்றும்; இது type coercion எனப்படும்."
    ],
    exampleProgram: `let ageText = "20";

let age = Number(ageText);

console.log(age + 5);
console.log(typeof age);

console.log("10" + 5);
console.log("10" - 5);`,
    programExplanationEnglish: [
      "ageText stores the string 20.",
      "Number() converts the string into the number 20.",
      "The addition operation produces 25.",
      "The typeof operator confirms that age is a number.",
      "In the last two operations, JavaScript handles the string differently depending on the operator."
    ],
    programExplanationTamil: [
      "ageText variable string 20-ஐச் சேமிக்கிறது.",
      "Number() அந்த string-ஐ number 20-ஆக மாற்றுகிறது.",
      "Addition operation 25 என்ற முடிவை வழங்குகிறது.",
      "typeof operator age ஒரு number என்பதை உறுதிப்படுத்துகிறது.",
      "கடைசி இரண்டு செயல்பாடுகளிலும் operator-ஐப் பொறுத்து JavaScript string-ஐ வெவ்வேறு விதமாகக் கையாளுகிறது."
    ],
    output: `25
number
105
5`
  },
  {
    id: 8,
    title: "Conditional Statements – if, else, else if",
    englishDefinition:
      "Conditional statements allow a program to make decisions based on whether a condition is true or false. JavaScript provides if, else if, and else for decision-making.",
    tamilDefinition:
      "Conditional statements என்பது ஒரு condition true அல்லது false என்பதைப் பொறுத்து program முடிவெடுக்க உதவுகிறது. JavaScript-ல் முடிவெடுக்க if, else if, else பயன்படுகின்றன.",
    realWorldUsage:
      "Conditional statements are used to check login credentials, verify age restrictions, calculate grades, and decide whether a user can access a feature.",
    realWorldUsageTamil:
      "Login credentials சரிபார்க்கவும், வயது வரம்புகளைச் சோதிக்கவும், மதிப்பெண்களுக்கு grade வழங்கவும், ஒரு feature-ஐப் பயன்படுத்த அனுமதி வழங்கவும் conditional statements பயன்படுகின்றன.",
    syntax: `if (condition) {
  // Code when true
} else if (anotherCondition) {
  // Code when another condition is true
} else {
  // Code when all conditions are false
}`,
    syntaxExplanationEnglish: [
      "if checks the first condition.",
      "else if checks another condition when the previous condition is false.",
      "else executes when all preceding conditions are false."
    ],
    syntaxExplanationTamil: [
      "if முதல் condition-ஐச் சரிபார்க்கிறது.",
      "முந்தைய condition false ஆக இருந்தால் else if அடுத்த condition-ஐச் சரிபார்க்கிறது.",
      "முன்னுள்ள அனைத்து conditions-ம் false ஆக இருந்தால் else செயல்படும்."
    ],
    exampleProgram: `let mark = 85;

if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 75) {
  console.log("Grade B");
} else if (mark >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}`,
    programExplanationEnglish: [
      "The mark variable stores 85.",
      "The first condition checks whether the mark is at least 90.",
      "Since it is false, the next condition checks whether the mark is at least 75.",
      "That condition is true, so Grade B is displayed."
    ],
    programExplanationTamil: [
      "mark variable 85 என்ற மதிப்பைச் சேமிக்கிறது.",
      "முதல் condition மதிப்பெண் குறைந்தது 90 உள்ளதா எனச் சரிபார்க்கிறது.",
      "அது false என்பதால் அடுத்த condition குறைந்தது 75 உள்ளதா எனச் சரிபார்க்கிறது.",
      "அந்த condition true என்பதால் Grade B காட்டப்படுகிறது."
    ],
    output: `Grade B`
  },
  {
    id: 9,
    title: "Switch Statement",
    englishDefinition:
      "The switch statement is used to execute different blocks of code based on the value of an expression. It is useful when comparing one value against multiple possible cases.",
    tamilDefinition:
      "Switch statement என்பது ஒரு expression-ன் value-ஐப் பொறுத்து வெவ்வேறு code blocks-ஐ இயக்கப் பயன்படுகிறது. ஒரு value-ஐ பல சாத்தியமான cases உடன் ஒப்பிடும்போது இது பயனுள்ளதாக இருக்கும்.",
    realWorldUsage:
      "Switch statements are used in menu-driven applications, selecting payment methods, handling user choices, and displaying messages based on selected options.",
    realWorldUsageTamil:
      "Menu-driven applications, payment methods தேர்வு, பயனர் தேர்வுகளைக் கையாளுதல் மற்றும் தேர்ந்தெடுக்கப்பட்ட options அடிப்படையில் messages காட்டுதல் போன்றவற்றில் switch பயன்படுகிறது.",
    syntax: `switch (expression) {
  case value1:
    // Code
    break;
  case value2:
    // Code
    break;
  default:
    // Default code
}`,
    syntaxExplanationEnglish: [
      "switch evaluates the given expression.",
      "case defines a possible matching value.",
      "break stops execution from continuing into the next case.",
      "default executes when no case matches."
    ],
    syntaxExplanationTamil: [
      "switch கொடுக்கப்பட்ட expression-ஐ மதிப்பீடு செய்கிறது.",
      "case என்பது பொருந்தக்கூடிய value-ஐக் குறிப்பிடுகிறது.",
      "break அடுத்த case-க்கு execution தொடர்வதை நிறுத்துகிறது.",
      "எந்த case-மும் பொருந்தாவிட்டால் default செயல்படும்."
    ],
    exampleProgram: `let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}`,
    programExplanationEnglish: [
      "The day variable stores the value 3.",
      "The switch statement compares day with each case.",
      "Case 3 matches the value.",
      "Wednesday is displayed and break stops the switch statement."
    ],
    programExplanationTamil: [
      "day variable 3 என்ற மதிப்பைச் சேமிக்கிறது.",
      "switch statement day value-ஐ ஒவ்வொரு case உடனும் ஒப்பிடுகிறது.",
      "Case 3 பொருந்துகிறது.",
      "Wednesday காட்டப்பட்டு break switch statement-ஐ நிறுத்துகிறது."
    ],
    output: `Wednesday`
  },
  {
    id: 10,
    title: "Loops – for, while, do...while",
    englishDefinition:
      "Loops are used to execute a block of code repeatedly while a condition is satisfied. JavaScript provides for, while, and do...while loops.",
    tamilDefinition:
      "Loops என்பது ஒரு condition பூர்த்தியாகும் வரை ஒரே code block-ஐ மீண்டும் மீண்டும் இயக்கப் பயன்படுகிறது. JavaScript-ல் for, while, do...while loops உள்ளன.",
    realWorldUsage:
      "Loops are used to display lists of products, process multiple records, calculate totals, and repeat tasks automatically.",
    realWorldUsageTamil:
      "Products பட்டியலைக் காட்டவும், பல records-ஐ செயலாக்கவும், மொத்தத்தைக் கணக்கிடவும், பணிகளைத் தானாக மீண்டும் செய்யவும் loops பயன்படுகின்றன.",
    syntax: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}

let number = 1;

do {
  console.log(number);
  number++;
} while (number <= 5);`,
    syntaxExplanationEnglish: [
      "A for loop contains initialization, condition, and update expressions.",
      "A while loop checks its condition before executing the loop body.",
      "A do...while loop executes its body at least once before checking the condition.",
      "The increment operator increases a value by one."
    ],
    syntaxExplanationTamil: [
      "for loop-ல் initialization, condition, update ஆகியவை உள்ளன.",
      "while loop code இயக்கப்படுவதற்கு முன்பு condition-ஐச் சரிபார்க்கிறது.",
      "do...while loop condition-ஐச் சரிபார்ப்பதற்கு முன்பு குறைந்தது ஒருமுறை code-ஐ இயக்குகிறது.",
      "Increment operator ஒரு value-ஐ ஒன்றால் அதிகரிக்கிறது."
    ],
    exampleProgram: `for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}`,
    programExplanationEnglish: [
      "The loop variable i starts at 1.",
      "The loop continues while i is less than or equal to 5.",
      "Each iteration displays the current value.",
      "The increment operator increases i after each iteration."
    ],
    programExplanationTamil: [
      "Loop variable i என்பது 1-ல் தொடங்குகிறது.",
      "i என்பது 5-ஐ விடக் குறைவாகவோ சமமாகவோ இருக்கும் வரை loop தொடர்கிறது.",
      "ஒவ்வொரு iteration-லும் தற்போதைய value காட்டப்படுகிறது.",
      "ஒவ்வொரு iteration முடிவிலும் increment operator i-ன் மதிப்பை அதிகரிக்கிறது."
    ],
    output: `Count: 1
Count: 2
Count: 3
Count: 4
Count: 5`
  },
  {
    id: 11,
    title: "Functions",
    englishDefinition:
      "A function is a reusable block of code designed to perform a specific task. A function can be defined once and called whenever it is needed.",
    tamilDefinition:
      "Function என்பது ஒரு குறிப்பிட்ட செயலைச் செய்ய உருவாக்கப்படும் மீண்டும் பயன்படுத்தக்கூடிய code block ஆகும். ஒரு function-ஐ ஒருமுறை உருவாக்கி தேவையானபோது பலமுறை அழைக்கலாம்.",
    realWorldUsage:
      "Functions are used to validate forms, calculate totals, process user data, and organize large applications into smaller reusable parts.",
    realWorldUsageTamil:
      "Forms சரிபார்க்கவும், மொத்தத்தைக் கணக்கிடவும், user data-ஐ செயலாக்கவும், பெரிய applications-ஐ சிறிய reusable பகுதிகளாகப் பிரிக்கவும் functions பயன்படுகின்றன.",
    syntax: `function functionName() {
  // Code to execute
}

functionName();`,
    syntaxExplanationEnglish: [
      "The function keyword is used to declare a function.",
      "The function name identifies the function.",
      "The code inside curly braces forms the function body.",
      "Calling the function executes its code."
    ],
    syntaxExplanationTamil: [
      "Function உருவாக்க function keyword பயன்படுகிறது.",
      "Function name அந்த function-ஐ அடையாளம் காண உதவுகிறது.",
      "Curly braces-க்குள் உள்ள code function body ஆகும்.",
      "Function-ஐ call செய்யும்போது அதன் code செயல்படும்."
    ],
    exampleProgram: `function greet() {
  console.log("Welcome to DEEP CODE!");
}

greet();
greet();`,
    programExplanationEnglish: [
      "The greet function is declared.",
      "It contains a console.log statement.",
      "The function is called two times.",
      "The message is displayed each time the function is called."
    ],
    programExplanationTamil: [
      "greet என்ற function உருவாக்கப்படுகிறது.",
      "அதற்குள் console.log statement உள்ளது.",
      "Function இரண்டு முறை அழைக்கப்படுகிறது.",
      "ஒவ்வொரு முறை function அழைக்கப்படும்போதும் message காட்டப்படுகிறது."
    ],
    output: `Welcome to DEEP CODE!
Welcome to DEEP CODE!`
  },
  {
    id: 12,
    title: "Function Parameters and Return Values",
    englishDefinition:
      "Parameters are variables listed in a function definition. Arguments are the actual values passed when calling the function. The return statement sends a result back from the function.",
    tamilDefinition:
      "Parameters என்பது function definition-ல் குறிப்பிடப்படும் variables ஆகும். Function-ஐ அழைக்கும்போது வழங்கப்படும் உண்மையான values arguments எனப்படும். Return statement function-லிருந்து முடிவைத் திருப்பி அனுப்புகிறது.",
    realWorldUsage:
      "Parameters and return values are used in calculators, login systems, shopping carts, and functions that process user input.",
    realWorldUsageTamil:
      "Calculators, login systems, shopping carts மற்றும் பயனர் உள்ளீடுகளைச் செயலாக்கும் functions-ல் parameters மற்றும் return values பயன்படுகின்றன.",
    syntax: `function add(a, b) {
  return a + b;
}

let result = add(10, 20);`,
    syntaxExplanationEnglish: [
      "a and b are parameters.",
      "10 and 20 are arguments passed to the function.",
      "return sends the calculated value back.",
      "The returned value can be stored in a variable."
    ],
    syntaxExplanationTamil: [
      "a மற்றும் b ஆகியவை parameters ஆகும்.",
      "Function-க்கு வழங்கப்படும் 10 மற்றும் 20 arguments ஆகும்.",
      "return கணக்கிடப்பட்ட value-ஐத் திருப்பி அனுப்புகிறது.",
      "திரும்பக் கிடைக்கும் value-ஐ ஒரு variable-ல் சேமிக்கலாம்."
    ],
    exampleProgram: `function calculateTotal(price, quantity) {
  return price * quantity;
}

let total = calculateTotal(100, 3);

console.log("Total:", total);`,
    programExplanationEnglish: [
      "calculateTotal accepts price and quantity as parameters.",
      "The function multiplies the two values.",
      "return sends the result back to the caller.",
      "The returned result is stored in total and displayed."
    ],
    programExplanationTamil: [
      "calculateTotal function price மற்றும் quantity parameters-ஐப் பெறுகிறது.",
      "Function இரண்டு values-ஐ பெருக்குகிறது.",
      "return முடிவை function அழைத்த இடத்திற்குத் திருப்பி அனுப்புகிறது.",
      "கிடைத்த முடிவு total variable-ல் சேமிக்கப்பட்டு காட்டப்படுகிறது."
    ],
    output: `Total: 300`
  },
  {
    id: 13,
    title: "Arrays",
    englishDefinition:
      "An array is a data structure used to store multiple values in a single variable. Each element in an array has an index, starting from zero.",
    tamilDefinition:
      "Array என்பது ஒரே variable-ல் பல values-ஐச் சேமிக்கப் பயன்படும் data structure ஆகும். Array-ல் ஒவ்வொரு element-க்கும் index இருக்கும். அந்த index 0-ல் தொடங்குகிறது.",
    realWorldUsage:
      "Arrays are used to store student names, product lists, marks, shopping cart items, and collections of information.",
    realWorldUsageTamil:
      "மாணவர் பெயர்கள், product பட்டியல்கள், மதிப்பெண்கள், shopping cart பொருட்கள் மற்றும் பல தகவல்களைச் சேமிக்க arrays பயன்படுகின்றன.",
    syntax: `let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);`,
    syntaxExplanationEnglish: [
      "Square brackets are used to create an array.",
      "Elements are separated by commas.",
      "Array indexing starts from zero.",
      "An element can be accessed using its index."
    ],
    syntaxExplanationTamil: [
      "Array உருவாக்க square brackets பயன்படுகின்றன.",
      "Elements commas மூலம் பிரிக்கப்படுகின்றன.",
      "Array indexing பூஜ்ஜியத்தில் தொடங்குகிறது.",
      "Index பயன்படுத்தி ஒரு element-ஐ அணுகலாம்."
    ],
    exampleProgram: `let subjects = ["Java", "Python", "JavaScript"];

console.log(subjects[0]);
console.log(subjects[1]);
console.log(subjects[2]);
console.log(subjects.length);`,
    programExplanationEnglish: [
      "The subjects array stores three programming language names.",
      "Index 0 accesses Java.",
      "Index 1 accesses Python.",
      "Index 2 accesses JavaScript.",
      "The length property returns the number of elements."
    ],
    programExplanationTamil: [
      "subjects array மூன்று programming language பெயர்களைச் சேமிக்கிறது.",
      "Index 0 மூலம் Java அணுகப்படுகிறது.",
      "Index 1 மூலம் Python அணுகப்படுகிறது.",
      "Index 2 மூலம் JavaScript அணுகப்படுகிறது.",
      "length property மொத்த elements எண்ணிக்கையை வழங்குகிறது."
    ],
    output: `Java
Python
JavaScript
3`
  },
  {
    id: 14,
    title: "Array Methods",
    englishDefinition:
      "Array methods are built-in functions used to add, remove, search, transform, and process array elements. Common methods include push(), pop(), shift(), unshift(), includes(), and map().",
    tamilDefinition:
      "Array methods என்பது array elements-ஐச் சேர்க்க, நீக்க, தேட, மாற்ற மற்றும் செயலாக்கப் பயன்படும் built-in functions ஆகும். push(), pop(), shift(), unshift(), includes(), map() போன்றவை பொதுவான methods ஆகும்.",
    realWorldUsage:
      "Array methods are used to manage shopping cart items, filter products, update lists, and transform data received from APIs.",
    realWorldUsageTamil:
      "Shopping cart பொருட்களை நிர்வகிக்கவும், products-ஐ filter செய்யவும், பட்டியல்களை மாற்றவும், API-களிலிருந்து கிடைக்கும் data-ஐ மாற்றவும் array methods பயன்படுகின்றன.",
    syntax: `let numbers = [10, 20, 30];

numbers.push(40);
numbers.pop();

console.log(numbers);`,
    syntaxExplanationEnglish: [
      "push() adds an element to the end of an array.",
      "pop() removes the last element.",
      "shift() removes the first element.",
      "unshift() adds an element to the beginning.",
      "includes() checks whether an element exists."
    ],
    syntaxExplanationTamil: [
      "push() array-ன் இறுதியில் ஒரு element-ஐச் சேர்க்கிறது.",
      "pop() கடைசி element-ஐ நீக்குகிறது.",
      "shift() முதல் element-ஐ நீக்குகிறது.",
      "unshift() ஆரம்பத்தில் ஒரு element-ஐச் சேர்க்கிறது.",
      "includes() ஒரு element உள்ளதா எனச் சரிபார்க்கிறது."
    ],
    exampleProgram: `let skills = ["HTML", "CSS"];

skills.push("JavaScript");

console.log(skills);

skills.pop();

console.log(skills);`,
    programExplanationEnglish: [
      "The skills array initially contains HTML and CSS.",
      "push() adds JavaScript to the end.",
      "The updated array is displayed.",
      "pop() removes the last element.",
      "The array is displayed again."
    ],
    programExplanationTamil: [
      "skills array ஆரம்பத்தில் HTML மற்றும் CSS-ஐக் கொண்டுள்ளது.",
      "push() JavaScript-ஐ இறுதியில் சேர்க்கிறது.",
      "மாற்றப்பட்ட array காட்டப்படுகிறது.",
      "pop() கடைசி element-ஐ நீக்குகிறது.",
      "Array மீண்டும் காட்டப்படுகிறது."
    ],
    output: `["HTML", "CSS", "JavaScript"]
["HTML", "CSS"]`
  },
  {
    id: 15,
    title: "Strings and String Methods",
    englishDefinition:
      "A string is a sequence of characters used to represent text. JavaScript provides built-in string methods to search, extract, modify, and process text.",
    tamilDefinition:
      "String என்பது text-ஐக் குறிக்கப் பயன்படும் எழுத்துகளின் வரிசையாகும். Text-ஐத் தேட, பிரித்தெடுக்க, மாற்ற மற்றும் செயலாக்க JavaScript-ல் string methods உள்ளன.",
    realWorldUsage:
      "Strings are used to process usernames, search text, validate email addresses, format messages, and display information.",
    realWorldUsageTamil:
      "Username-களைச் செயலாக்கவும், text தேடவும், email முகவரிகளைச் சரிபார்க்கவும், messages உருவாக்கவும் strings பயன்படுகின்றன.",
    syntax: `let message = "Hello JavaScript";

console.log(message.length);
console.log(message.toUpperCase());`,
    syntaxExplanationEnglish: [
      "Strings can be written using single quotes, double quotes, or backticks.",
      "length returns the number of characters.",
      "toUpperCase() converts text into uppercase.",
      "toLowerCase() converts text into lowercase.",
      "includes() checks whether a string contains specific text."
    ],
    syntaxExplanationTamil: [
      "Strings-ஐ single quotes, double quotes அல்லது backticks பயன்படுத்தி எழுதலாம்.",
      "length எழுத்துகளின் எண்ணிக்கையை வழங்குகிறது.",
      "toUpperCase() text-ஐ uppercase-ஆக மாற்றுகிறது.",
      "toLowerCase() text-ஐ lowercase-ஆக மாற்றுகிறது.",
      "includes() ஒரு string-ல் குறிப்பிட்ட text உள்ளதா எனச் சரிபார்க்கிறது."
    ],
    exampleProgram: `let message = "Welcome to DEEP CODE";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes("CODE"));`,
    programExplanationEnglish: [
      "The message variable stores a string.",
      "length counts all characters, including spaces.",
      "toUpperCase() converts the message to uppercase.",
      "toLowerCase() converts the message to lowercase.",
      "includes() checks whether CODE exists in the message."
    ],
    programExplanationTamil: [
      "message variable ஒரு string-ஐச் சேமிக்கிறது.",
      "length spaces உட்பட அனைத்து characters-ஐயும் எண்ணுகிறது.",
      "toUpperCase() message-ஐ uppercase-ஆக மாற்றுகிறது.",
      "toLowerCase() message-ஐ lowercase-ஆக மாற்றுகிறது.",
      "includes() message-ல் CODE உள்ளதா எனச் சரிபார்க்கிறது."
    ],
    output: `21
WELCOME TO DEEP CODE
welcome to deep code
true`
  },
  {
    id: 16,
    title: "Objects",
    englishDefinition:
      "An object is a data structure used to store related information as key-value pairs. Object properties can store different types of values, including strings, numbers, arrays, and functions.",
    tamilDefinition:
      "Object என்பது தொடர்புடைய தகவல்களை key-value pairs வடிவில் சேமிக்கும் data structure ஆகும். அதன் properties-ல் strings, numbers, arrays மற்றும் functions போன்ற வெவ்வேறு values-ஐச் சேமிக்கலாம்.",
    realWorldUsage:
      "Objects are used to represent users, products, employees, orders, and other real-world entities in applications.",
    realWorldUsageTamil:
      "Applications-ல் users, products, employees, orders மற்றும் பிற நிஜ உலகப் பொருட்களைப் பிரதிநிதித்துவப்படுத்த objects பயன்படுகின்றன.",
    syntax: `let student = {
  name: "Deepak",
  age: 20,
  course: "Computer Science"
};

console.log(student.name);`,
    syntaxExplanationEnglish: [
      "Curly braces are used to create an object.",
      "Object properties are written as key-value pairs.",
      "A colon separates each key from its value.",
      "Dot notation accesses an object's property."
    ],
    syntaxExplanationTamil: [
      "Object உருவாக்க curly braces பயன்படுகின்றன.",
      "Object properties key-value pairs வடிவில் எழுதப்படுகின்றன.",
      "Colon key மற்றும் value-ஐப் பிரிக்கிறது.",
      "Dot notation மூலம் object property-ஐ அணுகலாம்."
    ],
    exampleProgram: `let student = {
  name: "Deepak",
  age: 20,
  aim: "Cyber Security"
};

console.log(student.name);
console.log(student.age);
console.log(student.aim);`,
    programExplanationEnglish: [
      "The student object stores three properties.",
      "name stores the student's name.",
      "age stores the student's age.",
      "aim stores the student's career goal.",
      "Dot notation accesses and displays each property."
    ],
    programExplanationTamil: [
      "student object மூன்று properties-ஐச் சேமிக்கிறது.",
      "name மாணவரின் பெயரைச் சேமிக்கிறது.",
      "age மாணவரின் வயதைச் சேமிக்கிறது.",
      "aim மாணவரின் career goal-ஐச் சேமிக்கிறது.",
      "Dot notation ஒவ்வொரு property-ஐயும் அணுகி காட்டுகிறது."
    ],
    output: `Deepak
20
Cyber Security`
  },
  {
    id: 17,
    title: "DOM Introduction and Selection",
    englishDefinition:
      "The Document Object Model (DOM) is a programming interface that represents an HTML document as a tree of objects. JavaScript can use the DOM to access HTML elements.",
    tamilDefinition:
      "Document Object Model (DOM) என்பது HTML document-ஐ objects கொண்ட tree வடிவில் பிரதிநிதித்துவப்படுத்தும் programming interface ஆகும். JavaScript மூலம் DOM பயன்படுத்தி HTML elements-ஐ அணுகலாம்.",
    realWorldUsage:
      "DOM selection is used to access headings, paragraphs, buttons, images, and form fields so that JavaScript can work with webpage elements.",
    realWorldUsageTamil:
      "Headings, paragraphs, buttons, images மற்றும் form fields போன்ற webpage elements-ஐ JavaScript மூலம் அணுக DOM selection பயன்படுகிறது.",
    syntax: `document.getElementById("title");

document.querySelector(".message");

document.querySelectorAll("p");`,
    syntaxExplanationEnglish: [
      "document represents the current HTML document.",
      "getElementById() selects an element using its ID.",
      "querySelector() selects the first element matching a CSS selector.",
      "querySelectorAll() selects all elements matching a CSS selector."
    ],
    syntaxExplanationTamil: [
      "document தற்போதைய HTML document-ஐக் குறிக்கிறது.",
      "getElementById() ID பயன்படுத்தி ஒரு element-ஐத் தேர்ந்தெடுக்கிறது.",
      "querySelector() கொடுக்கப்பட்ட CSS selector-க்கு பொருந்தும் முதல் element-ஐத் தேர்ந்தெடுக்கிறது.",
      "querySelectorAll() பொருந்தும் அனைத்து elements-ஐயும் தேர்ந்தெடுக்கிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Hello</h1>

  <script>
    const heading = document.getElementById("title");

    console.log(heading.textContent);
  </script>
</body>
</html>`,
    programExplanationEnglish: [
      "The HTML document contains a heading with the ID title.",
      "getElementById() selects that heading.",
      "textContent accesses the text inside the selected element.",
      "console.log() displays the text in the browser console."
    ],
    programExplanationTamil: [
      "HTML document-ல் title என்ற ID கொண்ட heading உள்ளது.",
      "getElementById() அந்த heading-ஐத் தேர்ந்தெடுக்கிறது.",
      "textContent தேர்ந்தெடுக்கப்பட்ட element-ன் text-ஐ அணுகுகிறது.",
      "console.log() அந்த text-ஐ browser console-ல் காட்டுகிறது."
    ],
    output: `Browser Console:
Hello`
  },
  {
    id: 18,
    title: "DOM Manipulation and Events",
    englishDefinition:
      "DOM manipulation means changing HTML elements, content, attributes, or styles using JavaScript. Events are actions such as clicks, typing, and form submissions that JavaScript can respond to.",
    tamilDefinition:
      "DOM manipulation என்பது JavaScript பயன்படுத்தி HTML elements, content, attributes அல்லது styles-ஐ மாற்றுவதாகும். Events என்பது click, typing, form submission போன்ற JavaScript பதிலளிக்கக்கூடிய செயல்களாகும்.",
    realWorldUsage:
      "DOM manipulation and events are used to build interactive buttons, dropdown menus, live search, pop-up messages, and dynamic webpages.",
    realWorldUsageTamil:
      "Interactive buttons, dropdown menus, live search, pop-up messages மற்றும் dynamic webpages உருவாக்க DOM manipulation மற்றும் events பயன்படுகின்றன.",
    syntax: `element.textContent = "New Text";

element.style.color = "blue";

element.addEventListener("click", function() {
  console.log("Button clicked");
});`,
    syntaxExplanationEnglish: [
      "textContent changes the text inside an element.",
      "The style property changes an element's inline CSS styles.",
      "addEventListener() listens for a particular event.",
      "The callback function executes when the event occurs."
    ],
    syntaxExplanationTamil: [
      "textContent ஒரு element-க்குள் உள்ள text-ஐ மாற்றுகிறது.",
      "style property ஒரு element-ன் inline CSS styles-ஐ மாற்றுகிறது.",
      "addEventListener() குறிப்பிட்ட event-ஐக் கவனிக்கிறது.",
      "Event நிகழும்போது callback function செயல்படுகிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<body>
  <h1 id="message">Welcome</h1>
  <button id="changeButton">Click Me</button>

  <script>
    const message = document.getElementById("message");
    const button = document.getElementById("changeButton");

    button.addEventListener("click", function() {
      message.textContent = "Hello Deepak!";
    });
  </script>
</body>
</html>`,
    programExplanationEnglish: [
      "The webpage contains a heading and a button.",
      "JavaScript selects both elements using their IDs.",
      "addEventListener() waits for a click on the button.",
      "When clicked, the heading text changes."
    ],
    programExplanationTamil: [
      "Webpage-ல் ஒரு heading மற்றும் button உள்ளன.",
      "JavaScript அவற்றின் IDs மூலம் இரண்டு elements-ஐயும் தேர்ந்தெடுக்கிறது.",
      "addEventListener() button click-க்காகக் காத்திருக்கிறது.",
      "Button click செய்யப்பட்டதும் heading text மாற்றப்படுகிறது."
    ],
    output: `Before click:
Welcome

After click:
Hello Deepak!`
  },
  {
    id: 19,
    title: "Form Handling and Validation",
    englishDefinition:
      "Form handling is the process of collecting and processing information entered by users. Form validation checks whether the submitted information follows required rules before processing it.",
    tamilDefinition:
      "Form handling என்பது பயனர்கள் உள்ளிடும் தகவல்களைப் பெற்று செயலாக்கும் செயல்முறையாகும். Form validation என்பது அந்த தகவல்கள் தேவையான விதிமுறைகளைப் பின்பற்றுகின்றனவா எனச் சரிபார்க்கிறது.",
    realWorldUsage:
      "Form handling and validation are used in registration pages, login forms, contact forms, password checks, and online applications.",
    realWorldUsageTamil:
      "Registration pages, login forms, contact forms, password checks மற்றும் online applications-ல் form handling மற்றும் validation பயன்படுகின்றன.",
    syntax: `const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate form data
});`,
    syntaxExplanationEnglish: [
      "getElementById() selects the form element.",
      "The submit event occurs when the form is submitted.",
      "event.preventDefault() prevents the browser's default form submission behavior.",
      "Validation logic can be written inside the event handler."
    ],
    syntaxExplanationTamil: [
      "getElementById() form element-ஐத் தேர்ந்தெடுக்கிறது.",
      "Form submit செய்யப்படும்போது submit event நிகழ்கிறது.",
      "event.preventDefault() browser-ன் இயல்பான form submission செயல்பாட்டைத் தடுக்கிறது.",
      "Event handler-க்குள் validation logic எழுதலாம்."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<body>
  <form id="myForm">
    <input type="text" id="username" placeholder="Enter name">
    <button type="submit">Submit</button>
  </form>

  <p id="result"></p>

  <script>
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const result = document.getElementById("result");

      if (username.trim() === "") {
        result.textContent = "Name is required";
      } else {
        result.textContent = "Welcome, " + username;
      }
    });
  </script>
</body>
</html>`,
    programExplanationEnglish: [
      "The form contains a username input and a submit button.",
      "JavaScript listens for the form submission.",
      "preventDefault() prevents the page from reloading due to the default submission.",
      "The input value is read using the value property.",
      "trim() removes surrounding whitespace before checking whether the input is empty.",
      "The result message changes depending on the validation result."
    ],
    programExplanationTamil: [
      "Form-ல் username input மற்றும் submit button உள்ளன.",
      "JavaScript form submission event-ஐக் கவனிக்கிறது.",
      "preventDefault() இயல்பான submission காரணமாக page reload ஆவதைத் தடுக்கிறது.",
      "value property மூலம் input value பெறப்படுகிறது.",
      "Input காலியாக உள்ளதா எனச் சரிபார்க்க trim() சுற்றியுள்ள whitespace-ஐ நீக்குகிறது.",
      "Validation முடிவைப் பொறுத்து result message மாறுகிறது."
    ],
    output: `If the input is empty:
Name is required

If the input is Deepak:
Welcome, Deepak`
  },
  {
    id: 20,
    title: "JSON, Local Storage and ES6 Features",
    englishDefinition:
      "JSON is a text format used to exchange structured data. Local Storage allows a browser to store data on a user's device. ES6 introduced modern JavaScript features such as let, const, arrow functions, template literals, and destructuring.",
    tamilDefinition:
      "JSON என்பது structured data-ஐ பரிமாறப் பயன்படும் text format ஆகும். Local Storage browser-ல் பயனரின் device-இல் data-ஐச் சேமிக்க உதவுகிறது. ES6 என்பது let, const, arrow functions, template literals, destructuring போன்ற நவீன JavaScript அம்சங்களை அறிமுகப்படுத்தியது.",
    realWorldUsage:
      "JSON is used when exchanging data with APIs. Local Storage is useful for saving theme preferences and simple settings. ES6 features help developers write cleaner and more readable code.",
    realWorldUsageTamil:
      "API-களுடன் data பரிமாற JSON பயன்படுகிறது. Theme preferences மற்றும் எளிய settings-ஐச் சேமிக்க Local Storage பயன்படுகிறது. ES6 அம்சங்கள் தெளிவான மற்றும் எளிதாகப் படிக்கக்கூடிய code எழுத உதவுகின்றன.",
    syntax: `// JSON
const student = { name: "Deepak", age: 20 };
const jsonData = JSON.stringify(student);

// Local Storage
localStorage.setItem("name", "Deepak");
const savedName = localStorage.getItem("name");

// Arrow Function
const greet = () => "Hello!";

// Template Literal
console.log(\`Welcome, \${savedName}\`);`,
    syntaxExplanationEnglish: [
      "JSON.stringify() converts a JavaScript value into a JSON string.",
      "JSON.parse() converts a valid JSON string into a JavaScript value.",
      "localStorage.setItem() stores data in the browser.",
      "localStorage.getItem() retrieves stored data.",
      "Arrow functions provide a shorter way to write function expressions.",
      "Template literals use backticks and allow expressions inside ${}."
    ],
    syntaxExplanationTamil: [
      "JSON.stringify() JavaScript value-ஐ JSON string-ஆக மாற்றுகிறது.",
      "JSON.parse() சரியான JSON string-ஐ JavaScript value-ஆக மாற்றுகிறது.",
      "localStorage.setItem() browser-ல் data-ஐச் சேமிக்கிறது.",
      "localStorage.getItem() சேமிக்கப்பட்ட data-ஐப் பெறுகிறது.",
      "Arrow functions function expressions எழுதுவதற்கான சுருக்கமான முறையை வழங்குகின்றன.",
      "Template literals backticks பயன்படுத்துகின்றன; ${} மூலம் expressions சேர்க்கலாம்."
    ],
    exampleProgram: `const student = {
  name: "Deepak",
  course: "Computer Science"
};

const jsonData = JSON.stringify(student);

console.log(jsonData);

const savedStudent = JSON.parse(jsonData);

console.log(savedStudent.name);

const greet = (name) => \`Hello, \${name}!\`;

console.log(greet("Deepak"));`,
    programExplanationEnglish: [
      "A student object is created with name and course properties.",
      "JSON.stringify() converts the object into a JSON string.",
      "The JSON string is displayed.",
      "JSON.parse() converts the JSON string back into a JavaScript object.",
      "The name property is accessed from the converted object.",
      "An arrow function is created using a parameter.",
      "A template literal creates a greeting message."
    ],
    programExplanationTamil: [
      "name மற்றும் course properties கொண்ட student object உருவாக்கப்படுகிறது.",
      "JSON.stringify() object-ஐ JSON string-ஆக மாற்றுகிறது.",
      "JSON string காட்டப்படுகிறது.",
      "JSON.parse() JSON string-ஐ மீண்டும் JavaScript object-ஆக மாற்றுகிறது.",
      "மாற்றப்பட்ட object-லிருந்து name property அணுகப்படுகிறது.",
      "ஒரு parameter பயன்படுத்தி arrow function உருவாக்கப்படுகிறது.",
      "Template literal ஒரு greeting message-ஐ உருவாக்குகிறது."
    ],
    output: `{"name":"Deepak","course":"Computer Science"}
Deepak
Hello, Deepak!`
  }
];

export default topics;
