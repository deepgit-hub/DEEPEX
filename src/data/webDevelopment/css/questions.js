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
 
[
  {
    id: 1,
    topicId: 2,
    title: "Element Selector",
    questionEnglish: "Create a webpage with two paragraphs. Use an element selector to make both paragraphs red.",
    questionTamil: "இரண்டு paragraphs கொண்ட webpage உருவாக்கவும். Element selector பயன்படுத்தி இரண்டு paragraphs-யும் சிவப்பு நிறமாக மாற்றவும்.",
    hintEnglish: "Use the p selector.",
    hintTamil: "p selector பயன்படுத்தவும்.",
    expectedOutput: "Both paragraphs appear in red.",
    expectedOutputTamil: "இரண்டு paragraphs-யும் சிவப்பு நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red;
}
</style>
</head>
<body>
<p>First paragraph</p>
<p>Second paragraph</p>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 2,
    title: "Class Selector",
    questionEnglish: "Create three paragraphs. Apply the class 'highlight' to two paragraphs and make only those paragraphs blue.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். அவற்றில் இரண்டு paragraphs-க்கு 'highlight' என்ற class கொடுத்து அவற்றை மட்டும் நீல நிறமாக மாற்றவும்.",
    hintEnglish: "A class selector starts with a dot (.).",
    hintTamil: "Class selector dot (.) குறியுடன் தொடங்கும்.",
    expectedOutput: "Only the two paragraphs with the highlight class appear blue.",
    expectedOutputTamil: "highlight class கொண்ட இரண்டு paragraphs மட்டும் நீல நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.highlight {
  color: blue;
}
</style>
</head>
<body>
<p class="highlight">Highlighted paragraph 1</p>
<p>Normal paragraph</p>
<p class="highlight">Highlighted paragraph 2</p>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 2,
    title: "ID Selector",
    questionEnglish: "Create a heading with the ID 'main-title'. Use an ID selector to change its color to green.",
    questionTamil: "'main-title' என்ற ID கொண்ட heading உருவாக்கவும். ID selector பயன்படுத்தி அதன் நிறத்தை பச்சையாக மாற்றவும்.",
    hintEnglish: "An ID selector starts with the # symbol.",
    hintTamil: "ID selector # குறியுடன் தொடங்கும்.",
    expectedOutput: "The heading appears in green.",
    expectedOutputTamil: "Heading பச்சை நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
#main-title {
  color: green;
}
</style>
</head>
<body>
<h1 id="main-title">Welcome to DEEP CODE</h1>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 2,
    title: "Universal Selector",
    questionEnglish: "Create a webpage with a heading and two paragraphs. Use the universal selector to set the text color of all elements to darkblue.",
    questionTamil: "ஒரு heading மற்றும் இரண்டு paragraphs கொண்ட webpage உருவாக்கவும். Universal selector பயன்படுத்தி அனைத்து elements-ன் எழுத்து நிறத்தையும் darkblue ஆக மாற்றவும்.",
    hintEnglish: "The universal selector is represented by *.",
    hintTamil: "Universal selector * குறியால் குறிப்பிடப்படுகிறது.",
    expectedOutput: "All text elements appear in dark blue.",
    expectedOutputTamil: "அனைத்து text elements-களும் dark blue நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
* {
  color: darkblue;
}
</style>
</head>
<body>
<h1>CSS Selectors</h1>
<p>Learn CSS.</p>
<p>Practice every day.</p>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 2,
    title: "Group Selector",
    questionEnglish: "Create a heading and a paragraph. Use a group selector to make both elements purple and center aligned.",
    questionTamil: "ஒரு heading மற்றும் paragraph உருவாக்கவும். Group selector பயன்படுத்தி இரண்டையும் purple நிறமாகவும் மையப்படுத்தப்பட்டதாகவும் மாற்றவும்.",
    hintEnglish: "Separate multiple selectors using commas.",
    hintTamil: "பல selectors-ஐ comma பயன்படுத்தி பிரிக்கவும்.",
    expectedOutput: "The heading and paragraph appear purple and centered.",
    expectedOutputTamil: "Heading மற்றும் paragraph purple நிறத்தில் மையமாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1, p {
  color: purple;
  text-align: center;
}
</style>
</head>
<body>
<h1>CSS Group Selector</h1>
<p>Learn to style multiple elements.</p>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 2,
    title: "Descendant Selector",
    questionEnglish: "Create a div containing two paragraphs and add another paragraph outside the div. Use a descendant selector to make only the paragraphs inside the div orange.",
    questionTamil: "இரண்டு paragraphs கொண்ட div உருவாக்கவும். அதற்கு வெளியேயும் ஒரு paragraph உருவாக்கவும். Descendant selector பயன்படுத்தி div-க்குள் உள்ள paragraphs மட்டும் orange நிறமாக மாற்றவும்.",
    hintEnglish: "Use the selector div p.",
    hintTamil: "div p என்ற selector பயன்படுத்தவும்.",
    expectedOutput: "Only paragraphs inside the div appear orange.",
    expectedOutputTamil: "div-க்குள் உள்ள paragraphs மட்டும் orange நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
div p {
  color: orange;
}
</style>
</head>
<body>
<div>
  <p>Inside paragraph 1</p>
  <p>Inside paragraph 2</p>
</div>
<p>Outside paragraph</p>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 2,
    title: "Multiple Classes",
    questionEnglish: "Create two paragraphs. Give the first paragraph both 'large' and 'blue' classes. Give the second paragraph only the 'blue' class. Apply the styles using CSS class selectors.",
    questionTamil: "இரண்டு paragraphs உருவாக்கவும். முதல் paragraph-க்கு 'large' மற்றும் 'blue' என்ற இரண்டு classes கொடுக்கவும். இரண்டாவது paragraph-க்கு 'blue' class மட்டும் கொடுக்கவும். CSS class selectors மூலம் styles அமைக்கவும்.",
    hintEnglish: "Use .large for font size and .blue for text color.",
    hintTamil: "Font size-க்கு .large மற்றும் text color-க்கு .blue பயன்படுத்தவும்.",
    expectedOutput: "Both paragraphs are blue, but the first paragraph has a larger font size.",
    expectedOutputTamil: "இரண்டு paragraphs-ம் நீல நிறத்தில் இருக்கும். முதல் paragraph மட்டும் பெரிய எழுத்து அளவில் இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.large {
  font-size: 28px;
}
.blue {
  color: blue;
}
</style>
</head>
<body>
<p class="large blue">Large blue paragraph</p>
<p class="blue">Normal blue paragraph</p>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 2,
    title: "Combine Different Selectors",
    questionEnglish: "Create a webpage with a heading, two paragraphs, and a special message. Use an element selector for all paragraphs, a class selector for the special message, and an ID selector for the heading.",
    questionTamil: "ஒரு heading, இரண்டு paragraphs மற்றும் ஒரு special message கொண்ட webpage உருவாக்கவும். அனைத்து paragraphs-க்கும் element selector, special message-க்கு class selector மற்றும் heading-க்கு ID selector பயன்படுத்தவும்.",
    hintEnglish: "Combine h1, p, .special, and #title selectors.",
    hintTamil: "h1, p, .special மற்றும் #title selectors-ஐ இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "The heading, paragraphs, and special message display their respective CSS styles.",
    expectedOutputTamil: "Heading, paragraphs மற்றும் special message ஆகியவை தனித்தனி CSS styles-உடன் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
#title {
  color: darkblue;
}
p {
  color: gray;
}
.special {
  background-color: lightyellow;
  color: red;
}
</style>
</head>
<body>
<h1 id="title">CSS Selectors</h1>
<p>First paragraph</p>
<p>Second paragraph</p>
<p class="special">Important message</p>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 2,
    title: "Challenge: Student Information Page",
    questionEnglish: "Create a student information page with a heading, student name, department, and a special achievement message. Use element, class, ID, and group selectors to style different elements.",
    questionTamil: "Heading, மாணவர் பெயர், துறை மற்றும் சிறப்பு சாதனைச் செய்தி கொண்ட student information page உருவாக்கவும். வெவ்வேறு elements-ஐ வடிவமைக்க element, class, ID மற்றும் group selectors பயன்படுத்தவும்.",
    hintEnglish: "Use at least four different selector styles in your stylesheet.",
    hintTamil: "உங்கள் stylesheet-ல் குறைந்தது நான்கு வகையான selectors பயன்படுத்தவும்.",
    expectedOutput: "A student information page with different styles applied through multiple selectors.",
    expectedOutputTamil: "பல selectors மூலம் வெவ்வேறு styles பயன்படுத்தப்பட்ட student information page.",
    challenge: true
  },
  {
    id: 10,
    topicId: 2,
    title: "Challenge: DEEP CODE Course Page",
    questionEnglish: "Create a DEEP CODE course page with a main heading, course descriptions, highlighted information, and a footer. Use different CSS selectors to style each section independently.",
    questionTamil: "Main heading, course descriptions, highlighted information மற்றும் footer கொண்ட DEEP CODE course page உருவாக்கவும். ஒவ்வொரு பகுதியையும் தனித்தனியாக வடிவமைக்க வெவ்வேறு CSS selectors பயன்படுத்தவும்.",
    hintEnglish: "Combine element, class, ID, group, and descendant selectors.",
    hintTamil: "Element, class, ID, group மற்றும் descendant selectors-ஐ இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "A course page with clearly differentiated sections and styles.",
    expectedOutputTamil: "தெளிவாக வேறுபடுத்தப்பட்ட பகுதிகள் மற்றும் styles கொண்ட course page.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 3,
    title: "Named Colors",
    questionEnglish: "Create a heading and a paragraph. Use named CSS colors to make the heading red and the paragraph blue.",
    questionTamil: "ஒரு heading மற்றும் paragraph உருவாக்கவும். CSS named colors பயன்படுத்தி heading-ஐ சிவப்பாகவும் paragraph-ஐ நீலமாகவும் மாற்றவும்.",
    hintEnglish: "Use color: red and color: blue.",
    hintTamil: "color: red மற்றும் color: blue பயன்படுத்தவும்.",
    expectedOutput: "A red heading and a blue paragraph.",
    expectedOutputTamil: "சிவப்பு heading மற்றும் நீல paragraph தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: red;
}
p {
  color: blue;
}
</style>
</head>
<body>
<h1>Welcome</h1>
<p>Learning CSS colors.</p>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 3,
    title: "HEX Color",
    questionEnglish: "Create a heading and use the HEX color code #ff0000 to make its text red.",
    questionTamil: "ஒரு heading உருவாக்கி அதன் text-ஐ சிவப்பாக மாற்ற #ff0000 என்ற HEX color code பயன்படுத்தவும்.",
    hintEnglish: "Use the HEX code as the value of the color property.",
    hintTamil: "color property-யின் value ஆக HEX code பயன்படுத்தவும்.",
    expectedOutput: "The heading appears in red using the HEX color code.",
    expectedOutputTamil: "HEX color code பயன்படுத்தி heading சிவப்பு நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: #ff0000;
}
</style>
</head>
<body>
<h1>HEX Colors</h1>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 3,
    title: "RGB Color",
    questionEnglish: "Create a paragraph and use RGB color values to make its text green using rgb(0, 128, 0).",
    questionTamil: "ஒரு paragraph உருவாக்கி rgb(0, 128, 0) என்ற RGB color values பயன்படுத்தி அதன் text-ஐ பச்சையாக மாற்றவும்.",
    hintEnglish: "Use the rgb() color function.",
    hintTamil: "rgb() color function பயன்படுத்தவும்.",
    expectedOutput: "The paragraph appears in green.",
    expectedOutputTamil: "Paragraph பச்சை நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: rgb(0, 128, 0);
}
</style>
</head>
<body>
<p>RGB color example</p>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 3,
    title: "Background Color",
    questionEnglish: "Create a webpage with a heading and paragraph. Set the body background color to lightblue.",
    questionTamil: "ஒரு heading மற்றும் paragraph கொண்ட webpage உருவாக்கவும். Body-யின் background நிறத்தை lightblue ஆக அமைக்கவும்.",
    hintEnglish: "Use background-color on the body selector.",
    hintTamil: "body selector-ல் background-color பயன்படுத்தவும்.",
    expectedOutput: "The entire webpage has a light blue background.",
    expectedOutputTamil: "முழு webpage-மும் light blue பின்னணியில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}
</style>
</head>
<body>
<h1>My Webpage</h1>
<p>Welcome to CSS backgrounds.</p>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 3,
    title: "Background Image",
    questionEnglish: "Create a webpage section with the text 'Welcome to DEEP CODE'. Use a background image named background.jpg. Assume the image file is available in the same folder as the HTML file.",
    questionTamil: "'Welcome to DEEP CODE' என்ற உரையுடன் webpage section உருவாக்கவும். background.jpg என்ற படத்தை background image ஆகப் பயன்படுத்தவும். அந்த image HTML file இருக்கும் அதே folder-ல் உள்ளது எனக் கருதவும்.",
    hintEnglish: "Use background-image with url('background.jpg').",
    hintTamil: "background-image property-யுடன் url('background.jpg') பயன்படுத்தவும்.",
    expectedOutput: "The section displays the specified image as its background, with the text on top.",
    expectedOutputTamil: "குறிப்பிட்ட image பின்னணியாகவும் அதன் மேல் text-உம் காட்டப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.hero {
  background-image: url('background.jpg');
  background-size: cover;
  background-position: center;
  padding: 80px;
  color: white;
}
</style>
</head>
<body>
<section class="hero">
  <h1>Welcome to DEEP CODE</h1>
</section>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 3,
    title: "Repeat Background Image",
    questionEnglish: "Create a webpage with a small background image named pattern.png. Set the background image to repeat in both directions. Assume the image file exists in the same folder.",
    questionTamil: "pattern.png என்ற சிறிய background image கொண்ட webpage உருவாக்கவும். அந்த image இரு திசைகளிலும் repeat ஆகும்படி அமைக்கவும். Image அதே folder-ல் உள்ளது எனக் கருதவும்.",
    hintEnglish: "Use background-repeat: repeat.",
    hintTamil: "background-repeat: repeat பயன்படுத்தவும்.",
    expectedOutput: "The background image repeats horizontally and vertically.",
    expectedOutputTamil: "Background image கிடைமட்டமாகவும் செங்குத்தாகவும் மீண்டும் மீண்டும் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-image: url('pattern.png');
  background-repeat: repeat;
}
</style>
</head>
<body>
<h1>Repeating Background</h1>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 3,
    title: "Background Position",
    questionEnglish: "Create a webpage section with a background image named banner.jpg. Position the background image at the center and prevent it from repeating. Assume the image exists in the same folder.",
    questionTamil: "banner.jpg என்ற background image கொண்ட webpage section உருவாக்கவும். அந்த image-ஐ மையத்தில் அமைத்து repeat ஆகாமல் தடுக்கவும். Image அதே folder-ல் உள்ளது எனக் கருதவும்.",
    hintEnglish: "Use background-position and background-repeat properties.",
    hintTamil: "background-position மற்றும் background-repeat properties பயன்படுத்தவும்.",
    expectedOutput: "The background image is positioned at the center without repeating.",
    expectedOutputTamil: "Background image மையத்தில் repeat ஆகாமல் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.banner {
  height: 250px;
  background-image: url('banner.jpg');
  background-position: center;
  background-repeat: no-repeat;
}
</style>
</head>
<body>
<div class="banner">
  <h1>Our Banner</h1>
</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 3,
    title: "Linear Gradient Background",
    questionEnglish: "Create a webpage section with a heading 'Welcome'. Apply a linear gradient background that changes from blue to purple.",
    questionTamil: "'Welcome' என்ற heading கொண்ட webpage section உருவாக்கவும். Blue நிறத்திலிருந்து purple நிறத்திற்கு மாறும் linear gradient background அமைக்கவும்.",
    hintEnglish: "Use background: linear-gradient(to right, blue, purple).",
    hintTamil: "background: linear-gradient(to right, blue, purple) பயன்படுத்தவும்.",
    expectedOutput: "A section with a smooth horizontal gradient from blue to purple.",
    expectedOutputTamil: "Blue நிறத்திலிருந்து purple நிறத்திற்கு மாறும் மென்மையான கிடைமட்ட gradient section தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.hero {
  background: linear-gradient(to right, blue, purple);
  padding: 60px;
  color: white;
}
</style>
</head>
<body>
<div class="hero">
  <h1>Welcome</h1>
</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 3,
    title: "Challenge: Colorful Profile Page",
    questionEnglish: "Create a profile page with a background color, a profile section, different text colors, and a gradient heading background. Use HEX, RGB, or named colors wherever appropriate.",
    questionTamil: "Background color, profile section, வெவ்வேறு text colors மற்றும் gradient heading background கொண்ட profile page உருவாக்கவும். தேவையான இடங்களில் HEX, RGB அல்லது named colors பயன்படுத்தவும்.",
    hintEnglish: "Combine background-color, color, and linear-gradient properties.",
    hintTamil: "background-color, color மற்றும் linear-gradient properties-ஐ இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "A colorful and well-organized profile page.",
    expectedOutputTamil: "வண்ணமயமான மற்றும் ஒழுங்காக வடிவமைக்கப்பட்ட profile page.",
    challenge: true
  },
  {
    id: 10,
    topicId: 3,
    title: "Challenge: DEEP CODE Hero Section",
    questionEnglish: "Create a DEEP CODE hero section with a background image or gradient, white heading text, a short description, and an attractive call-to-action area. Use appropriate background properties.",
    questionTamil: "Background image அல்லது gradient, வெள்ளை heading text, சிறிய description மற்றும் அழகான call-to-action பகுதி கொண்ட DEEP CODE hero section உருவாக்கவும். பொருத்தமான background properties பயன்படுத்தவும்.",
    hintEnglish: "Experiment with background-image, background-size, background-position, and linear-gradient.",
    hintTamil: "background-image, background-size, background-position மற்றும் linear-gradient ஆகியவற்றைப் பயன்படுத்திப் பாருங்கள்.",
    expectedOutput: "An attractive DEEP CODE hero section with a styled background.",
    expectedOutputTamil: "அழகாக வடிவமைக்கப்பட்ட background கொண்ட DEEP CODE hero section.",
    challenge: true
  }
]
 
]
