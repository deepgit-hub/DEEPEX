const questions = [

  {
    id: 1,
    topicId: 1,
    title: "Apply Your First CSS Style",
    questionEnglish: "Create an HTML page with a heading that displays 'Welcome to CSS'. Use internal CSS to change the heading text color to blue.",
    questionTamil: "‘Welcome to CSS’ என்ற தலைப்பைக் கொண்ட HTML பக்கத்தை உருவாக்கவும். Internal CSS பயன்படுத்தி தலைப்பின் எழுத்து நிறத்தை நீலமாக மாற்றவும்.",
    hintEnglish: "Use the <style> tag and the color property.",
    hintTamil: "<style> tag மற்றும் color property பயன்படுத்தவும்.",
    expectedOutput: "A blue heading displaying 'Welcome to CSS'.",
    expectedOutputTamil: "'Welcome to CSS' என்ற உரை நீல நிறத்தில் தலைப்பாகக் காட்டப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>My First CSS</title>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS</h1>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 1,
    title: "Change Paragraph Color",
    questionEnglish: "Create a paragraph displaying 'I am learning CSS'. Use CSS to change its text color to green.",
    questionTamil: "'I am learning CSS' என்ற உரையைக் கொண்ட paragraph உருவாக்கவும். CSS பயன்படுத்தி அதன் எழுத்து நிறத்தை பச்சையாக மாற்றவும்.",
    hintEnglish: "Use the p selector and color property.",
    hintTamil: "p selector மற்றும் color property பயன்படுத்தவும்.",
    expectedOutput: "The paragraph appears in green.",
    expectedOutputTamil: "Paragraph பச்சை நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Paragraph Color</title>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>I am learning CSS</p>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 1,
    title: "Add Background Color",
    questionEnglish: "Create a webpage with a heading 'My Webpage'. Use CSS to set the entire page background color to lightyellow.",
    questionTamil: "'My Webpage' என்ற தலைப்புடன் ஒரு webpage உருவாக்கவும். CSS பயன்படுத்தி முழு பக்கத்தின் background நிறத்தை lightyellow ஆக அமைக்கவும்.",
    hintEnglish: "Use the body selector and background-color property.",
    hintTamil: "body selector மற்றும் background-color property பயன்படுத்தவும்.",
    expectedOutput: "The webpage displays a heading on a light yellow background.",
    expectedOutputTamil: "Light yellow பின்னணியில் தலைப்பு காட்டப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Background Color</title>
  <style>
    body {
      background-color: lightyellow;
    }
  </style>
</head>
<body>
  <h1>My Webpage</h1>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 1,
    title: "Change Font Size",
    questionEnglish: "Create a heading displaying 'CSS is Interesting'. Use CSS to set its font size to 40px.",
    questionTamil: "'CSS is Interesting' என்ற தலைப்பை உருவாக்கவும். CSS பயன்படுத்தி அதன் font size-ஐ 40px ஆக அமைக்கவும்.",
    hintEnglish: "Use the font-size property.",
    hintTamil: "font-size property பயன்படுத்தவும்.",
    expectedOutput: "The heading appears with a font size of 40px.",
    expectedOutputTamil: "தலைப்பு 40px எழுத்து அளவில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Font Size</title>
  <style>
    h1 {
      font-size: 40px;
    }
  </style>
</head>
<body>
  <h1>CSS is Interesting</h1>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 1,
    title: "Align Text to Center",
    questionEnglish: "Create a heading displaying 'Welcome Students'. Use CSS to align the heading text to the center of the page.",
    questionTamil: "'Welcome Students' என்ற தலைப்பை உருவாக்கவும். CSS பயன்படுத்தி அந்த தலைப்பை பக்கத்தின் மையத்தில் align செய்யவும்.",
    hintEnglish: "Use the text-align property with the center value.",
    hintTamil: "text-align property-யுடன் center value பயன்படுத்தவும்.",
    expectedOutput: "The heading appears centered horizontally.",
    expectedOutputTamil: "தலைப்பு பக்கத்தின் கிடைமட்ட மையத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Text Alignment</title>
  <style>
    h1 {
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Welcome Students</h1>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 1,
    title: "Use Multiple CSS Properties",
    questionEnglish: "Create a paragraph displaying 'I want to become a Cyber Security Professional'. Change its color to darkblue, font size to 22px, and make the text bold.",
    questionTamil: "'I want to become a Cyber Security Professional' என்ற paragraph உருவாக்கவும். அதன் நிறத்தை darkblue ஆகவும், font size-ஐ 22px ஆகவும் மாற்றி, எழுத்துக்களை bold ஆகக் காட்டவும்.",
    hintEnglish: "Use color, font-size, and font-weight properties together.",
    hintTamil: "color, font-size மற்றும் font-weight properties அனைத்தையும் பயன்படுத்தவும்.",
    expectedOutput: "A dark blue, bold paragraph displayed in 22px font size.",
    expectedOutputTamil: "22px அளவில் dark blue நிறத்தில் bold paragraph காட்டப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Multiple CSS Properties</title>
  <style>
    p {
      color: darkblue;
      font-size: 22px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <p>I want to become a Cyber Security Professional</p>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 1,
    title: "Style a Button",
    questionEnglish: "Create a button displaying 'Click Me'. Use CSS to give it a blue background, white text, and 10px padding.",
    questionTamil: "'Click Me' என்ற உரையைக் கொண்ட button உருவாக்கவும். CSS பயன்படுத்தி அதற்கு நீல நிற background, வெள்ளை எழுத்துக்கள் மற்றும் 10px padding கொடுக்கவும்.",
    hintEnglish: "Use the button selector, background-color, color, and padding properties.",
    hintTamil: "button selector, background-color, color மற்றும் padding properties பயன்படுத்தவும்.",
    expectedOutput: "A button with a blue background, white text, and space around its content.",
    expectedOutputTamil: "நீல நிற background, வெள்ளை எழுத்துக்கள் மற்றும் உள்ளடக்கத்தைச் சுற்றி இடைவெளியுடன் button காட்டப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Styled Button</title>
  <style>
    button {
      background-color: blue;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <button>Click Me</button>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 1,
    title: "Create a Simple Profile",
    questionEnglish: "Create a simple student profile with the name 'Deepak' and the aim 'Cyber Security'. Use CSS to give the profile a lightgray background, 20px padding, and centered text.",
    questionTamil: "'Deepak' என்ற பெயரையும் 'Cyber Security' என்ற இலக்கையும் கொண்ட ஒரு எளிய மாணவர் profile உருவாக்கவும். CSS பயன்படுத்தி அதற்கு lightgray background, 20px padding மற்றும் மையப்படுத்தப்பட்ட text கொடுக்கவும்.",
    hintEnglish: "Use a div container and apply background-color, padding, and text-align.",
    hintTamil: "div container உருவாக்கி background-color, padding மற்றும் text-align properties பயன்படுத்தவும்.",
    expectedOutput: "A student profile displaying Deepak and Cyber Security inside a light gray area with centered text.",
    expectedOutputTamil: "Light gray பின்னணியில் Deepak மற்றும் Cyber Security விவரங்கள் மையப்படுத்தப்பட்ட profile-ஆகக் காட்டப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
  <title>Student Profile</title>
  <style>
    .profile {
      background-color: lightgray;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="profile">
    <h2>Deepak</h2>
    <p>Aim: Cyber Security</p>
  </div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 1,
    title: "Challenge: Personal Introduction Card",
    questionEnglish: "Create a personal introduction card containing your name, college, course, and career goal. Use CSS to add a background color, text colors, font sizes, padding, and centered alignment. Make the card visually attractive.",
    questionTamil: "உங்கள் பெயர், கல்லூரி, படிப்பு மற்றும் தொழில் இலக்கு ஆகியவற்றைக் கொண்ட personal introduction card உருவாக்கவும். CSS பயன்படுத்தி background color, text colors, font sizes, padding மற்றும் centered alignment கொடுத்து card-ஐ அழகாக வடிவமைக்கவும்.",
    hintEnglish: "Combine different CSS properties to style a div container and its text elements.",
    hintTamil: "div container மற்றும் அதன் text elements-ஐ வடிவமைக்க பல CSS properties-ஐ இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "An attractive personal introduction card with clearly formatted student details.",
    expectedOutputTamil: "மாணவர் விவரங்கள் தெளிவாக வடிவமைக்கப்பட்ட அழகான personal introduction card."
    ,
    challenge: true
  },
  {
    id: 10,
    topicId: 1,
    title: "Challenge: DEEP CODE Welcome Page",
    questionEnglish: "Create a welcome section for DEEP CODE with a heading, a short description, and a 'Start Learning' button. Use CSS to style the background, text, spacing, and button. Make the section clean and attractive.",
    questionTamil: "DEEP CODE-க்கான welcome section உருவாக்கவும். அதில் heading, சிறிய description மற்றும் 'Start Learning' button இருக்க வேண்டும். CSS பயன்படுத்தி background, text, spacing மற்றும் button-ஐ வடிவமைத்து அழகாக உருவாக்கவும்.",
    hintEnglish: "Use a container, heading, paragraph, and button. Apply different CSS properties to each element.",
    hintTamil: "container, heading, paragraph மற்றும் button பயன்படுத்தவும். ஒவ்வொரு element-க்கும் வெவ்வேறு CSS properties கொடுக்கவும்.",
    expectedOutput: "A clean DEEP CODE welcome section with a heading, description, and styled button.",
    expectedOutputTamil: "Heading, description மற்றும் வடிவமைக்கப்பட்ட button கொண்ட அழகான DEEP CODE welcome section.",
    challenge: true
  },
  
]
