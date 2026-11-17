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
 
[
  {
    id: 1,
    topicId: 4,
    title: "Text Alignment",
    questionEnglish: "Create a heading and paragraph. Align the heading to the center and the paragraph to the right.",
    questionTamil: "ஒரு heading மற்றும் paragraph உருவாக்கவும். Heading-ஐ மையத்திலும் paragraph-ஐ வலது பக்கத்திலும் align செய்யவும்.",
    hintEnglish: "Use text-align with center and right values.",
    hintTamil: "text-align property-யில் center மற்றும் right values பயன்படுத்தவும்.",
    expectedOutput: "The heading is centered and the paragraph is aligned to the right.",
    expectedOutputTamil: "Heading மையத்திலும் paragraph வலது பக்கத்திலும் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  text-align: center;
}
p {
  text-align: right;
}
</style>
</head>
<body>
<h1>Text Alignment</h1>
<p>This paragraph is on the right.</p>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 4,
    title: "Text Decoration",
    questionEnglish: "Create three paragraphs. Apply underline to the first, overline to the second, and line-through to the third.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். முதலாவது paragraph-க்கு underline, இரண்டாவது paragraph-க்கு overline மற்றும் மூன்றாவது paragraph-க்கு line-through அமைக்கவும்.",
    hintEnglish: "Use the text-decoration property.",
    hintTamil: "text-decoration property பயன்படுத்தவும்.",
    expectedOutput: "The three paragraphs display different text decorations.",
    expectedOutputTamil: "மூன்று paragraphs-லும் வெவ்வேறு text decorations தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.one {
  text-decoration: underline;
}
.two {
  text-decoration: overline;
}
.three {
  text-decoration: line-through;
}
</style>
</head>
<body>
<p class="one">Underlined text</p>
<p class="two">Overline text</p>
<p class="three">Line-through text</p>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 4,
    title: "Text Transformation",
    questionEnglish: "Create three paragraphs. Display the first in uppercase, the second in lowercase, and the third with the first letter of each word capitalized.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். முதலாவது uppercase, இரண்டாவது lowercase மற்றும் மூன்றாவது ஒவ்வொரு வார்த்தையின் முதல் எழுத்தும் capital ஆகத் தோன்றும்படி அமைக்கவும்.",
    hintEnglish: "Use text-transform with uppercase, lowercase, and capitalize.",
    hintTamil: "text-transform property-யில் uppercase, lowercase மற்றும் capitalize values பயன்படுத்தவும்.",
    expectedOutput: "The three paragraphs display their text in the requested letter cases.",
    expectedOutputTamil: "மூன்று paragraphs-ம் கேட்டபடி வெவ்வேறு எழுத்து வடிவங்களில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.upper {
  text-transform: uppercase;
}
.lower {
  text-transform: lowercase;
}
.capital {
  text-transform: capitalize;
}
</style>
</head>
<body>
<p class="upper">welcome to css</p>
<p class="lower">LEARNING WEB DEVELOPMENT</p>
<p class="capital">deep code learning platform</p>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 4,
    title: "Font Family",
    questionEnglish: "Create three paragraphs and apply Arial, Georgia, and Courier New font families respectively.",
    questionTamil: "மூன்று paragraphs உருவாக்கி அவற்றிற்கு முறையே Arial, Georgia மற்றும் Courier New font families அமைக்கவும்.",
    hintEnglish: "Use the font-family property.",
    hintTamil: "font-family property பயன்படுத்தவும்.",
    expectedOutput: "Each paragraph displays using a different font family.",
    expectedOutputTamil: "ஒவ்வொரு paragraph-மும் வெவ்வேறு font family-ல் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.first {
  font-family: Arial, sans-serif;
}
.second {
  font-family: Georgia, serif;
}
.third {
  font-family: "Courier New", monospace;
}
</style>
</head>
<body>
<p class="first">Arial font</p>
<p class="second">Georgia font</p>
<p class="third">Courier New font</p>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 4,
    title: "Font Weight",
    questionEnglish: "Create three paragraphs. Display the first with normal font weight, the second with bold font weight, and the third with a font weight of 700.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். முதலாவது normal font weight, இரண்டாவது bold மற்றும் மூன்றாவது 700 font weight-ல் தோன்றும்படி அமைக்கவும்.",
    hintEnglish: "Use the font-weight property.",
    hintTamil: "font-weight property பயன்படுத்தவும்.",
    expectedOutput: "The paragraphs display normal, bold, and 700 font weights.",
    expectedOutputTamil: "Paragraphs normal, bold மற்றும் 700 font weights-ல் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.normal {
  font-weight: normal;
}
.bold {
  font-weight: bold;
}
.strong {
  font-weight: 700;
}
</style>
</head>
<body>
<p class="normal">Normal text</p>
<p class="bold">Bold text</p>
<p class="strong">Weight 700 text</p>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 4,
    title: "Font Style",
    questionEnglish: "Create three paragraphs. Display the first in normal style, the second in italic, and the third in oblique style.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். முதலாவது normal style, இரண்டாவது italic மற்றும் மூன்றாவது oblique style-ல் தோன்றும்படி அமைக்கவும்.",
    hintEnglish: "Use font-style with normal, italic, and oblique values.",
    hintTamil: "font-style property-யில் normal, italic மற்றும் oblique values பயன்படுத்தவும்.",
    expectedOutput: "The paragraphs display normal, italic, and oblique text styles.",
    expectedOutputTamil: "Paragraphs normal, italic மற்றும் oblique எழுத்து வடிவங்களில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.normal {
  font-style: normal;
}
.italic {
  font-style: italic;
}
.oblique {
  font-style: oblique;
}
</style>
</head>
<body>
<p class="normal">Normal style</p>
<p class="italic">Italic style</p>
<p class="oblique">Oblique style</p>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 4,
    title: "Letter and Word Spacing",
    questionEnglish: "Create a heading and paragraph. Set the heading letter spacing to 4px and the paragraph word spacing to 10px.",
    questionTamil: "ஒரு heading மற்றும் paragraph உருவாக்கவும். Heading-ன் letter spacing-ஐ 4px ஆகவும் paragraph-ன் word spacing-ஐ 10px ஆகவும் அமைக்கவும்.",
    hintEnglish: "Use letter-spacing and word-spacing properties.",
    hintTamil: "letter-spacing மற்றும் word-spacing properties பயன்படுத்தவும்.",
    expectedOutput: "The heading has wider letter spacing and the paragraph has wider word spacing.",
    expectedOutputTamil: "Heading-ல் எழுத்துகளுக்கிடையேயும் paragraph-ல் வார்த்தைகளுக்கிடையேயும் அதிக இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  letter-spacing: 4px;
}
p {
  word-spacing: 10px;
}
</style>
</head>
<body>
<h1>CSS SPACING</h1>
<p>Learning CSS is interesting.</p>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 4,
    title: "Line Height",
    questionEnglish: "Create a paragraph containing three lines of text. Use CSS to set its line height to 2.",
    questionTamil: "மூன்று வரிகள் கொண்ட paragraph உருவாக்கவும். CSS பயன்படுத்தி அதன் line height-ஐ 2 ஆக அமைக்கவும்.",
    hintEnglish: "Use the line-height property.",
    hintTamil: "line-height property பயன்படுத்தவும்.",
    expectedOutput: "The lines of the paragraph have increased vertical spacing.",
    expectedOutputTamil: "Paragraph வரிகளுக்கிடையே அதிக செங்குத்து இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  line-height: 2;
}
</style>
</head>
<body>
<p>
Learning HTML is the first step.<br>
CSS makes webpages attractive.<br>
Practice helps improve your skills.
</p>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 4,
    title: "Challenge: Personal Portfolio Typography",
    questionEnglish: "Create a personal portfolio introduction with a heading, subtitle, and description. Use different font families, sizes, weights, alignments, text decorations, and spacing to create a clear visual hierarchy.",
    questionTamil: "Heading, subtitle மற்றும் description கொண்ட personal portfolio introduction உருவாக்கவும். தெளிவான visual hierarchy உருவாக்க வெவ்வேறு font families, sizes, weights, alignments, text decorations மற்றும் spacing பயன்படுத்தவும்.",
    hintEnglish: "Use font-family, font-size, font-weight, text-align, and line-height.",
    hintTamil: "font-family, font-size, font-weight, text-align மற்றும் line-height பயன்படுத்தவும்.",
    expectedOutput: "A portfolio introduction with clearly differentiated and readable typography.",
    expectedOutputTamil: "தெளிவாக வேறுபடுத்தப்பட்ட மற்றும் படிக்க எளிதான எழுத்து வடிவங்களைக் கொண்ட portfolio introduction.",
    challenge: true
  },
  {
    id: 10,
    topicId: 4,
    title: "Challenge: DEEP CODE Article",
    questionEnglish: "Create a DEEP CODE learning article with a title, subtitle, multiple paragraphs, and an important note. Use suitable font styling, alignment, line spacing, and text decoration to make the article readable.",
    questionTamil: "Title, subtitle, பல paragraphs மற்றும் முக்கிய குறிப்பு கொண்ட DEEP CODE learning article உருவாக்கவும். படிக்க எளிதாக இருக்க பொருத்தமான font styling, alignment, line spacing மற்றும் text decoration பயன்படுத்தவும்.",
    hintEnglish: "Create separate CSS classes for the title, subtitle, paragraphs, and note.",
    hintTamil: "Title, subtitle, paragraphs மற்றும் note ஆகியவற்றிற்கு தனித்தனி CSS classes உருவாக்கவும்.",
    expectedOutput: "A well-formatted learning article with readable typography and a highlighted note.",
    expectedOutputTamil: "படிக்க எளிதான எழுத்து வடிவங்களும் முக்கியமாகக் காட்டப்பட்ட குறிப்பும் கொண்ட learning article.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 5,
    title: "Set Element Width and Height",
    questionEnglish: "Create a div with the text 'CSS Box Model'. Set its width to 200px and height to 100px. Give it a lightblue background.",
    questionTamil: "'CSS Box Model' என்ற உரையுடன் div உருவாக்கவும். அதன் width-ஐ 200px ஆகவும் height-ஐ 100px ஆகவும் அமைத்து lightblue background கொடுக்கவும்.",
    hintEnglish: "Use width, height, and background-color properties.",
    hintTamil: "width, height மற்றும் background-color properties பயன்படுத்தவும்.",
    expectedOutput: "A light blue rectangular box measuring 200px wide and 100px high.",
    expectedOutputTamil: "200px அகலமும் 100px உயரமும் கொண்ட light blue செவ்வகப் பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
</style>
</head>
<body>
<div class="box">CSS Box Model</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 5,
    title: "Add Padding",
    questionEnglish: "Create a div with the text 'Welcome'. Give it a lightgray background and 20px padding on all four sides.",
    questionTamil: "'Welcome' என்ற உரையுடன் div உருவாக்கவும். அதற்கு lightgray background மற்றும் நான்கு பக்கங்களிலும் 20px padding கொடுக்கவும்.",
    hintEnglish: "Use the padding property.",
    hintTamil: "padding property பயன்படுத்தவும்.",
    expectedOutput: "The text appears inside a light gray box with 20px internal spacing.",
    expectedOutputTamil: "20px உள் இடைவெளியுடன் light gray பெட்டிக்குள் text தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightgray;
  padding: 20px;
}
</style>
</head>
<body>
<div class="box">Welcome</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 5,
    title: "Add Margin",
    questionEnglish: "Create two div boxes. Give both boxes a lightblue background, width of 150px, and height of 80px. Add 20px margin to each box.",
    questionTamil: "இரண்டு div boxes உருவாக்கவும். இரண்டிற்கும் lightblue background, 150px width மற்றும் 80px height கொடுக்கவும். ஒவ்வொரு box-க்கும் 20px margin அமைக்கவும்.",
    hintEnglish: "Use margin to create space outside each box.",
    hintTamil: "ஒவ்வொரு box-க்கும் வெளியே இடைவெளி உருவாக்க margin பயன்படுத்தவும்.",
    expectedOutput: "Two light blue boxes appear with space around each box.",
    expectedOutputTamil: "ஒவ்வொரு box-ஐச் சுற்றியும் இடைவெளியுடன் இரண்டு light blue boxes தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 150px;
  height: 80px;
  background-color: lightblue;
  margin: 20px;
}
</style>
</head>
<body>
<div class="box">Box 1</div>
<div class="box">Box 2</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 5,
    title: "Add Border",
    questionEnglish: "Create a div with the text 'My Box'. Set its width to 200px, height to 100px, and add a 3px solid black border.",
    questionTamil: "'My Box' என்ற உரையுடன் div உருவாக்கவும். அதன் width-ஐ 200px, height-ஐ 100px ஆக அமைத்து 3px solid black border கொடுக்கவும்.",
    hintEnglish: "Use the border property.",
    hintTamil: "border property பயன்படுத்தவும்.",
    expectedOutput: "A rectangular box with a 3px solid black border.",
    expectedOutputTamil: "3px தடிமனான solid black border கொண்ட செவ்வகப் பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 100px;
  border: 3px solid black;
}
</style>
</head>
<body>
<div class="box">My Box</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 5,
    title: "Style Individual Padding Sides",
    questionEnglish: "Create a div with a lightyellow background. Set its top padding to 10px, right padding to 20px, bottom padding to 30px, and left padding to 40px.",
    questionTamil: "Lightyellow background கொண்ட div உருவாக்கவும். அதன் top padding-ஐ 10px, right padding-ஐ 20px, bottom padding-ஐ 30px மற்றும் left padding-ஐ 40px ஆக அமைக்கவும்.",
    hintEnglish: "Use padding-top, padding-right, padding-bottom, and padding-left.",
    hintTamil: "padding-top, padding-right, padding-bottom மற்றும் padding-left properties பயன்படுத்தவும்.",
    expectedOutput: "The content has different internal spacing on each side.",
    expectedOutputTamil: "Content-ஐச் சுற்றி ஒவ்வொரு பக்கத்திலும் வெவ்வேறு உள் இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightyellow;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
</style>
</head>
<body>
<div class="box">Different padding on each side</div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 5,
    title: "Style Individual Margin Sides",
    questionEnglish: "Create a div with a lightgreen background. Set its top margin to 10px, right margin to 20px, bottom margin to 30px, and left margin to 40px.",
    questionTamil: "Lightgreen background கொண்ட div உருவாக்கவும். அதன் top margin-ஐ 10px, right margin-ஐ 20px, bottom margin-ஐ 30px மற்றும் left margin-ஐ 40px ஆக அமைக்கவும்.",
    hintEnglish: "Use margin-top, margin-right, margin-bottom, and margin-left.",
    hintTamil: "margin-top, margin-right, margin-bottom மற்றும் margin-left properties பயன்படுத்தவும்.",
    expectedOutput: "The box has different external spacing on each side.",
    expectedOutputTamil: "Box-ஐச் சுற்றி ஒவ்வொரு பக்கத்திலும் வெவ்வேறு வெளிப்புற இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightgreen;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
</style>
</head>
<body>
<div class="box">Different margin on each side</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 5,
    title: "Create a Rounded Box",
    questionEnglish: "Create a div with a lightblue background, 200px width, 100px height, and 15px padding. Use border-radius to make its corners rounded.",
    questionTamil: "Lightblue background, 200px width, 100px height மற்றும் 15px padding கொண்ட div உருவாக்கவும். அதன் மூலைகளை வட்டமாக்க border-radius பயன்படுத்தவும்.",
    hintEnglish: "Use border-radius: 15px.",
    hintTamil: "border-radius: 15px பயன்படுத்தவும்.",
    expectedOutput: "A light blue rectangular box with rounded corners.",
    expectedOutputTamil: "வட்டமான மூலைகளைக் கொண்ட light blue செவ்வகப் பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 100px;
  padding: 15px;
  background-color: lightblue;
  border-radius: 15px;
}
</style>
</head>
<body>
<div class="box">Rounded Box</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 5,
    title: "Understand Box Sizing",
    questionEnglish: "Create a div with width 200px, height 100px, padding 20px, and a 5px solid black border. Use box-sizing: border-box so that the total rendered width remains 200px and the total height remains 100px.",
    questionTamil: "200px width, 100px height, 20px padding மற்றும் 5px solid black border கொண்ட div உருவாக்கவும். மொத்தமாகத் தோன்றும் width 200px மற்றும் height 100px ஆகவே இருக்க box-sizing: border-box பயன்படுத்தவும்.",
    hintEnglish: "Apply box-sizing: border-box to the div.",
    hintTamil: "div-க்கு box-sizing: border-box அமைக்கவும்.",
    expectedOutput: "A box whose total outer dimensions are 200px wide and 100px high, including padding and border.",
    expectedOutputTamil: "Padding மற்றும் border உட்பட மொத்த வெளிப்புற அளவு 200px அகலமும் 100px உயரமும் கொண்ட box தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
  background-color: lightblue;
}
</style>
</head>
<body>
<div class="box">Box Sizing</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 5,
    title: "Challenge: Product Card",
    questionEnglish: "Create a product card with a product name, price, and description. Use width, padding, margin, border, border-radius, and box-sizing to create a properly sized card.",
    questionTamil: "Product name, price மற்றும் description கொண்ட product card உருவாக்கவும். சரியான அளவுள்ள card உருவாக்க width, padding, margin, border, border-radius மற்றும் box-sizing பயன்படுத்தவும்.",
    hintEnglish: "Use box-sizing: border-box and combine the box model properties.",
    hintTamil: "box-sizing: border-box பயன்படுத்தி box model properties-ஐ இணைக்கவும்.",
    expectedOutput: "A neatly spaced product card with a border and rounded corners.",
    expectedOutputTamil: "Border மற்றும் வட்டமான மூலைகளுடன் சரியான இடைவெளி கொண்ட product card தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 5,
    title: "Challenge: DEEP CODE Course Card",
    questionEnglish: "Create a DEEP CODE course card containing a course title, description, and a button. Use the CSS box model to control the card's width, height, padding, margin, border, and border-radius. Make sure the card's total width is predictable.",
    questionTamil: "Course title, description மற்றும் button கொண்ட DEEP CODE course card உருவாக்கவும். Card-ன் width, height, padding, margin, border மற்றும் border-radius ஆகியவற்றைக் கட்டுப்படுத்த CSS box model பயன்படுத்தவும். Card-ன் மொத்த width சரியாகக் கணிக்கக்கூடியதாக இருக்க வேண்டும்.",
    hintEnglish: "Use box-sizing: border-box and style the card as a single container.",
    hintTamil: "box-sizing: border-box பயன்படுத்தி card-ஐ ஒரே container ஆக வடிவமைக்கவும்.",
    expectedOutput: "A well-sized DEEP CODE course card with consistent spacing and rounded borders.",
    expectedOutputTamil: "சீரான இடைவெளி மற்றும் வட்டமான border கொண்ட சரியான அளவிலான DEEP CODE course card.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 6,
    title: "Add a Solid Border",
    questionEnglish: "Create a div with the text 'Welcome to CSS'. Add a 2px solid red border around it.",
    questionTamil: "'Welcome to CSS' என்ற உரையுடன் div உருவாக்கவும். அதைச் சுற்றி 2px solid red border அமைக்கவும்.",
    hintEnglish: "Use the border property with width, style, and color.",
    hintTamil: "border property-யில் width, style மற்றும் color அமைக்கவும்.",
    expectedOutput: "A div surrounded by a 2px solid red border.",
    expectedOutputTamil: "2px தடிமனான solid red border கொண்ட div தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  border: 2px solid red;
}
</style>
</head>
<body>
<div class="box">Welcome to CSS</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 6,
    title: "Change Border Styles",
    questionEnglish: "Create three div elements. Give the first a solid border, the second a dashed border, and the third a dotted border. Use a 3px black border for all three.",
    questionTamil: "மூன்று div elements உருவாக்கவும். முதலாவதற்கு solid border, இரண்டாவதற்கு dashed border, மூன்றாவதற்கு dotted border அமைக்கவும். மூன்றிற்கும் 3px black border பயன்படுத்தவும்.",
    hintEnglish: "Use the border-style property with solid, dashed, and dotted values.",
    hintTamil: "border-style property-யில் solid, dashed மற்றும் dotted values பயன்படுத்தவும்.",
    expectedOutput: "Three boxes appear with solid, dashed, and dotted black borders.",
    expectedOutputTamil: "Solid, dashed மற்றும் dotted black borders கொண்ட மூன்று பெட்டிகள் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  border-width: 3px;
  border-color: black;
  margin: 10px;
  padding: 10px;
}
.one {
  border-style: solid;
}
.two {
  border-style: dashed;
}
.three {
  border-style: dotted;
}
</style>
</head>
<body>
<div class="box one">Solid Border</div>
<div class="box two">Dashed Border</div>
<div class="box three">Dotted Border</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 6,
    title: "Set Individual Border Colors",
    questionEnglish: "Create a div with a 4px solid border. Set its top border to red, right border to blue, bottom border to green, and left border to orange.",
    questionTamil: "4px solid border கொண்ட div உருவாக்கவும். அதன் மேல் border-ஐ red, வலது border-ஐ blue, கீழ் border-ஐ green மற்றும் இடது border-ஐ orange ஆக அமைக்கவும்.",
    hintEnglish: "Use border-top-color, border-right-color, border-bottom-color, and border-left-color.",
    hintTamil: "நான்கு பக்கங்களுக்கும் தனித்தனி border color properties பயன்படுத்தவும்.",
    expectedOutput: "A box with four differently colored border sides.",
    expectedOutputTamil: "நான்கு பக்கங்களிலும் வெவ்வேறு நிற border கொண்ட பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  border: 4px solid;
  border-top-color: red;
  border-right-color: blue;
  border-bottom-color: green;
  border-left-color: orange;
  padding: 30px;
}
</style>
</head>
<body>
<div class="box">Four Border Colors</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 6,
    title: "Create Rounded Borders",
    questionEnglish: "Create a div with a 200px width, 100px height, lightblue background, and 3px solid blue border. Make its corners rounded using a 20px border radius.",
    questionTamil: "200px width, 100px height, lightblue background மற்றும் 3px solid blue border கொண்ட div உருவாக்கவும். 20px border-radius பயன்படுத்தி அதன் மூலைகளை வட்டமாக்கவும்.",
    hintEnglish: "Use border-radius: 20px.",
    hintTamil: "border-radius: 20px பயன்படுத்தவும்.",
    expectedOutput: "A light blue box with a blue border and rounded corners.",
    expectedOutputTamil: "Blue border மற்றும் வட்டமான மூலைகளுடன் light blue பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 100px;
  background-color: lightblue;
  border: 3px solid blue;
  border-radius: 20px;
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 6,
    title: "Create a Circular Element",
    questionEnglish: "Create a div with equal width and height of 120px. Give it a blue background and use border-radius: 50% to create a circle.",
    questionTamil: "120px width மற்றும் height கொண்ட div உருவாக்கவும். அதற்கு blue background கொடுத்து border-radius: 50% பயன்படுத்தி வட்டமாக மாற்றவும்.",
    hintEnglish: "Use equal width and height with border-radius: 50%.",
    hintTamil: "சமமான width மற்றும் height உடன் border-radius: 50% பயன்படுத்தவும்.",
    expectedOutput: "A blue circular shape appears on the page.",
    expectedOutputTamil: "பக்கத்தில் நீல நிற வட்ட வடிவம் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.circle {
  width: 120px;
  height: 120px;
  background-color: blue;
  border-radius: 50%;
}
</style>
</head>
<body>
<div class="circle"></div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 6,
    title: "Add an Outline",
    questionEnglish: "Create a paragraph with a 2px solid black border. Add a 3px solid red outline around the paragraph.",
    questionTamil: "2px solid black border கொண்ட paragraph உருவாக்கவும். அதைச் சுற்றி 3px solid red outline அமைக்கவும்.",
    hintEnglish: "Use the outline property separately from border.",
    hintTamil: "border-இலிருந்து தனியாக outline property பயன்படுத்தவும்.",
    expectedOutput: "The paragraph has a black border and a red outline outside it.",
    expectedOutputTamil: "Paragraph-க்கு black border மற்றும் அதற்கு வெளியே red outline தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  border: 2px solid black;
  outline: 3px solid red;
  padding: 15px;
  margin: 10px;
}
</style>
</head>
<body>
<p>This paragraph has a border and outline.</p>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 6,
    title: "Change Outline Offset",
    questionEnglish: "Create a div with a 2px solid black border and a 3px solid blue outline. Set the outline offset to 5px.",
    questionTamil: "2px solid black border மற்றும் 3px solid blue outline கொண்ட div உருவாக்கவும். Outline offset-ஐ 5px ஆக அமைக்கவும்.",
    hintEnglish: "Use the outline-offset property.",
    hintTamil: "outline-offset property பயன்படுத்தவும்.",
    expectedOutput: "A blue outline appears 5px away from the black border.",
    expectedOutputTamil: "Black border-இலிருந்து 5px இடைவெளியில் blue outline தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  border: 2px solid black;
  outline: 3px solid blue;
  outline-offset: 5px;
  padding: 20px;
  margin: 15px;
}
</style>
</head>
<body>
<div class="box">Outline Offset</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 6,
    title: "Style Different Border Sides",
    questionEnglish: "Create a div with a 200px width and 100px height. Give its top border a 4px solid red style, right border a 4px dashed blue style, bottom border a 4px dotted green style, and left border a 4px double purple style.",
    questionTamil: "200px width மற்றும் 100px height கொண்ட div உருவாக்கவும். மேல் border-க்கு 4px solid red, வலது border-க்கு 4px dashed blue, கீழ் border-க்கு 4px dotted green மற்றும் இடது border-க்கு 4px double purple அமைக்கவும்.",
    hintEnglish: "Use border-top, border-right, border-bottom, and border-left.",
    hintTamil: "border-top, border-right, border-bottom மற்றும் border-left properties பயன்படுத்தவும்.",
    expectedOutput: "A box with four sides displaying different border styles and colors.",
    expectedOutputTamil: "நான்கு பக்கங்களிலும் வெவ்வேறு border styles மற்றும் நிறங்களைக் கொண்ட பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 100px;
  border-top: 4px solid red;
  border-right: 4px dashed blue;
  border-bottom: 4px dotted green;
  border-left: 4px double purple;
}
</style>
</head>
<body>
<div class="box">Different Borders</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 6,
    title: "Challenge: Profile Picture Frame",
    questionEnglish: "Create a profile picture frame using a div. Give it a circular shape, a thick colored border, and an outline with an offset. Add a name below the frame.",
    questionTamil: "div பயன்படுத்தி profile picture frame உருவாக்கவும். அதை வட்ட வடிவமாக்கி தடிமனான நிறமுள்ள border மற்றும் offset கொண்ட outline அமைக்கவும். Frame-க்கு கீழே ஒரு பெயரையும் சேர்க்கவும்.",
    hintEnglish: "Combine border-radius, border, outline, and outline-offset.",
    hintTamil: "border-radius, border, outline மற்றும் outline-offset ஆகியவற்றை இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "A circular profile frame with a decorative border and outline, followed by a name.",
    expectedOutputTamil: "அழகான border மற்றும் outline கொண்ட வட்டமான profile frame-க்கு கீழே பெயர் தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 6,
    title: "Challenge: DEEP CODE Course Card",
    questionEnglish: "Create a DEEP CODE course card with a title, description, and button. Use different border styles, rounded corners, and an outline to make the card attractive.",
    questionTamil: "Title, description மற்றும் button கொண்ட DEEP CODE course card உருவாக்கவும். Card-ஐ அழகாக வடிவமைக்க வெவ்வேறு border styles, rounded corners மற்றும் outline பயன்படுத்தவும்.",
    hintEnglish: "Experiment with border styles, border-radius, outline, and outline-offset.",
    hintTamil: "Border styles, border-radius, outline மற்றும் outline-offset பயன்படுத்திப் பாருங்கள்.",
    expectedOutput: "An attractive DEEP CODE course card with decorative borders.",
    expectedOutputTamil: "அழகான border வடிவமைப்புகளைக் கொண்ட DEEP CODE course card தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 7,
    title: "Set Margin",
    questionEnglish: "Create a div with a lightblue background and 150px width. Apply 20px margin on all four sides.",
    questionTamil: "Lightblue background மற்றும் 150px width கொண்ட div உருவாக்கவும். நான்கு பக்கங்களிலும் 20px margin அமைக்கவும்.",
    hintEnglish: "Use margin: 20px.",
    hintTamil: "margin: 20px பயன்படுத்தவும்.",
    expectedOutput: "A light blue box with 20px external spacing on all sides.",
    expectedOutputTamil: "நான்கு பக்கங்களிலும் 20px வெளிப்புற இடைவெளியுடன் light blue பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 150px;
  background-color: lightblue;
  margin: 20px;
}
</style>
</head>
<body>
<div class="box">Margin Example</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 7,
    title: "Set Padding",
    questionEnglish: "Create a paragraph with a lightyellow background. Apply 25px padding on all sides.",
    questionTamil: "Lightyellow background கொண்ட paragraph உருவாக்கவும். நான்கு பக்கங்களிலும் 25px padding அமைக்கவும்.",
    hintEnglish: "Use padding: 25px.",
    hintTamil: "padding: 25px பயன்படுத்தவும்.",
    expectedOutput: "The paragraph has 25px internal spacing around its text.",
    expectedOutputTamil: "Paragraph text-ஐச் சுற்றி 25px உள் இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  background-color: lightyellow;
  padding: 25px;
}
</style>
</head>
<body>
<p>Padding creates space inside an element.</p>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 7,
    title: "Use Different Vertical and Horizontal Margins",
    questionEnglish: "Create a div with a lightgreen background. Set its top and bottom margins to 30px and its left and right margins to 50px.",
    questionTamil: "Lightgreen background கொண்ட div உருவாக்கவும். அதன் மேல் மற்றும் கீழ் margin-ஐ 30px ஆகவும் இடது மற்றும் வலது margin-ஐ 50px ஆகவும் அமைக்கவும்.",
    hintEnglish: "Use the two-value margin shorthand: margin: 30px 50px.",
    hintTamil: "இரண்டு values கொண்ட margin shorthand: margin: 30px 50px பயன்படுத்தவும்.",
    expectedOutput: "The div has 30px vertical and 50px horizontal external spacing.",
    expectedOutputTamil: "Div-க்கு செங்குத்தாக 30px மற்றும் கிடைமட்டமாக 50px வெளிப்புற இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightgreen;
  margin: 30px 50px;
}
</style>
</head>
<body>
<div class="box">Margin Shorthand</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 7,
    title: "Center a Box Using Auto Margin",
    questionEnglish: "Create a div with a width of 300px and a lightblue background. Use auto left and right margins to center it horizontally.",
    questionTamil: "300px width மற்றும் lightblue background கொண்ட div உருவாக்கவும். அதை கிடைமட்டமாக மையப்படுத்த இடது மற்றும் வலது பக்கங்களில் auto margin பயன்படுத்தவும்.",
    hintEnglish: "Use margin: 0 auto.",
    hintTamil: "margin: 0 auto பயன்படுத்தவும்.",
    expectedOutput: "A 300px wide box appears centered horizontally on the page.",
    expectedOutputTamil: "300px அகலமுள்ள பெட்டி பக்கத்தின் கிடைமட்ட மையத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 300px;
  background-color: lightblue;
  margin: 0 auto;
}
</style>
</head>
<body>
<div class="box">Centered Box</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 7,
    title: "Set Individual Padding Values",
    questionEnglish: "Create a div with a lightgray background. Set its top padding to 10px, right padding to 20px, bottom padding to 30px, and left padding to 40px.",
    questionTamil: "Lightgray background கொண்ட div உருவாக்கவும். Top padding 10px, right padding 20px, bottom padding 30px மற்றும் left padding 40px ஆக அமைக்கவும்.",
    hintEnglish: "Use the four individual padding properties.",
    hintTamil: "நான்கு தனித்தனி padding properties பயன்படுத்தவும்.",
    expectedOutput: "The content has different internal spacing on each side.",
    expectedOutputTamil: "Content-ஐச் சுற்றி ஒவ்வொரு பக்கத்திலும் வெவ்வேறு உள் இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightgray;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 30px;
  padding-left: 40px;
}
</style>
</head>
<body>
<div class="box">Individual Padding</div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 7,
    title: "Set Individual Margin Values",
    questionEnglish: "Create a div with a lightpink background. Set its top margin to 10px, right margin to 20px, bottom margin to 30px, and left margin to 40px.",
    questionTamil: "Lightpink background கொண்ட div உருவாக்கவும். Top margin 10px, right margin 20px, bottom margin 30px மற்றும் left margin 40px ஆக அமைக்கவும்.",
    hintEnglish: "Use the four individual margin properties.",
    hintTamil: "நான்கு தனித்தனி margin properties பயன்படுத்தவும்.",
    expectedOutput: "The box has different external spacing on each side.",
    expectedOutputTamil: "Box-ஐச் சுற்றி ஒவ்வொரு பக்கத்திலும் வெவ்வேறு வெளிப்புற இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightpink;
  margin-top: 10px;
  margin-right: 20px;
  margin-bottom: 30px;
  margin-left: 40px;
}
</style>
</head>
<body>
<div class="box">Individual Margin</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 7,
    title: "Use Padding Shorthand",
    questionEnglish: "Create a div with a lightblue background. Use the three-value padding shorthand to set top padding to 10px, left and right padding to 20px, and bottom padding to 30px.",
    questionTamil: "Lightblue background கொண்ட div உருவாக்கவும். Three-value padding shorthand பயன்படுத்தி top padding 10px, இடது மற்றும் வலது padding 20px, bottom padding 30px ஆக அமைக்கவும்.",
    hintEnglish: "Use padding: 10px 20px 30px.",
    hintTamil: "padding: 10px 20px 30px பயன்படுத்தவும்.",
    expectedOutput: "The box has 10px top, 20px horizontal, and 30px bottom internal spacing.",
    expectedOutputTamil: "Box-ல் மேல் 10px, கிடைமட்டமாக 20px மற்றும் கீழே 30px உள் இடைவெளி இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  background-color: lightblue;
  padding: 10px 20px 30px;
}
</style>
</head>
<body>
<div class="box">Padding Shorthand</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 7,
    title: "Create Spacing Between Cards",
    questionEnglish: "Create two product cards using div elements. Give each card 15px padding and 20px margin. Add a 1px solid gray border.",
    questionTamil: "Div elements பயன்படுத்தி இரண்டு product cards உருவாக்கவும். ஒவ்வொரு card-க்கும் 15px padding மற்றும் 20px margin கொடுக்கவும். 1px solid gray border அமைக்கவும்.",
    hintEnglish: "Use a shared CSS class for both cards.",
    hintTamil: "இரண்டு cards-க்கும் ஒரே CSS class பயன்படுத்தவும்.",
    expectedOutput: "Two product cards appear with internal spacing, external spacing, and gray borders.",
    expectedOutputTamil: "உள் இடைவெளி, வெளிப்புற இடைவெளி மற்றும் gray border கொண்ட இரண்டு product cards தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  padding: 15px;
  margin: 20px;
  border: 1px solid gray;
}
</style>
</head>
<body>
<div class="card">Product 1 - Laptop</div>
<div class="card">Product 2 - Keyboard</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 7,
    title: "Challenge: Student Profile Layout",
    questionEnglish: "Create a student profile card with a name, department, and description. Use different margin and padding values to organize the content and create clear spacing.",
    questionTamil: "பெயர், துறை மற்றும் விளக்கம் கொண்ட student profile card உருவாக்கவும். Content-ஐ ஒழுங்குபடுத்தவும் தெளிவான இடைவெளி உருவாக்கவும் வெவ்வேறு margin மற்றும் padding values பயன்படுத்தவும்.",
    hintEnglish: "Apply padding inside the card and margins between its elements.",
    hintTamil: "Card-க்குள் padding மற்றும் அதன் elements இடையே margin பயன்படுத்தவும்.",
    expectedOutput: "A well-spaced student profile card with organized content.",
    expectedOutputTamil: "ஒழுங்கான content மற்றும் சரியான இடைவெளி கொண்ட student profile card தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 7,
    title: "Challenge: DEEP CODE Course Cards",
    questionEnglish: "Create three DEEP CODE course cards for HTML, CSS, and JavaScript. Use margin and padding to create equal spacing between cards and inside each card.",
    questionTamil: "HTML, CSS மற்றும் JavaScript ஆகியவற்றிற்கு மூன்று DEEP CODE course cards உருவாக்கவும். Cards இடையேயும் ஒவ்வொரு card-க்குள்ளும் சீரான இடைவெளி உருவாக்க margin மற்றும் padding பயன்படுத்தவும்.",
    hintEnglish: "Create one reusable card class and apply consistent spacing.",
    hintTamil: "மீண்டும் பயன்படுத்தக்கூடிய card class உருவாக்கி ஒரே மாதிரியான spacing அமைக்கவும்.",
    expectedOutput: "Three course cards with consistent internal and external spacing.",
    expectedOutputTamil: "சீரான உள் மற்றும் வெளிப்புற இடைவெளியுடன் மூன்று course cards தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 8,
    title: "Set Fixed Width",
    questionEnglish: "Create a div and set its width to 300px. Give it a lightblue background so its size is visible.",
    questionTamil: "ஒரு div உருவாக்கி அதன் width-ஐ 300px ஆக அமைக்கவும். அதன் அளவு தெளிவாகத் தெரிய lightblue background கொடுக்கவும்.",
    hintEnglish: "Use the width property.",
    hintTamil: "width property பயன்படுத்தவும்.",
    expectedOutput: "A light blue box with a width of 300px.",
    expectedOutputTamil: "300px அகலமுள்ள light blue பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 300px;
  background-color: lightblue;
}
</style>
</head>
<body>
<div class="box">Fixed Width</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 8,
    title: "Set Fixed Height",
    questionEnglish: "Create a div with a width of 200px and height of 150px. Give it a lightgreen background.",
    questionTamil: "200px width மற்றும் 150px height கொண்ட div உருவாக்கவும். அதற்கு lightgreen background கொடுக்கவும்.",
    hintEnglish: "Use width and height properties.",
    hintTamil: "width மற்றும் height properties பயன்படுத்தவும்.",
    expectedOutput: "A light green box measuring 200px wide and 150px high.",
    expectedOutputTamil: "200px அகலமும் 150px உயரமும் கொண்ட light green பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 200px;
  height: 150px;
  background-color: lightgreen;
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 8,
    title: "Use Percentage Width",
    questionEnglish: "Create a parent div with a width of 500px and a lightgray background. Inside it, create another div with a width of 50% and a blue background.",
    questionTamil: "500px width மற்றும் lightgray background கொண்ட parent div உருவாக்கவும். அதற்குள் 50% width மற்றும் blue background கொண்ட மற்றொரு div உருவாக்கவும்.",
    hintEnglish: "Percentage width is calculated relative to the containing block.",
    hintTamil: "Percentage width என்பது அதை உள்ளடக்கிய parent block-ஐ அடிப்படையாகக் கொண்டு கணக்கிடப்படும்.",
    expectedOutput: "A blue box occupying half the width of the 500px parent.",
    expectedOutputTamil: "500px parent-ன் பாதி அகலத்தை நிரப்பும் நீல பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.parent {
  width: 500px;
  background-color: lightgray;
}
.child {
  width: 50%;
  height: 80px;
  background-color: blue;
}
</style>
</head>
<body>
<div class="parent">
  <div class="child"></div>
</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 8,
    title: "Set Maximum Width",
    questionEnglish: "Create a content container with width: 100% and max-width: 600px. Center it horizontally and give it a lightblue background.",
    questionTamil: "width: 100% மற்றும் max-width: 600px கொண்ட content container உருவாக்கவும். அதை கிடைமட்டமாக மையப்படுத்தி lightblue background கொடுக்கவும்.",
    hintEnglish: "Use max-width and margin: 0 auto.",
    hintTamil: "max-width மற்றும் margin: 0 auto பயன்படுத்தவும்.",
    expectedOutput: "A container that can shrink on smaller screens but does not exceed 600px.",
    expectedOutputTamil: "சிறிய திரைகளில் சுருங்கக்கூடிய, ஆனால் 600px-ஐத் தாண்டாத container தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: lightblue;
  padding: 20px;
  box-sizing: border-box;
}
</style>
</head>
<body>
<div class="container">
  Responsive Content
</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 8,
    title: "Set Minimum Width",
    questionEnglish: "Create a div with width: 50%, min-width: 250px, and a lightyellow background. Ensure that the div never becomes narrower than 250px.",
    questionTamil: "width: 50%, min-width: 250px மற்றும் lightyellow background கொண்ட div உருவாக்கவும். அந்த div 250px-ஐ விடக் குறுகியதாக மாறாமல் அமைக்கவும்.",
    hintEnglish: "Use the min-width property.",
    hintTamil: "min-width property பயன்படுத்தவும்.",
    expectedOutput: "The div occupies 50% of its parent when possible but never becomes narrower than 250px.",
    expectedOutputTamil: "சாத்தியமானபோது parent-ன் 50% அகலத்தைப் பெறும்; ஆனால் 250px-ஐ விடக் குறுகியதாக மாறாது.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.parent {
  width: 100%;
}
.box {
  width: 50%;
  min-width: 250px;
  background-color: lightyellow;
  height: 100px;
}
</style>
</head>
<body>
<div class="parent">
  <div class="box">Minimum Width</div>
</div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 8,
    title: "Set Maximum Height",
    questionEnglish: "Create a div with width: 250px, height: 200px, and max-height: 100px. Add enough text to demonstrate vertical overflow and set overflow: auto.",
    questionTamil: "250px width, 200px height மற்றும் max-height: 100px கொண்ட div உருவாக்கவும். Vertical overflow தெரியும் அளவுக்கு text சேர்த்து overflow: auto அமைக்கவும்.",
    hintEnglish: "Use max-height and overflow: auto.",
    hintTamil: "max-height மற்றும் overflow: auto பயன்படுத்தவும்.",
    expectedOutput: "The box is limited to 100px high and shows a scrollbar when its content overflows.",
    expectedOutputTamil: "Box-ன் உயரம் 100px ஆகக் கட்டுப்படுத்தப்படும்; content அதிகமானால் scrollbar தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 250px;
  height: 200px;
  max-height: 100px;
  overflow: auto;
  background-color: lightblue;
}
</style>
</head>
<body>
<div class="box">
  <p>Line one of the content.</p>
  <p>Line two of the content.</p>
  <p>Line three of the content.</p>
  <p>Line four of the content.</p>
  <p>Line five of the content.</p>
</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 8,
    title: "Use Viewport Width",
    questionEnglish: "Create a div with width: 50vw and height: 100px. Give it a purple background. The div should occupy half the viewport width.",
    questionTamil: "width: 50vw மற்றும் height: 100px கொண்ட div உருவாக்கவும். அதற்கு purple background கொடுக்கவும். அந்த div viewport-ன் பாதி அகலத்தை நிரப்ப வேண்டும்.",
    hintEnglish: "The vw unit represents a percentage of the viewport width.",
    hintTamil: "vw unit என்பது viewport width-ன் சதவீதத்தை குறிக்கிறது.",
    expectedOutput: "A purple box occupying half of the browser viewport width.",
    expectedOutputTamil: "Browser viewport-ன் பாதி அகலத்தை நிரப்பும் purple பெட்டி தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 50vw;
  height: 100px;
  background-color: purple;
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 8,
    title: "Use Viewport Height",
    questionEnglish: "Create a section with height: 50vh and a lightgreen background. Add a heading inside it.",
    questionTamil: "height: 50vh மற்றும் lightgreen background கொண்ட section உருவாக்கவும். அதற்குள் ஒரு heading சேர்க்கவும்.",
    hintEnglish: "The vh unit represents a percentage of the viewport height.",
    hintTamil: "vh unit என்பது viewport height-ன் சதவீதத்தை குறிக்கிறது.",
    expectedOutput: "A section that occupies half of the browser viewport height.",
    expectedOutputTamil: "Browser viewport-ன் பாதி உயரத்தை நிரப்பும் section தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.section {
  height: 50vh;
  background-color: lightgreen;
}
</style>
</head>
<body>
<section class="section">
  <h1>Half Viewport Height</h1>
</section>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 8,
    title: "Challenge: Responsive Content Container",
    questionEnglish: "Create a responsive content container that uses 90% of its parent's width, never exceeds 800px, and remains centered. Add suitable padding and a background color.",
    questionTamil: "Parent-ன் 90% width பயன்படுத்தும், 800px-ஐத் தாண்டாத மற்றும் மையத்தில் இருக்கும் responsive content container உருவாக்கவும். பொருத்தமான padding மற்றும் background color கொடுக்கவும்.",
    hintEnglish: "Combine width, max-width, margin, and box-sizing.",
    hintTamil: "width, max-width, margin மற்றும் box-sizing properties இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "A centered responsive container that adapts to the available screen width.",
    expectedOutputTamil: "கிடைக்கும் திரை அகலத்திற்கு ஏற்ப மாறும் மையப்படுத்தப்பட்ட responsive container தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 8,
    title: "Challenge: Full-Screen Hero Section",
    questionEnglish: "Create a DEEP CODE hero section that occupies the full viewport width and at least 80% of the viewport height. Add a heading, description, and button. Make sure the content fits comfortably.",
    questionTamil: "முழு viewport width மற்றும் குறைந்தது 80% viewport height கொண்ட DEEP CODE hero section உருவாக்கவும். Heading, description மற்றும் button சேர்த்து content வசதியாகப் பொருந்தும்படி அமைக்கவும்.",
    hintEnglish: "Use 100vw or 100% width, min-height: 80vh, and appropriate box sizing.",
    hintTamil: "100vw அல்லது 100% width, min-height: 80vh மற்றும் பொருத்தமான box sizing பயன்படுத்தவும்.",
    expectedOutput: "A large DEEP CODE hero section with content inside it.",
    expectedOutputTamil: "Content கொண்ட பெரிய DEEP CODE hero section தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 9,
    title: "Display Block",
    questionEnglish: "Create three span elements. Use display: block to make each span appear on a separate line.",
    questionTamil: "மூன்று span elements உருவாக்கவும். ஒவ்வொரு span-மும் தனித்தனி வரியில் தோன்ற display: block பயன்படுத்தவும்.",
    hintEnglish: "Use the display property with the block value.",
    hintTamil: "display property-யில் block value பயன்படுத்தவும்.",
    expectedOutput: "The three span elements appear vertically, one below another.",
    expectedOutputTamil: "மூன்று span elements-ம் ஒன்றன் கீழ் ஒன்றாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
span {
  display: block;
  background-color: lightblue;
  margin: 5px;
}
</style>
</head>
<body>
<span>First</span>
<span>Second</span>
<span>Third</span>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 9,
    title: "Display Inline",
    questionEnglish: "Create three div elements. Use display: inline to make them appear on the same line. Give each one a lightgreen background.",
    questionTamil: "மூன்று div elements உருவாக்கவும். அவை ஒரே வரியில் தோன்ற display: inline பயன்படுத்தவும். ஒவ்வொன்றுக்கும் lightgreen background கொடுக்கவும்.",
    hintEnglish: "Use display: inline.",
    hintTamil: "display: inline பயன்படுத்தவும்.",
    expectedOutput: "The three div elements appear side by side on the same line.",
    expectedOutputTamil: "மூன்று div elements-ம் ஒரே வரியில் அருகருகே தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  display: inline;
  background-color: lightgreen;
}
</style>
</head>
<body>
<div class="box">Box 1 </div>
<div class="box">Box 2 </div>
<div class="box">Box 3</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 9,
    title: "Display Inline-Block",
    questionEnglish: "Create three div elements. Use display: inline-block and set each element to 120px width and 80px height. Give each a lightblue background.",
    questionTamil: "மூன்று div elements உருவாக்கவும். display: inline-block பயன்படுத்தி ஒவ்வொன்றுக்கும் 120px width மற்றும் 80px height அமைக்கவும். ஒவ்வொன்றுக்கும் lightblue background கொடுக்கவும்.",
    hintEnglish: "Use display: inline-block.",
    hintTamil: "display: inline-block பயன்படுத்தவும்.",
    expectedOutput: "Three boxes appear side by side, each with the specified width and height.",
    expectedOutputTamil: "குறிப்பிட்ட width மற்றும் height கொண்ட மூன்று பெட்டிகள் அருகருகே தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  display: inline-block;
  width: 120px;
  height: 80px;
  background-color: lightblue;
  margin: 5px;
}
</style>
</head>
<body>
<div class="box">One</div>
<div class="box">Two</div>
<div class="box">Three</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 9,
    title: "Hide an Element",
    questionEnglish: "Create three paragraphs. Use display: none to completely hide the second paragraph while keeping the first and third visible.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். இரண்டாவது paragraph-ஐ முழுமையாக மறைக்க display: none பயன்படுத்தவும். முதல் மற்றும் மூன்றாவது paragraphs தெரிய வேண்டும்.",
    hintEnglish: "Apply display: none to the second paragraph using a class.",
    hintTamil: "Class பயன்படுத்தி இரண்டாவது paragraph-க்கு display: none அமைக்கவும்.",
    expectedOutput: "Only the first and third paragraphs are visible. No space is reserved for the hidden paragraph.",
    expectedOutputTamil: "முதல் மற்றும் மூன்றாவது paragraphs மட்டும் தெரியும். மறைக்கப்பட்ட paragraph-க்காக இடம் ஒதுக்கப்படாது.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.hidden {
  display: none;
}
</style>
</head>
<body>
<p>First paragraph</p>
<p class="hidden">Second paragraph</p>
<p>Third paragraph</p>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 9,
    title: "Use Visibility Hidden",
    questionEnglish: "Create three paragraphs. Use visibility: hidden to hide the second paragraph while keeping its original space in the layout.",
    questionTamil: "மூன்று paragraphs உருவாக்கவும். இரண்டாவது paragraph-ஐ மறைக்க visibility: hidden பயன்படுத்தவும். ஆனால் அதன் இடம் layout-ல் இருக்க வேண்டும்.",
    hintEnglish: "Use visibility: hidden instead of display: none.",
    hintTamil: "display: none-க்கு பதிலாக visibility: hidden பயன்படுத்தவும்.",
    expectedOutput: "The second paragraph is invisible, but its space remains in the layout.",
    expectedOutputTamil: "இரண்டாவது paragraph தெரியாது; ஆனால் அதற்கான இடம் layout-ல் இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.hidden {
  visibility: hidden;
}
</style>
</head>
<body>
<p>First paragraph</p>
<p class="hidden">Second paragraph</p>
<p>Third paragraph</p>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 9,
    title: "Use Display Flex",
    questionEnglish: "Create a container with three div boxes. Use display: flex to arrange the boxes horizontally.",
    questionTamil: "மூன்று div boxes கொண்ட container உருவாக்கவும். Boxes கிடைமட்டமாக வரிசைப்படுத்த display: flex பயன்படுத்தவும்.",
    hintEnglish: "Apply display: flex to the parent container.",
    hintTamil: "Parent container-க்கு display: flex அமைக்கவும்.",
    expectedOutput: "The three boxes appear horizontally in a flex container.",
    expectedOutputTamil: "Flex container-க்குள் மூன்று பெட்டிகளும் கிடைமட்டமாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 9,
    title: "Use Display Grid",
    questionEnglish: "Create a container with four div boxes. Use display: grid and grid-template-columns: repeat(2, 1fr) to arrange the boxes in two columns.",
    questionTamil: "நான்கு div boxes கொண்ட container உருவாக்கவும். Boxes இரண்டு columns-ல் வரிசைப்படுத்த display: grid மற்றும் grid-template-columns: repeat(2, 1fr) பயன்படுத்தவும்.",
    hintEnglish: "Use display: grid and define two equal columns.",
    hintTamil: "display: grid பயன்படுத்தி இரண்டு சமமான columns அமைக்கவும்.",
    expectedOutput: "Four boxes appear in a two-column grid with two rows.",
    expectedOutputTamil: "இரண்டு columns மற்றும் இரண்டு rows கொண்ட grid-ல் நான்கு பெட்டிகள் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.box {
  background-color: lightgreen;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 9,
    title: "Use Display Flex Column",
    questionEnglish: "Create three div boxes inside a container. Use display: flex and flex-direction: column to arrange the boxes vertically.",
    questionTamil: "ஒரு container-க்குள் மூன்று div boxes உருவாக்கவும். அவற்றை செங்குத்தாக வரிசைப்படுத்த display: flex மற்றும் flex-direction: column பயன்படுத்தவும்.",
    hintEnglish: "Set flex-direction to column.",
    hintTamil: "flex-direction-ஐ column ஆக அமைக்கவும்.",
    expectedOutput: "The three boxes appear vertically, one below another.",
    expectedOutputTamil: "மூன்று பெட்டிகளும் ஒன்றன் கீழ் ஒன்றாகச் செங்குத்தாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 15px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">First</div>
  <div class="box">Second</div>
  <div class="box">Third</div>
</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 9,
    title: "Challenge: Navigation Menu",
    questionEnglish: "Create a navigation menu with four links: Home, About, Courses, and Contact. Use display properties to arrange the links horizontally and style them like a navigation bar.",
    questionTamil: "Home, About, Courses மற்றும் Contact என்ற நான்கு links கொண்ட navigation menu உருவாக்கவும். Links-ஐ கிடைமட்டமாக வரிசைப்படுத்த display properties பயன்படுத்தி navigation bar போல வடிவமைக்கவும்.",
    hintEnglish: "Try display: flex on the navigation container.",
    hintTamil: "Navigation container-ல் display: flex பயன்படுத்திப் பாருங்கள்.",
    expectedOutput: "A horizontal navigation menu containing four links.",
    expectedOutputTamil: "நான்கு links கொண்ட கிடைமட்ட navigation menu தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 9,
    title: "Challenge: DEEP CODE Course Layout",
    questionEnglish: "Create a DEEP CODE page with a navigation bar, a main content section, three course cards, and a footer. Use block, inline, inline-block, flex, or grid display values where appropriate.",
    questionTamil: "Navigation bar, main content section, மூன்று course cards மற்றும் footer கொண்ட DEEP CODE page உருவாக்கவும். தேவையான இடங்களில் block, inline, inline-block, flex அல்லது grid display values பயன்படுத்தவும்.",
    hintEnglish: "Choose a suitable display value for each section based on its layout needs.",
    hintTamil: "ஒவ்வொரு பகுதியின் layout தேவைக்கேற்ப பொருத்தமான display value தேர்ந்தெடுக்கவும்.",
    expectedOutput: "A complete DEEP CODE page with properly arranged sections and course cards.",
    expectedOutputTamil: "சரியாக வரிசைப்படுத்தப்பட்ட sections மற்றும் course cards கொண்ட முழுமையான DEEP CODE page தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 10,
    title: "Static Position",
    questionEnglish: "Create three div boxes and set their position property to static. Give each box a different background color.",
    questionTamil: "மூன்று div boxes உருவாக்கி அவற்றின் position property-ஐ static ஆக அமைக்கவும். ஒவ்வொரு box-க்கும் வெவ்வேறு background color கொடுக்கவும்.",
    hintEnglish: "Use position: static. This is the normal document flow.",
    hintTamil: "position: static பயன்படுத்தவும். இது இயல்பான document flow ஆகும்.",
    expectedOutput: "Three colored boxes appear in their normal document order.",
    expectedOutputTamil: "மூன்று வண்ணப் பெட்டிகளும் இயல்பான document வரிசையில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  position: static;
  padding: 20px;
  margin: 10px;
}
.one {
  background-color: lightblue;
}
.two {
  background-color: lightgreen;
}
.three {
  background-color: lightpink;
}
</style>
</head>
<body>
<div class="box one">Box One</div>
<div class="box two">Box Two</div>
<div class="box three">Box Three</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 10,
    title: "Relative Position",
    questionEnglish: "Create a div with position: relative. Move it 20px down and 30px to the right using top and left properties.",
    questionTamil: "position: relative கொண்ட div உருவாக்கவும். top மற்றும் left properties பயன்படுத்தி அதை 20px கீழேயும் 30px வலதுபுறமும் நகர்த்தவும்.",
    hintEnglish: "Use position: relative, top: 20px, and left: 30px.",
    hintTamil: "position: relative, top: 20px மற்றும் left: 30px பயன்படுத்தவும்.",
    expectedOutput: "The box appears 20px lower and 30px to the right of its original position, while its original layout space remains reserved.",
    expectedOutputTamil: "Box அதன் இயல்பான இடத்திலிருந்து 20px கீழேயும் 30px வலதுபுறமும் தோன்றும். அதன் பழைய layout இடம் தொடர்ந்து ஒதுக்கப்பட்டிருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  position: relative;
  top: 20px;
  left: 30px;
  background-color: lightblue;
  padding: 20px;
}
</style>
</head>
<body>
<div class="box">Relative Position</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 10,
    title: "Absolute Position",
    questionEnglish: "Create a parent div with position: relative. Inside it, create a child div with position: absolute, top: 10px, and right: 10px. Give the parent a lightgray background and the child a blue background.",
    questionTamil: "position: relative கொண்ட parent div உருவாக்கவும். அதற்குள் position: absolute, top: 10px மற்றும் right: 10px கொண்ட child div உருவாக்கவும். Parent-க்கு lightgray background மற்றும் child-க்கு blue background கொடுக்கவும்.",
    hintEnglish: "An absolutely positioned child uses its nearest positioned ancestor as its reference.",
    hintTamil: "Absolute position கொண்ட child, அருகிலுள்ள positioned ancestor-ஐ reference ஆகப் பயன்படுத்தும்.",
    expectedOutput: "A blue child box appears 10px from the top and right edges of its parent.",
    expectedOutputTamil: "Parent-ன் மேல் மற்றும் வலது விளிம்புகளிலிருந்து 10px இடைவெளியில் நீல child box தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.parent {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: lightgray;
}
.child {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: blue;
  color: white;
  padding: 10px;
}
</style>
</head>
<body>
<div class="parent">
  Parent
  <div class="child">Child</div>
</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 10,
    title: "Fixed Position",
    questionEnglish: "Create a fixed notification box at the bottom-right corner of the browser window. Use position: fixed, bottom: 20px, and right: 20px.",
    questionTamil: "Browser window-ன் கீழ் வலது மூலையில் fixed notification box உருவாக்கவும். position: fixed, bottom: 20px மற்றும் right: 20px பயன்படுத்தவும்.",
    hintEnglish: "Use position: fixed to position the element relative to the viewport.",
    hintTamil: "Viewport-ஐ அடிப்படையாகக் கொண்டு element-ஐ அமைக்க position: fixed பயன்படுத்தவும்.",
    expectedOutput: "A notification box stays at the bottom-right corner while the page scrolls.",
    expectedOutputTamil: "Page scroll செய்தாலும் notification box கீழ் வலது மூலையில் நிலையாக இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: darkblue;
  color: white;
  padding: 15px;
}
.content {
  height: 1000px;
}
</style>
</head>
<body>
<div class="content">
  <h1>Scroll the Page</h1>
</div>
<div class="notification">New Notification!</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 10,
    title: "Sticky Position",
    questionEnglish: "Create a long webpage with a heading bar. Set the heading bar to position: sticky and top: 0 so that it sticks to the top when scrolling within the page.",
    questionTamil: "நீளமான webpage மற்றும் heading bar உருவாக்கவும். Page-ஐ scroll செய்யும்போது heading bar மேலே ஒட்டியிருக்க position: sticky மற்றும் top: 0 அமைக்கவும்.",
    hintEnglish: "Use position: sticky and top: 0. The sticky element needs room to scroll within its container.",
    hintTamil: "position: sticky மற்றும் top: 0 பயன்படுத்தவும். Sticky element அதன் container-க்குள் scroll ஆக போதுமான இடம் இருக்க வேண்டும்.",
    expectedOutput: "The heading bar sticks to the top of the viewport as the page scrolls through its container.",
    expectedOutputTamil: "Page-ஐ scroll செய்யும்போது heading bar viewport-ன் மேல் பகுதியில் ஒட்டியிருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  margin: 0;
}
.header {
  position: sticky;
  top: 0;
  background-color: darkblue;
  color: white;
  padding: 15px;
}
.content {
  height: 1200px;
  padding: 20px;
}
</style>
</head>
<body>
<div class="header">Sticky Header</div>
<div class="content">
  <h1>Scroll to see the effect</h1>
  <p>This is a long webpage.</p>
</div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 10,
    title: "Use Top and Left Properties",
    questionEnglish: "Create a parent div with position: relative. Place a child div using position: absolute, top: 30px, and left: 40px.",
    questionTamil: "position: relative கொண்ட parent div உருவாக்கவும். அதற்குள் position: absolute, top: 30px மற்றும் left: 40px பயன்படுத்தி child div அமைக்கவும்.",
    hintEnglish: "Set the parent as relative and the child as absolute.",
    hintTamil: "Parent-ஐ relative ஆகவும் child-ஐ absolute ஆகவும் அமைக்கவும்.",
    expectedOutput: "The child box appears 30px from the parent's top and 40px from its left.",
    expectedOutputTamil: "Parent-ன் மேல் விளிம்பிலிருந்து 30px மற்றும் இடது விளிம்பிலிருந்து 40px தொலைவில் child box தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.parent {
  position: relative;
  width: 300px;
  height: 200px;
  background-color: lightgray;
}
.child {
  position: absolute;
  top: 30px;
  left: 40px;
  background-color: orange;
  padding: 10px;
}
</style>
</head>
<body>
<div class="parent">
  <div class="child">Child Box</div>
</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 10,
    title: "Control Stacking with Z-Index",
    questionEnglish: "Create two overlapping div boxes using position: absolute. Give the first box z-index: 1 and the second box z-index: 2 so that the second box appears on top.",
    questionTamil: "position: absolute பயன்படுத்தி ஒன்றின் மீது ஒன்று படியும் இரண்டு div boxes உருவாக்கவும். முதல் box-க்கு z-index: 1 மற்றும் இரண்டாவது box-க்கு z-index: 2 அமைத்து இரண்டாவது box மேலே தோன்றும்படி செய்யவும்.",
    hintEnglish: "A higher z-index generally places an element above a lower one within the relevant stacking context.",
    hintTamil: "ஒரே stacking context-ல் அதிகமான z-index கொண்ட element பொதுவாக மற்ற element-க்கு மேலே தோன்றும்.",
    expectedOutput: "The second box appears above the first box.",
    expectedOutputTamil: "இரண்டாவது box முதல் box-க்கு மேலே தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  position: relative;
  height: 200px;
}
.box {
  position: absolute;
  width: 150px;
  height: 100px;
  padding: 10px;
}
.one {
  top: 20px;
  left: 20px;
  background-color: red;
  z-index: 1;
}
.two {
  top: 60px;
  left: 80px;
  background-color: blue;
  color: white;
  z-index: 2;
}
</style>
</head>
<body>
<div class="container">
  <div class="box one">First Box</div>
  <div class="box two">Second Box</div>
</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 10,
    title: "Position a Badge on a Card",
    questionEnglish: "Create a product card with position: relative. Add a small 'NEW' badge inside it using position: absolute, top: 10px, and right: 10px.",
    questionTamil: "position: relative கொண்ட product card உருவாக்கவும். அதற்குள் position: absolute, top: 10px மற்றும் right: 10px பயன்படுத்தி சிறிய 'NEW' badge சேர்க்கவும்.",
    hintEnglish: "Make the card relative and the badge absolute.",
    hintTamil: "Card-ஐ relative ஆகவும் badge-ஐ absolute ஆகவும் அமைக்கவும்.",
    expectedOutput: "A product card with a NEW badge positioned at its top-right corner.",
    expectedOutputTamil: "Product card-ன் மேல் வலது மூலையில் NEW badge தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  position: relative;
  width: 250px;
  padding: 40px 20px 20px;
  background-color: lightgray;
}
.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  padding: 5px 10px;
}
</style>
</head>
<body>
<div class="card">
  <span class="badge">NEW</span>
  <h2>Product Name</h2>
  <p>Product description.</p>
</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 10,
    title: "Challenge: Notification Interface",
    questionEnglish: "Create a notification interface with a fixed notification button, a sticky header, and a positioned notification badge. Use relative, absolute, fixed, and sticky positioning appropriately.",
    questionTamil: "Fixed notification button, sticky header மற்றும் positioned notification badge கொண்ட notification interface உருவாக்கவும். Relative, absolute, fixed மற்றும் sticky positioning-ஐ பொருத்தமான முறையில் பயன்படுத்தவும்.",
    hintEnglish: "Choose a suitable positioned parent for the badge and keep the notification button fixed to the viewport.",
    hintTamil: "Badge-க்கு பொருத்தமான positioned parent தேர்ந்தெடுத்து notification button-ஐ viewport-ல் fixed ஆக வைக்கவும்.",
    expectedOutput: "A page with a sticky header, a notification badge, and a fixed notification button.",
    expectedOutputTamil: "Sticky header, notification badge மற்றும் fixed notification button கொண்ட page தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 10,
    title: "Challenge: DEEP CODE Learning Dashboard",
    questionEnglish: "Create a DEEP CODE learning dashboard with a sticky navigation header, a course card containing an absolute NEW badge, and a fixed help button at the bottom-right corner. Use suitable positioning properties and z-index values.",
    questionTamil: "Sticky navigation header, absolute NEW badge கொண்ட course card மற்றும் கீழ் வலது மூலையில் fixed help button கொண்ட DEEP CODE learning dashboard உருவாக்கவும். பொருத்தமான positioning properties மற்றும் z-index values பயன்படுத்தவும்.",
    hintEnglish: "Use sticky for the header, relative and absolute for the card and badge, and fixed for the help button.",
    hintTamil: "Header-க்கு sticky, card மற்றும் badge-க்கு relative மற்றும் absolute, help button-க்கு fixed பயன்படுத்தவும்.",
    expectedOutput: "A learning dashboard with a sticky header, a course card badge, and a fixed help button.",
    expectedOutputTamil: "Sticky header, course card badge மற்றும் fixed help button கொண்ட learning dashboard தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 11,
    title: "Create a Flex Container",
    questionEnglish: "Create a container with three div boxes. Use display: flex to arrange them horizontally.",
    questionTamil: "மூன்று div boxes கொண்ட container உருவாக்கவும். அவற்றை கிடைமட்டமாக வரிசைப்படுத்த display: flex பயன்படுத்தவும்.",
    hintEnglish: "Apply display: flex to the parent container.",
    hintTamil: "Parent container-க்கு display: flex அமைக்கவும்.",
    expectedOutput: "Three boxes appear horizontally in a flex container.",
    expectedOutputTamil: "Flex container-ல் மூன்று பெட்டிகளும் கிடைமட்டமாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 11,
    title: "Change Flex Direction",
    questionEnglish: "Create three boxes inside a flex container. Use flex-direction: column to arrange them vertically.",
    questionTamil: "Flex container-க்குள் மூன்று boxes உருவாக்கவும். அவற்றை செங்குத்தாக வரிசைப்படுத்த flex-direction: column பயன்படுத்தவும்.",
    hintEnglish: "Use the flex-direction property.",
    hintTamil: "flex-direction property பயன்படுத்தவும்.",
    expectedOutput: "Three boxes appear vertically, one below another.",
    expectedOutputTamil: "மூன்று boxes-ம் ஒன்றன் கீழ் ஒன்றாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.box {
  background-color: lightgreen;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 11,
    title: "Center Items Horizontally",
    questionEnglish: "Create three boxes inside a flex container. Use justify-content: center to position the boxes in the horizontal center of the container.",
    questionTamil: "Flex container-க்குள் மூன்று boxes உருவாக்கவும். அவற்றை container-ன் கிடைமட்ட மையத்தில் அமைக்க justify-content: center பயன்படுத்தவும்.",
    hintEnglish: "Use justify-content to control alignment along the main axis.",
    hintTamil: "Main axis-ல் alignment கட்டுப்படுத்த justify-content பயன்படுத்தவும்.",
    expectedOutput: "The three boxes appear together in the horizontal center of the container.",
    expectedOutputTamil: "மூன்று boxes-ம் container-ன் கிடைமட்ட மையத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: lightgray;
  padding: 20px;
}
.box {
  background-color: blue;
  color: white;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 11,
    title: "Align Items Vertically",
    questionEnglish: "Create a flex container with three boxes of different heights. Use align-items: center to align them vertically in the center of the container.",
    questionTamil: "வெவ்வேறு உயரங்களைக் கொண்ட மூன்று boxes கொண்ட flex container உருவாக்கவும். அவற்றை container-ன் செங்குத்து மையத்தில் align செய்ய align-items: center பயன்படுத்தவும்.",
    hintEnglish: "Use align-items to control alignment along the cross axis.",
    hintTamil: "Cross axis-ல் alignment அமைக்க align-items பயன்படுத்தவும்.",
    expectedOutput: "All three boxes are vertically centered inside the flex container.",
    expectedOutputTamil: "மூன்று boxes-ம் flex container-க்குள் செங்குத்தாக மையப்படுத்தப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  align-items: center;
  height: 200px;
  gap: 10px;
  background-color: lightgray;
}
.box {
  background-color: orange;
  padding: 20px;
}
.one {
  height: 40px;
}
.two {
  height: 80px;
}
.three {
  height: 60px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box one">One</div>
  <div class="box two">Two</div>
  <div class="box three">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 11,
    title: "Use Space Between",
    questionEnglish: "Create a flex container with three boxes. Use justify-content: space-between to place the first box at the start, the second in the middle area, and the third at the end.",
    questionTamil: "மூன்று boxes கொண்ட flex container உருவாக்கவும். முதல் box தொடக்கத்திலும், இரண்டாவது நடுப்பகுதியிலும், மூன்றாவது இறுதியிலும் வருமாறு justify-content: space-between பயன்படுத்தவும்.",
    hintEnglish: "Use justify-content: space-between.",
    hintTamil: "justify-content: space-between பயன்படுத்தவும்.",
    expectedOutput: "Three boxes are distributed with equal available space between adjacent boxes.",
    expectedOutputTamil: "அடுத்தடுத்த boxes-க்கிடையே கிடைக்கும் இடைவெளி சமமாகப் பகிரப்படும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  padding: 15px;
}
.box {
  background-color: teal;
  color: white;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 11,
    title: "Allow Flex Wrapping",
    questionEnglish: "Create a flex container with six boxes. Use flex-wrap: wrap so that the boxes move to another row when there is not enough horizontal space.",
    questionTamil: "ஆறு boxes கொண்ட flex container உருவாக்கவும். கிடைமட்ட இடம் போதாதபோது boxes அடுத்த வரிசைக்குச் செல்ல flex-wrap: wrap பயன்படுத்தவும்.",
    hintEnglish: "Use flex-wrap: wrap and give each box a suitable width.",
    hintTamil: "flex-wrap: wrap பயன்படுத்தி ஒவ்வொரு box-க்கும் பொருத்தமான width அமைக்கவும்.",
    expectedOutput: "The boxes wrap onto additional rows when the container becomes too narrow.",
    expectedOutputTamil: "Container அகலம் குறையும்போது boxes அடுத்தடுத்த வரிசைகளில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 350px;
}
.box {
  width: 100px;
  padding: 15px;
  box-sizing: border-box;
  background-color: lightblue;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
  <div class="box">Five</div>
  <div class="box">Six</div>
</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 11,
    title: "Control Flex Item Growth",
    questionEnglish: "Create three boxes inside a flex container. Give the first box flex-grow: 1, the second flex-grow: 2, and the third flex-grow: 1.",
    questionTamil: "Flex container-க்குள் மூன்று boxes உருவாக்கவும். முதல் மற்றும் மூன்றாவது box-க்கு flex-grow: 1, இரண்டாவது box-க்கு flex-grow: 2 அமைக்கவும்.",
    hintEnglish: "Use the flex-grow property to distribute available space.",
    hintTamil: "கிடைக்கும் இடத்தைப் பகிர flex-grow property பயன்படுத்தவும்.",
    expectedOutput: "The second box receives twice as much available extra space as each of the other two boxes.",
    expectedOutputTamil: "இரண்டாவது box மற்ற இரண்டு boxes-ஐ விட இரண்டு மடங்கு கூடுதல் இடத்தைப் பெறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  width: 100%;
  gap: 5px;
}
.box {
  background-color: lightblue;
  padding: 20px;
}
.one {
  flex-grow: 1;
}
.two {
  flex-grow: 2;
}
.three {
  flex-grow: 1;
}
</style>
</head>
<body>
<div class="container">
  <div class="box one">One</div>
  <div class="box two">Two</div>
  <div class="box three">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 11,
    title: "Create a Centered Layout",
    questionEnglish: "Create a full-height container with a heading in the center. Use Flexbox to center the heading both horizontally and vertically.",
    questionTamil: "முழு உயரம் கொண்ட container உருவாக்கி அதன் மையத்தில் heading அமைக்கவும். Heading-ஐ கிடைமட்டமாகவும் செங்குத்தாகவும் மையப்படுத்த Flexbox பயன்படுத்தவும்.",
    hintEnglish: "Combine justify-content: center and align-items: center.",
    hintTamil: "justify-content: center மற்றும் align-items: center இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "The heading appears exactly in the center of the container.",
    expectedOutputTamil: "Heading container-ன் சரியான மையத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: lightyellow;
}
</style>
</head>
<body>
<div class="container">
  <h1>Welcome to DEEP CODE</h1>
</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 11,
    title: "Challenge: Responsive Navigation Bar",
    questionEnglish: "Create a navigation bar with a logo and four links. Use Flexbox to align the logo to the left and links to the right. Make the navigation responsive using flex-wrap or another suitable Flexbox technique.",
    questionTamil: "Logo மற்றும் நான்கு links கொண்ட navigation bar உருவாக்கவும். Logo-ஐ இடதுபுறத்திலும் links-ஐ வலதுபுறத்திலும் அமைக்க Flexbox பயன்படுத்தவும். flex-wrap அல்லது பொருத்தமான Flexbox முறையைப் பயன்படுத்தி responsive ஆக உருவாக்கவும்.",
    hintEnglish: "Try justify-content: space-between, align-items: center, and flex-wrap.",
    hintTamil: "justify-content: space-between, align-items: center மற்றும் flex-wrap பயன்படுத்திப் பாருங்கள்.",
    expectedOutput: "A navigation bar with a left-aligned logo and right-aligned links that can adapt to smaller widths.",
    expectedOutputTamil: "இடதுபுற logo மற்றும் வலதுபுற links கொண்ட, சிறிய திரைகளுக்கு ஏற்ப மாறக்கூடிய navigation bar.",
    challenge: true
  },
  {
    id: 10,
    topicId: 11,
    title: "Challenge: DEEP CODE Learning Dashboard",
    questionEnglish: "Create a DEEP CODE dashboard with a header, sidebar, main content area, and three course cards. Use Flexbox to arrange the layout and make it adapt to smaller screens.",
    questionTamil: "Header, sidebar, main content area மற்றும் மூன்று course cards கொண்ட DEEP CODE dashboard உருவாக்கவும். Layout அமைக்க Flexbox பயன்படுத்தி சிறிய திரைகளுக்கு ஏற்ப மாறும்படி உருவாக்கவும்.",
    hintEnglish: "Combine flex-direction, justify-content, align-items, flex-wrap, and gap.",
    hintTamil: "flex-direction, justify-content, align-items, flex-wrap மற்றும் gap ஆகியவற்றை இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "A responsive dashboard with an organized header, sidebar, and course cards.",
    expectedOutputTamil: "ஒழுங்கான header, sidebar மற்றும் course cards கொண்ட responsive dashboard.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 12,
    title: "Create a Grid Container",
    questionEnglish: "Create a container with four div boxes. Use display: grid to make it a grid container.",
    questionTamil: "நான்கு div boxes கொண்ட container உருவாக்கவும். அதை grid container ஆக மாற்ற display: grid பயன்படுத்தவும்.",
    hintEnglish: "Apply display: grid to the parent element.",
    hintTamil: "Parent element-க்கு display: grid அமைக்கவும்.",
    expectedOutput: "The four boxes are displayed in a grid using the default one-column layout.",
    expectedOutputTamil: "Default ஒரு-column layout-ல் நான்கு boxes-ம் grid ஆகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
</div>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 12,
    title: "Create Two Grid Columns",
    questionEnglish: "Create four boxes inside a grid container. Use grid-template-columns: repeat(2, 1fr) to arrange them into two equal columns.",
    questionTamil: "Grid container-க்குள் நான்கு boxes உருவாக்கவும். அவற்றை இரண்டு சமமான columns-ல் அமைக்க grid-template-columns: repeat(2, 1fr) பயன்படுத்தவும்.",
    hintEnglish: "Use repeat(2, 1fr) to create two equal columns.",
    hintTamil: "இரண்டு சமமான columns உருவாக்க repeat(2, 1fr) பயன்படுத்தவும்.",
    expectedOutput: "Four boxes appear in two equal columns and two rows.",
    expectedOutputTamil: "இரண்டு சமமான columns மற்றும் இரண்டு rows-ல் நான்கு boxes தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.box {
  background-color: lightgreen;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 12,
    title: "Create Three Grid Columns",
    questionEnglish: "Create six boxes inside a grid container. Use grid-template-columns: repeat(3, 1fr) to arrange them into three equal columns.",
    questionTamil: "Grid container-க்குள் ஆறு boxes உருவாக்கவும். அவற்றை மூன்று சமமான columns-ல் அமைக்க grid-template-columns: repeat(3, 1fr) பயன்படுத்தவும்.",
    hintEnglish: "Use repeat(3, 1fr).",
    hintTamil: "repeat(3, 1fr) பயன்படுத்தவும்.",
    expectedOutput: "Six boxes appear in three equal columns and two rows.",
    expectedOutputTamil: "மூன்று சமமான columns மற்றும் இரண்டு rows-ல் ஆறு boxes தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
  <div class="box">Five</div>
  <div class="box">Six</div>
</div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 12,
    title: "Set Grid Gap",
    questionEnglish: "Create a grid with four boxes arranged in two columns. Use a 20px gap between rows and columns.",
    questionTamil: "இரண்டு columns-ல் அமைக்கப்பட்ட நான்கு boxes கொண்ட grid உருவாக்கவும். Rows மற்றும் columns இடையே 20px gap அமைக்கவும்.",
    hintEnglish: "Use the gap property.",
    hintTamil: "gap property பயன்படுத்தவும்.",
    expectedOutput: "Four boxes appear in two columns with 20px spacing between grid items.",
    expectedOutputTamil: "Grid items இடையே 20px இடைவெளியுடன் நான்கு boxes இரண்டு columns-ல் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.box {
  background-color: lightpink;
  padding: 20px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 12,
    title: "Set Grid Row Heights",
    questionEnglish: "Create a grid with two columns and two rows. Use grid-template-rows to make the first row 100px high and the second row 150px high.",
    questionTamil: "இரண்டு columns மற்றும் இரண்டு rows கொண்ட grid உருவாக்கவும். முதல் row-ன் உயரத்தை 100px ஆகவும் இரண்டாவது row-ன் உயரத்தை 150px ஆகவும் அமைக்க grid-template-rows பயன்படுத்தவும்.",
    hintEnglish: "Use grid-template-rows: 100px 150px.",
    hintTamil: "grid-template-rows: 100px 150px பயன்படுத்தவும்.",
    expectedOutput: "A grid with two rows of different heights.",
    expectedOutputTamil: "வெவ்வேறு உயரங்களைக் கொண்ட இரண்டு rows உடைய grid தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100px 150px;
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 10px;
}
</style>
</head>
<body>
<div class="container">
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
</div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 12,
    title: "Span Multiple Columns",
    questionEnglish: "Create a grid with three equal columns. Make the first item span across all three columns using grid-column: 1 / 4.",
    questionTamil: "மூன்று சமமான columns கொண்ட grid உருவாக்கவும். முதல் item மூன்று columns முழுவதும் பரவ grid-column: 1 / 4 பயன்படுத்தவும்.",
    hintEnglish: "Use grid-column to control how many columns an item occupies.",
    hintTamil: "ஒரு item எத்தனை columns-ஐ நிரப்ப வேண்டும் என்பதை அமைக்க grid-column பயன்படுத்தவும்.",
    expectedOutput: "The first box spans the full grid width, while the other boxes occupy individual columns.",
    expectedOutputTamil: "முதல் box முழு grid அகலத்தையும் நிரப்பும்; மற்ற boxes தனித்தனி columns-ல் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.box {
  background-color: lightgreen;
  padding: 20px;
}
.header {
  grid-column: 1 / 4;
}
</style>
</head>
<body>
<div class="container">
  <div class="box header">Header</div>
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
</div>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 12,
    title: "Span Multiple Rows",
    questionEnglish: "Create a grid with three columns and two rows. Make the first item span both rows using grid-row: 1 / 3.",
    questionTamil: "மூன்று columns மற்றும் இரண்டு rows கொண்ட grid உருவாக்கவும். முதல் item இரண்டு rows முழுவதும் பரவ grid-row: 1 / 3 பயன்படுத்தவும்.",
    hintEnglish: "Use grid-row to control the vertical space occupied by an item.",
    hintTamil: "ஒரு item செங்குத்தாக எத்தனை rows-ஐ நிரப்ப வேண்டும் என்பதை அமைக்க grid-row பயன்படுத்தவும்.",
    expectedOutput: "The first item occupies the height of two rows.",
    expectedOutputTamil: "முதல் item இரண்டு rows-ன் முழு உயரத்தையும் நிரப்பும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
  gap: 10px;
}
.box {
  background-color: lightblue;
  padding: 15px;
}
.sidebar {
  grid-row: 1 / 3;
}
</style>
</head>
<body>
<div class="container">
  <div class="box sidebar">Sidebar</div>
  <div class="box">One</div>
  <div class="box">Two</div>
  <div class="box">Three</div>
  <div class="box">Four</div>
</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 12,
    title: "Create a Responsive Grid",
    questionEnglish: "Create a grid of course cards. Use repeat(auto-fit, minmax(200px, 1fr)) so that the number of columns adjusts automatically according to the available width.",
    questionTamil: "Course cards கொண்ட grid உருவாக்கவும். கிடைக்கும் அகலத்திற்கு ஏற்ப columns எண்ணிக்கை தானாக மாற repeat(auto-fit, minmax(200px, 1fr)) பயன்படுத்தவும்.",
    hintEnglish: "Use auto-fit and minmax() inside grid-template-columns.",
    hintTamil: "grid-template-columns-க்குள் auto-fit மற்றும் minmax() பயன்படுத்தவும்.",
    expectedOutput: "Course cards automatically rearrange into as many columns as fit the available space, with a minimum column width of 200px.",
    expectedOutputTamil: "கிடைக்கும் இடத்திற்கு ஏற்ப course cards தானாக columns-ஆக மாறும். ஒவ்வொரு column-ன் குறைந்தபட்ச அகலம் 200px ஆக இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
.card {
  background-color: lightblue;
  padding: 25px;
}
</style>
</head>
<body>
<div class="container">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
  <div class="card">React</div>
</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 12,
    title: "Challenge: Website Layout",
    questionEnglish: "Create a website layout with a header spanning all columns, a sidebar, a main content area, and a footer spanning the full width. Use CSS Grid to arrange the sections.",
    questionTamil: "அனைத்து columns-ஐயும் நிரப்பும் header, sidebar, main content area மற்றும் முழு அகலத்தையும் நிரப்பும் footer கொண்ட website layout உருவாக்கவும். பகுதிகளை வரிசைப்படுத்த CSS Grid பயன்படுத்தவும்.",
    hintEnglish: "Use grid-template-columns, grid-template-rows, grid-column, and grid-row.",
    hintTamil: "grid-template-columns, grid-template-rows, grid-column மற்றும் grid-row பயன்படுத்தவும்.",
    expectedOutput: "A structured website layout with a header, sidebar, main content, and footer.",
    expectedOutputTamil: "Header, sidebar, main content மற்றும் footer கொண்ட ஒழுங்கான website layout.",
    challenge: true
  },
  {
    id: 10,
    topicId: 12,
    title: "Challenge: DEEP CODE Course Dashboard",
    questionEnglish: "Create a responsive DEEP CODE dashboard with a header, sidebar, course cards, and footer. Use CSS Grid to organize the layout and make the course cards automatically adjust to the available screen width.",
    questionTamil: "Header, sidebar, course cards மற்றும் footer கொண்ட responsive DEEP CODE dashboard உருவாக்கவும். Layout-ஐ ஒழுங்குபடுத்த CSS Grid பயன்படுத்தி course cards கிடைக்கும் திரை அகலத்திற்கு ஏற்ப தானாக மாறும்படி அமைக்கவும்.",
    hintEnglish: "Combine grid-template-areas or grid-column with repeat(), auto-fit, and minmax().",
    hintTamil: "grid-template-areas அல்லது grid-column உடன் repeat(), auto-fit மற்றும் minmax() இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "A responsive DEEP CODE dashboard with an organized grid layout.",
    expectedOutputTamil: "ஒழுங்கான grid layout கொண்ட responsive DEEP CODE dashboard தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 13,
    title: "Hover Effect",
    questionEnglish: "Create a button with a blue background. Use the :hover pseudo-class to change its background to green when the mouse moves over it.",
    questionTamil: "Blue background கொண்ட button உருவாக்கவும். Mouse button மீது வரும்போது அதன் background பச்சையாக மாற :hover pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use button:hover.",
    hintTamil: "button:hover பயன்படுத்தவும்.",
    expectedOutput: "The button is blue normally and turns green when hovered.",
    expectedOutputTamil: "சாதாரணமாக button நீல நிறத்தில் இருக்கும்; mouse hover செய்யும்போது பச்சையாக மாறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
button {
  background-color: blue;
  color: white;
  padding: 12px 20px;
}
button:hover {
  background-color: green;
}
</style>
</head>
<body>
<button>Hover Over Me</button>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 13,
    title: "Active Pseudo-Class",
    questionEnglish: "Create a button and use the :active pseudo-class to change its background to orange while the user is pressing it.",
    questionTamil: "ஒரு button உருவாக்கவும். பயனர் அதை அழுத்திக் கொண்டிருக்கும் போது அதன் background orange ஆக மாற :active pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use button:active.",
    hintTamil: "button:active பயன்படுத்தவும்.",
    expectedOutput: "The button changes to orange while being pressed.",
    expectedOutputTamil: "Button-ஐ அழுத்திக் கொண்டிருக்கும்போது அது orange நிறமாக மாறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
button {
  background-color: blue;
  color: white;
  padding: 12px 20px;
}
button:active {
  background-color: orange;
}
</style>
</head>
<body>
<button>Press Me</button>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 13,
    title: "Focus Pseudo-Class",
    questionEnglish: "Create a text input. Use the :focus pseudo-class to change its border to blue when the user clicks inside the input or focuses it using the keyboard.",
    questionTamil: "ஒரு text input உருவாக்கவும். பயனர் அதற்குள் click செய்யும்போது அல்லது keyboard மூலம் focus செய்யும்போது அதன் border நீலமாக மாற :focus pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use input:focus.",
    hintTamil: "input:focus பயன்படுத்தவும்.",
    expectedOutput: "The input border turns blue when the input receives focus.",
    expectedOutputTamil: "Input focus பெறும்போது அதன் border நீலமாக மாறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
input {
  padding: 10px;
  border: 2px solid gray;
}
input:focus {
  border-color: blue;
  outline: none;
}
</style>
</head>
<body>
<input type="text" placeholder="Enter your name">
</body>
</html>`
  },
  {
    id: 4,
    topicId: 13,
    title: "First Child Selector",
    questionEnglish: "Create a div containing three paragraphs. Use the :first-child pseudo-class to make the first paragraph red.",
    questionTamil: "மூன்று paragraphs கொண்ட div உருவாக்கவும். முதல் paragraph சிவப்பாக மாற :first-child pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use p:first-child.",
    hintTamil: "p:first-child பயன்படுத்தவும்.",
    expectedOutput: "Only the first paragraph inside the div appears red.",
    expectedOutputTamil: "Div-க்குள் உள்ள முதல் paragraph மட்டும் சிவப்பாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p:first-child {
  color: red;
}
</style>
</head>
<body>
<div>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 13,
    title: "Last Child Selector",
    questionEnglish: "Create a list with four list items. Use the :last-child pseudo-class to make the last item green.",
    questionTamil: "நான்கு list items கொண்ட list உருவாக்கவும். கடைசி item பச்சையாக மாற :last-child pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use li:last-child.",
    hintTamil: "li:last-child பயன்படுத்தவும்.",
    expectedOutput: "Only the last list item appears green.",
    expectedOutputTamil: "கடைசி list item மட்டும் பச்சை நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
li:last-child {
  color: green;
}
</style>
</head>
<body>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React</li>
</ul>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 13,
    title: "Nth Child Selector",
    questionEnglish: "Create a list with five items. Use the :nth-child(2) pseudo-class to give the second item a yellow background.",
    questionTamil: "ஐந்து items கொண்ட list உருவாக்கவும். இரண்டாவது item-க்கு மஞ்சள் background கொடுக்க :nth-child(2) pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use li:nth-child(2).",
    hintTamil: "li:nth-child(2) பயன்படுத்தவும்.",
    expectedOutput: "Only the second list item has a yellow background.",
    expectedOutputTamil: "இரண்டாவது list item மட்டும் மஞ்சள் background கொண்டிருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
li:nth-child(2) {
  background-color: yellow;
}
</style>
</head>
<body>
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 13,
    title: "Checked Pseudo-Class",
    questionEnglish: "Create two checkboxes with labels. Use the :checked pseudo-class to change the text color of a label when its checkbox is selected.",
    questionTamil: "Labels கொண்ட இரண்டு checkboxes உருவாக்கவும். Checkbox தேர்வு செய்யப்பட்டால் அதன் label-ன் text color மாற :checked pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use input:checked + label.",
    hintTamil: "input:checked + label selector பயன்படுத்தவும்.",
    expectedOutput: "A selected checkbox makes its associated label green and bold.",
    expectedOutputTamil: "Checkbox தேர்வு செய்யப்பட்டால் அதனுடன் தொடர்புடைய label பச்சையாகவும் bold ஆகவும் மாறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
input:checked + label {
  color: green;
  font-weight: bold;
}
</style>
</head>
<body>
<input type="checkbox" id="html">
<label for="html">HTML</label>
<br>
<input type="checkbox" id="css">
<label for="css">CSS</label>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 13,
    title: "Disabled Pseudo-Class",
    questionEnglish: "Create two text inputs. Disable the second input and use the :disabled pseudo-class to give disabled inputs a lightgray background.",
    questionTamil: "இரண்டு text inputs உருவாக்கவும். இரண்டாவது input-ஐ disable செய்து disabled inputs-க்கு lightgray background கொடுக்க :disabled pseudo-class பயன்படுத்தவும்.",
    hintEnglish: "Use input:disabled.",
    hintTamil: "input:disabled பயன்படுத்தவும்.",
    expectedOutput: "The first input remains normal and the disabled second input has a light gray background.",
    expectedOutputTamil: "முதல் input இயல்பாகவும் இரண்டாவது disabled input lightgray background-உடனும் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
input:disabled {
  background-color: lightgray;
}
</style>
</head>
<body>
<input type="text" placeholder="Enabled input">
<br><br>
<input type="text" placeholder="Disabled input" disabled>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 13,
    title: "Challenge: Interactive Course Cards",
    questionEnglish: "Create three course cards. Use :hover to change a card's background, :active to change its appearance while pressed, and :nth-child() to highlight the second card.",
    questionTamil: "மூன்று course cards உருவாக்கவும். Card-ன் background மாற்ற :hover, அழுத்தும்போது அதன் தோற்றத்தை மாற்ற :active மற்றும் இரண்டாவது card-ஐ highlight செய்ய :nth-child() பயன்படுத்தவும்.",
    hintEnglish: "Combine multiple pseudo-classes in your stylesheet.",
    hintTamil: "உங்கள் stylesheet-ல் பல pseudo-classes இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "Three cards with hover, active, and second-card highlighting effects.",
    expectedOutputTamil: "Hover, active மற்றும் இரண்டாவது card highlight effects கொண்ட மூன்று cards தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 13,
    title: "Challenge: DEEP CODE Registration Form",
    questionEnglish: "Create a DEEP CODE registration form with text inputs, checkboxes, and a submit button. Use :focus, :checked, :disabled, and :hover to improve the user experience.",
    questionTamil: "Text inputs, checkboxes மற்றும் submit button கொண்ட DEEP CODE registration form உருவாக்கவும். User experience மேம்பட :focus, :checked, :disabled மற்றும் :hover பயன்படுத்தவும்.",
    hintEnglish: "Think about how each form element should look when focused, selected, disabled, or hovered.",
    hintTamil: "ஒவ்வொரு form element-மும் focus, selected, disabled அல்லது hover நிலையில் எப்படி இருக்க வேண்டும் என்று யோசிக்கவும்.",
    expectedOutput: "An interactive-looking registration form with different pseudo-class styles.",
    expectedOutputTamil: "வெவ்வேறு pseudo-class styles கொண்ட அழகான registration form தோன்றும்.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 14,
    title: "Style the First Letter",
    questionEnglish: "Create a paragraph containing a sentence. Use the ::first-letter pseudo-element to make the first letter red and 40px in size.",
    questionTamil: "ஒரு வாக்கியம் கொண்ட paragraph உருவாக்கவும். முதல் எழுத்தை சிவப்பாகவும் 40px அளவிலும் மாற்ற ::first-letter pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use p::first-letter.",
    hintTamil: "p::first-letter பயன்படுத்தவும்.",
    expectedOutput: "The first letter of the paragraph appears larger and red.",
    expectedOutputTamil: "Paragraph-ன் முதல் எழுத்து பெரியதாகவும் சிவப்பாகவும் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p::first-letter {
  color: red;
  font-size: 40px;
  font-weight: bold;
}
</style>
</head>
<body>
<p>Welcome to the world of CSS.</p>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 14,
    title: "Style the First Line",
    questionEnglish: "Create a paragraph with multiple lines. Use the ::first-line pseudo-element to make the first line blue and bold.",
    questionTamil: "பல வரிகள் கொண்ட paragraph உருவாக்கவும். முதல் வரியை நீலமாகவும் bold ஆகவும் மாற்ற ::first-line pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use p::first-line.",
    hintTamil: "p::first-line பயன்படுத்தவும்.",
    expectedOutput: "The first formatted line of the paragraph appears blue and bold.",
    expectedOutputTamil: "Paragraph-ன் முதல் formatted line நீலமாகவும் bold ஆகவும் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p::first-line {
  color: blue;
  font-weight: bold;
}
</style>
</head>
<body>
<p>
CSS helps us design beautiful websites.
It controls colors, layouts, spacing, and fonts.
Learning CSS makes webpages more attractive.
</p>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 14,
    title: "Add Content Before an Element",
    questionEnglish: "Create a paragraph containing 'Learning CSS'. Use the ::before pseudo-element to add the word 'Start:' before the paragraph text.",
    questionTamil: "'Learning CSS' என்ற உரையைக் கொண்ட paragraph உருவாக்கவும். Paragraph text-க்கு முன் 'Start:' என்ற வார்த்தையைச் சேர்க்க ::before pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use p::before with the content property.",
    hintTamil: "content property-யுடன் p::before பயன்படுத்தவும்.",
    expectedOutput: "The paragraph appears as 'Start: Learning CSS'.",
    expectedOutputTamil: "Paragraph 'Start: Learning CSS' என்று தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p::before {
  content: "Start: ";
  color: green;
  font-weight: bold;
}
</style>
</head>
<body>
<p>Learning CSS</p>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 14,
    title: "Add Content After an Element",
    questionEnglish: "Create a paragraph containing 'Course Completed'. Use the ::after pseudo-element to add a check mark after the text.",
    questionTamil: "'Course Completed' என்ற உரையைக் கொண்ட paragraph உருவாக்கவும். Text-க்கு பிறகு check mark சேர்க்க ::after pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use p::after and content: ' ✓'.",
    hintTamil: "p::after மற்றும் content: ' ✓' பயன்படுத்தவும்.",
    expectedOutput: "The paragraph displays 'Course Completed' followed by a check mark.",
    expectedOutputTamil: "Paragraph-ல் 'Course Completed' என்ற உரைக்குப் பிறகு check mark தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p::after {
  content: " ✓";
  color: green;
  font-weight: bold;
}
</style>
</head>
<body>
<p>Course Completed</p>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 14,
    title: "Style Selected Text",
    questionEnglish: "Create a paragraph with some text. Use the ::selection pseudo-element to change the selected text background to yellow and its color to black.",
    questionTamil: "சில உரைகளைக் கொண்ட paragraph உருவாக்கவும். Select செய்யப்பட்ட text-ன் background-ஐ மஞ்சளாகவும் text color-ஐ கருப்பாகவும் மாற்ற ::selection pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use p::selection or ::selection.",
    hintTamil: "p::selection அல்லது ::selection பயன்படுத்தவும்.",
    expectedOutput: "When the user selects paragraph text, it appears with a yellow background and black text.",
    expectedOutputTamil: "பயனர் paragraph text-ஐ select செய்யும்போது அது மஞ்சள் background மற்றும் கருப்பு text-உடன் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
p::selection {
  background-color: yellow;
  color: black;
}
</style>
</head>
<body>
<p>Select this text to see the custom selection style.</p>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 14,
    title: "Create Decorative Quotes",
    questionEnglish: "Create a blockquote containing an inspirational message. Use ::before and ::after to add opening and closing quotation marks.",
    questionTamil: "ஒரு ஊக்கமளிக்கும் செய்தியைக் கொண்ட blockquote உருவாக்கவும். Opening மற்றும் closing quotation marks சேர்க்க ::before மற்றும் ::after பயன்படுத்தவும்.",
    hintEnglish: "Use content: '“' before the text and content: '”' after it.",
    hintTamil: "Text-க்கு முன் content: '“' மற்றும் பின் content: '”' பயன்படுத்தவும்.",
    expectedOutput: "The inspirational message appears between decorative quotation marks.",
    expectedOutputTamil: "ஊக்கமளிக்கும் செய்தி அலங்கார quotation marks-க்கு இடையில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
blockquote::before {
  content: "“";
  color: blue;
  font-size: 30px;
}
blockquote::after {
  content: "”";
  color: blue;
  font-size: 30px;
}
</style>
</head>
<body>
<blockquote>
  Never stop learning.
</blockquote>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 14,
    title: "Create a Decorative Heading",
    questionEnglish: "Create a heading with the text 'Our Courses'. Use the ::after pseudo-element to add a short blue line below the heading.",
    questionTamil: "'Our Courses' என்ற heading உருவாக்கவும். அதன் கீழே சிறிய நீல கோடு சேர்க்க ::after pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use content: '', display: block, and set a width and height.",
    hintTamil: "content: '', display: block மற்றும் width, height அமைக்கவும்.",
    expectedOutput: "The heading appears with a short blue decorative line underneath.",
    expectedOutputTamil: "Heading-க்கு கீழே சிறிய நீல அலங்கார கோடு தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background-color: blue;
  margin-top: 8px;
}
</style>
</head>
<body>
<h1>Our Courses</h1>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 14,
    title: "Create a List Marker",
    questionEnglish: "Create a list of three learning topics. Use the ::marker pseudo-element to change the list markers to red and increase their font size.",
    questionTamil: "மூன்று learning topics கொண்ட list உருவாக்கவும். List markers-ஐ சிவப்பாகவும் பெரிய எழுத்து அளவிலும் மாற்ற ::marker pseudo-element பயன்படுத்தவும்.",
    hintEnglish: "Use li::marker.",
    hintTamil: "li::marker பயன்படுத்தவும்.",
    expectedOutput: "The list markers appear red and larger than the default size.",
    expectedOutputTamil: "List markers இயல்பை விடப் பெரியதாகவும் சிவப்பாகவும் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
li::marker {
  color: red;
  font-size: 24px;
}
</style>
</head>
<body>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 14,
    title: "Challenge: Stylish Article",
    questionEnglish: "Create a blog article with a title, multiple paragraphs, and a quotation. Use ::first-letter, ::first-line, ::before, and ::after to add decorative and typographic effects.",
    questionTamil: "Title, பல paragraphs மற்றும் quotation கொண்ட blog article உருவாக்கவும். அலங்கார மற்றும் எழுத்து வடிவ விளைவுகளுக்கு ::first-letter, ::first-line, ::before மற்றும் ::after பயன்படுத்தவும்.",
    hintEnglish: "Apply different pseudo-elements to suitable HTML elements.",
    hintTamil: "பொருத்தமான HTML elements-க்கு வெவ்வேறு pseudo-elements பயன்படுத்தவும்.",
    expectedOutput: "A blog article with decorative quotation marks and enhanced paragraph typography.",
    expectedOutputTamil: "அலங்கார quotation marks மற்றும் மேம்படுத்தப்பட்ட paragraph typography கொண்ட blog article.",
    challenge: true
  },
  {
    id: 10,
    topicId: 14,
    title: "Challenge: DEEP CODE Section Design",
    questionEnglish: "Create a DEEP CODE section with a heading, course description, learning list, and important note. Use pseudo-elements to add decorative heading lines, custom list markers, and additional text.",
    questionTamil: "Heading, course description, learning list மற்றும் முக்கிய குறிப்பு கொண்ட DEEP CODE section உருவாக்கவும். அலங்கார heading lines, custom list markers மற்றும் கூடுதல் text சேர்க்க pseudo-elements பயன்படுத்தவும்.",
    hintEnglish: "Experiment with ::before, ::after, ::marker, and ::first-letter.",
    hintTamil: "::before, ::after, ::marker மற்றும் ::first-letter பயன்படுத்திப் பாருங்கள்.",
    expectedOutput: "A styled DEEP CODE section with custom decorative elements.",
    expectedOutputTamil: "Custom அலங்கார elements கொண்ட வடிவமைக்கப்பட்ட DEEP CODE section.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 15,
    title: "Descendant Combinator",
    questionEnglish: "Create a div containing three paragraphs and another paragraph outside the div. Use the descendant combinator to make all paragraphs inside the div blue.",
    questionTamil: "மூன்று paragraphs கொண்ட div உருவாக்கவும். அதற்கு வெளியேயும் ஒரு paragraph உருவாக்கவும். Div-க்குள் உள்ள paragraphs மட்டும் நீலமாக மாற descendant combinator பயன்படுத்தவும்.",
    hintEnglish: "Use the selector div p.",
    hintTamil: "div p selector பயன்படுத்தவும்.",
    expectedOutput: "Only the paragraphs inside the div appear blue.",
    expectedOutputTamil: "Div-க்குள் உள்ள paragraphs மட்டும் நீல நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
div p {
  color: blue;
}
</style>
</head>
<body>
<div>
  <p>First inside paragraph</p>
  <p>Second inside paragraph</p>
  <p>Third inside paragraph</p>
</div>
<p>Outside paragraph</p>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 15,
    title: "Child Combinator",
    questionEnglish: "Create a div containing one direct paragraph and another paragraph inside a nested div. Use the child combinator to make only direct child paragraphs red.",
    questionTamil: "ஒரு direct paragraph மற்றும் nested div-க்குள் மற்றொரு paragraph கொண்ட div உருவாக்கவும். Direct child paragraphs மட்டும் சிவப்பாக மாற child combinator பயன்படுத்தவும்.",
    hintEnglish: "Use the selector div > p.",
    hintTamil: "div > p selector பயன்படுத்தவும்.",
    expectedOutput: "Only the direct child paragraph of the outer div appears red.",
    expectedOutputTamil: "வெளிப்புற div-ன் direct child paragraph மட்டும் சிவப்பாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
div > p {
  color: red;
}
</style>
</head>
<body>
<div>
  <p>Direct child paragraph</p>
  <div>
    <p>Nested paragraph</p>
  </div>
</div>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 15,
    title: "Adjacent Sibling Combinator",
    questionEnglish: "Create a heading followed immediately by a paragraph and then another paragraph. Use the adjacent sibling combinator to make only the first paragraph after the heading green.",
    questionTamil: "ஒரு heading-க்கு உடனடியாக ஒரு paragraph மற்றும் அதற்குப் பிறகு மற்றொரு paragraph உருவாக்கவும். Heading-க்கு உடனடியாக வரும் முதல் paragraph மட்டும் பச்சையாக மாற adjacent sibling combinator பயன்படுத்தவும்.",
    hintEnglish: "Use the selector h1 + p.",
    hintTamil: "h1 + p selector பயன்படுத்தவும்.",
    expectedOutput: "Only the paragraph immediately following the heading appears green.",
    expectedOutputTamil: "Heading-க்கு உடனடியாக அடுத்து வரும் paragraph மட்டும் பச்சை நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1 + p {
  color: green;
}
</style>
</head>
<body>
<h1>CSS Combinators</h1>
<p>First paragraph after heading.</p>
<p>Second paragraph.</p>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 15,
    title: "General Sibling Combinator",
    questionEnglish: "Create a heading followed by three paragraphs. Use the general sibling combinator to make every paragraph after the heading purple.",
    questionTamil: "ஒரு heading-க்கு பிறகு மூன்று paragraphs உருவாக்கவும். Heading-க்கு பிறகு வரும் அனைத்து paragraphs-யும் purple ஆக மாற general sibling combinator பயன்படுத்தவும்.",
    hintEnglish: "Use the selector h1 ~ p.",
    hintTamil: "h1 ~ p selector பயன்படுத்தவும்.",
    expectedOutput: "All paragraphs that are later siblings of the heading appear purple.",
    expectedOutputTamil: "Heading-க்கு பிறகு அதே parent-ல் வரும் அனைத்து paragraph siblings-ம் purple நிறத்தில் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h1 ~ p {
  color: purple;
}
</style>
</head>
<body>
<h1>Sibling Selectors</h1>
<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 15,
    title: "Combine Descendant and Child Combinators",
    questionEnglish: "Create a section containing a div with a heading and a paragraph. Also create a nested div with another paragraph. Use a descendant selector to style all paragraphs inside the section gray and a child selector to make direct paragraphs inside the section red.",
    questionTamil: "Heading மற்றும் paragraph கொண்ட div உள்ள section உருவாக்கவும். மேலும் மற்றொரு paragraph கொண்ட nested div உருவாக்கவும். Section-க்குள் உள்ள அனைத்து paragraphs-ஐ gray ஆகவும், section-ன் direct child paragraphs-ஐ red ஆகவும் மாற்ற descendant மற்றும் child selectors பயன்படுத்தவும்.",
    hintEnglish: "Combine section p and section > p selectors.",
    hintTamil: "section p மற்றும் section > p selectors இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "All paragraphs inside the section are gray, while direct child paragraphs are red.",
    expectedOutputTamil: "Section-க்குள் உள்ள அனைத்து paragraphs-ம் gray ஆக இருக்கும்; direct child paragraphs மட்டும் red ஆக இருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
section p {
  color: gray;
}
section > p {
  color: red;
}
</style>
</head>
<body>
<section>
  <h2>Section Heading</h2>
  <p>Direct paragraph</p>
  <div>
    <p>Nested paragraph</p>
  </div>
</section>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 15,
    title: "Select Adjacent Headings and Paragraphs",
    questionEnglish: "Create two heading and paragraph pairs. Use an h2 + p selector to style only the paragraph immediately following each h2 heading with a blue background.",
    questionTamil: "இரண்டு heading மற்றும் paragraph pairs உருவாக்கவும். ஒவ்வொரு h2 heading-க்கும் உடனடியாக அடுத்து வரும் paragraph-க்கு மட்டும் blue background அமைக்க h2 + p selector பயன்படுத்தவும்.",
    hintEnglish: "Use the adjacent sibling combinator (+).",
    hintTamil: "Adjacent sibling combinator (+) பயன்படுத்தவும்.",
    expectedOutput: "The first paragraph after each h2 heading has a blue background.",
    expectedOutputTamil: "ஒவ்வொரு h2 heading-க்கும் அடுத்த முதல் paragraph மட்டும் blue background கொண்டிருக்கும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h2 + p {
  background-color: lightblue;
}
</style>
</head>
<body>
<h2>HTML</h2>
<p>Learn HTML structure.</p>
<p>Practice HTML tags.</p>

<h2>CSS</h2>
<p>Learn CSS styling.</p>
<p>Practice CSS properties.</p>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 15,
    title: "Style All Following Siblings",
    questionEnglish: "Create a heading, a paragraph, a list, and another paragraph inside the same div. Use the general sibling combinator to style all paragraphs that follow the heading blue.",
    questionTamil: "ஒரே div-க்குள் heading, paragraph, list மற்றும் மற்றொரு paragraph உருவாக்கவும். Heading-க்கு பிறகு வரும் அனைத்து paragraph siblings-யும் நீலமாக மாற்ற general sibling combinator பயன்படுத்தவும்.",
    hintEnglish: "Use h2 ~ p. Remember that the elements must share the same parent.",
    hintTamil: "h2 ~ p பயன்படுத்தவும். Elements ஒரே parent-ஐ பகிர்ந்து கொள்ள வேண்டும்.",
    expectedOutput: "Both paragraphs following the heading appear blue, even though a list appears between them.",
    expectedOutputTamil: "இரண்டு paragraphs-க்கும் இடையில் list இருந்தாலும் heading-க்கு பிறகு வரும் இரண்டு paragraphs-ம் நீலமாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
h2 ~ p {
  color: blue;
}
</style>
</head>
<body>
<div>
  <h2>Learning Topics</h2>
  <p>HTML Basics</p>
  <ul>
    <li>Tags</li>
    <li>Elements</li>
  </ul>
  <p>CSS Basics</p>
</div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 15,
    title: "Style Nested Navigation Links",
    questionEnglish: "Create a navigation list inside a nav element. Use a descendant combinator to remove the underline from all links inside the nav and a child combinator to make direct list items bold.",
    questionTamil: "nav element-க்குள் navigation list உருவாக்கவும். nav-க்குள் உள்ள அனைத்து links-ன் underline-ஐ நீக்க descendant combinator மற்றும் direct list items-ஐ bold ஆக்க child combinator பயன்படுத்தவும்.",
    hintEnglish: "Use nav a and nav > ul > li selectors.",
    hintTamil: "nav a மற்றும் nav > ul > li selectors பயன்படுத்தவும்.",
    expectedOutput: "Navigation links have no underline, and direct list items are bold.",
    expectedOutputTamil: "Navigation links-ல் underline இருக்காது; direct list items bold ஆகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
nav a {
  text-decoration: none;
}
nav > ul > li {
  font-weight: bold;
}
</style>
</head>
<body>
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#courses">Courses</a></li>
  </ul>
</nav>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 15,
    title: "Challenge: Blog Article Styling",
    questionEnglish: "Create a blog article with a heading, introductory paragraph, nested content sections, and related paragraphs. Use descendant, child, adjacent sibling, and general sibling combinators to style different elements.",
    questionTamil: "Heading, introductory paragraph, nested content sections மற்றும் தொடர்புடைய paragraphs கொண்ட blog article உருவாக்கவும். வெவ்வேறு elements-ஐ வடிவமைக்க descendant, child, adjacent sibling மற்றும் general sibling combinators பயன்படுத்தவும்.",
    hintEnglish: "Think about parent-child relationships and sibling relationships between elements.",
    hintTamil: "Elements-க்கு இடையிலான parent-child மற்றும் sibling தொடர்புகளைப் புரிந்து selectors அமைக்கவும்.",
    expectedOutput: "A blog article with different styles applied according to the relationships between elements.",
    expectedOutputTamil: "Elements இடையிலான தொடர்புகளுக்கு ஏற்ப வெவ்வேறு styles கொண்ட blog article தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 15,
    title: "Challenge: DEEP CODE Navigation and Courses",
    questionEnglish: "Create a DEEP CODE page with a navigation menu, course sections, headings, and descriptions. Use all four CSS combinators to style navigation links, direct children, paragraphs following headings, and other related elements.",
    questionTamil: "Navigation menu, course sections, headings மற்றும் descriptions கொண்ட DEEP CODE page உருவாக்கவும். Navigation links, direct children, headings-க்கு பிறகு வரும் paragraphs மற்றும் தொடர்புடைய elements-ஐ வடிவமைக்க நான்கு CSS combinators-யும் பயன்படுத்தவும்.",
    hintEnglish: "Use space, >, +, and ~ combinators in different selectors.",
    hintTamil: "வெவ்வேறு selectors-ல் space, >, + மற்றும் ~ combinators பயன்படுத்தவும்.",
    expectedOutput: "A DEEP CODE page with clearly styled navigation and course sections using different combinators.",
    expectedOutputTamil: "வெவ்வேறு combinators மூலம் தெளிவாக வடிவமைக்கப்பட்ட navigation மற்றும் course sections கொண்ட DEEP CODE page.",
    challenge: true
  }
]

[
  {
    id: 1,
    topicId: 16,
    title: "Create a Hover Transition",
    questionEnglish: "Create a blue button. Use a CSS transition so its background changes smoothly to green when the user hovers over it.",
    questionTamil: "நீல நிற button உருவாக்கவும். பயனர் hover செய்யும்போது அதன் background மெதுவாக பச்சையாக மாற CSS transition பயன்படுத்தவும்.",
    hintEnglish: "Use transition: background-color 0.5s.",
    hintTamil: "transition: background-color 0.5s பயன்படுத்தவும்.",
    expectedOutput: "The button smoothly changes from blue to green when hovered.",
    expectedOutputTamil: "Hover செய்யும்போது button நீல நிறத்திலிருந்து பச்சை நிறத்திற்கு மெதுவாக மாறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
button {
  background-color: blue;
  color: white;
  padding: 15px 25px;
  transition: background-color 0.5s;
}
button:hover {
  background-color: green;
}
</style>
</head>
<body>
<button>Hover Me</button>
</body>
</html>`
  },
  {
    id: 2,
    topicId: 16,
    title: "Control Transition Duration",
    questionEnglish: "Create a button that changes its background from red to orange when hovered. Set the transition duration to 2 seconds.",
    questionTamil: "Hover செய்யும்போது background சிவப்பிலிருந்து orange ஆக மாறும் button உருவாக்கவும். Transition duration-ஐ 2 seconds ஆக அமைக்கவும்.",
    hintEnglish: "Use transition-duration: 2s.",
    hintTamil: "transition-duration: 2s பயன்படுத்தவும்.",
    expectedOutput: "The button smoothly changes from red to orange over 2 seconds.",
    expectedOutputTamil: "Button 2 seconds கால அளவில் சிவப்பிலிருந்து orange நிறத்திற்கு மெதுவாக மாறும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
button {
  background-color: red;
  color: white;
  padding: 15px 25px;
  transition-property: background-color;
  transition-duration: 2s;
}
button:hover {
  background-color: orange;
}
</style>
</head>
<body>
<button>Change Color</button>
</body>
</html>`
  },
  {
    id: 3,
    topicId: 16,
    title: "Scale an Element",
    questionEnglish: "Create a box with a blue background. Use transform: scale(1.2) to increase its size when the user hovers over it.",
    questionTamil: "நீல நிற background கொண்ட box உருவாக்கவும். பயனர் hover செய்யும்போது அதன் அளவை அதிகரிக்க transform: scale(1.2) பயன்படுத்தவும்.",
    hintEnglish: "Use the scale() transform function.",
    hintTamil: "scale() transform function பயன்படுத்தவும்.",
    expectedOutput: "The box becomes 1.2 times its original scale when hovered.",
    expectedOutputTamil: "Hover செய்யும்போது box அதன் ஆரம்ப அளவை விட 1.2 மடங்கு பெரிதாகத் தோன்றும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 120px;
  height: 120px;
  background-color: blue;
  transition: transform 0.4s;
}
.box:hover {
  transform: scale(1.2);
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 4,
    topicId: 16,
    title: "Rotate an Element",
    questionEnglish: "Create a square box. Use transform: rotate(45deg) to rotate it by 45 degrees when hovered.",
    questionTamil: "ஒரு சதுர வடிவ box உருவாக்கவும். Hover செய்யும்போது அதை 45 degrees சுழற்ற transform: rotate(45deg) பயன்படுத்தவும்.",
    hintEnglish: "Use the rotate() transform function.",
    hintTamil: "rotate() transform function பயன்படுத்தவும்.",
    expectedOutput: "The square rotates by 45 degrees when hovered.",
    expectedOutputTamil: "Hover செய்யும்போது சதுரம் 45 degrees சுழலும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: orange;
  transition: transform 0.5s;
}
.box:hover {
  transform: rotate(45deg);
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 5,
    topicId: 16,
    title: "Move an Element",
    questionEnglish: "Create a box and use transform: translateX(50px) to move it 50px to the right when hovered.",
    questionTamil: "ஒரு box உருவாக்கவும். Hover செய்யும்போது அதை 50px வலதுபுறம் நகர்த்த transform: translateX(50px) பயன்படுத்தவும்.",
    hintEnglish: "Use translateX() with a transition.",
    hintTamil: "translateX() மற்றும் transition பயன்படுத்தவும்.",
    expectedOutput: "The box smoothly moves 50px to the right when hovered.",
    expectedOutputTamil: "Hover செய்யும்போது box மெதுவாக 50px வலதுபுறம் நகரும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: purple;
  transition: transform 0.5s;
}
.box:hover {
  transform: translateX(50px);
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 6,
    topicId: 16,
    title: "Change Transition Timing",
    questionEnglish: "Create two buttons. Give the first button an ease transition and the second button a linear transition. Make both buttons change their background color when hovered.",
    questionTamil: "இரண்டு buttons உருவாக்கவும். முதல் button-க்கு ease transition மற்றும் இரண்டாவது button-க்கு linear transition அமைக்கவும். Hover செய்யும்போது இரண்டின் background நிறமும் மாற வேண்டும்.",
    hintEnglish: "Use transition-timing-function with ease and linear.",
    hintTamil: "transition-timing-function-ல் ease மற்றும் linear பயன்படுத்தவும்.",
    expectedOutput: "Both buttons change color, but their transition timing behavior is different.",
    expectedOutputTamil: "இரண்டு buttons-ம் நிறம் மாறும்; ஆனால் அவற்றின் transition வேகம் மாறுபடும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
button {
  padding: 15px;
  color: white;
  background-color: blue;
  transition-property: background-color;
  transition-duration: 1s;
}
.ease {
  transition-timing-function: ease;
}
.linear {
  transition-timing-function: linear;
}
button:hover {
  background-color: green;
}
</style>
</head>
<body>
<button class="ease">Ease</button>
<button class="linear">Linear</button>
</body>
</html>`
  },
  {
    id: 7,
    topicId: 16,
    title: "Combine Multiple Transforms",
    questionEnglish: "Create a box that scales to 1.2 times its size and rotates by 10 degrees when hovered. Use a transition to make the effect smooth.",
    questionTamil: "Hover செய்யும்போது 1.2 மடங்கு பெரிதாகி 10 degrees சுழலும் box உருவாக்கவும். இந்த விளைவை மென்மையாக்க transition பயன்படுத்தவும்.",
    hintEnglish: "Combine scale() and rotate() in one transform declaration.",
    hintTamil: "ஒரே transform declaration-ல் scale() மற்றும் rotate() இணைக்கவும்.",
    expectedOutput: "The box smoothly becomes larger and rotates when hovered.",
    expectedOutputTamil: "Hover செய்யும்போது box மெதுவாகப் பெரிதாகி சுழலும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: teal;
  transition: transform 0.5s;
}
.box:hover {
  transform: scale(1.2) rotate(10deg);
}
</style>
</head>
<body>
<div class="box"></div>
</body>
</html>`
  },
  {
    id: 8,
    topicId: 16,
    title: "Create a Card Hover Effect",
    questionEnglish: "Create a course card with a heading and description. When hovered, move the card 10px upwards and increase its size slightly. Use transitions to make the effect smooth.",
    questionTamil: "Heading மற்றும் description கொண்ட course card உருவாக்கவும். Hover செய்யும்போது card-ஐ 10px மேலே நகர்த்தி அதன் அளவைச் சிறிதளவு அதிகரிக்கவும். விளைவை மென்மையாக்க transitions பயன்படுத்தவும்.",
    hintEnglish: "Use translateY(-10px), scale(), and transition.",
    hintTamil: "translateY(-10px), scale() மற்றும் transition பயன்படுத்தவும்.",
    expectedOutput: "The course card smoothly moves upward and becomes slightly larger on hover.",
    expectedOutputTamil: "Hover செய்யும்போது course card மெதுவாக மேலே நகர்ந்து சிறிதளவு பெரிதாகும்.",
    challenge: false,
    solution: `<!DOCTYPE html>
<html>
<head>
<style>
.card {
  width: 250px;
  padding: 20px;
  background-color: lightblue;
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-10px) scale(1.03);
}
</style>
</head>
<body>
<div class="card">
  <h2>CSS Course</h2>
  <p>Learn CSS transitions and transforms.</p>
</div>
</body>
</html>`
  },
  {
    id: 9,
    topicId: 16,
    title: "Challenge: Interactive Product Cards",
    questionEnglish: "Create three product cards. Add smooth hover effects using transitions and transforms. Each card should move slightly upward, scale, and change its border color when hovered.",
    questionTamil: "மூன்று product cards உருவாக்கவும். Hover செய்யும்போது transitions மற்றும் transforms பயன்படுத்தி மென்மையான விளைவுகளை உருவாக்கவும். ஒவ்வொரு card-ம் சிறிது மேலே நகர்ந்து, பெரிதாகி, border நிறத்தை மாற்ற வேண்டும்.",
    hintEnglish: "Combine translateY(), scale(), border-color, and transition.",
    hintTamil: "translateY(), scale(), border-color மற்றும் transition இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "Three product cards with smooth hover animations.",
    expectedOutputTamil: "மென்மையான hover animations கொண்ட மூன்று product cards தோன்றும்.",
    challenge: true
  },
  {
    id: 10,
    topicId: 16,
    title: "Challenge: DEEP CODE Landing Page Effects",
    questionEnglish: "Create a DEEP CODE landing page with a heading, description, button, and course cards. Add smooth transitions and transforms to buttons and cards to improve the user experience.",
    questionTamil: "Heading, description, button மற்றும் course cards கொண்ட DEEP CODE landing page உருவாக்கவும். User experience மேம்பட buttons மற்றும் cards-க்கு smooth transitions மற்றும் transforms சேர்க்கவும்.",
    hintEnglish: "Use different transform effects and suitable transition properties for each element.",
    hintTamil: "ஒவ்வொரு element-க்கும் வெவ்வேறு transform effects மற்றும் பொருத்தமான transition properties பயன்படுத்தவும்.",
    expectedOutput: "An attractive landing page with smooth interactive hover effects.",
    expectedOutputTamil: "மென்மையான interactive hover effects கொண்ட அழகான landing page தோன்றும்.",
    challenge: true
  }
]

]
