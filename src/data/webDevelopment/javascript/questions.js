
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
  
];

export default questions;
