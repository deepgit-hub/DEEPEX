
const questions = [
  // ==========================================
  // TOPIC 1: INTRODUCTION TO JAVASCRIPT
  // ==========================================
  {
    id: 1, topicId: 1, title: "Display a Welcome Message",
    questionEnglish: "Write a JavaScript program to display Hello, World! in the console.",
    questionTamil: "JavaScript பயன்படுத்தி console-ல் Hello, World! என்பதைக் காட்டும் program எழுதவும்.",
    hintEnglish: "Use console.log().",
    hintTamil: "console.log() பயன்படுத்தவும்.",
    expectedOutput: "Hello, World!",
    expectedOutputTamil: "Hello, World!",
    challenge: false,
    solution: `console.log("Hello, World!");`
  },
  {
    id: 2, topicId: 1, title: "Introduce Yourself",
    questionEnglish: "Display your name, age, and career goal using three console.log statements.",
    questionTamil: "உங்கள் பெயர், வயது மற்றும் career goal-ஐ மூன்று console.log statements பயன்படுத்தி காட்டவும்.",
    hintEnglish: "Use three separate console.log statements.",
    hintTamil: "மூன்று தனித்தனி console.log statements பயன்படுத்தவும்.",
    expectedOutput: `My name is Deepak.
I am 20 years old.
My aim is Cyber Security.`,
    expectedOutputTamil: `என் பெயர் Deepak.
என் வயது 20.
என் இலக்கு Cyber Security.`,
    challenge: false,
    solution: `console.log("My name is Deepak.");
console.log("I am 20 years old.");
console.log("My aim is Cyber Security.");`
  },
  {
    id: 3, topicId: 1, title: "Display a Programming Message",
    questionEnglish: "Write a program to display three messages about learning JavaScript.",
    questionTamil: "JavaScript கற்றல் தொடர்பான மூன்று messages-ஐக் காட்டும் program எழுதவும்.",
    hintEnglish: "Use console.log() for each message.",
    hintTamil: "ஒவ்வொரு message-க்கும் console.log() பயன்படுத்தவும்.",
    expectedOutput: `JavaScript is interesting.
I am learning JavaScript.
I will practice every day.`,
    expectedOutputTamil: `JavaScript சுவாரஸ்யமானது.
நான் JavaScript கற்றுக்கொள்கிறேன்.
நான் தினமும் பயிற்சி செய்வேன்.`,
    challenge: false,
    solution: `console.log("JavaScript is interesting.");
console.log("I am learning JavaScript.");
console.log("I will practice every day.");`
  },
  {
    id: 4, topicId: 1, title: "Display a Simple Calculation",
    questionEnglish: "Display the result of 10 + 20 using console.log().",
    questionTamil: "console.log() பயன்படுத்தி 10 + 20 கணக்கின் முடிவைக் காட்டவும்.",
    hintEnglish: "Place the arithmetic expression inside console.log().",
    hintTamil: "Arithmetic expression-ஐ console.log()-க்குள் எழுதவும்.",
    expectedOutput: "30",
    expectedOutputTamil: "30",
    challenge: false,
    solution: `console.log(10 + 20);`
  },
  {
    id: 5, topicId: 1, title: "Display Multiple Calculations",
    questionEnglish: "Display the results of 15 + 5, 15 - 5, and 15 * 5 on separate lines.",
    questionTamil: "15 + 5, 15 - 5 மற்றும் 15 * 5 ஆகியவற்றின் முடிவுகளைத் தனித்தனி வரிகளில் காட்டவும்.",
    hintEnglish: "Use three console.log statements.",
    hintTamil: "மூன்று console.log statements பயன்படுத்தவும்.",
    expectedOutput: `20
10
75`,
    expectedOutputTamil: `20
10
75`,
    challenge: false,
    solution: `console.log(15 + 5);
console.log(15 - 5);
console.log(15 * 5);`
  },
  {
    id: 6, topicId: 1, title: "Display a Cybersecurity Message",
    questionEnglish: "Display three messages related to cybersecurity using JavaScript.",
    questionTamil: "JavaScript பயன்படுத்தி Cybersecurity தொடர்பான மூன்று messages-ஐக் காட்டவும்.",
    hintEnglish: "Write each message inside console.log().",
    hintTamil: "ஒவ்வொரு message-ஐ console.log()-க்குள் எழுதவும்.",
    expectedOutput: `Cybersecurity protects digital systems.
Security is everyone's responsibility.
Keep learning.`,
    expectedOutputTamil: `Cybersecurity டிஜிட்டல் அமைப்புகளைப் பாதுகாக்கிறது.
Security அனைவரின் பொறுப்பாகும்.
தொடர்ந்து கற்றுக்கொள்ளுங்கள்.`,
    challenge: false,
    solution: `console.log("Cybersecurity protects digital systems.");
console.log("Security is everyone's responsibility.");
console.log("Keep learning.");`
  },
  {
    id: 7, topicId: 1, title: "Display a Simple Profile",
    questionEnglish: "Display a student profile containing name, department, and college year as text.",
    questionTamil: "மாணவரின் பெயர், department மற்றும் college year ஆகியவற்றை text வடிவில் காட்டவும்.",
    hintEnglish: "Use console.log() three times.",
    hintTamil: "console.log() மூன்று முறை பயன்படுத்தவும்.",
    expectedOutput: `Name: Deepak
Department: Computer Science
Year: Final Year`,
    expectedOutputTamil: `பெயர்: Deepak
Department: Computer Science
Year: Final Year`,
    challenge: false,
    solution: `console.log("Name: Deepak");
console.log("Department: Computer Science");
console.log("Year: Final Year");`
  },
  {
    id: 8, topicId: 1, title: "Display a Learning Plan",
    questionEnglish: "Display the names of three technologies you want to learn.",
    questionTamil: "நீங்கள் கற்றுக்கொள்ள விரும்பும் மூன்று technologies-ன் பெயர்களைக் காட்டவும்.",
    hintEnglish: "Display each technology on a separate line.",
    hintTamil: "ஒவ்வொரு technology-யையும் தனித்தனி வரிகளில் காட்டவும்.",
    expectedOutput: `JavaScript
React
Cybersecurity`,
    expectedOutputTamil: `JavaScript
React
Cybersecurity`,
    challenge: false,
    solution: `console.log("JavaScript");
console.log("React");
console.log("Cybersecurity");`
  },
  {
    id: 9, topicId: 1, title: "Challenge: Digital Introduction",
    questionEnglish: "Create a console-based introduction containing at least five lines of information about yourself.",
    questionTamil: "உங்களைப் பற்றிய குறைந்தது ஐந்து தகவல்களைக் கொண்ட console-based introduction உருவாக்கவும்.",
    hintEnglish: "Think about your name, age, education, interests, and career goal.",
    hintTamil: "உங்கள் பெயர், வயது, கல்வி, ஆர்வங்கள் மற்றும் career goal பற்றி யோசிக்கவும்.",
    expectedOutput: "A five-line personal introduction.",
    expectedOutputTamil: "ஐந்து வரிகளைக் கொண்ட தனிப்பட்ட அறிமுகம்.",
    challenge: true
  },
  {
    id: 10, topicId: 1, title: "Challenge: Technology Quotes",
    questionEnglish: "Display three motivational messages about programming without using variables.",
    questionTamil: "Variables பயன்படுத்தாமல் programming தொடர்பான மூன்று motivational messages-ஐக் காட்டவும்.",
    hintEnglish: "Use console.log() for every message.",
    hintTamil: "ஒவ்வொரு message-க்கும் console.log() பயன்படுத்தவும்.",
    expectedOutput: "Three motivational programming messages.",
    expectedOutputTamil: "Programming தொடர்பான மூன்று ஊக்கமளிக்கும் messages.",
    challenge: true
  },

  // ==========================================
  // TOPIC 2: ADDING JAVASCRIPT TO HTML
  // ==========================================
  {
    id: 1, topicId: 2, title: "Display a Message from JavaScript",
    questionEnglish: "Write JavaScript code that can be placed inside an HTML script tag to display Welcome to JavaScript.",
    questionTamil: "HTML script tag-க்குள் எழுதக்கூடிய JavaScript code பயன்படுத்தி Welcome to JavaScript என்பதைக் காட்டவும்.",
    hintEnglish: "Use console.log() inside JavaScript.",
    hintTamil: "JavaScript-ல் console.log() பயன்படுத்தவும்.",
    expectedOutput: "Welcome to JavaScript",
    expectedOutputTamil: "Welcome to JavaScript",
    challenge: false,
    solution: `console.log("Welcome to JavaScript");`
  },
  {
    id: 2, topicId: 2, title: "Write an Internal Script",
    questionEnglish: "Write JavaScript code that displays your name using an internal script.",
    questionTamil: "Internal script பயன்படுத்தி உங்கள் பெயரைக் காட்டும் JavaScript code எழுதவும்.",
    hintEnglish: "The code will be placed between script tags in HTML.",
    hintTamil: "இந்த code HTML-ல் script tags-க்கு இடையில் எழுதப்படும்.",
    expectedOutput: "Deepak",
    expectedOutputTamil: "Deepak",
    challenge: false,
    solution: `console.log("Deepak");`
  },
  {
    id: 3, topicId: 2, title: "Display Two Messages",
    questionEnglish: "Write JavaScript code that displays two messages when executed from an HTML script tag.",
    questionTamil: "HTML script tag மூலம் இயக்கும்போது இரண்டு messages-ஐக் காட்டும் JavaScript code எழுதவும்.",
    hintEnglish: "Use two console.log statements.",
    hintTamil: "இரண்டு console.log statements பயன்படுத்தவும்.",
    expectedOutput: `HTML is the structure.
JavaScript adds behavior.`,
    expectedOutputTamil: `HTML கட்டமைப்பை உருவாக்குகிறது.
JavaScript செயல்பாடுகளைச் சேர்க்கிறது.`,
    challenge: false,
    solution: `console.log("HTML is the structure.");
console.log("JavaScript adds behavior.");`
  },
  {
    id: 4, topicId: 2, title: "Display a Calculation in a Script",
    questionEnglish: "Write JavaScript code that displays the result of 50 + 25 when executed inside an HTML script tag.",
    questionTamil: "HTML script tag-க்குள் இயக்கப்படும் JavaScript code மூலம் 50 + 25 முடிவைக் காட்டவும்.",
    hintEnglish: "Use console.log(50 + 25).",
    hintTamil: "console.log(50 + 25) பயன்படுத்தவும்.",
    expectedOutput: "75",
    expectedOutputTamil: "75",
    challenge: false,
    solution: `console.log(50 + 25);`
  },
  {
    id: 5, topicId: 2, title: "Display a Message Using Script",
    questionEnglish: "Write JavaScript code to display the message JavaScript is connected successfully.",
    questionTamil: "JavaScript is connected successfully என்ற message-ஐக் காட்டும் JavaScript code எழுதவும்.",
    hintEnglish: "Display the message using console.log().",
    hintTamil: "console.log() பயன்படுத்தி message-ஐக் காட்டவும்.",
    expectedOutput: "JavaScript is connected successfully.",
    expectedOutputTamil: "JavaScript is connected successfully.",
    challenge: false,
    solution: `console.log("JavaScript is connected successfully.");`
  },
  {
    id: 6, topicId: 2, title: "Display HTML and JavaScript Roles",
    questionEnglish: "Display the roles of HTML, CSS, and JavaScript using three statements.",
    questionTamil: "HTML, CSS மற்றும் JavaScript-ன் பயன்பாடுகளை மூன்று statements மூலம் காட்டவும்.",
    hintEnglish: "Use one console.log() statement for each technology.",
    hintTamil: "ஒவ்வொரு technology-க்கும் ஒரு console.log() statement பயன்படுத்தவும்.",
    expectedOutput: `HTML builds structure.
CSS styles webpages.
JavaScript adds behavior.`,
    expectedOutputTamil: `HTML கட்டமைப்பை உருவாக்குகிறது.
CSS webpage-ஐ வடிவமைக்கிறது.
JavaScript செயல்பாடுகளைச் சேர்க்கிறது.`,
    challenge: false,
    solution: `console.log("HTML builds structure.");
console.log("CSS styles webpages.");
console.log("JavaScript adds behavior.");`
  },
  {
    id: 7, topicId: 2, title: "Display the Script Execution Message",
    questionEnglish: "Write JavaScript code that displays Start, JavaScript running, and End in order.",
    questionTamil: "Start, JavaScript running மற்றும் End ஆகியவற்றை வரிசையாகக் காட்டும் JavaScript code எழுதவும்.",
    hintEnglish: "Place three console.log statements in the correct order.",
    hintTamil: "மூன்று console.log statements-ஐ சரியான வரிசையில் எழுதவும்.",
    expectedOutput: `Start
JavaScript running
End`,
    expectedOutputTamil: `Start
JavaScript running
End`,
    challenge: false,
    solution: `console.log("Start");
console.log("JavaScript running");
console.log("End");`
  },
  {
    id: 8, topicId: 2, title: "Display Browser Information",
    questionEnglish: "Write JavaScript code to display the message This code runs in a browser.",
    questionTamil: "This code runs in a browser என்ற message-ஐக் காட்டும் JavaScript code எழுதவும்.",
    hintEnglish: "Use a console.log statement.",
    hintTamil: "console.log statement பயன்படுத்தவும்.",
    expectedOutput: "This code runs in a browser.",
    expectedOutputTamil: "This code runs in a browser.",
    challenge: false,
    solution: `console.log("This code runs in a browser.");`
  },
  {
    id: 9, topicId: 2, title: "Challenge: Internal JavaScript",
    questionEnglish: "Create an HTML page containing an internal script that displays a personal introduction with at least four lines in the console.",
    questionTamil: "Internal script கொண்ட HTML page உருவாக்கி console-ல் குறைந்தது நான்கு வரிகளைக் கொண்ட தனிப்பட்ட அறிமுகத்தைக் காட்டவும்.",
    hintEnglish: "Create an HTML document and add a script tag inside it.",
    hintTamil: "HTML document உருவாக்கி அதற்குள் script tag சேர்க்கவும்.",
    expectedOutput: "A four-line personal introduction in the console.",
    expectedOutputTamil: "Console-ல் நான்கு வரிகளைக் கொண்ட தனிப்பட்ட அறிமுகம்.",
    challenge: true
  },
  {
    id: 10, topicId: 2, title: "Challenge: External JavaScript",
    questionEnglish: "Create an HTML page connected to an external JavaScript file. The JavaScript file must display three messages.",
    questionTamil: "External JavaScript file இணைக்கப்பட்ட HTML page உருவாக்கவும். JavaScript file மூன்று messages-ஐக் காட்ட வேண்டும்.",
    hintEnglish: "Use the script tag with the src attribute.",
    hintTamil: "src attribute கொண்ட script tag பயன்படுத்தவும்.",
    expectedOutput: "Three messages displayed from an external JavaScript file.",
    expectedOutputTamil: "External JavaScript file மூலம் காட்டப்படும் மூன்று messages.",
    challenge: true
  },

  // ==========================================
  // TOPIC 3: JAVASCRIPT SYNTAX AND STATEMENTS
  // ==========================================
  {
    id: 1, topicId: 3, title: "Display a Statement",
    questionEnglish: "Write a JavaScript statement to display your name.",
    questionTamil: "உங்கள் பெயரைக் காட்டும் JavaScript statement எழுதவும்.",
    hintEnglish: "Use console.log().",
    hintTamil: "console.log() பயன்படுத்தவும்.",
    expectedOutput: "Deepak",
    expectedOutputTamil: "Deepak",
    challenge: false,
    solution: `console.log("Deepak");`
  },
  {
    id: 2, topicId: 3, title: "Use a Comment",
    questionEnglish: "Write a single-line comment and display JavaScript is easy.",
    questionTamil: "ஒரு single-line comment எழுதி JavaScript is easy என்பதைக் காட்டவும்.",
    hintEnglish: "Use // for a single-line comment.",
    hintTamil: "Single-line comment எழுத // பயன்படுத்தவும்.",
    expectedOutput: "JavaScript is easy",
    expectedOutputTamil: "JavaScript is easy",
    challenge: false,
    solution: `// Display a message
console.log("JavaScript is easy");`
  },
  {
    id: 3, topicId: 3, title: "Use Multiple Statements",
    questionEnglish: "Write three statements to display your name, department, and aim.",
    questionTamil: "உங்கள் பெயர், department மற்றும் aim-ஐக் காட்ட மூன்று statements எழுதவும்.",
    hintEnglish: "Use one console.log() statement for each item.",
    hintTamil: "ஒவ்வொரு தகவலுக்கும் ஒரு console.log() statement பயன்படுத்தவும்.",
    expectedOutput: `Deepak
Computer Science
Cyber Security`,
    expectedOutputTamil: `Deepak
Computer Science
Cyber Security`,
    challenge: false,
    solution: `console.log("Deepak");
console.log("Computer Science");
console.log("Cyber Security");`
  },
  {
    id: 4, topicId: 3, title: "Write a Multiline Comment",
    questionEnglish: "Write a multiline comment describing JavaScript and display a message after the comment.",
    questionTamil: "JavaScript-ஐ விளக்கும் multiline comment எழுதி அதன் பின்னர் ஒரு message-ஐக் காட்டவும்.",
    hintEnglish: "Use /* and */ to create a multiline comment.",
    hintTamil: "Multiline comment எழுத /* மற்றும் */ பயன்படுத்தவும்.",
    expectedOutput: "JavaScript is a programming language.",
    expectedOutputTamil: "JavaScript is a programming language.",
    challenge: false,
    solution: `/*
JavaScript is used to build interactive webpages.
*/
console.log("JavaScript is a programming language.");`
  },
  {
    id: 5, topicId: 3, title: "Display Arithmetic Statements",
    questionEnglish: "Write statements to display the results of 8 + 2 and 8 * 2.",
    questionTamil: "8 + 2 மற்றும் 8 * 2 ஆகியவற்றின் முடிவுகளைக் காட்ட statements எழுதவும்.",
    hintEnglish: "Place each arithmetic expression inside console.log().",
    hintTamil: "ஒவ்வொரு arithmetic expression-ஐ console.log()-க்குள் எழுதவும்.",
    expectedOutput: `10
16`,
    expectedOutputTamil: `10
16`,
    challenge: false,
    solution: `console.log(8 + 2);
console.log(8 * 2);`
  },
  {
    id: 6, topicId: 3, title: "Combine Statements and Comments",
    questionEnglish: "Write two comments and two JavaScript statements that display a greeting and your career goal.",
    questionTamil: "இரண்டு comments மற்றும் இரண்டு JavaScript statements பயன்படுத்தி greeting மற்றும் career goal-ஐக் காட்டவும்.",
    hintEnglish: "Comments are ignored by JavaScript.",
    hintTamil: "Comments JavaScript மூலம் செயல்படுத்தப்படாது.",
    expectedOutput: `Hello!
Cyber Security`,
    expectedOutputTamil: `Hello!
Cyber Security`,
    challenge: false,
    solution: `// Greeting
console.log("Hello!");

// Career goal
console.log("Cyber Security");`
  },
  {
    id: 7, topicId: 3, title: "Display Values in Order",
    questionEnglish: "Write four JavaScript statements to display the numbers 1, 2, 3, and 4 in order.",
    questionTamil: "1, 2, 3 மற்றும் 4 ஆகியவற்றை வரிசையாகக் காட்ட நான்கு JavaScript statements எழுதவும்.",
    hintEnglish: "Use four console.log() statements.",
    hintTamil: "நான்கு console.log() statements பயன்படுத்தவும்.",
    expectedOutput: `1
2
3
4`,
    expectedOutputTamil: `1
2
3
4`,
    challenge: false,
    solution: `console.log(1);
console.log(2);
console.log(3);
console.log(4);`
  },
  {
    id: 8, topicId: 3, title: "Display a Simple Calculation",
    questionEnglish: "Write JavaScript statements to calculate 100 / 10 and 100 % 10.",
    questionTamil: "100 / 10 மற்றும் 100 % 10 ஆகியவற்றைக் கணக்கிட JavaScript statements எழுதவும்.",
    hintEnglish: "Use the division and remainder operators.",
    hintTamil: "Division மற்றும் remainder operators பயன்படுத்தவும்.",
    expectedOutput: `10
0`,
    expectedOutputTamil: `10
0`,
    challenge: false,
    solution: `console.log(100 / 10);
console.log(100 % 10);`
  },
  {
    id: 9, topicId: 3, title: "Challenge: Code Documentation",
    questionEnglish: "Write a JavaScript program with at least three comments explaining the code and at least four executable statements.",
    questionTamil: "Code-ஐ விளக்கும் குறைந்தது மூன்று comments மற்றும் குறைந்தது நான்கு executable statements கொண்ட JavaScript program எழுதவும்.",
    hintEnglish: "Use both single-line and multiline comments if you wish.",
    hintTamil: "விரும்பினால் single-line மற்றும் multiline comments இரண்டையும் பயன்படுத்தவும்.",
    expectedOutput: "A program with comments and four statements.",
    expectedOutputTamil: "Comments மற்றும் நான்கு statements கொண்ட program.",
    challenge: true
  },
  {
    id: 10, topicId: 3, title: "Challenge: Statement Sequence",
    questionEnglish: "Create a program that displays a numbered sequence of at least six steps explaining how you learn a new technology.",
    questionTamil: "ஒரு புதிய technology-ஐக் கற்றுக்கொள்ளும் முறையை விளக்கும் குறைந்தது ஆறு numbered steps கொண்ட program உருவாக்கவும்.",
    hintEnglish: "Use console.log() and text messages.",
    hintTamil: "console.log() மற்றும் text messages பயன்படுத்தவும்.",
    expectedOutput: "Six or more learning steps.",
    expectedOutputTamil: "ஆறு அல்லது அதற்கு மேற்பட்ட learning steps.",
    challenge: true
  },

  // ==========================================
  // TOPIC 4: VARIABLES – VAR, LET AND CONST
  // ==========================================
  {
    id: 1, topicId: 4, title: "Create a Name Variable",
    questionEnglish: "Declare a variable named name using let, assign your name, and display it.",
    questionTamil: "let பயன்படுத்தி name என்ற variable உருவாக்கி உங்கள் பெயரை assign செய்து காட்டவும்.",
    hintEnglish: "Use let and console.log().",
    hintTamil: "let மற்றும் console.log() பயன்படுத்தவும்.",
    expectedOutput: "Deepak",
    expectedOutputTamil: "Deepak",
    challenge: false,
    solution: `let name = "Deepak";
console.log(name);`
  },
  {
    id: 2, topicId: 4, title: "Store Your Age",
    questionEnglish: "Create an age variable using let and display your age.",
    questionTamil: "let பயன்படுத்தி age variable உருவாக்கி உங்கள் வயதைக் காட்டவும்.",
    hintEnglish: "Assign a number to the variable.",
    hintTamil: "Variable-க்கு ஒரு number assign செய்யவும்.",
    expectedOutput: "20",
    expectedOutputTamil: "20",
    challenge: false,
    solution: `let age = 20;
console.log(age);`
  },
  {
    id: 3, topicId: 4, title: "Reassign a Variable",
    questionEnglish: "Create a variable named score with the value 10. Change it to 50 and display the updated value.",
    questionTamil: "score என்ற variable-ஐ 10 என்ற value-உடன் உருவாக்கவும். அதை 50 ஆக மாற்றி updated value-ஐக் காட்டவும்.",
    hintEnglish: "Use let because the value changes.",
    hintTamil: "Value மாற்றப்படுவதால் let பயன்படுத்தவும்.",
    expectedOutput: "50",
    expectedOutputTamil: "50",
    challenge: false,
    solution: `let score = 10;
score = 50;
console.log(score);`
  },
  {
    id: 4, topicId: 4, title: "Create a Constant",
    questionEnglish: "Create a const variable named country with the value India and display it.",
    questionTamil: "India என்ற value கொண்ட country என்ற const variable உருவாக்கி காட்டவும்.",
    hintEnglish: "Use const.",
    hintTamil: "const பயன்படுத்தவும்.",
    expectedOutput: "India",
    expectedOutputTamil: "India",
    challenge: false,
    solution: `const country = "India";
console.log(country);`
  },
  {
    id: 5, topicId: 4, title: "Store Multiple Details",
    questionEnglish: "Create variables for your name, age, and department and display all three.",
    questionTamil: "உங்கள் பெயர், வயது மற்றும் department-க்கு variables உருவாக்கி மூன்றையும் காட்டவும்.",
    hintEnglish: "Use let for each variable.",
    hintTamil: "ஒவ்வொரு variable-க்கும் let பயன்படுத்தவும்.",
    expectedOutput: `Deepak
20
Computer Science`,
    expectedOutputTamil: `Deepak
20
Computer Science`,
    challenge: false,
    solution: `let name = "Deepak";
let age = 20;
let department = "Computer Science";

console.log(name);
console.log(age);
console.log(department);`
  },
  {
    id: 6, topicId: 4, title: "Update a Balance",
    questionEnglish: "Create a balance variable with 1000. Add 500 to it and display the updated balance.",
    questionTamil: "1000 என்ற value கொண்ட balance variable உருவாக்கவும். அதில் 500 சேர்த்து updated balance-ஐக் காட்டவும்.",
    hintEnglish: "Reassign the balance using balance + 500.",
    hintTamil: "balance + 500 பயன்படுத்தி balance-ஐ மீண்டும் assign செய்யவும்.",
    expectedOutput: "1500",
    expectedOutputTamil: "1500",
    challenge: false,
    solution: `let balance = 1000;
balance = balance + 500;
console.log(balance);`
  },
  {
    id: 7, topicId: 4, title: "Use const for a Fixed Value",
    questionEnglish: "Create a const variable named pi with the value 3.14 and display it.",
    questionTamil: "3.14 என்ற value கொண்ட pi என்ற const variable உருவாக்கி காட்டவும்.",
    hintEnglish: "Use const to store the fixed value.",
    hintTamil: "Fixed value சேமிக்க const பயன்படுத்தவும்.",
    expectedOutput: "3.14",
    expectedOutputTamil: "3.14",
    challenge: false,
    solution: `const pi = 3.14;
console.log(pi);`
  },
  {
    id: 8, topicId: 4, title: "Calculate Using Variables",
    questionEnglish: "Create two variables with the values 25 and 15. Display their sum using the variables.",
    questionTamil: "25 மற்றும் 15 values கொண்ட இரண்டு variables உருவாக்கி அவற்றின் கூட்டுத்தொகையைக் காட்டவும்.",
    hintEnglish: "Add the two variables inside console.log().",
    hintTamil: "இரண்டு variables-ஐ console.log()-க்குள் கூட்டவும்.",
    expectedOutput: "40",
    expectedOutputTamil: "40",
    challenge: false,
    solution: `let a = 25;
let b = 15;

console.log(a + b);`
  },
  {
    id: 9, topicId: 4, title: "Challenge: Student Profile",
    questionEnglish: "Create variables for a student's name, age, department, college, and career goal. Display the profile.",
    questionTamil: "மாணவரின் பெயர், வயது, department, college மற்றும் career goal ஆகியவற்றிற்கான variables உருவாக்கி profile-ஐக் காட்டவும்.",
    hintEnglish: "Choose let or const based on whether the values need to change.",
    hintTamil: "Values மாற்றப்பட வேண்டுமா என்பதைப் பொறுத்து let அல்லது const தேர்ந்தெடுக்கவும்.",
    expectedOutput: "A student profile containing five details.",
    expectedOutputTamil: "ஐந்து தகவல்களைக் கொண்ட மாணவர் profile.",
    challenge: true
  },
  {
    id: 10, topicId: 4, title: "Challenge: Shopping Bill",
    questionEnglish: "Create variables for the price of three products and calculate the total. Then update one product price and calculate the new total.",
    questionTamil: "மூன்று products-ன் விலைகளுக்கான variables உருவாக்கி மொத்தத்தைக் கணக்கிடவும். பின்னர் ஒரு product-ன் விலையை மாற்றி புதிய மொத்தத்தைக் கணக்கிடவும்.",
    hintEnglish: "Use variables and arithmetic operators.",
    hintTamil: "Variables மற்றும் arithmetic operators பயன்படுத்தவும்.",
    expectedOutput: "An initial total and an updated total.",
    expectedOutputTamil: "முதலில் ஒரு total மற்றும் மாற்றப்பட்ட total.",
    challenge: true
  },

  // ==========================================
  // TOPIC 5: JAVASCRIPT DATA TYPES
  // ==========================================
  {
    id: 1, topicId: 5, title: "Create a String",
    questionEnglish: "Create a variable named name containing your name as a string and display it.",
    questionTamil: "உங்கள் பெயரை string-ஆக சேமிக்கும் name என்ற variable உருவாக்கி காட்டவும்.",
    hintEnglish: "Use quotation marks around the text.",
    hintTamil: "Text-ஐ quotation marks-க்குள் எழுதவும்.",
    expectedOutput: "Deepak",
    expectedOutputTamil: "Deepak",
    challenge: false,
    solution: `let name = "Deepak";
console.log(name);`
  },
  {
    id: 2, topicId: 5, title: "Create a Number",
    questionEnglish: "Create a variable named age containing the number 20 and display it.",
    questionTamil: "20 என்ற number-ஐச் சேமிக்கும் age என்ற variable உருவாக்கி காட்டவும்.",
    hintEnglish: "Numbers do not need quotation marks.",
    hintTamil: "Numbers-க்கு quotation marks தேவையில்லை.",
    expectedOutput: "20",
    expectedOutputTamil: "20",
    challenge: false,
    solution: `let age = 20;
console.log(age);`
  },
  {
    id: 3, topicId: 5, title: "Create a Boolean",
    questionEnglish: "Create a variable named isStudent with the value true and display it.",
    questionTamil: "true என்ற value கொண்ட isStudent என்ற variable உருவாக்கி காட்டவும்.",
    hintEnglish: "A boolean can be true or false.",
    hintTamil: "Boolean true அல்லது false ஆக இருக்கலாம்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `let isStudent = true;
console.log(isStudent);`
  },
  {
    id: 4, topicId: 5, title: "Check a String Type",
    questionEnglish: "Create a variable containing Hello and use typeof to display its data type.",
    questionTamil: "Hello என்ற value கொண்ட variable உருவாக்கி typeof பயன்படுத்தி அதன் data type-ஐக் காட்டவும்.",
    hintEnglish: "Use typeof with console.log().",
    hintTamil: "console.log() உடன் typeof பயன்படுத்தவும்.",
    expectedOutput: "string",
    expectedOutputTamil: "string",
    challenge: false,
    solution: `let message = "Hello";
console.log(typeof message);`
  },
  {
    id: 5, topicId: 5, title: "Check a Number Type",
    questionEnglish: "Create a variable containing 100 and use typeof to display its type.",
    questionTamil: "100 என்ற value கொண்ட variable உருவாக்கி typeof மூலம் அதன் type-ஐக் காட்டவும்.",
    hintEnglish: "Numbers are a JavaScript data type.",
    hintTamil: "Numbers JavaScript data type ஆகும்.",
    expectedOutput: "number",
    expectedOutputTamil: "number",
    challenge: false,
    solution: `let value = 100;
console.log(typeof value);`
  },
  {
    id: 6, topicId: 5, title: "Check a Boolean Type",
    questionEnglish: "Create a boolean variable named isLoggedIn and display its data type.",
    questionTamil: "isLoggedIn என்ற boolean variable உருவாக்கி அதன் data type-ஐக் காட்டவும்.",
    hintEnglish: "Use typeof.",
    hintTamil: "typeof பயன்படுத்தவும்.",
    expectedOutput: "boolean",
    expectedOutputTamil: "boolean",
    challenge: false,
    solution: `let isLoggedIn = false;
console.log(typeof isLoggedIn);`
  },
  {
    id: 7, topicId: 5, title: "Check an Undefined Variable",
    questionEnglish: "Declare a variable without assigning a value and display its type using typeof.",
    questionTamil: "Value assign செய்யாமல் ஒரு variable உருவாக்கி typeof மூலம் அதன் type-ஐக் காட்டவும்.",
    hintEnglish: "Declare the variable without an initial value.",
    hintTamil: "Initial value இல்லாமல் variable declare செய்யவும்.",
    expectedOutput: "undefined",
    expectedOutputTamil: "undefined",
    challenge: false,
    solution: `let result;
console.log(typeof result);`
  },
  {
    id: 8, topicId: 5, title: "Display Multiple Data Types",
    questionEnglish: "Create a string, number, and boolean variable. Display the data type of each using typeof.",
    questionTamil: "String, number மற்றும் boolean variables உருவாக்கி typeof பயன்படுத்தி ஒவ்வொன்றின் data type-ஐக் காட்டவும்.",
    hintEnglish: "Use typeof separately for each variable.",
    hintTamil: "ஒவ்வொரு variable-க்கும் typeof தனித்தனியாகப் பயன்படுத்தவும்.",
    expectedOutput: `string
number
boolean`,
    expectedOutputTamil: `string
number
boolean`,
    challenge: false,
    solution: `let name = "Deepak";
let age = 20;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);`
  },
  {
    id: 9, topicId: 5, title: "Challenge: Data Type Explorer",
    questionEnglish: "Create at least six variables containing different JavaScript values and display the type of each using typeof.",
    questionTamil: "வெவ்வேறு JavaScript values கொண்ட குறைந்தது ஆறு variables உருவாக்கி typeof மூலம் ஒவ்வொன்றின் type-ஐக் காட்டவும்.",
    hintEnglish: "Explore strings, numbers, booleans, undefined, objects, and other values.",
    hintTamil: "String, number, boolean, undefined, object மற்றும் பிற values-ஐ ஆராயவும்.",
    expectedOutput: "The data types of at least six values.",
    expectedOutputTamil: "குறைந்தது ஆறு values-ன் data types.",
    challenge: true
  },
  {
    id: 10, topicId: 5, title: "Challenge: Student Data",
    questionEnglish: "Create a student object containing a name, age, student status, a missing value, and an array of skills. Display the type of each value.",
    questionTamil: "பெயர், வயது, student status, value இல்லாத variable மற்றும் skills array ஆகியவற்றைக் கொண்ட student data உருவாக்கி ஒவ்வொரு value-ன் type-ஐக் காட்டவும்.",
    hintEnglish: "Use different JavaScript data types and typeof.",
    hintTamil: "வெவ்வேறு JavaScript data types மற்றும் typeof பயன்படுத்தவும்.",
    expectedOutput: "The data types of all the student information values.",
    expectedOutputTamil: "மாணவர் தகவல்களின் அனைத்து values-ன் data types.",
    challenge: true
  },

  // ==========================================
  // TOPIC 6: JAVASCRIPT OPERATORS
  // ==========================================
  {
    id: 1, topicId: 6, title: "Addition Operator",
    questionEnglish: "Create two variables with the values 10 and 20. Display their sum.",
    questionTamil: "10 மற்றும் 20 values கொண்ட இரண்டு variables உருவாக்கி அவற்றின் கூட்டுத்தொகையைக் காட்டவும்.",
    hintEnglish: "Use the + operator.",
    hintTamil: "+ operator பயன்படுத்தவும்.",
    expectedOutput: "30",
    expectedOutputTamil: "30",
    challenge: false,
    solution: `let a = 10;
let b = 20;
console.log(a + b);`
  },
  {
    id: 2, topicId: 6, title: "Subtraction Operator",
    questionEnglish: "Create two variables with the values 50 and 15. Display the difference.",
    questionTamil: "50 மற்றும் 15 values கொண்ட இரண்டு variables உருவாக்கி அவற்றின் வித்தியாசத்தைக் காட்டவும்.",
    hintEnglish: "Use the - operator.",
    hintTamil: "- operator பயன்படுத்தவும்.",
    expectedOutput: "35",
    expectedOutputTamil: "35",
    challenge: false,
    solution: `let a = 50;
let b = 15;
console.log(a - b);`
  },
  {
    id: 3, topicId: 6, title: "Multiplication Operator",
    questionEnglish: "Calculate the total cost of 4 notebooks, each costing 25.",
    questionTamil: "ஒவ்வொன்றும் 25 ரூபாய் விலை கொண்ட 4 notebooks-ன் மொத்த விலையைக் கணக்கிடவும்.",
    hintEnglish: "Multiply the price by the quantity.",
    hintTamil: "Price-ஐ quantity-யுடன் பெருக்கவும்.",
    expectedOutput: "100",
    expectedOutputTamil: "100",
    challenge: false,
    solution: `let price = 25;
let quantity = 4;
console.log(price * quantity);`
  },
  {
    id: 4, topicId: 6, title: "Division Operator",
    questionEnglish: "Divide 100 by 5 and display the result.",
    questionTamil: "100-ஐ 5-ஆல் வகுத்து முடிவைக் காட்டவும்.",
    hintEnglish: "Use the / operator.",
    hintTamil: "/ operator பயன்படுத்தவும்.",
    expectedOutput: "20",
    expectedOutputTamil: "20",
    challenge: false,
    solution: `console.log(100 / 5);`
  },
  {
    id: 5, topicId: 6, title: "Remainder Operator",
    questionEnglish: "Find the remainder when 17 is divided by 5.",
    questionTamil: "17-ஐ 5-ஆல் வகுக்கும்போது கிடைக்கும் remainder-ஐக் கண்டறியவும்.",
    hintEnglish: "Use the % operator.",
    hintTamil: "% operator பயன்படுத்தவும்.",
    expectedOutput: "2",
    expectedOutputTamil: "2",
    challenge: false,
    solution: `console.log(17 % 5);`
  },
  {
    id: 6, topicId: 6, title: "Comparison Operator",
    questionEnglish: "Compare whether 25 is greater than 10 using a comparison operator.",
    questionTamil: "Comparison operator பயன்படுத்தி 25 என்பது 10-ஐ விட அதிகமா எனச் சரிபார்க்கவும்.",
    hintEnglish: "Use the > operator.",
    hintTamil: "> operator பயன்படுத்தவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `console.log(25 > 10);`
  },
  {
    id: 7, topicId: 6, title: "Strict Equality Operator",
    questionEnglish: "Check whether the number 10 is strictly equal to the number 10.",
    questionTamil: "10 என்ற number, மற்றொரு 10 என்ற number-க்கு strict equality உள்ளதா எனச் சரிபார்க்கவும்.",
    hintEnglish: "Use the === operator.",
    hintTamil: "=== operator பயன்படுத்தவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `console.log(10 === 10);`
  },
  {
    id: 8, topicId: 6, title: "Logical AND Operator",
    questionEnglish: "Check whether 20 is greater than 10 AND 20 is less than 30 using a logical operator.",
    questionTamil: "Logical operator பயன்படுத்தி 20 என்பது 10-ஐ விட அதிகமாகவும் 30-ஐ விட குறைவாகவும் உள்ளதா எனச் சரிபார்க்கவும்.",
    hintEnglish: "Use the && operator.",
    hintTamil: "&& operator பயன்படுத்தவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `console.log(20 > 10 && 20 < 30);`
  },
  {
    id: 9, topicId: 6, title: "Challenge: Shopping Calculator",
    questionEnglish: "Calculate the total price of three different products, apply a discount using arithmetic operators, and display the final amount.",
    questionTamil: "மூன்று வெவ்வேறு products-ன் மொத்த விலையைக் கணக்கிட்டு arithmetic operators பயன்படுத்தி discount வழங்கி இறுதி தொகையைக் காட்டவும்.",
    hintEnglish: "Use variables, arithmetic operators, and reassignment where appropriate.",
    hintTamil: "Variables, arithmetic operators மற்றும் தேவையான இடங்களில் reassignment பயன்படுத்தவும்.",
    expectedOutput: "A total price and discounted final amount.",
    expectedOutputTamil: "மொத்த விலை மற்றும் discount செய்யப்பட்ட இறுதி தொகை.",
    challenge: true
  },
  {
    id: 10, topicId: 6, title: "Challenge: Comparison Explorer",
    questionEnglish: "Create two numbers and display the results of at least five different comparison operations between them.",
    questionTamil: "இரண்டு numbers உருவாக்கி அவற்றுக்கு இடையே குறைந்தது ஐந்து வெவ்வேறு comparison operations-ன் முடிவுகளைக் காட்டவும்.",
    hintEnglish: "Explore >, <, >=, <=, === and !==.",
    hintTamil: ">, <, >=, <=, === மற்றும் !== ஆகியவற்றை ஆராயவும்.",
    expectedOutput: "Five or more boolean comparison results.",
    expectedOutputTamil: "ஐந்து அல்லது அதற்கு மேற்பட்ட boolean comparison முடிவுகள்.",
    challenge: true
  },

  // ==========================================
  // TOPIC 7: TYPE CONVERSION AND TYPE COERCION
  // ==========================================
  {
    id: 1, topicId: 7, title: "Convert String to Number",
    questionEnglish: "Convert the string '25' into a number using Number() and display it.",
    questionTamil: "'25' என்ற string-ஐ Number() பயன்படுத்தி number-ஆக மாற்றி காட்டவும்.",
    hintEnglish: "Use Number() to convert the string.",
    hintTamil: "String-ஐ மாற்ற Number() பயன்படுத்தவும்.",
    expectedOutput: "25",
    expectedOutputTamil: "25",
    challenge: false,
    solution: `let value = "25";
let numberValue = Number(value);
console.log(numberValue);`
  },
  {
    id: 2, topicId: 7, title: "Convert Number to String",
    questionEnglish: "Convert the number 100 into a string using String() and display it.",
    questionTamil: "100 என்ற number-ஐ String() பயன்படுத்தி string-ஆக மாற்றி காட்டவும்.",
    hintEnglish: "Use String().",
    hintTamil: "String() பயன்படுத்தவும்.",
    expectedOutput: "100",
    expectedOutputTamil: "100",
    challenge: false,
    solution: `let value = 100;
let textValue = String(value);
console.log(textValue);`
  },
  {
    id: 3, topicId: 7, title: "Convert to Boolean",
    questionEnglish: "Convert the number 1 into a boolean using Boolean() and display the result.",
    questionTamil: "1 என்ற number-ஐ Boolean() பயன்படுத்தி boolean-ஆக மாற்றி முடிவைக் காட்டவும்.",
    hintEnglish: "Use Boolean(1).",
    hintTamil: "Boolean(1) பயன்படுத்தவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `console.log(Boolean(1));`
  },
  {
    id: 4, topicId: 7, title: "Convert a Numeric String",
    questionEnglish: "Convert the string '50' into a number and add 10.",
    questionTamil: "'50' என்ற string-ஐ number-ஆக மாற்றி அதனுடன் 10 சேர்க்கவும்.",
    hintEnglish: "Convert the string first using Number().",
    hintTamil: "முதலில் Number() பயன்படுத்தி string-ஐ மாற்றவும்.",
    expectedOutput: "60",
    expectedOutputTamil: "60",
    challenge: false,
    solution: `let value = "50";
let numberValue = Number(value);
console.log(numberValue + 10);`
  },
  {
    id: 5, topicId: 7, title: "Understand String Concatenation",
    questionEnglish: "Display the result of adding the string '10' and the number 5.",
    questionTamil: "'10' என்ற string மற்றும் 5 என்ற number-ஐ கூட்டும்போது கிடைக்கும் முடிவைக் காட்டவும்.",
    hintEnglish: "Use the + operator without converting the string.",
    hintTamil: "String-ஐ மாற்றாமல் + operator பயன்படுத்தவும்.",
    expectedOutput: "105",
    expectedOutputTamil: "105",
    challenge: false,
    solution: `console.log("10" + 5);`
  },
  {
    id: 6, topicId: 7, title: "Understand Numeric Coercion",
    questionEnglish: "Display the result of subtracting 5 from the string '10'.",
    questionTamil: "'10' என்ற string-லிருந்து 5-ஐ கழிக்கும்போது கிடைக்கும் முடிவைக் காட்டவும்.",
    hintEnglish: "Use the - operator.",
    hintTamil: "- operator பயன்படுத்தவும்.",
    expectedOutput: "5",
    expectedOutputTamil: "5",
    challenge: false,
    solution: `console.log("10" - 5);`
  },
  {
    id: 7, topicId: 7, title: "Convert a String to Integer",
    questionEnglish: "Use parseInt() to convert the string '45' into an integer and display it.",
    questionTamil: "parseInt() பயன்படுத்தி '45' என்ற string-ஐ integer-ஆக மாற்றி காட்டவும்.",
    hintEnglish: "Use parseInt().",
    hintTamil: "parseInt() பயன்படுத்தவும்.",
    expectedOutput: "45",
    expectedOutputTamil: "45",
    challenge: false,
    solution: `let value = "45";
console.log(parseInt(value));`
  },
  {
    id: 8, topicId: 7, title: "Convert a String to Float",
    questionEnglish: "Use parseFloat() to convert the string '12.5' into a floating-point number and display it.",
    questionTamil: "parseFloat() பயன்படுத்தி '12.5' என்ற string-ஐ floating-point number-ஆக மாற்றி காட்டவும்.",
    hintEnglish: "Use parseFloat().",
    hintTamil: "parseFloat() பயன்படுத்தவும்.",
    expectedOutput: "12.5",
    expectedOutputTamil: "12.5",
    challenge: false,
    solution: `let value = "12.5";
console.log(parseFloat(value));`
  },
  {
    id: 9, topicId: 7, title: "Challenge: Conversion Explorer",
    questionEnglish: "Convert different values into numbers and booleans. Display the converted results and their data types.",
    questionTamil: "வெவ்வேறு values-ஐ numbers மற்றும் booleans-ஆக மாற்றி converted results மற்றும் அவற்றின் data types-ஐக் காட்டவும்.",
    hintEnglish: "Explore Number(), Boolean(), and typeof.",
    hintTamil: "Number(), Boolean() மற்றும் typeof ஆகியவற்றை ஆராயவும்.",
    expectedOutput: "Converted values and their data types.",
    expectedOutputTamil: "மாற்றப்பட்ட values மற்றும் அவற்றின் data types.",
    challenge: true
  },
  {
    id: 10, topicId: 7, title: "Challenge: User Input Simulation",
    questionEnglish: "Create two numeric strings, convert them into numbers, and perform addition, subtraction, multiplication, and division.",
    questionTamil: "இரண்டு numeric strings உருவாக்கி அவற்றை numbers-ஆக மாற்றி addition, subtraction, multiplication மற்றும் division செய்யவும்.",
    hintEnglish: "Convert both values before performing arithmetic.",
    hintTamil: "Arithmetic செய்வதற்கு முன்பு இரண்டு values-ஐயும் மாற்றவும்.",
    expectedOutput: "Results of four arithmetic operations.",
    expectedOutputTamil: "நான்கு arithmetic operations-ன் முடிவுகள்.",
    challenge: true
  },

  // ==========================================
  // TOPIC 8: CONDITIONAL STATEMENTS
  // ==========================================
  {
    id: 1, topicId: 8, title: "Check Positive Number",
    questionEnglish: "Check whether the number 10 is greater than zero. Display Positive if true.",
    questionTamil: "10 என்ற number பூஜ்ஜியத்தை விட அதிகமா எனச் சரிபார்த்து true என்றால் Positive காட்டவும்.",
    hintEnglish: "Use an if statement.",
    hintTamil: "if statement பயன்படுத்தவும்.",
    expectedOutput: "Positive",
    expectedOutputTamil: "Positive",
    challenge: false,
    solution: `let number = 10;

if (number > 0) {
  console.log("Positive");
}`
  },
  {
    id: 2, topicId: 8, title: "Check Negative Number",
    questionEnglish: "Check whether -5 is a negative number using an if statement.",
    questionTamil: "if statement பயன்படுத்தி -5 negative number-ஆ எனச் சரிபார்க்கவும்.",
    hintEnglish: "Check whether the number is less than zero.",
    hintTamil: "Number பூஜ்ஜியத்தை விட குறைவாக உள்ளதா எனச் சரிபார்க்கவும்.",
    expectedOutput: "Negative",
    expectedOutputTamil: "Negative",
    challenge: false,
    solution: `let number = -5;

if (number < 0) {
  console.log("Negative");
}`
  },
  {
    id: 3, topicId: 8, title: "Check Even Number",
    questionEnglish: "Check whether 8 is even using an if statement and the remainder operator.",
    questionTamil: "if statement மற்றும் remainder operator பயன்படுத்தி 8 even number-ஆ எனச் சரிபார்க்கவும்.",
    hintEnglish: "A number is even when its remainder after division by 2 is zero.",
    hintTamil: "2-ஆல் வகுக்கும்போது remainder 0 இருந்தால் அந்த number even ஆகும்.",
    expectedOutput: "Even",
    expectedOutputTamil: "Even",
    challenge: false,
    solution: `let number = 8;

if (number % 2 === 0) {
  console.log("Even");
}`
  },
  {
    id: 4, topicId: 8, title: "Check Voting Eligibility",
    questionEnglish: "Check whether a person aged 20 is eligible to vote. Display Eligible if the age is at least 18.",
    questionTamil: "20 வயதுடைய ஒருவர் வாக்களிக்க தகுதியானவரா எனச் சரிபார்க்கவும். வயது குறைந்தது 18 என்றால் Eligible காட்டவும்.",
    hintEnglish: "Use an if statement with >=.",
    hintTamil: ">= உடன் if statement பயன்படுத்தவும்.",
    expectedOutput: "Eligible",
    expectedOutputTamil: "Eligible",
    challenge: false,
    solution: `let age = 20;

if (age >= 18) {
  console.log("Eligible");
}`
  },
  {
    id: 5, topicId: 8, title: "Check Pass or Fail",
    questionEnglish: "If a student scores 50 or more, display Pass. Otherwise display Fail.",
    questionTamil: "ஒரு மாணவர் 50 அல்லது அதற்கு மேல் மதிப்பெண் பெற்றால் Pass காட்டவும். இல்லையெனில் Fail காட்டவும்.",
    hintEnglish: "Use if and else.",
    hintTamil: "if மற்றும் else பயன்படுத்தவும்.",
    expectedOutput: "Pass",
    expectedOutputTamil: "Pass",
    challenge: false,
    solution: `let mark = 50;

if (mark >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}`
  },
  {
    id: 6, topicId: 8, title: "Find Grade",
    questionEnglish: "Display Grade A if marks are 90 or more, Grade B if marks are 75 or more, otherwise display Grade C. Use 80 as the mark.",
    questionTamil: "90 அல்லது அதற்கு மேல் Grade A, 75 அல்லது அதற்கு மேல் Grade B, இல்லையெனில் Grade C காட்டவும். Mark 80 ஆக இருக்க வேண்டும்.",
    hintEnglish: "Use if and else if.",
    hintTamil: "if மற்றும் else if பயன்படுத்தவும்.",
    expectedOutput: "Grade B",
    expectedOutputTamil: "Grade B",
    challenge: false,
    solution: `let mark = 80;

if (mark >= 90) {
  console.log("Grade A");
} else if (mark >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}`
  },
  {
    id: 7, topicId: 8, title: "Check Password Length",
    questionEnglish: "If a password length is at least 8 characters, display Strong Password. Otherwise display Weak Password. Use a password of 10 characters.",
    questionTamil: "Password குறைந்தது 8 characters கொண்டிருந்தால் Strong Password காட்டவும். இல்லையெனில் Weak Password காட்டவும். 10 characters கொண்ட password பயன்படுத்தவும்.",
    hintEnglish: "Use the length property and an if...else statement.",
    hintTamil: "length property மற்றும் if...else statement பயன்படுத்தவும்.",
    expectedOutput: "Strong Password",
    expectedOutputTamil: "Strong Password",
    challenge: false,
    solution: `let password = "secure1234";

if (password.length >= 8) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}`
  },
  {
    id: 8, topicId: 8, title: "Check Age Category",
    questionEnglish: "Display Child if age is below 13, Teenager if age is below 20, otherwise Adult. Use age 15.",
    questionTamil: "வயது 13-க்கு குறைவாக இருந்தால் Child, 20-க்கு குறைவாக இருந்தால் Teenager, இல்லையெனில் Adult காட்டவும். வயது 15 பயன்படுத்தவும்.",
    hintEnglish: "Use if, else if, and else.",
    hintTamil: "if, else if மற்றும் else பயன்படுத்தவும்.",
    expectedOutput: "Teenager",
    expectedOutputTamil: "Teenager",
    challenge: false,
    solution: `let age = 15;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}`
  },
  {
    id: 9, topicId: 8, title: "Challenge: Number Analyzer",
    questionEnglish: "Create a program that checks whether a number is positive, negative, or zero and whether it is even or odd.",
    questionTamil: "ஒரு number positive, negative அல்லது zero-ஆ என்றும் even அல்லது odd-ஆ என்றும் சரிபார்க்கும் program உருவாக்கவும்.",
    hintEnglish: "Use conditions and the remainder operator.",
    hintTamil: "Conditions மற்றும் remainder operator பயன்படுத்தவும்.",
    expectedOutput: "Number classification and even/odd result.",
    expectedOutputTamil: "Number வகைப்பாடு மற்றும் even/odd முடிவு.",
    challenge: true
  },
  {
    id: 10, topicId: 8, title: "Challenge: Login Decision",
    questionEnglish: "Create a simple login decision program that checks a username and password using conditional statements and displays an appropriate message.",
    questionTamil: "Username மற்றும் password-ஐ conditional statements பயன்படுத்தி சரிபார்த்து பொருத்தமான message காட்டும் simple login decision program உருவாக்கவும்.",
    hintEnglish: "Use conditions to compare the stored username and password.",
    hintTamil: "Stored username மற்றும் password-ஐ ஒப்பிட conditions பயன்படுத்தவும்.",
    expectedOutput: "Login success or login failure message.",
    expectedOutputTamil: "Login வெற்றி அல்லது login தோல்வி message.",
    challenge: true
  },

  // ==========================================
  // TOPIC 9: SWITCH STATEMENT
  // ==========================================
  {
    id: 1, topicId: 9, title: "Display a Day",
    questionEnglish: "Use a switch statement to display Monday when day is 1.",
    questionTamil: "day value 1 ஆக இருக்கும்போது switch statement பயன்படுத்தி Monday காட்டவும்.",
    hintEnglish: "Create a case for 1.",
    hintTamil: "1-க்கு ஒரு case உருவாக்கவும்.",
    expectedOutput: "Monday",
    expectedOutputTamil: "Monday",
    challenge: false,
    solution: `let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
}`
  },
  {
    id: 2, topicId: 9, title: "Display a Month",
    questionEnglish: "Use a switch statement to display January when month is 1.",
    questionTamil: "month value 1 ஆக இருக்கும்போது switch statement பயன்படுத்தி January காட்டவும்.",
    hintEnglish: "Use case 1.",
    hintTamil: "case 1 பயன்படுத்தவும்.",
    expectedOutput: "January",
    expectedOutputTamil: "January",
    challenge: false,
    solution: `let month = 1;

switch (month) {
  case 1:
    console.log("January");
    break;
}`
  },
  {
    id: 3, topicId: 9, title: "Choose a Browser",
    questionEnglish: "Use a switch statement to display Chrome when browser is 'Chrome'.",
    questionTamil: "browser value 'Chrome' ஆக இருக்கும்போது switch statement பயன்படுத்தி Chrome Browser காட்டவும்.",
    hintEnglish: "Compare the string using a case.",
    hintTamil: "String-ஐ case மூலம் ஒப்பிடவும்.",
    expectedOutput: "Chrome Browser",
    expectedOutputTamil: "Chrome Browser",
    challenge: false,
    solution: `let browser = "Chrome";

switch (browser) {
  case "Chrome":
    console.log("Chrome Browser");
    break;
}`
  },
  {
    id: 4, topicId: 9, title: "Handle a Default Case",
    questionEnglish: "Use a switch statement with a default case to display Invalid Option when option is 5.",
    questionTamil: "option value 5 ஆக இருக்கும்போது default case பயன்படுத்தி Invalid Option காட்டவும்.",
    hintEnglish: "Use default for unmatched values.",
    hintTamil: "பொருந்தாத values-க்கு default பயன்படுத்தவும்.",
    expectedOutput: "Invalid Option",
    expectedOutputTamil: "Invalid Option",
    challenge: false,
    solution: `let option = 5;

switch (option) {
  case 1:
    console.log("Option 1");
    break;
  default:
    console.log("Invalid Option");
}`
  },
  {
    id: 5, topicId: 9, title: "Select a Language",
    questionEnglish: "Use a switch statement to display Java when language is 1 and Python when language is 2. Use language 2.",
    questionTamil: "language value 1 ஆக இருந்தால் Java, 2 ஆக இருந்தால் Python காட்டும் switch statement எழுதவும். Language value 2 பயன்படுத்தவும்.",
    hintEnglish: "Create two cases.",
    hintTamil: "இரண்டு cases உருவாக்கவும்.",
    expectedOutput: "Python",
    expectedOutputTamil: "Python",
    challenge: false,
    solution: `let language = 2;

switch (language) {
  case 1:
    console.log("Java");
    break;
  case 2:
    console.log("Python");
    break;
}`
  },
  {
    id: 6, topicId: 9, title: "Simple Calculator Switch",
    questionEnglish: "Use a switch statement to perform addition when the operator is '+'. Use 10 and 5 as operands.",
    questionTamil: "Operator '+' ஆக இருக்கும்போது switch statement பயன்படுத்தி addition செய்யவும். 10 மற்றும் 5 operands பயன்படுத்தவும்.",
    hintEnglish: "Create a case for the + operator.",
    hintTamil: "+ operator-க்கு case உருவாக்கவும்.",
    expectedOutput: "15",
    expectedOutputTamil: "15",
    challenge: false,
    solution: `let a = 10;
let b = 5;
let operator = "+";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
}`
  },
  {
    id: 7, topicId: 9, title: "Display a Weekend",
    questionEnglish: "Use a switch statement to display Weekend when day is Saturday or Sunday.",
    questionTamil: "day value Saturday அல்லது Sunday ஆக இருக்கும்போது switch statement பயன்படுத்தி Weekend காட்டவும்.",
    hintEnglish: "Multiple cases can share the same code.",
    hintTamil: "பல cases ஒரே code-ஐப் பகிர்ந்து பயன்படுத்தலாம்.",
    expectedOutput: "Weekend",
    expectedOutputTamil: "Weekend",
    challenge: false,
    solution: `let day = "Sunday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Weekday");
}`
  },
  {
    id: 8, topicId: 9, title: "Menu Selection",
    questionEnglish: "Create a switch statement that displays Start Game when option is 1, Settings when option is 2, and Exit when option is 3. Use option 2.",
    questionTamil: "Option 1-க்கு Start Game, 2-க்கு Settings, 3-க்கு Exit காட்டும் switch statement உருவாக்கவும். Option 2 பயன்படுத்தவும்.",
    hintEnglish: "Create three cases.",
    hintTamil: "மூன்று cases உருவாக்கவும்.",
    expectedOutput: "Settings",
    expectedOutputTamil: "Settings",
    challenge: false,
    solution: `let option = 2;

switch (option) {
  case 1:
    console.log("Start Game");
    break;
  case 2:
    console.log("Settings");
    break;
  case 3:
    console.log("Exit");
    break;
}`
  },
  {
    id: 9, topicId: 9, title: "Challenge: Calculator Menu",
    questionEnglish: "Create a calculator using a switch statement that supports addition, subtraction, multiplication, and division.",
    questionTamil: "Addition, subtraction, multiplication மற்றும் division ஆதரிக்கும் calculator-ஐ switch statement பயன்படுத்தி உருவாக்கவும்.",
    hintEnglish: "Use an operator variable and separate cases.",
    hintTamil: "Operator variable மற்றும் தனித்தனி cases பயன்படுத்தவும்.",
    expectedOutput: "The result of the selected arithmetic operation.",
    expectedOutputTamil: "தேர்ந்தெடுக்கப்பட்ட arithmetic operation-ன் முடிவு.",
    challenge: true
  },
  {
    id: 10, topicId: 9, title: "Challenge: Command Menu",
    questionEnglish: "Create a switch-based menu for a cybersecurity learning application with at least four options and a default case.",
    questionTamil: "குறைந்தது நான்கு options மற்றும் default case கொண்ட Cybersecurity learning application menu-ஐ switch பயன்படுத்தி உருவாக்கவும்.",
    hintEnglish: "Choose meaningful menu options.",
    hintTamil: "பொருத்தமான menu options தேர்ந்தெடுக்கவும்.",
    expectedOutput: "A message corresponding to the selected option.",
    expectedOutputTamil: "தேர்ந்தெடுக்கப்பட்ட option-க்கு பொருத்தமான message.",
    challenge: true
  },

  // ==========================================
  // TOPIC 10: LOOPS
  // ==========================================
  {
    id: 1, topicId: 10, title: "Print Numbers 1 to 5",
    questionEnglish: "Use a for loop to display numbers from 1 to 5.",
    questionTamil: "for loop பயன்படுத்தி 1 முதல் 5 வரை numbers-ஐக் காட்டவும்.",
    hintEnglish: "Start at 1 and stop when the value reaches 5.",
    hintTamil: "1-ல் தொடங்கி value 5 வரை loop இயக்கவும்.",
    expectedOutput: `1
2
3
4
5`,
    expectedOutputTamil: `1
2
3
4
5`,
    challenge: false,
    solution: `for (let i = 1; i <= 5; i++) {
  console.log(i);
}`
  },
  {
    id: 2, topicId: 10, title: "Print Numbers 5 to 1",
    questionEnglish: "Use a for loop to display numbers from 5 down to 1.",
    questionTamil: "for loop பயன்படுத்தி 5 முதல் 1 வரை numbers-ஐக் காட்டவும்.",
    hintEnglish: "Decrease the loop variable.",
    hintTamil: "Loop variable-ஐ குறைக்கவும்.",
    expectedOutput: `5
4
3
2
1`,
    expectedOutputTamil: `5
4
3
2
1`,
    challenge: false,
    solution: `for (let i = 5; i >= 1; i--) {
  console.log(i);
}`
  },
  {
    id: 3, topicId: 10, title: "Print Even Numbers",
    questionEnglish: "Use a for loop to display even numbers from 2 to 10.",
    questionTamil: "for loop பயன்படுத்தி 2 முதல் 10 வரை even numbers-ஐக் காட்டவும்.",
    hintEnglish: "Increase the loop variable by 2.",
    hintTamil: "Loop variable-ஐ 2-ஆல் அதிகரிக்கவும்.",
    expectedOutput: `2
4
6
8
10`,
    expectedOutputTamil: `2
4
6
8
10`,
    challenge: false,
    solution: `for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}`
  },
  {
    id: 4, topicId: 10, title: "Calculate a Sum",
    questionEnglish: "Use a for loop to calculate the sum of numbers from 1 to 5.",
    questionTamil: "for loop பயன்படுத்தி 1 முதல் 5 வரை உள்ள numbers-ன் கூட்டுத்தொகையைக் கணக்கிடவும்.",
    hintEnglish: "Create a sum variable and update it during each iteration.",
    hintTamil: "sum variable உருவாக்கி ஒவ்வொரு iteration-லும் update செய்யவும்.",
    expectedOutput: "15",
    expectedOutputTamil: "15",
    challenge: false,
    solution: `let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);`
  },
  {
    id: 5, topicId: 10, title: "Use a While Loop",
    questionEnglish: "Use a while loop to display numbers from 1 to 5.",
    questionTamil: "while loop பயன்படுத்தி 1 முதல் 5 வரை numbers-ஐக் காட்டவும்.",
    hintEnglish: "Initialize a variable and increase it inside the loop.",
    hintTamil: "Variable-ஐ initialize செய்து loop-க்குள் அதிகரிக்கவும்.",
    expectedOutput: `1
2
3
4
5`,
    expectedOutputTamil: `1
2
3
4
5`,
    challenge: false,
    solution: `let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}`
  },
  {
    id: 6, topicId: 10, title: "Use a Do While Loop",
    questionEnglish: "Use a do...while loop to display numbers from 1 to 3.",
    questionTamil: "do...while loop பயன்படுத்தி 1 முதல் 3 வரை numbers-ஐக் காட்டவும்.",
    hintEnglish: "Place the increment inside the loop and check the condition at the end.",
    hintTamil: "Loop-க்குள் increment செய்து இறுதியில் condition-ஐச் சரிபார்க்கவும்.",
    expectedOutput: `1
2
3`,
    expectedOutputTamil: `1
2
3`,
    challenge: false,
    solution: `let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 3);`
  },
  {
    id: 7, topicId: 10, title: "Calculate Multiplication Table",
    questionEnglish: "Use a for loop to display the multiplication table of 2 from 1 to 5.",
    questionTamil: "for loop பயன்படுத்தி 2-ன் multiplication table-ஐ 1 முதல் 5 வரை காட்டவும்.",
    hintEnglish: "Multiply 2 by the loop variable.",
    hintTamil: "2-ஐ loop variable-ஆல் பெருக்கவும்.",
    expectedOutput: `2
4
6
8
10`,
    expectedOutputTamil: `2
4
6
8
10`,
    challenge: false,
    solution: `for (let i = 1; i <= 5; i++) {
  console.log(2 * i);
}`
  },
  {
    id: 8, topicId: 10, title: "Count Down",
    questionEnglish: "Use a while loop to display Countdown: 5 through Countdown: 1.",
    questionTamil: "while loop பயன்படுத்தி Countdown: 5 முதல் Countdown: 1 வரை காட்டவும்.",
    hintEnglish: "Start at 5 and decrease the variable.",
    hintTamil: "5-ல் தொடங்கி variable-ஐ குறைக்கவும்.",
    expectedOutput: `Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1`,
    expectedOutputTamil: `Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1`,
    challenge: false,
    solution: `let i = 5;

while (i >= 1) {
  console.log("Countdown: " + i);
  i--;
}`
  },
  {
    id: 9, topicId: 10, title: "Challenge: Number Pattern",
    questionEnglish: "Use a loop to display a sequence of numbers of your choice and calculate their total.",
    questionTamil: "உங்களுக்கு விருப்பமான numbers sequence-ஐ loop பயன்படுத்தி காட்டி அவற்றின் மொத்தத்தைக் கணக்கிடவும்.",
    hintEnglish: "Use a loop and a sum variable.",
    hintTamil: "Loop மற்றும் sum variable பயன்படுத்தவும்.",
    expectedOutput: "A number sequence and its total.",
    expectedOutputTamil: "Numbers sequence மற்றும் அதன் மொத்தம்.",
    challenge: true
  },
  {
    id: 10, topicId: 10, title: "Challenge: Multiplication Tables",
    questionEnglish: "Use loops to display multiplication tables for at least three different numbers.",
    questionTamil: "Loops பயன்படுத்தி குறைந்தது மூன்று வெவ்வேறு numbers-ன் multiplication tables-ஐக் காட்டவும்.",
    hintEnglish: "Use nested loops or separate loops.",
    hintTamil: "Nested loops அல்லது தனித்தனி loops பயன்படுத்தவும்.",
    expectedOutput: "Multiplication tables for three numbers.",
    expectedOutputTamil: "மூன்று numbers-ன் multiplication tables.",
    challenge: true
  },
     // ==========================================
  // TOPIC 11: FUNCTIONS
  // ==========================================
  {
    id: 1, topicId: 11, title: "Create a Simple Function",
    questionEnglish: "Create a function named greet that displays Hello World. Call the function.",
    questionTamil: "Hello World காட்டும் greet என்ற function உருவாக்கி அதை call செய்யவும்.",
    hintEnglish: "Use the function keyword and call the function by its name.",
    hintTamil: "function keyword பயன்படுத்தி function-ன் பெயரால் call செய்யவும்.",
    expectedOutput: "Hello World",
    expectedOutputTamil: "Hello World",
    challenge: false,
    solution: `function greet() {
  console.log("Hello World");
}

greet();`
  },
  {
    id: 2, topicId: 11, title: "Display a Welcome Message",
    questionEnglish: "Create a function named welcome that displays Welcome to JavaScript.",
    questionTamil: "Welcome to JavaScript காட்டும் welcome என்ற function உருவாக்கவும்.",
    hintEnglish: "Write a function containing console.log().",
    hintTamil: "console.log() கொண்ட function எழுதவும்.",
    expectedOutput: "Welcome to JavaScript",
    expectedOutputTamil: "Welcome to JavaScript",
    challenge: false,
    solution: `function welcome() {
  console.log("Welcome to JavaScript");
}

welcome();`
  },
  {
    id: 3, topicId: 11, title: "Call a Function Twice",
    questionEnglish: "Create a function that displays Learning JavaScript and call it twice.",
    questionTamil: "Learning JavaScript காட்டும் function உருவாக்கி அதை இரண்டு முறை call செய்யவும்.",
    hintEnglish: "Call the same function two times.",
    hintTamil: "அதே function-ஐ இரண்டு முறை call செய்யவும்.",
    expectedOutput: `Learning JavaScript
Learning JavaScript`,
    expectedOutputTamil: `Learning JavaScript
Learning JavaScript`,
    challenge: false,
    solution: `function learn() {
  console.log("Learning JavaScript");
}

learn();
learn();`
  },
  {
    id: 4, topicId: 11, title: "Create a Personal Introduction",
    questionEnglish: "Create a function named introduction that displays your name, age, and career goal.",
    questionTamil: "உங்கள் பெயர், வயது மற்றும் career goal காட்டும் introduction என்ற function உருவாக்கவும்.",
    hintEnglish: "Use multiple console.log() statements inside the function.",
    hintTamil: "Function-க்குள் பல console.log() statements பயன்படுத்தவும்.",
    expectedOutput: `Name: Deepak
Age: 20
Career Goal: Cyber Security`,
    expectedOutputTamil: `Name: Deepak
Age: 20
Career Goal: Cyber Security`,
    challenge: false,
    solution: `function introduction() {
  console.log("Name: Deepak");
  console.log("Age: 20");
  console.log("Career Goal: Cyber Security");
}

introduction();`
  },
  {
    id: 5, topicId: 11, title: "Create a Function for Addition",
    questionEnglish: "Create a function named addNumbers that adds 10 and 20 and displays the result.",
    questionTamil: "10 மற்றும் 20-ஐ கூட்டி முடிவைக் காட்டும் addNumbers என்ற function உருவாக்கவும்.",
    hintEnglish: "Perform the addition inside the function.",
    hintTamil: "Function-க்குள் addition செய்யவும்.",
    expectedOutput: "30",
    expectedOutputTamil: "30",
    challenge: false,
    solution: `function addNumbers() {
  console.log(10 + 20);
}

addNumbers();`
  },
  {
    id: 6, topicId: 11, title: "Create a Function for Multiplication",
    questionEnglish: "Create a function named multiply that multiplies 5 and 4 and displays the result.",
    questionTamil: "5 மற்றும் 4-ஐ பெருக்கி முடிவைக் காட்டும் multiply என்ற function உருவாக்கவும்.",
    hintEnglish: "Use the multiplication operator inside the function.",
    hintTamil: "Function-க்குள் multiplication operator பயன்படுத்தவும்.",
    expectedOutput: "20",
    expectedOutputTamil: "20",
    challenge: false,
    solution: `function multiply() {
  console.log(5 * 4);
}

multiply();`
  },
  {
    id: 7, topicId: 11, title: "Create a Function for a Cybersecurity Message",
    questionEnglish: "Create a function named securityTip that displays Never share your password.",
    questionTamil: "Never share your password காட்டும் securityTip என்ற function உருவாக்கவும்.",
    hintEnglish: "Create a function and call it.",
    hintTamil: "Function உருவாக்கி call செய்யவும்.",
    expectedOutput: "Never share your password.",
    expectedOutputTamil: "Never share your password.",
    challenge: false,
    solution: `function securityTip() {
  console.log("Never share your password.");
}

securityTip();`
  },
  {
    id: 8, topicId: 11, title: "Create a Function for a Rectangle",
    questionEnglish: "Create a function named calculateArea that displays the area of a rectangle with length 10 and width 5.",
    questionTamil: "Length 10 மற்றும் width 5 கொண்ட rectangle-ன் area காட்டும் calculateArea என்ற function உருவாக்கவும்.",
    hintEnglish: "Multiply length and width inside the function.",
    hintTamil: "Function-க்குள் length மற்றும் width-ஐ பெருக்கவும்.",
    expectedOutput: "50",
    expectedOutputTamil: "50",
    challenge: false,
    solution: `function calculateArea() {
  console.log(10 * 5);
}

calculateArea();`
  },
  {
    id: 9, topicId: 11, title: "Challenge: Daily Task Function",
    questionEnglish: "Create a function that displays at least three daily learning tasks. Call the function whenever needed.",
    questionTamil: "குறைந்தது மூன்று தினசரி learning tasks காட்டும் function உருவாக்கவும். தேவையானபோது function-ஐ call செய்யவும்.",
    hintEnglish: "Place multiple statements inside a reusable function.",
    hintTamil: "Reusable function-க்குள் பல statements எழுதவும்.",
    expectedOutput: "Three or more learning task messages.",
    expectedOutputTamil: "மூன்று அல்லது அதற்கு மேற்பட்ட learning task messages.",
    challenge: true
  },
  {
    id: 10, topicId: 11, title: "Challenge: Calculator Functions",
    questionEnglish: "Create separate functions for addition, subtraction, multiplication, and division. Call each function.",
    questionTamil: "Addition, subtraction, multiplication மற்றும் division-க்கு தனித்தனி functions உருவாக்கி அவற்றை call செய்யவும்.",
    hintEnglish: "Create one function for each operation.",
    hintTamil: "ஒவ்வொரு operation-க்கும் ஒரு function உருவாக்கவும்.",
    expectedOutput: "Results of four arithmetic operations.",
    expectedOutputTamil: "நான்கு arithmetic operations-ன் முடிவுகள்.",
    challenge: true
  },

  // ==========================================
  // TOPIC 12: FUNCTION PARAMETERS AND RETURN VALUES
  // ==========================================
  {
    id: 1, topicId: 12, title: "Function with One Parameter",
    questionEnglish: "Create a function that accepts a name and displays Hello followed by that name. Use Deepak.",
    questionTamil: "ஒரு name parameter பெற்று Hello மற்றும் அந்த name காட்டும் function உருவாக்கவும். Deepak பயன்படுத்தவும்.",
    hintEnglish: "Pass a name as an argument.",
    hintTamil: "Name-ஐ argument-ஆக அனுப்பவும்.",
    expectedOutput: "Hello Deepak",
    expectedOutputTamil: "Hello Deepak",
    challenge: false,
    solution: `function greet(name) {
  console.log("Hello " + name);
}

greet("Deepak");`
  },
  {
    id: 2, topicId: 12, title: "Function with Two Parameters",
    questionEnglish: "Create a function that accepts two numbers and displays their sum. Use 10 and 20.",
    questionTamil: "இரண்டு numbers parameters-ஆக பெற்று அவற்றின் கூட்டுத்தொகையைக் காட்டும் function உருவாக்கவும். 10 மற்றும் 20 பயன்படுத்தவும்.",
    hintEnglish: "Use two parameters.",
    hintTamil: "இரண்டு parameters பயன்படுத்தவும்.",
    expectedOutput: "30",
    expectedOutputTamil: "30",
    challenge: false,
    solution: `function add(a, b) {
  console.log(a + b);
}

add(10, 20);`
  },
  {
    id: 3, topicId: 12, title: "Return a Value",
    questionEnglish: "Create a function that returns the sum of 5 and 10. Display the returned value.",
    questionTamil: "5 மற்றும் 10-ன் கூட்டுத்தொகையை return செய்யும் function உருவாக்கி returned value-ஐ காட்டவும்.",
    hintEnglish: "Use return and store the returned value.",
    hintTamil: "return பயன்படுத்தி returned value-ஐ store செய்யவும்.",
    expectedOutput: "15",
    expectedOutputTamil: "15",
    challenge: false,
    solution: `function add(a, b) {
  return a + b;
}

let result = add(5, 10);
console.log(result);`
  },
  {
    id: 4, topicId: 12, title: "Return a Square",
    questionEnglish: "Create a function that accepts a number and returns its square. Use 6.",
    questionTamil: "ஒரு number-ஐ பெற்று அதன் square-ஐ return செய்யும் function உருவாக்கவும். 6 பயன்படுத்தவும்.",
    hintEnglish: "Multiply the number by itself and return it.",
    hintTamil: "Number-ஐ அதே number-ஆல் பெருக்கி return செய்யவும்.",
    expectedOutput: "36",
    expectedOutputTamil: "36",
    challenge: false,
    solution: `function square(number) {
  return number * number;
}

console.log(square(6));`
  },
  {
    id: 5, topicId: 12, title: "Calculate Rectangle Area",
    questionEnglish: "Create a function that accepts length and width and returns the rectangle's area. Use 8 and 4.",
    questionTamil: "Length மற்றும் width பெற்று rectangle-ன் area-ஐ return செய்யும் function உருவாக்கவும். 8 மற்றும் 4 பயன்படுத்தவும்.",
    hintEnglish: "Return the product of length and width.",
    hintTamil: "Length மற்றும் width-ன் பெருக்கலை return செய்யவும்.",
    expectedOutput: "32",
    expectedOutputTamil: "32",
    challenge: false,
    solution: `function calculateArea(length, width) {
  return length * width;
}

console.log(calculateArea(8, 4));`
  },
  {
    id: 6, topicId: 12, title: "Return a Greeting",
    questionEnglish: "Create a function that accepts a name and returns Welcome followed by the name. Use Deepak.",
    questionTamil: "Name பெற்று Welcome மற்றும் name-ஐ return செய்யும் function உருவாக்கவும். Deepak பயன்படுத்தவும்.",
    hintEnglish: "Return a string using concatenation.",
    hintTamil: "String concatenation பயன்படுத்தி string-ஐ return செய்யவும்.",
    expectedOutput: "Welcome Deepak",
    expectedOutputTamil: "Welcome Deepak",
    challenge: false,
    solution: `function welcome(name) {
  return "Welcome " + name;
}

console.log(welcome("Deepak"));`
  },
  {
    id: 7, topicId: 12, title: "Check Even Number Using Return",
    questionEnglish: "Create a function that accepts a number and returns true if it is even. Use 8.",
    questionTamil: "ஒரு number பெற்று அது even என்றால் true return செய்யும் function உருவாக்கவும். 8 பயன்படுத்தவும்.",
    hintEnglish: "Use the remainder operator and return a boolean.",
    hintTamil: "Remainder operator பயன்படுத்தி boolean return செய்யவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(8));`
  },
  {
    id: 8, topicId: 12, title: "Calculate Total Price",
    questionEnglish: "Create a function that accepts a product price and quantity and returns the total cost. Use price 100 and quantity 3.",
    questionTamil: "Product price மற்றும் quantity பெற்று total cost-ஐ return செய்யும் function உருவாக்கவும். Price 100 மற்றும் quantity 3 பயன்படுத்தவும்.",
    hintEnglish: "Multiply price by quantity and return the result.",
    hintTamil: "Price மற்றும் quantity-ஐ பெருக்கி result-ஐ return செய்யவும்.",
    expectedOutput: "300",
    expectedOutputTamil: "300",
    challenge: false,
    solution: `function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(100, 3));`
  },
  {
    id: 9, topicId: 12, title: "Challenge: Temperature Converter",
    questionEnglish: "Create a function that accepts a Celsius temperature and returns the temperature in Fahrenheit.",
    questionTamil: "Celsius temperature பெற்று Fahrenheit-ஆக மாற்றி return செய்யும் function உருவாக்கவும்.",
    hintEnglish: "Use the formula (Celsius * 9 / 5) + 32.",
    hintTamil: "(Celsius * 9 / 5) + 32 formula பயன்படுத்தவும்.",
    expectedOutput: "A Fahrenheit temperature.",
    expectedOutputTamil: "Fahrenheit temperature.",
    challenge: true
  },
  {
    id: 10, topicId: 12, title: "Challenge: Student Result Function",
    questionEnglish: "Create a function that accepts a student's marks and returns a grade based on your own grading conditions.",
    questionTamil: "ஒரு மாணவரின் marks பெற்று உங்கள் grading conditions அடிப்படையில் grade-ஐ return செய்யும் function உருவாக்கவும்.",
    hintEnglish: "Use parameters, conditions, and return statements.",
    hintTamil: "Parameters, conditions மற்றும் return statements பயன்படுத்தவும்.",
    expectedOutput: "A grade based on the supplied marks.",
    expectedOutputTamil: "கொடுக்கப்பட்ட marks-க்கு ஏற்ப grade.",
    challenge: true
  },

  // ==========================================
  // TOPIC 13: ARRAYS
  // ==========================================
  {
    id: 1, topicId: 13, title: "Create an Array",
    questionEnglish: "Create an array containing three programming languages and display it.",
    questionTamil: "மூன்று programming languages கொண்ட array உருவாக்கி அதைக் காட்டவும்.",
    hintEnglish: "Use square brackets.",
    hintTamil: "Square brackets பயன்படுத்தவும்.",
    expectedOutput: `["Java", "Python", "JavaScript"]`,
    expectedOutputTamil: `["Java", "Python", "JavaScript"]`,
    challenge: false,
    solution: `let languages = ["Java", "Python", "JavaScript"];
console.log(languages);`
  },
  {
    id: 2, topicId: 13, title: "Access an Array Element",
    questionEnglish: "Create an array containing Apple, Banana, and Orange. Display the second element.",
    questionTamil: "Apple, Banana மற்றும் Orange கொண்ட array உருவாக்கி இரண்டாவது element-ஐக் காட்டவும்.",
    hintEnglish: "Array indexing starts at zero.",
    hintTamil: "Array indexing zero-ல் தொடங்கும்.",
    expectedOutput: "Banana",
    expectedOutputTamil: "Banana",
    challenge: false,
    solution: `let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[1]);`
  },
  {
    id: 3, topicId: 13, title: "Modify an Array Element",
    questionEnglish: "Create an array containing 10, 20, and 30. Change the second element to 25 and display the array.",
    questionTamil: "10, 20 மற்றும் 30 கொண்ட array உருவாக்கி இரண்டாவது element-ஐ 25-ஆக மாற்றிக் காட்டவும்.",
    hintEnglish: "Assign a new value to the element at index 1.",
    hintTamil: "Index 1-ல் உள்ள element-க்கு புதிய value assign செய்யவும்.",
    expectedOutput: "[10, 25, 30]",
    expectedOutputTamil: "[10, 25, 30]",
    challenge: false,
    solution: `let numbers = [10, 20, 30];
numbers[1] = 25;
console.log(numbers);`
  },
  {
    id: 4, topicId: 13, title: "Find Array Length",
    questionEnglish: "Create an array containing four subjects and display its length.",
    questionTamil: "நான்கு subjects கொண்ட array உருவாக்கி அதன் length-ஐக் காட்டவும்.",
    hintEnglish: "Use the length property.",
    hintTamil: "length property பயன்படுத்தவும்.",
    expectedOutput: "4",
    expectedOutputTamil: "4",
    challenge: false,
    solution: `let subjects = ["Maths", "English", "Computer", "Science"];
console.log(subjects.length);`
  },
  {
    id: 5, topicId: 13, title: "Add an Element to an Array",
    questionEnglish: "Create an array containing Java and Python. Add JavaScript at the end and display the array.",
    questionTamil: "Java மற்றும் Python கொண்ட array உருவாக்கி இறுதியில் JavaScript சேர்த்து காட்டவும்.",
    hintEnglish: "Use push().",
    hintTamil: "push() பயன்படுத்தவும்.",
    expectedOutput: `["Java", "Python", "JavaScript"]`,
    expectedOutputTamil: `["Java", "Python", "JavaScript"]`,
    challenge: false,
    solution: `let languages = ["Java", "Python"];
languages.push("JavaScript");
console.log(languages);`
  },
  {
    id: 6, topicId: 13, title: "Remove the Last Element",
    questionEnglish: "Create an array containing Red, Green, and Blue. Remove the last element and display the array.",
    questionTamil: "Red, Green மற்றும் Blue கொண்ட array உருவாக்கி கடைசி element-ஐ நீக்கிக் காட்டவும்.",
    hintEnglish: "Use pop().",
    hintTamil: "pop() பயன்படுத்தவும்.",
    expectedOutput: `["Red", "Green"]`,
    expectedOutputTamil: `["Red", "Green"]`,
    challenge: false,
    solution: `let colors = ["Red", "Green", "Blue"];
colors.pop();
console.log(colors);`
  },
  {
    id: 7, topicId: 13, title: "Loop Through an Array",
    questionEnglish: "Create an array containing three fruits and use a for loop to display each fruit.",
    questionTamil: "மூன்று fruits கொண்ட array உருவாக்கி for loop பயன்படுத்தி ஒவ்வொரு fruit-ஐக் காட்டவும்.",
    hintEnglish: "Use the array length as the loop condition.",
    hintTamil: "Loop condition-க்கு array length பயன்படுத்தவும்.",
    expectedOutput: `Apple
Banana
Orange`,
    expectedOutputTamil: `Apple
Banana
Orange`,
    challenge: false,
    solution: `let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`
  },
  {
    id: 8, topicId: 13, title: "Find an Array Element",
    questionEnglish: "Create an array containing four numbers and display the third element.",
    questionTamil: "நான்கு numbers கொண்ட array உருவாக்கி மூன்றாவது element-ஐக் காட்டவும்.",
    hintEnglish: "Use index 2.",
    hintTamil: "Index 2 பயன்படுத்தவும்.",
    expectedOutput: "30",
    expectedOutputTamil: "30",
    challenge: false,
    solution: `let numbers = [10, 20, 30, 40];
console.log(numbers[2]);`
  },
  {
    id: 9, topicId: 13, title: "Challenge: Shopping Items",
    questionEnglish: "Create an array of shopping items. Add two items, remove one item, and display the final array.",
    questionTamil: "Shopping items கொண்ட array உருவாக்கி இரண்டு items சேர்த்து ஒரு item நீக்கி இறுதி array-ஐக் காட்டவும்.",
    hintEnglish: "Use push() and pop() or another appropriate method.",
    hintTamil: "push() மற்றும் pop() அல்லது பொருத்தமான method பயன்படுத்தவும்.",
    expectedOutput: "A modified shopping items array.",
    expectedOutputTamil: "மாற்றப்பட்ட shopping items array.",
    challenge: true
  },
  {
    id: 10, topicId: 13, title: "Challenge: Student Names",
    questionEnglish: "Create an array containing at least five student names. Display all names and the total number of students.",
    questionTamil: "குறைந்தது ஐந்து student names கொண்ட array உருவாக்கி அனைத்து names மற்றும் மாணவர்களின் எண்ணிக்கையைக் காட்டவும்.",
    hintEnglish: "Use a loop and the length property.",
    hintTamil: "Loop மற்றும் length property பயன்படுத்தவும்.",
    expectedOutput: "All student names and the total count.",
    expectedOutputTamil: "அனைத்து student names மற்றும் மொத்த எண்ணிக்கை.",
    challenge: true
  },

  // ==========================================
  // TOPIC 14: ARRAY METHODS
  // ==========================================
  {
    id: 1, topicId: 14, title: "Use push()",
    questionEnglish: "Add the number 40 to the end of an array containing 10, 20, and 30.",
    questionTamil: "10, 20 மற்றும் 30 கொண்ட array-ன் இறுதியில் 40 சேர்க்கவும்.",
    hintEnglish: "Use push().",
    hintTamil: "push() பயன்படுத்தவும்.",
    expectedOutput: "[10, 20, 30, 40]",
    expectedOutputTamil: "[10, 20, 30, 40]",
    challenge: false,
    solution: `let numbers = [10, 20, 30];
numbers.push(40);
console.log(numbers);`
  },
  {
    id: 2, topicId: 14, title: "Use pop()",
    questionEnglish: "Remove the last element from an array containing 1, 2, and 3.",
    questionTamil: "1, 2 மற்றும் 3 கொண்ட array-ன் கடைசி element-ஐ நீக்கவும்.",
    hintEnglish: "Use pop().",
    hintTamil: "pop() பயன்படுத்தவும்.",
    expectedOutput: "[1, 2]",
    expectedOutputTamil: "[1, 2]",
    challenge: false,
    solution: `let numbers = [1, 2, 3];
numbers.pop();
console.log(numbers);`
  },
  {
    id: 3, topicId: 14, title: "Use unshift()",
    questionEnglish: "Add the number 5 at the beginning of an array containing 10 and 20.",
    questionTamil: "10 மற்றும் 20 கொண்ட array-ன் தொடக்கத்தில் 5 சேர்க்கவும்.",
    hintEnglish: "Use unshift().",
    hintTamil: "unshift() பயன்படுத்தவும்.",
    expectedOutput: "[5, 10, 20]",
    expectedOutputTamil: "[5, 10, 20]",
    challenge: false,
    solution: `let numbers = [10, 20];
numbers.unshift(5);
console.log(numbers);`
  },
  {
    id: 4, topicId: 14, title: "Use shift()",
    questionEnglish: "Remove the first element from an array containing Red, Green, and Blue.",
    questionTamil: "Red, Green மற்றும் Blue கொண்ட array-ன் முதல் element-ஐ நீக்கவும்.",
    hintEnglish: "Use shift().",
    hintTamil: "shift() பயன்படுத்தவும்.",
    expectedOutput: `["Green", "Blue"]`,
    expectedOutputTamil: `["Green", "Blue"]`,
    challenge: false,
    solution: `let colors = ["Red", "Green", "Blue"];
colors.shift();
console.log(colors);`
  },
  {
    id: 5, topicId: 14, title: "Use includes()",
    questionEnglish: "Check whether JavaScript exists in an array containing Java, Python, and JavaScript.",
    questionTamil: "Java, Python மற்றும் JavaScript கொண்ட array-ல் JavaScript உள்ளதா எனச் சரிபார்க்கவும்.",
    hintEnglish: "Use includes().",
    hintTamil: "includes() பயன்படுத்தவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `let languages = ["Java", "Python", "JavaScript"];
console.log(languages.includes("JavaScript"));`
  },
  {
    id: 6, topicId: 14, title: "Use indexOf()",
    questionEnglish: "Find the index of Python in an array containing Java, Python, and C++.",
    questionTamil: "Java, Python மற்றும் C++ கொண்ட array-ல் Python-ன் index-ஐக் கண்டறியவும்.",
    hintEnglish: "Use indexOf().",
    hintTamil: "indexOf() பயன்படுத்தவும்.",
    expectedOutput: "1",
    expectedOutputTamil: "1",
    challenge: false,
    solution: `let languages = ["Java", "Python", "C++"];
console.log(languages.indexOf("Python"));`
  },
  {
    id: 7, topicId: 14, title: "Use join()",
    questionEnglish: "Join the elements Java, Python, and JavaScript using a comma and display the result.",
    questionTamil: "Java, Python மற்றும் JavaScript elements-ஐ comma பயன்படுத்தி join செய்து காட்டவும்.",
    hintEnglish: "Use join().",
    hintTamil: "join() பயன்படுத்தவும்.",
    expectedOutput: "Java,Python,JavaScript",
    expectedOutputTamil: "Java,Python,JavaScript",
    challenge: false,
    solution: `let languages = ["Java", "Python", "JavaScript"];
console.log(languages.join(","));`
  },
  {
    id: 8, topicId: 14, title: "Use slice()",
    questionEnglish: "Extract the second and third elements from an array containing 10, 20, 30, and 40 using slice().",
    questionTamil: "10, 20, 30 மற்றும் 40 கொண்ட array-ல் slice() பயன்படுத்தி இரண்டாவது மற்றும் மூன்றாவது elements-ஐ extract செய்யவும்.",
    hintEnglish: "Remember that slice() uses a start index and an exclusive end index.",
    hintTamil: "slice() start index மற்றும் exclusive end index பயன்படுத்தும் என்பதை நினைவில் கொள்ளவும்.",
    expectedOutput: "[20, 30]",
    expectedOutputTamil: "[20, 30]",
    challenge: false,
    solution: `let numbers = [10, 20, 30, 40];
console.log(numbers.slice(1, 3));`
  },
  {
    id: 9, topicId: 14, title: "Challenge: Array Modification",
    questionEnglish: "Create an array of five items. Use multiple array methods to add, remove, and check items.",
    questionTamil: "ஐந்து items கொண்ட array உருவாக்கி பல array methods பயன்படுத்தி items சேர்க்கவும், நீக்கவும், சரிபார்க்கவும்.",
    hintEnglish: "Explore push(), pop(), includes(), shift(), and unshift().",
    hintTamil: "push(), pop(), includes(), shift() மற்றும் unshift() ஆகியவற்றை ஆராயவும்.",
    expectedOutput: "A modified array and a check result.",
    expectedOutputTamil: "மாற்றப்பட்ட array மற்றும் check முடிவு.",
    challenge: true
  },
  {
    id: 10, topicId: 14, title: "Challenge: Array Organizer",
    questionEnglish: "Create an array of programming languages and use different array methods to organize and display its contents.",
    questionTamil: "Programming languages கொண்ட array உருவாக்கி வெவ்வேறு array methods பயன்படுத்தி அதன் contents-ஐ ஒழுங்குபடுத்திக் காட்டவும்.",
    hintEnglish: "Combine several array methods in one program.",
    hintTamil: "ஒரே program-ல் பல array methods-ஐ இணைத்து பயன்படுத்தவும்.",
    expectedOutput: "An organized and modified array.",
    expectedOutputTamil: "ஒழுங்குபடுத்தப்பட்ட மற்றும் மாற்றப்பட்ட array.",
    challenge: true
  },

  // ==========================================
  // TOPIC 15: STRINGS AND STRING METHODS
  // ==========================================
  {
    id: 1, topicId: 15, title: "Find String Length",
    questionEnglish: "Create a string containing JavaScript and display its length.",
    questionTamil: "JavaScript கொண்ட string உருவாக்கி அதன் length-ஐக் காட்டவும்.",
    hintEnglish: "Use the length property.",
    hintTamil: "length property பயன்படுத்தவும்.",
    expectedOutput: "10",
    expectedOutputTamil: "10",
    challenge: false,
    solution: `let text = "JavaScript";
console.log(text.length);`
  },
  {
    id: 2, topicId: 15, title: "Convert to Uppercase",
    questionEnglish: "Convert the string hello world into uppercase.",
    questionTamil: "hello world என்ற string-ஐ uppercase-ஆக மாற்றவும்.",
    hintEnglish: "Use toUpperCase().",
    hintTamil: "toUpperCase() பயன்படுத்தவும்.",
    expectedOutput: "HELLO WORLD",
    expectedOutputTamil: "HELLO WORLD",
    challenge: false,
    solution: `let text = "hello world";
console.log(text.toUpperCase());`
  },
  {
    id: 3, topicId: 15, title: "Convert to Lowercase",
    questionEnglish: "Convert the string JAVASCRIPT into lowercase.",
    questionTamil: "JAVASCRIPT என்ற string-ஐ lowercase-ஆக மாற்றவும்.",
    hintEnglish: "Use toLowerCase().",
    hintTamil: "toLowerCase() பயன்படுத்தவும்.",
    expectedOutput: "javascript",
    expectedOutputTamil: "javascript",
    challenge: false,
    solution: `let text = "JAVASCRIPT";
console.log(text.toLowerCase());`
  },
  {
    id: 4, topicId: 15, title: "Remove Whitespace",
    questionEnglish: "Remove the spaces at the beginning and end of the string ' JavaScript ' using trim().",
    questionTamil: "' JavaScript ' string-ன் தொடக்கம் மற்றும் முடிவில் உள்ள spaces-ஐ trim() பயன்படுத்தி நீக்கவும்.",
    hintEnglish: "Use trim().",
    hintTamil: "trim() பயன்படுத்தவும்.",
    expectedOutput: "JavaScript",
    expectedOutputTamil: "JavaScript",
    challenge: false,
    solution: `let text = " JavaScript ";
console.log(text.trim());`
  },
  {
    id: 5, topicId: 15, title: "Use includes()",
    questionEnglish: "Check whether the string Cyber Security contains the word Security.",
    questionTamil: "Cyber Security என்ற string-ல் Security என்ற word உள்ளதா எனச் சரிபார்க்கவும்.",
    hintEnglish: "Use includes().",
    hintTamil: "includes() பயன்படுத்தவும்.",
    expectedOutput: "true",
    expectedOutputTamil: "true",
    challenge: false,
    solution: `let text = "Cyber Security";
console.log(text.includes("Security"));`
  },
  {
    id: 6, topicId: 15, title: "Use indexOf()",
    questionEnglish: "Find the position of the word Java in the string I am learning Java.",
    questionTamil: "I am learning Java என்ற string-ல் Java word-ன் position-ஐக் கண்டறியவும்.",
    hintEnglish: "Use indexOf().",
    hintTamil: "indexOf() பயன்படுத்தவும்.",
    expectedOutput: "15",
    expectedOutputTamil: "15",
    challenge: false,
    solution: `let text = "I am learning Java";
console.log(text.indexOf("Java"));`
  },
  {
    id: 7, topicId: 15, title: "Use replace()",
    questionEnglish: "Replace the word Java with JavaScript in the string I am learning Java.",
    questionTamil: "I am learning Java என்ற string-ல் Java word-ஐ JavaScript-ஆக replace செய்யவும்.",
    hintEnglish: "Use replace().",
    hintTamil: "replace() பயன்படுத்தவும்.",
    expectedOutput: "I am learning JavaScript",
    expectedOutputTamil: "I am learning JavaScript",
    challenge: false,
    solution: `let text = "I am learning Java";
console.log(text.replace("Java", "JavaScript"));`
  },
  {
    id: 8, topicId: 15, title: "Use slice() on a String",
    questionEnglish: "Extract the word JavaScript from the string I am learning JavaScript using slice().",
    questionTamil: "I am learning JavaScript என்ற string-ல் slice() பயன்படுத்தி JavaScript word-ஐ extract செய்யவும்.",
    hintEnglish: "Find the starting and ending index of the word.",
    hintTamil: "Word-ன் starting மற்றும் ending index-ஐக் கண்டறியவும்.",
    expectedOutput: "JavaScript",
    expectedOutputTamil: "JavaScript",
    challenge: false,
    solution: `let text = "I am learning JavaScript";
console.log(text.slice(15, 25));`
  },
  {
    id: 9, topicId: 15, title: "Challenge: String Analyzer",
    questionEnglish: "Create a string and use at least four string methods to analyze or modify it.",
    questionTamil: "ஒரு string உருவாக்கி குறைந்தது நான்கு string methods பயன்படுத்தி அதை analyze அல்லது modify செய்யவும்.",
    hintEnglish: "Explore length, trim(), toUpperCase(), includes(), and replace().",
    hintTamil: "length, trim(), toUpperCase(), includes() மற்றும் replace() ஆகியவற்றை ஆராயவும்.",
    expectedOutput: "Multiple string analysis and modification results.",
    expectedOutputTamil: "பல string analysis மற்றும் modification முடிவுகள்.",
    challenge: true
  },
  {
    id: 10, topicId: 15, title: "Challenge: Text Formatter",
    questionEnglish: "Create a sentence and format it using multiple string methods. Display the original string and the formatted string.",
    questionTamil: "ஒரு sentence உருவாக்கி பல string methods பயன்படுத்தி format செய்யவும். Original string மற்றும் formatted string-ஐக் காட்டவும்.",
    hintEnglish: "Combine string methods to achieve your desired formatting.",
    hintTamil: "உங்கள் formatting-க்கு பல string methods-ஐ இணைத்து பயன்படுத்தவும்.",
    expectedOutput: "Original and formatted strings.",
    expectedOutputTamil: "Original மற்றும் formatted strings.",
    challenge: true
  },
];

export default questions;
