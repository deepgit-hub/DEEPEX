
const topics = [
  {
    id: 1,
    title: "Introduction to CSS",
    englishDefinition:
      "CSS (Cascading Style Sheets) is a stylesheet language used to control the appearance and layout of HTML elements on a webpage.",
    tamilDefinition:
      "CSS (Cascading Style Sheets) என்பது வலைப்பக்கத்தில் உள்ள HTML உறுப்புகளின் தோற்றம் மற்றும் அமைப்பை கட்டுப்படுத்த பயன்படும் ஒரு stylesheet மொழியாகும்.",
    realWorldUsage:
      "CSS is used to design websites by adding colors, fonts, spacing, layouts, and visual effects. For example, it makes the DEEP CODE platform visually attractive.",
    realWorldUsageTamil:
      "வலைத்தளங்களுக்கு நிறங்கள், எழுத்துருக்கள், இடைவெளிகள் மற்றும் வடிவமைப்புகளை வழங்க CSS பயன்படுகிறது. உதாரணமாக, DEEP CODE தளத்தை அழகாக வடிவமைக்க CSS உதவுகிறது.",
    syntax: `selector {
  property: value;
}`,
    syntaxExplanationEnglish: [
      "The selector identifies the HTML element to style.",
      "The property specifies which style should change.",
      "The value defines how that property should appear."
    ],
    syntaxExplanationTamil: [
      "Selector என்பது எந்த HTML உறுப்பை வடிவமைக்க வேண்டும் என்பதை குறிப்பிடுகிறது.",
      "Property என்பது எந்த வடிவமைப்பு மாற்றப்பட வேண்டும் என்பதை குறிப்பிடுகிறது.",
      "Value என்பது அந்த property எவ்வாறு இருக்க வேண்டும் என்பதை குறிப்பிடுகிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Introduction to CSS</title>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Welcome to DEEP CODE</h1>
</body>
</html>`,
    programExplanationEnglish: [
      "The style tag contains CSS code inside the HTML document.",
      "The h1 selector targets the heading element.",
      "The color property changes the heading text to blue."
    ],
    programExplanationTamil: [
      "Style tag-க்குள் HTML ஆவணத்தின் CSS code எழுதப்படுகிறது.",
      "h1 selector தலைப்பு உறுப்பை தேர்வு செய்கிறது.",
      "Color property தலைப்பின் எழுத்தை நீல நிறமாக மாற்றுகிறது."
    ],
    output: "A blue heading displaying 'Welcome to DEEP CODE'."
  },
  {
    id: 2,
    title: "CSS Syntax and Selectors",
    englishDefinition:
      "CSS syntax defines how styling rules are written. Selectors are used to target HTML elements based on their tag name, class, ID, or other conditions.",
    tamilDefinition:
      "CSS Syntax என்பது வடிவமைப்பு விதிகளை எழுதும் முறையாகும். HTML உறுப்புகளை அவற்றின் tag name, class, ID அல்லது பிற நிபந்தனைகளின் அடிப்படையில் தேர்வு செய்ய Selectors பயன்படுகின்றன.",
    realWorldUsage:
      "Selectors help developers apply different styles to specific sections, buttons, headings, and other elements of a website.",
    realWorldUsageTamil:
      "ஒரு வலைத்தளத்தின் குறிப்பிட்ட பகுதிகள், பொத்தான்கள், தலைப்புகள் மற்றும் பிற உறுப்புகளுக்கு தனித்தனியாக வடிவமைப்புகளை வழங்க Selectors உதவுகின்றன.",
    syntax: `/* Element selector */
p {
  color: red;
}

/* Class selector */
.heading {
  color: blue;
}

/* ID selector */
#main {
  background-color: yellow;
}`,
    syntaxExplanationEnglish: [
      "Element selectors target HTML tags directly.",
      "Class selectors begin with a dot (.).",
      "ID selectors begin with a hash (#).",
      "Curly braces contain the CSS declarations."
    ],
    syntaxExplanationTamil: [
      "Element selector நேரடியாக HTML tag-களை தேர்வு செய்கிறது.",
      "Class selector dot (.) குறியுடன் தொடங்குகிறது.",
      "ID selector hash (#) குறியுடன் தொடங்குகிறது.",
      "Curly braces-க்குள் CSS declarations எழுதப்படுகின்றன."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Selectors</title>
  <style>
    p {
      color: green;
    }

    .heading {
      color: blue;
    }

    #special {
      color: red;
    }
  </style>
</head>
<body>
  <h1 class="heading">CSS Selectors</h1>
  <p>Element Selector</p>
  <p id="special">ID Selector</p>
</body>
</html>`,
    programExplanationEnglish: [
      "The p selector changes paragraph text to green.",
      "The heading class applies blue color to the h1 element.",
      "The special ID applies red color to the second paragraph.",
      "Each selector targets a different HTML element."
    ],
    programExplanationTamil: [
      "p selector paragraph எழுத்துகளை பச்சை நிறமாக மாற்றுகிறது.",
      "heading class h1 உறுப்பிற்கு நீல நிறத்தை வழங்குகிறது.",
      "special ID இரண்டாவது paragraph-க்கு சிவப்பு நிறத்தை வழங்குகிறது.",
      "ஒவ்வொரு selector-ம் வெவ்வேறு HTML உறுப்புகளை தேர்வு செய்கிறது."
    ],
    output: "A blue heading, a green paragraph, and a red paragraph."
  },
  {
    id: 3,
    title: "CSS Colors and Backgrounds",
    englishDefinition:
      "CSS colors and background properties are used to control the foreground and background appearance of HTML elements.",
    tamilDefinition:
      "CSS Colors மற்றும் Background properties ஆகியவை HTML உறுப்புகளின் எழுத்து நிறம் மற்றும் பின்னணி தோற்றத்தை கட்டுப்படுத்த பயன்படுகின்றன.",
    realWorldUsage:
      "Websites use colors and backgrounds to maintain brand identity, highlight important sections, and improve readability.",
    realWorldUsageTamil:
      "வலைத்தளங்கள் தங்களது brand அடையாளத்தை உருவாக்கவும், முக்கியமான பகுதிகளை முன்னிலைப்படுத்தவும், வாசிப்பை எளிதாக்கவும் நிறங்கள் மற்றும் பின்னணிகளை பயன்படுத்துகின்றன.",
    syntax: `h1 {
  color: white;
  background-color: blue;
}

body {
  background-color: lightgray;
}`,
    syntaxExplanationEnglish: [
      "The color property changes the text color.",
      "The background-color property changes the background color.",
      "Colors can be specified using names, HEX, RGB, or HSL values."
    ],
    syntaxExplanationTamil: [
      "color property எழுத்தின் நிறத்தை மாற்றுகிறது.",
      "background-color property பின்னணி நிறத்தை மாற்றுகிறது.",
      "நிறங்களை names, HEX, RGB அல்லது HSL values மூலம் குறிப்பிடலாம்."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Colors</title>
  <style>
    body {
      background-color: lightgray;
    }

    h1 {
      color: white;
      background-color: navy;
    }

    p {
      color: green;
    }
  </style>
</head>
<body>
  <h1>Welcome</h1>
  <p>Learn CSS Colors</p>
</body>
</html>`,
    programExplanationEnglish: [
      "The body receives a light gray background.",
      "The heading receives white text and a navy background.",
      "The paragraph text becomes green."
    ],
    programExplanationTamil: [
      "body உறுப்பிற்கு வெளிர் சாம்பல் நிற பின்னணி வழங்கப்படுகிறது.",
      "தலைப்பிற்கு வெள்ளை எழுத்தும் navy பின்னணியும் வழங்கப்படுகிறது.",
      "Paragraph எழுத்துகள் பச்சை நிறமாக மாற்றப்படுகின்றன."
    ],
    output: "A light gray webpage with a navy heading containing white text and a green paragraph."
  },
  {
    id: 4,
    title: "CSS Text and Font Styling",
    englishDefinition:
      "CSS text and font properties control the appearance of text, including font family, size, weight, alignment, decoration, and spacing.",
    tamilDefinition:
      "CSS Text மற்றும் Font properties எழுத்துரு வகை, அளவு, தடிமன், சீரமைப்பு, அலங்காரம் மற்றும் இடைவெளி போன்ற எழுத்துகளின் தோற்றத்தை கட்டுப்படுத்துகின்றன.",
    realWorldUsage:
      "Text styling is used in navigation menus, headings, paragraphs, product descriptions, and buttons to improve readability and visual appearance.",
    realWorldUsageTamil:
      "வாசிப்பை எளிதாக்கவும் வலைத்தளத்தின் தோற்றத்தை மேம்படுத்தவும் navigation menus, headings, paragraphs, product descriptions மற்றும் buttons ஆகியவற்றில் text styling பயன்படுகிறது.",
    syntax: `p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
}`,
    syntaxExplanationEnglish: [
      "font-family specifies the font type.",
      "font-size controls the size of the text.",
      "font-weight controls the thickness of the text.",
      "text-align controls horizontal alignment.",
      "text-decoration adds or removes text decorations."
    ],
    syntaxExplanationTamil: [
      "font-family எழுத்துரு வகையை குறிப்பிடுகிறது.",
      "font-size எழுத்தின் அளவை கட்டுப்படுத்துகிறது.",
      "font-weight எழுத்தின் தடிமனை கட்டுப்படுத்துகிறது.",
      "text-align எழுத்தின் கிடைமட்ட சீரமைப்பை கட்டுப்படுத்துகிறது.",
      "text-decoration எழுத்திற்கு underline போன்ற அலங்காரங்களை வழங்குகிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Text Styling</title>
  <style>
    h1 {
      font-family: Arial, sans-serif;
      font-size: 30px;
      text-align: center;
      color: blue;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>CSS Text Styling</h1>
  <p>Welcome to DEEP CODE</p>
</body>
</html>`,
    programExplanationEnglish: [
      "The heading uses Arial font with a size of 30 pixels.",
      "The heading is centered and displayed in blue.",
      "The paragraph uses an 18-pixel bold font.",
      "The paragraph text is underlined."
    ],
    programExplanationTamil: [
      "தலைப்பு 30 pixels அளவுள்ள Arial எழுத்துருவை பயன்படுத்துகிறது.",
      "தலைப்பு மையத்தில் நீல நிறத்தில் காட்டப்படுகிறது.",
      "Paragraph 18-pixel தடிமனான எழுத்துருவை பயன்படுத்துகிறது.",
      "Paragraph எழுத்துகளுக்கு underline வழங்கப்படுகிறது."
    ],
    output: "A centered blue heading and a bold, underlined paragraph."
  },
  {
    id: 5,
    title: "CSS Box Model",
    englishDefinition:
      "The CSS Box Model explains how every HTML element is represented as a rectangular box consisting of content, padding, border, and margin.",
    tamilDefinition:
      "CSS Box Model என்பது ஒவ்வொரு HTML உறுப்பும் content, padding, border மற்றும் margin ஆகிய நான்கு பகுதிகளைக் கொண்ட செவ்வக பெட்டியாக எவ்வாறு அமைக்கப்படுகிறது என்பதை விளக்குகிறது.",
    realWorldUsage:
      "The box model is used to control the spacing, size, and boundaries of cards, buttons, containers, and page sections.",
    realWorldUsageTamil:
      "Cards, buttons, containers மற்றும் வலைப்பக்க பகுதிகளின் அளவு, இடைவெளி மற்றும் எல்லைகளை கட்டுப்படுத்த Box Model பயன்படுகிறது.",
    syntax: `.box {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`,
    syntaxExplanationEnglish: [
      "Content is the actual text or media inside an element.",
      "Padding is the space between the content and border.",
      "Border surrounds the padding and content.",
      "Margin is the space outside the border.",
      "With the default content-box sizing, width does not include padding and border."
    ],
    syntaxExplanationTamil: [
      "Content என்பது உறுப்பிற்குள் உள்ள உண்மையான text அல்லது media ஆகும்.",
      "Padding என்பது content மற்றும் border இடையிலான இடைவெளியாகும்.",
      "Border என்பது padding மற்றும் content-ஐ சுற்றியுள்ள எல்லையாகும்.",
      "Margin என்பது border-க்கு வெளியே உள்ள இடைவெளியாகும்.",
      "இயல்பான content-box முறையில் width-ல் padding மற்றும் border சேர்க்கப்படாது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Box Model</title>
  <style>
    .box {
      width: 200px;
      padding: 20px;
      border: 5px solid black;
      margin: 10px;
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <div class="box">
    DEEP CODE
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div element receives a width of 200 pixels.",
      "Padding adds 20 pixels of space around its content.",
      "A 5-pixel black border surrounds the box.",
      "Margin adds 10 pixels of external spacing.",
      "The box receives a light blue background."
    ],
    programExplanationTamil: [
      "div உறுப்பிற்கு 200 pixels அகலம் வழங்கப்படுகிறது.",
      "Padding content-ஐ சுற்றி 20 pixels இடைவெளியை உருவாக்குகிறது.",
      "5-pixel கருப்பு border பெட்டியை சுற்றுகிறது.",
      "Margin வெளிப்புறத்தில் 10 pixels இடைவெளியை உருவாக்குகிறது.",
      "பெட்டிக்கு வெளிர் நீல நிற பின்னணி வழங்கப்படுகிறது."
    ],
    output: "A light blue rectangular box containing DEEP CODE, with padding, a black border, and external margin."
  },
  {
    id: 6,
    title: "CSS Borders and Outlines",
    englishDefinition:
      "CSS border properties create visible boundaries around HTML elements. Outline properties create an additional line outside the border without taking up layout space.",
    tamilDefinition:
      "CSS Border properties HTML உறுப்புகளை சுற்றி தெளிவான எல்லைகளை உருவாக்குகின்றன. Outline properties border-க்கு வெளியே கூடுதல் கோட்டை உருவாக்குகின்றன; இது layout இடத்தை எடுத்துக்கொள்ளாது.",
    realWorldUsage:
      "Borders and outlines are used in cards, input fields, buttons, and focus indicators to separate elements and improve usability.",
    realWorldUsageTamil:
      "உறுப்புகளை தனித்தனியாக காட்டவும் பயன்பாட்டை மேம்படுத்தவும் cards, input fields, buttons மற்றும் focus indicators ஆகியவற்றில் borders மற்றும் outlines பயன்படுகின்றன.",
    syntax: `.box {
  border: 2px solid blue;
  border-radius: 10px;
  outline: 2px dashed red;
}`,
    syntaxExplanationEnglish: [
      "border sets the width, style, and color of the border.",
      "border-radius rounds the corners of an element.",
      "outline creates an additional line outside the border.",
      "Outline does not occupy space in the normal box layout."
    ],
    syntaxExplanationTamil: [
      "border என்பது எல்லையின் தடிமன், வகை மற்றும் நிறத்தை அமைக்கிறது.",
      "border-radius உறுப்பின் மூலைகளை வட்டமாக மாற்றுகிறது.",
      "outline என்பது border-க்கு வெளியே கூடுதல் கோட்டை உருவாக்குகிறது.",
      "Outline இயல்பான box layout-ல் இடத்தை எடுத்துக்கொள்ளாது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Borders and Outlines</title>
  <style>
    .box {
      border: 2px solid blue;
      border-radius: 10px;
      outline: 2px dashed red;
      padding: 20px;
      width: 200px;
    }
  </style>
</head>
<body>
  <div class="box">
    CSS Borders
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div receives a solid blue border.",
      "The border corners become rounded.",
      "A dashed red outline appears outside the border.",
      "Padding creates space between the text and border."
    ],
    programExplanationTamil: [
      "div உறுப்பிற்கு நீல நிற solid border வழங்கப்படுகிறது.",
      "Border-ன் மூலைகள் வட்டமாக மாற்றப்படுகின்றன.",
      "Border-க்கு வெளியே சிவப்பு dashed outline தோன்றுகிறது.",
      "Padding எழுத்துக்கும் border-க்கும் இடையில் இடைவெளியை உருவாக்குகிறது."
    ],
    output: "A rectangular box with rounded blue borders and a dashed red outline."
  },
  {
    id: 7,
    title: "CSS Margins and Padding",
    englishDefinition:
      "Margin and padding are CSS spacing properties. Margin creates space outside an element's border, while padding creates space between the content and the border.",
    tamilDefinition:
      "Margin மற்றும் Padding ஆகியவை CSS இடைவெளி properties ஆகும். Margin என்பது உறுப்பின் border-க்கு வெளியே இடைவெளியை உருவாக்குகிறது. Padding என்பது content மற்றும் border இடையில் இடைவெளியை உருவாக்குகிறது.",
    realWorldUsage:
      "These properties are used to arrange webpage sections, create space between cards, and prevent text from touching the edges of containers.",
    realWorldUsageTamil:
      "வலைப்பக்க பகுதிகளை ஒழுங்குபடுத்தவும், cards இடையே இடைவெளி உருவாக்கவும், எழுத்துகள் container எல்லைகளை தொடாமல் இருக்கவும் இந்த properties பயன்படுகின்றன.",
    syntax: `.box {
  margin: 20px;
  padding: 15px;
}

/* Individual sides */
.box {
  margin-top: 10px;
  padding-left: 20px;
}`,
    syntaxExplanationEnglish: [
      "margin creates external spacing around an element.",
      "padding creates internal spacing inside an element.",
      "margin-top, margin-right, margin-bottom, and margin-left control individual margin sides.",
      "Padding can also be controlled separately for each side."
    ],
    syntaxExplanationTamil: [
      "margin ஒரு உறுப்பை சுற்றி வெளிப்புற இடைவெளியை உருவாக்குகிறது.",
      "padding ஒரு உறுப்பிற்குள் உள்ளக இடைவெளியை உருவாக்குகிறது.",
      "margin-top, margin-right, margin-bottom மற்றும் margin-left தனித்தனி margin பக்கங்களை கட்டுப்படுத்துகின்றன.",
      "Padding-ஐயும் ஒவ்வொரு பக்கத்திற்கும் தனித்தனியாக அமைக்கலாம்."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Margin and Padding</title>
  <style>
    .box {
      margin: 20px;
      padding: 15px;
      background-color: lightgreen;
      border: 2px solid green;
    }
  </style>
</head>
<body>
  <div class="box">
    Welcome to CSS
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div receives 20 pixels of external margin.",
      "Padding creates 15 pixels of internal space.",
      "The background color becomes light green.",
      "A green border surrounds the element."
    ],
    programExplanationTamil: [
      "div உறுப்பிற்கு 20 pixels வெளிப்புற margin வழங்கப்படுகிறது.",
      "Padding 15 pixels உள்ளக இடைவெளியை உருவாக்குகிறது.",
      "பின்னணி நிறம் வெளிர் பச்சையாக மாற்றப்படுகிறது.",
      "பச்சை நிற border உறுப்பை சுற்றுகிறது."
    ],
    output: "A light green box with internal padding and external margin."
  },
  {
    id: 8,
    title: "CSS Width and Height",
    englishDefinition:
      "CSS width and height properties control the dimensions of HTML elements. They can be defined using pixels, percentages, viewport units, and other supported CSS units.",
    tamilDefinition:
      "CSS width மற்றும் height properties HTML உறுப்புகளின் அகலம் மற்றும் உயரத்தை கட்டுப்படுத்துகின்றன. இவற்றை pixels, percentages, viewport units மற்றும் பிற CSS units மூலம் அமைக்கலாம்.",
    realWorldUsage:
      "Width and height are used to control the size of images, cards, buttons, containers, and other webpage elements.",
    realWorldUsageTamil:
      "Images, cards, buttons, containers மற்றும் பிற வலைப்பக்க உறுப்புகளின் அளவை கட்டுப்படுத்த width மற்றும் height பயன்படுகின்றன.",
    syntax: `.box {
  width: 300px;
  height: 150px;
  max-width: 100%;
  min-height: 100px;
}`,
    syntaxExplanationEnglish: [
      "width specifies the width of an element.",
      "height specifies the height of an element.",
      "max-width sets the maximum allowed width.",
      "min-height sets the minimum allowed height.",
      "CSS also supports units such as %, vw, and vh."
    ],
    syntaxExplanationTamil: [
      "width ஒரு உறுப்பின் அகலத்தை குறிப்பிடுகிறது.",
      "height ஒரு உறுப்பின் உயரத்தை குறிப்பிடுகிறது.",
      "max-width அதிகபட்சமாக அனுமதிக்கப்படும் அகலத்தை அமைக்கிறது.",
      "min-height குறைந்தபட்ச உயரத்தை அமைக்கிறது.",
      "% , vw மற்றும் vh போன்ற units-களையும் CSS ஆதரிக்கிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Width and Height</title>
  <style>
    .box {
      width: 300px;
      height: 150px;
      background-color: orange;
    }
  </style>
</head>
<body>
  <div class="box">
    CSS Dimensions
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div element receives a width of 300 pixels.",
      "Its height is set to 150 pixels.",
      "The background color is orange.",
      "The text appears inside the rectangular element."
    ],
    programExplanationTamil: [
      "div உறுப்பிற்கு 300 pixels அகலம் வழங்கப்படுகிறது.",
      "அதன் உயரம் 150 pixels ஆக அமைக்கப்படுகிறது.",
      "பின்னணி நிறம் ஆரஞ்சு நிறமாக மாற்றப்படுகிறது.",
      "செவ்வக உறுப்பிற்குள் எழுத்துகள் காட்டப்படுகின்றன."
    ],
    output: "An orange rectangle with a width of 300 pixels and a height of 150 pixels."
  },
  {
    id: 9,
    title: "CSS Display Property",
    englishDefinition:
      "The CSS display property determines how an HTML element is displayed in the webpage layout. Common values include block, inline, inline-block, flex, grid, and none.",
    tamilDefinition:
      "CSS display property என்பது ஒரு HTML உறுப்பு வலைப்பக்க layout-ல் எவ்வாறு காட்டப்பட வேண்டும் என்பதை தீர்மானிக்கிறது. பொதுவான values: block, inline, inline-block, flex, grid மற்றும் none.",
    realWorldUsage:
      "Display is used to create navigation menus, arrange elements horizontally or vertically, hide elements, and build modern webpage layouts.",
    realWorldUsageTamil:
      "Navigation menus உருவாக்கவும், உறுப்புகளை கிடைமட்டமாக அல்லது செங்குத்தாக அமைக்கவும், உறுப்புகளை மறைக்கவும், நவீன வலைப்பக்க layout உருவாக்கவும் display பயன்படுகிறது.",
    syntax: `.box {
  display: block;
}

.menu {
  display: inline-block;
}

.container {
  display: flex;
}`,
    syntaxExplanationEnglish: [
      "block elements usually start on a new line and take the available width by default.",
      "inline elements flow within text and do not accept width and height in the usual way.",
      "inline-block elements flow inline while supporting width and height.",
      "flex enables flexible layouts.",
      "none removes the element from the layout."
    ],
    syntaxExplanationTamil: [
      "block உறுப்புகள் பொதுவாக புதிய வரியில் தொடங்கி கிடைக்கும் அகலத்தை எடுத்துக்கொள்கின்றன.",
      "inline உறுப்புகள் text-ன் தொடர்ச்சியாக தோன்றும்; பொதுவாக width மற்றும் height-ஐ வழக்கமான முறையில் ஏற்காது.",
      "inline-block உறுப்புகள் ஒரே வரியில் தோன்றுவதுடன் width மற்றும் height-ஐ ஆதரிக்கின்றன.",
      "flex நெகிழ்வான layout உருவாக்க உதவுகிறது.",
      "none ஒரு உறுப்பை layout-லிருந்து மறைக்கிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Display Property</title>
  <style>
    .item {
      display: inline-block;
      background-color: lightblue;
      padding: 15px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <div class="item">HTML</div>
  <div class="item">CSS</div>
  <div class="item">JavaScript</div>
</body>
</html>`,
    programExplanationEnglish: [
      "The item class applies styles to all three div elements.",
      "display: inline-block allows the elements to appear next to each other.",
      "Padding creates space inside each element.",
      "Margin creates space between the elements."
    ],
    programExplanationTamil: [
      "item class மூன்று div உறுப்புகளுக்கும் வடிவமைப்புகளை வழங்குகிறது.",
      "display: inline-block உறுப்புகளை ஒன்றன் அருகில் மற்றொன்றாக காட்டுகிறது.",
      "Padding ஒவ்வொரு உறுப்பிற்குள்ளும் இடைவெளியை உருவாக்குகிறது.",
      "Margin உறுப்புகளுக்கு இடையில் இடைவெளியை உருவாக்குகிறது."
    ],
    output: "Three light blue boxes displaying HTML, CSS, and JavaScript side by side."
  },
  {
    id: 10,
    title: "CSS Position Property",
    englishDefinition:
      "The CSS position property controls how an element is positioned in a webpage. Common values are static, relative, absolute, fixed, and sticky.",
    tamilDefinition:
      "CSS position property என்பது வலைப்பக்கத்தில் ஒரு உறுப்பின் இடத்தை எவ்வாறு அமைக்க வேண்டும் என்பதை கட்டுப்படுத்துகிறது. பொதுவான values: static, relative, absolute, fixed மற்றும் sticky.",
    realWorldUsage:
      "Position is used to create floating buttons, fixed navigation bars, notification badges, overlays, and elements placed at specific locations.",
    realWorldUsageTamil:
      "Floating buttons, fixed navigation bars, notification badges, overlays மற்றும் குறிப்பிட்ட இடங்களில் உறுப்புகளை வைக்க position property பயன்படுகிறது.",
    syntax: `.box {
  position: relative;
  top: 20px;
  left: 10px;
}`,
    syntaxExplanationEnglish: [
      "static is the default positioning behavior.",
      "relative positions an element relative to its normal position.",
      "absolute positions an element relative to its nearest positioned ancestor.",
      "fixed positions an element relative to the viewport.",
      "sticky behaves like normal flow until its scrolling threshold is reached.",
      "top, right, bottom, and left control offsets for positioned elements."
    ],
    syntaxExplanationTamil: [
      "static என்பது இயல்பான positioning முறையாகும்.",
      "relative ஒரு உறுப்பை அதன் இயல்பான இடத்தை அடிப்படையாகக் கொண்டு நகர்த்துகிறது.",
      "absolute அருகிலுள்ள positioned ancestor-ஐ அடிப்படையாகக் கொண்டு உறுப்பை அமைக்கிறது.",
      "fixed ஒரு உறுப்பை viewport-ஐ அடிப்படையாகக் கொண்டு நிலையாக அமைக்கிறது.",
      "sticky குறிப்பிட்ட scroll நிலையை அடையும் வரை இயல்பான முறையில் செயல்படுகிறது.",
      "top, right, bottom மற்றும் left ஆகியவை positioned உறுப்புகளின் இடமாற்றத்தை கட்டுப்படுத்துகின்றன."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Position Property</title>
  <style>
    .container {
      position: relative;
      width: 300px;
      height: 150px;
      background-color: lightgray;
    }

    .box {
      position: absolute;
      top: 20px;
      left: 30px;
      background-color: orange;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">DEEP CODE</div>
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The container is given relative positioning.",
      "The inner box is given absolute positioning.",
      "The nearest positioned ancestor is the container.",
      "The box is placed 20 pixels from the container's top and 30 pixels from its left.",
      "The box receives an orange background."
    ],
    programExplanationTamil: [
      "Container-க்கு relative positioning வழங்கப்படுகிறது.",
      "உள்ளே இருக்கும் box-க்கு absolute positioning வழங்கப்படுகிறது.",
      "அருகிலுள்ள positioned ancestor என்பது container ஆகும்.",
      "Box container-ன் மேலிருந்து 20 pixels மற்றும் இடதுபுறத்திலிருந்து 30 pixels தூரத்தில் அமைக்கப்படுகிறது.",
      "Box-க்கு ஆரஞ்சு நிற பின்னணி வழங்கப்படுகிறது."
    ],
    output: "An orange DEEP CODE box positioned 20 pixels from the top and 30 pixels from the left inside a light gray container."
  },

[
  {
    id: 11,
    title: "CSS Flexbox",
    englishDefinition:
      "CSS Flexbox is a one-dimensional layout system used to arrange elements in a row or column. It provides flexible control over alignment, spacing, and distribution of items.",
    tamilDefinition:
      "CSS Flexbox என்பது உறுப்புகளை ஒரு வரிசை அல்லது நெடுவரிசையில் அமைக்க பயன்படும் ஒரு பரிமாண layout முறையாகும். இது உறுப்புகளின் சீரமைப்பு, இடைவெளி மற்றும் பகிர்வை நெகிழ்வாக கட்டுப்படுத்துகிறது.",
    realWorldUsage:
      "Flexbox is commonly used to create navigation bars, align buttons, arrange cards, and center content on websites.",
    realWorldUsageTamil:
      "வலைத்தளங்களில் navigation bars உருவாக்கவும், buttons-ஐ சீரமைக்கவும், cards-ஐ வரிசைப்படுத்தவும், content-ஐ மையப்படுத்தவும் Flexbox பயன்படுகிறது.",
    syntax: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}`,
    syntaxExplanationEnglish: [
      "display: flex enables Flexbox on a container.",
      "flex-direction controls the direction of flex items.",
      "justify-content aligns items along the main axis.",
      "align-items aligns items along the cross axis.",
      "gap creates space between flex items."
    ],
    syntaxExplanationTamil: [
      "display: flex ஒரு container-ல் Flexbox முறையை செயல்படுத்துகிறது.",
      "flex-direction உறுப்புகள் அமைக்கப்படும் திசையை கட்டுப்படுத்துகிறது.",
      "justify-content main axis வழியாக உறுப்புகளை சீரமைக்கிறது.",
      "align-items cross axis வழியாக உறுப்புகளை சீரமைக்கிறது.",
      "gap உறுப்புகளுக்கு இடையில் இடைவெளியை உருவாக்குகிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Flexbox</title>
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15px;
      height: 150px;
      background-color: lightgray;
    }

    .item {
      padding: 20px;
      background-color: steelblue;
      color: white;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">HTML</div>
    <div class="item">CSS</div>
    <div class="item">JavaScript</div>
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The container uses display: flex.",
      "justify-content centers the items horizontally in the default row direction.",
      "align-items centers the items vertically.",
      "gap creates 15 pixels of space between the items.",
      "Each item receives a blue background and white text."
    ],
    programExplanationTamil: [
      "Container-ல் display: flex பயன்படுத்தப்படுகிறது.",
      "இயல்பான row திசையில் justify-content உறுப்புகளை கிடைமட்டமாக மையப்படுத்துகிறது.",
      "align-items உறுப்புகளை செங்குத்தாக மையப்படுத்துகிறது.",
      "gap உறுப்புகளுக்கு இடையில் 15 pixels இடைவெளியை உருவாக்குகிறது.",
      "ஒவ்வொரு உறுப்பிற்கும் நீல பின்னணி மற்றும் வெள்ளை எழுத்துகள் வழங்கப்படுகின்றன."
    ],
    output:
      "Three blue boxes displaying HTML, CSS, and JavaScript arranged horizontally and centered inside a gray container."
  },
  {
    id: 12,
    title: "CSS Grid",
    englishDefinition:
      "CSS Grid is a two-dimensional layout system that allows developers to arrange elements into rows and columns.",
    tamilDefinition:
      "CSS Grid என்பது உறுப்புகளை வரிசைகள் மற்றும் நெடுவரிசைகளில் அமைக்க உதவும் இரு பரிமாண layout முறையாகும்.",
    realWorldUsage:
      "CSS Grid is used to build website layouts, image galleries, product grids, dashboards, and card collections.",
    realWorldUsageTamil:
      "Website layouts, image galleries, product grids, dashboards மற்றும் card collections உருவாக்க CSS Grid பயன்படுகிறது.",
    syntax: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`,
    syntaxExplanationEnglish: [
      "display: grid enables CSS Grid.",
      "grid-template-columns defines the number and size of columns.",
      "grid-template-rows defines row sizes.",
      "gap creates spacing between grid items.",
      "1fr represents one fraction of the available grid space."
    ],
    syntaxExplanationTamil: [
      "display: grid CSS Grid முறையை செயல்படுத்துகிறது.",
      "grid-template-columns நெடுவரிசைகளின் எண்ணிக்கை மற்றும் அளவை குறிப்பிடுகிறது.",
      "grid-template-rows வரிசைகளின் அளவை குறிப்பிடுகிறது.",
      "gap Grid உறுப்புகளுக்கு இடையில் இடைவெளியை உருவாக்குகிறது.",
      "1fr என்பது கிடைக்கும் Grid இடத்தின் ஒரு பங்கைக் குறிக்கிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Grid</title>
  <style>
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .item {
      background-color: teal;
      color: white;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">HTML</div>
    <div class="item">CSS</div>
    <div class="item">JavaScript</div>
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The container uses display: grid.",
      "repeat(3, 1fr) creates three equal-width columns.",
      "gap creates 10 pixels of spacing between grid items.",
      "Each item receives a teal background and white text."
    ],
    programExplanationTamil: [
      "Container-ல் display: grid பயன்படுத்தப்படுகிறது.",
      "repeat(3, 1fr) மூன்று சம அகலமுள்ள நெடுவரிசைகளை உருவாக்குகிறது.",
      "gap ஒவ்வொரு Grid உறுப்பிற்கும் இடையில் 10 pixels இடைவெளியை உருவாக்குகிறது.",
      "ஒவ்வொரு உறுப்பிற்கும் teal பின்னணி மற்றும் வெள்ளை எழுத்துகள் வழங்கப்படுகின்றன."
    ],
    output:
      "Three teal boxes displaying HTML, CSS, and JavaScript in three equal-width columns."
  },
  {
    id: 13,
    title: "CSS Pseudo-Classes",
    englishDefinition:
      "A CSS pseudo-class is a keyword added to a selector to style an element when it is in a particular state or matches a specific condition.",
    tamilDefinition:
      "CSS Pseudo-Class என்பது ஒரு HTML உறுப்பு குறிப்பிட்ட நிலையில் இருக்கும்போது அல்லது குறிப்பிட்ட நிபந்தனையை பூர்த்தி செய்யும்போது அதற்கு style வழங்க selector-உடன் சேர்க்கப்படும் keyword ஆகும்.",
    realWorldUsage:
      "Pseudo-classes are used to create hover effects, style visited links, highlight focused input fields, and improve form interactions.",
    realWorldUsageTamil:
      "Hover effects உருவாக்கவும், ஏற்கனவே பார்வையிட்ட links-ஐ வடிவமைக்கவும், focus செய்யப்பட்ட input fields-ஐ முன்னிலைப்படுத்தவும் Pseudo-Classes பயன்படுகின்றன.",
    syntax: `button:hover {
  background-color: blue;
}

input:focus {
  border: 2px solid green;
}`,
    syntaxExplanationEnglish: [
      ":hover applies styles when the pointer moves over an element.",
      ":focus applies styles when an element receives focus.",
      ":active applies styles while an element is being activated.",
      ":first-child selects an element that is the first child of its parent.",
      "Pseudo-classes begin with a single colon (:)."
    ],
    syntaxExplanationTamil: [
      ":hover pointer ஒரு உறுப்பின் மேல் செல்லும்போது style வழங்குகிறது.",
      ":focus ஒரு உறுப்பு focus பெறும்போது style வழங்குகிறது.",
      ":active ஒரு உறுப்பு செயல்படுத்தப்படும் நேரத்தில் style வழங்குகிறது.",
      ":first-child அதன் parent-ன் முதல் child உறுப்பை தேர்வு செய்கிறது.",
      "Pseudo-Classes ஒரு colon (:) குறியுடன் தொடங்குகின்றன."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Pseudo Classes</title>
  <style>
    button {
      background-color: gray;
      color: white;
      padding: 10px 20px;
    }

    button:hover {
      background-color: green;
    }
  </style>
</head>
<body>
  <button>Move Mouse Here</button>
</body>
</html>`,
    programExplanationEnglish: [
      "The button initially receives a gray background.",
      "The button text is displayed in white.",
      "The :hover pseudo-class detects when the pointer moves over the button.",
      "The background changes to green while hovering."
    ],
    programExplanationTamil: [
      "Button-க்கு ஆரம்பத்தில் சாம்பல் நிற பின்னணி வழங்கப்படுகிறது.",
      "Button எழுத்துகள் வெள்ளை நிறத்தில் காட்டப்படுகின்றன.",
      "Pointer button-ன் மேல் வரும்போது :hover pseudo-class அதை கண்டறிகிறது.",
      "Hover செய்யும்போது பின்னணி பச்சை நிறமாக மாறுகிறது."
    ],
    output:
      "A gray button that changes to green when the mouse pointer moves over it."
  },
  {
    id: 14,
    title: "CSS Pseudo-Elements",
    englishDefinition:
      "CSS pseudo-elements allow developers to style a specific part of an element or insert generated content without adding extra HTML elements.",
    tamilDefinition:
      "CSS Pseudo-Elements என்பது கூடுதல் HTML உறுப்புகளை உருவாக்காமல் ஒரு உறுப்பின் குறிப்பிட்ட பகுதியை வடிவமைக்க அல்லது புதிய content-ஐ உருவாக்க உதவுகின்றன.",
    realWorldUsage:
      "Pseudo-elements are used to style the first letter of paragraphs, add decorative icons, create separators, and highlight selected text.",
    realWorldUsageTamil:
      "Paragraph-ன் முதல் எழுத்தை வடிவமைக்கவும், அலங்கார icons சேர்க்கவும், separators உருவாக்கவும், தேர்ந்தெடுக்கப்பட்ட text-ஐ முன்னிலைப்படுத்தவும் Pseudo-Elements பயன்படுகின்றன.",
    syntax: `p::first-letter {
  color: red;
  font-size: 30px;
}

p::before {
  content: "Note: ";
}`,
    syntaxExplanationEnglish: [
      "::before inserts generated content before an element's content.",
      "::after inserts generated content after an element's content.",
      "::first-letter styles the first letter of a text block.",
      "::first-line styles the first formatted line of a block.",
      "Pseudo-elements generally use two colons (::)."
    ],
    syntaxExplanationTamil: [
      "::before ஒரு உறுப்பின் content-க்கு முன்பு புதிய content-ஐ உருவாக்குகிறது.",
      "::after ஒரு உறுப்பின் content-க்கு பின்னால் புதிய content-ஐ உருவாக்குகிறது.",
      "::first-letter text பகுதியின் முதல் எழுத்தை வடிவமைக்கிறது.",
      "::first-line ஒரு block-ன் முதல் வடிவமைக்கப்பட்ட வரியை மாற்றுகிறது.",
      "Pseudo-Elements பொதுவாக இரண்டு colons (::) பயன்படுத்துகின்றன."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Pseudo Elements</title>
  <style>
    p::first-letter {
      color: red;
      font-size: 30px;
      font-weight: bold;
    }

    p::after {
      content: " - DEEP CODE";
      color: blue;
    }
  </style>
</head>
<body>
  <p>Learn CSS</p>
</body>
</html>`,
    programExplanationEnglish: [
      "The ::first-letter pseudo-element targets the first letter of the paragraph.",
      "The first letter becomes red, bold, and larger.",
      "The ::after pseudo-element adds the text ' - DEEP CODE' after the paragraph content.",
      "The generated text is displayed in blue."
    ],
    programExplanationTamil: [
      "::first-letter pseudo-element paragraph-ன் முதல் எழுத்தை தேர்வு செய்கிறது.",
      "முதல் எழுத்து சிவப்பு நிறமாகவும் தடிமனாகவும் பெரியதாகவும் மாறுகிறது.",
      "::after pseudo-element paragraph content-க்கு பின்னால் ' - DEEP CODE' என்ற text-ஐ சேர்க்கிறது.",
      "உருவாக்கப்பட்ட text நீல நிறத்தில் காட்டப்படுகிறது."
    ],
    output:
      "The paragraph begins with a large, bold red L, followed by 'earn CSS - DEEP CODE' with the generated text in blue."
  },
  {
    id: 15,
    title: "CSS Combinators",
    englishDefinition:
      "CSS combinators describe relationships between selectors. They allow developers to select elements based on their relationship with other elements in the HTML document.",
    tamilDefinition:
      "CSS Combinators என்பது selectors-க்கு இடையிலான உறவுகளை குறிப்பிடுகின்றன. HTML ஆவணத்தில் மற்ற உறுப்புகளுடன் உள்ள தொடர்பின் அடிப்படையில் உறுப்புகளை தேர்வு செய்ய இவை உதவுகின்றன.",
    realWorldUsage:
      "Combinators are used to style nested menu items, child elements, related sections, and elements that immediately follow other elements.",
    realWorldUsageTamil:
      "Nested menu items, child elements, தொடர்புடைய பகுதிகள் மற்றும் மற்ற உறுப்புகளுக்கு உடனடியாக பின்னால் வரும் உறுப்புகளை வடிவமைக்க Combinators பயன்படுகின்றன.",
    syntax: `/* Descendant */
div p {
  color: red;
}

/* Child */
div > p {
  color: blue;
}

/* Adjacent sibling */
h1 + p {
  color: green;
}

/* General sibling */
h1 ~ p {
  font-weight: bold;
}`,
    syntaxExplanationEnglish: [
      "The descendant combinator (space) selects matching elements anywhere inside an ancestor.",
      "The child combinator (>) selects direct children only.",
      "The adjacent sibling combinator (+) selects the immediately following sibling.",
      "The general sibling combinator (~) selects following siblings that share the same parent."
    ],
    syntaxExplanationTamil: [
      "Descendant combinator (space) ஒரு ancestor-க்குள் எங்கிருந்தாலும் பொருந்தும் உறுப்புகளை தேர்வு செய்கிறது.",
      "Child combinator (>) நேரடி child உறுப்புகளை மட்டும் தேர்வு செய்கிறது.",
      "Adjacent sibling combinator (+) உடனடியாக அடுத்து வரும் sibling உறுப்பை தேர்வு செய்கிறது.",
      "General sibling combinator (~) ஒரே parent-ஐ பகிரும் பின்னர் வரும் sibling உறுப்புகளை தேர்வு செய்கிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Combinators</title>
  <style>
    div > p {
      color: blue;
    }
  </style>
</head>
<body>
  <div>
    <p>This is a direct child.</p>
    <section>
      <p>This is a nested paragraph.</p>
    </section>
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div > p selector targets only paragraphs that are direct children of a div.",
      "The first paragraph is a direct child of the div.",
      "The second paragraph is inside a section, so it is not a direct child of the div.",
      "Only the first paragraph becomes blue."
    ],
    programExplanationTamil: [
      "div > p selector div-ன் நேரடி child ஆக இருக்கும் paragraph-களை மட்டும் தேர்வு செய்கிறது.",
      "முதல் paragraph div-ன் நேரடி child ஆகும்.",
      "இரண்டாவது paragraph section-க்குள் இருப்பதால் div-ன் நேரடி child அல்ல.",
      "முதல் paragraph மட்டும் நீல நிறமாக மாறுகிறது."
    ],
    output:
      "The first paragraph is blue, while the nested paragraph keeps its default text color."
  },
  {
    id: 16,
    title: "CSS Transitions and Transforms",
    englishDefinition:
      "CSS transitions create smooth changes between property values over a specified duration. CSS transforms change the appearance or position of an element by translating, rotating, scaling, or skewing it.",
    tamilDefinition:
      "CSS Transitions என்பது குறிப்பிட்ட நேரத்தில் ஒரு style value-இலிருந்து மற்றொரு value-க்கு மென்மையான மாற்றத்தை உருவாக்குகிறது. CSS Transforms என்பது உறுப்புகளை நகர்த்துதல், சுழற்றுதல், அளவை மாற்றுதல் அல்லது சாய்த்தல் மூலம் அவற்றின் தோற்றத்தை மாற்றுகிறது.",
    realWorldUsage:
      "Transitions and transforms are used for animated buttons, card hover effects, image zooming, and interactive website components.",
    realWorldUsageTamil:
      "Animated buttons, card hover effects, image zooming மற்றும் interactive website components உருவாக்க Transitions மற்றும் Transforms பயன்படுகின்றன.",
    syntax: `.box {
  transition: transform 0.5s ease;
}

.box:hover {
  transform: scale(1.2) rotate(5deg);
}`,
    syntaxExplanationEnglish: [
      "transition specifies which property changes smoothly and how long the change takes.",
      "transition-duration controls the duration of the transition.",
      "transform changes an element's visual appearance or position.",
      "scale() increases or decreases an element's size.",
      "rotate() rotates an element by a specified angle."
    ],
    syntaxExplanationTamil: [
      "transition எந்த property மென்மையாக மாற வேண்டும் மற்றும் எவ்வளவு நேரம் எடுக்க வேண்டும் என்பதை குறிப்பிடுகிறது.",
      "transition-duration மாற்றம் நடைபெறும் நேரத்தை கட்டுப்படுத்துகிறது.",
      "transform ஒரு உறுப்பின் தோற்றம் அல்லது நிலையை மாற்றுகிறது.",
      "scale() ஒரு உறுப்பின் அளவை பெரிதாக்க அல்லது சிறிதாக்குகிறது.",
      "rotate() ஒரு உறுப்பை குறிப்பிட்ட கோணத்தில் சுழற்றுகிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Transitions and Transforms</title>
  <style>
    .box {
      width: 120px;
      padding: 20px;
      background-color: blue;
      color: white;
      transition: transform 0.5s ease;
    }

    .box:hover {
      transform: scale(1.2);
    }
  </style>
</head>
<body>
  <div class="box">Hover Me</div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div is styled as a blue box.",
      "The transition property sets a smooth 0.5-second transform transition.",
      "When the pointer moves over the box, the :hover selector becomes active.",
      "scale(1.2) increases the box's visual size by 20 percent."
    ],
    programExplanationTamil: [
      "div ஒரு நீல நிற பெட்டியாக வடிவமைக்கப்படுகிறது.",
      "transition property 0.5 வினாடி மென்மையான transform மாற்றத்தை அமைக்கிறது.",
      "Pointer பெட்டியின் மேல் செல்லும்போது :hover selector செயல்படுகிறது.",
      "scale(1.2) பெட்டியின் தோற்ற அளவை 20 சதவீதம் அதிகரிக்கிறது."
    ],
    output:
      "A blue box that smoothly grows larger when the mouse pointer moves over it."
  },
  {
    id: 17,
    title: "CSS Animations",
    englishDefinition:
      "CSS animations allow elements to change styles over time using keyframes. They can run automatically without requiring user interaction.",
    tamilDefinition:
      "CSS Animations என்பது keyframes பயன்படுத்தி உறுப்புகளின் styles காலப்போக்கில் மாற அனுமதிக்கிறது. பயனர் எந்த interaction-மும் செய்யாமல் இவை தானாக இயங்க முடியும்.",
    realWorldUsage:
      "Animations are used for loading indicators, notifications, banners, attention effects, and visual feedback on websites.",
    realWorldUsageTamil:
      "Loading indicators, notifications, banners, கவனத்தை ஈர்க்கும் effects மற்றும் வலைத்தளங்களில் visual feedback வழங்க Animations பயன்படுகின்றன.",
    syntax: `@keyframes moveBox {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100px);
  }
}

.box {
  animation: moveBox 2s infinite;
}`,
    syntaxExplanationEnglish: [
      "@keyframes defines the stages of an animation.",
      "from represents the starting state.",
      "to represents the ending state.",
      "animation-name specifies the keyframes animation.",
      "animation-duration specifies how long one animation cycle takes.",
      "animation-iteration-count specifies how many times the animation runs."
    ],
    syntaxExplanationTamil: [
      "@keyframes ஒரு animation-ன் நிலைகளை வரையறுக்கிறது.",
      "from என்பது animation தொடங்கும் நிலையை குறிக்கிறது.",
      "to என்பது animation முடியும் நிலையை குறிக்கிறது.",
      "animation-name எந்த keyframes animation பயன்படுத்தப்பட வேண்டும் என்பதை குறிப்பிடுகிறது.",
      "animation-duration ஒரு animation cycle எவ்வளவு நேரம் எடுக்க வேண்டும் என்பதை குறிப்பிடுகிறது.",
      "animation-iteration-count animation எத்தனை முறை இயங்க வேண்டும் என்பதை குறிப்பிடுகிறது."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Animation</title>
  <style>
    @keyframes moveBox {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(150px);
      }
    }

    .box {
      width: 80px;
      padding: 15px;
      background-color: orange;
      animation: moveBox 2s infinite alternate;
    }
  </style>
</head>
<body>
  <div class="box">Move</div>
</body>
</html>`,
    programExplanationEnglish: [
      "The @keyframes rule defines an animation named moveBox.",
      "The animation starts at its original horizontal position.",
      "It moves 150 pixels to the right.",
      "The animation property runs the animation for two seconds.",
      "infinite repeats the animation, and alternate reverses its direction on each cycle."
    ],
    programExplanationTamil: [
      "@keyframes rule moveBox என்ற பெயரில் animation-ஐ வரையறுக்கிறது.",
      "Animation அதன் ஆரம்ப கிடைமட்ட இடத்தில் தொடங்குகிறது.",
      "அது வலதுபுறமாக 150 pixels நகர்கிறது.",
      "animation property animation-ஐ இரண்டு வினாடிகள் இயக்குகிறது.",
      "infinite animation-ஐ தொடர்ந்து மீண்டும் இயக்குகிறது; alternate ஒவ்வொரு cycle-லும் அதன் திசையை மாற்றுகிறது."
    ],
    output:
      "An orange box repeatedly moves 150 pixels to the right and then returns to its starting position."
  },
  {
    id: 18,
    title: "CSS Responsive Design and Media Queries",
    englishDefinition:
      "Responsive design is an approach that makes websites adapt to different screen sizes and devices. CSS media queries apply styles based on device or viewport conditions.",
    tamilDefinition:
      "Responsive Design என்பது வெவ்வேறு திரை அளவுகள் மற்றும் சாதனங்களுக்கு ஏற்ப வலைத்தளங்கள் தங்களை மாற்றிக்கொள்ளும் வடிவமைப்பு முறையாகும். CSS Media Queries சாதனம் அல்லது viewport நிபந்தனைகளின் அடிப்படையில் styles-ஐ பயன்படுத்துகின்றன.",
    realWorldUsage:
      "Responsive design is used to make websites work well on mobile phones, tablets, laptops, and desktop computers.",
    realWorldUsageTamil:
      "Mobile phones, tablets, laptops மற்றும் desktop computers ஆகியவற்றில் வலைத்தளங்கள் சரியாக செயல்பட Responsive Design பயன்படுகிறது.",
    syntax: `@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}`,
    syntaxExplanationEnglish: [
      "@media defines a media query.",
      "max-width applies styles when the viewport width is at or below the specified value.",
      "min-width applies styles when the viewport width is at or above the specified value.",
      "Responsive styles can change layout, font sizes, spacing, and visibility."
    ],
    syntaxExplanationTamil: [
      "@media என்பது media query-ஐ வரையறுக்கிறது.",
      "max-width viewport அகலம் குறிப்பிடப்பட்ட அளவிற்கு சமமாகவோ அதற்கு குறைவாகவோ இருக்கும்போது styles-ஐ பயன்படுத்துகிறது.",
      "min-width viewport அகலம் குறிப்பிடப்பட்ட அளவிற்கு சமமாகவோ அதற்கு அதிகமாகவோ இருக்கும்போது styles-ஐ பயன்படுத்துகிறது.",
      "Responsive styles மூலம் layout, font sizes, spacing மற்றும் visibility ஆகியவற்றை மாற்றலாம்."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Design</title>
  <style>
    .box {
      background-color: blue;
      color: white;
      padding: 30px;
      font-size: 24px;
    }

    @media (max-width: 600px) {
      .box {
        background-color: green;
        font-size: 16px;
      }
    }
  </style>
</head>
<body>
  <div class="box">
    Responsive Design
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The viewport meta tag helps the page use the device's actual viewport width.",
      "The box initially has a blue background and 24-pixel text.",
      "The media query checks whether the viewport width is 600 pixels or less.",
      "When the condition matches, the background changes to green and the text size becomes 16 pixels."
    ],
    programExplanationTamil: [
      "Viewport meta tag பக்கம் சாதனத்தின் உண்மையான viewport அகலத்தை பயன்படுத்த உதவுகிறது.",
      "Box ஆரம்பத்தில் நீல பின்னணி மற்றும் 24-pixel எழுத்துகளைக் கொண்டுள்ளது.",
      "Media query viewport அகலம் 600 pixels அல்லது அதற்கு குறைவாக உள்ளதா என சரிபார்க்கிறது.",
      "நிபந்தனை பொருந்தும்போது பின்னணி பச்சை நிறமாகவும் எழுத்து அளவு 16 pixels ஆகவும் மாறுகிறது."
    ],
    output:
      "The box appears blue with larger text on wider screens and green with smaller text when the viewport is 600 pixels wide or less."
  },
  {
    id: 19,
    title: "CSS Shadows and Gradients",
    englishDefinition:
      "CSS shadows create depth by adding shadow effects to elements or text. Gradients create smooth transitions between two or more colors.",
    tamilDefinition:
      "CSS Shadows என்பது உறுப்புகள் அல்லது எழுத்துகளுக்கு நிழல் விளைவுகளை வழங்கி ஆழமான தோற்றத்தை உருவாக்குகிறது. Gradients என்பது இரண்டு அல்லது அதற்கு மேற்பட்ட நிறங்களுக்கு இடையில் மென்மையான நிற மாற்றங்களை உருவாக்குகிறது.",
    realWorldUsage:
      "Shadows and gradients are used in modern cards, buttons, banners, backgrounds, and headings to improve visual appearance.",
    realWorldUsageTamil:
      "நவீன cards, buttons, banners, backgrounds மற்றும் headings ஆகியவற்றின் தோற்றத்தை மேம்படுத்த Shadows மற்றும் Gradients பயன்படுகின்றன.",
    syntax: `.box {
  box-shadow: 2px 4px 8px gray;
}

h1 {
  text-shadow: 2px 2px 4px gray;
}

.banner {
  background: linear-gradient(to right, blue, purple);
}`,
    syntaxExplanationEnglish: [
      "box-shadow adds a shadow around an element's box.",
      "text-shadow adds a shadow to text.",
      "linear-gradient creates a gradient along a straight line.",
      "radial-gradient creates a gradient spreading outward from a central point.",
      "Gradient directions and color stops control the appearance of the gradient."
    ],
    syntaxExplanationTamil: [
      "box-shadow ஒரு உறுப்பின் பெட்டியை சுற்றி நிழலை உருவாக்குகிறது.",
      "text-shadow எழுத்துகளுக்கு நிழலை வழங்குகிறது.",
      "linear-gradient ஒரு நேர்கோட்டு திசையில் நிற மாற்றத்தை உருவாக்குகிறது.",
      "radial-gradient மையப்புள்ளியிலிருந்து வெளியே பரவும் நிற மாற்றத்தை உருவாக்குகிறது.",
      "Gradient திசை மற்றும் color stops அதன் தோற்றத்தை கட்டுப்படுத்துகின்றன."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>Shadows and Gradients</title>
  <style>
    .box {
      width: 250px;
      padding: 30px;
      color: white;
      background: linear-gradient(to right, blue, purple);
      box-shadow: 3px 4px 10px gray;
    }
  </style>
</head>
<body>
  <div class="box">
    DEEP CODE
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      "The div receives a width of 250 pixels.",
      "Padding creates internal spacing.",
      "linear-gradient creates a background that changes from blue to purple.",
      "box-shadow adds a gray shadow around the element.",
      "The text is displayed in white."
    ],
    programExplanationTamil: [
      "div உறுப்பிற்கு 250 pixels அகலம் வழங்கப்படுகிறது.",
      "Padding உள்ளக இடைவெளியை உருவாக்குகிறது.",
      "linear-gradient பின்னணியை நீல நிறத்திலிருந்து ஊதா நிறமாக மாற்றுகிறது.",
      "box-shadow உறுப்பை சுற்றி சாம்பல் நிற நிழலை உருவாக்குகிறது.",
      "எழுத்துகள் வெள்ளை நிறத்தில் காட்டப்படுகின்றன."
    ],
    output:
      "A rectangular box with a blue-to-purple gradient background, white DEEP CODE text, and a gray shadow."
  },
  {
    id: 20,
    title: "CSS Variables and Best Practices",
    englishDefinition:
      "CSS variables, also called custom properties, store reusable values such as colors, spacing, and font sizes. They help developers maintain consistent styles and make websites easier to update.",
    tamilDefinition:
      "CSS Variables அல்லது Custom Properties என்பது colors, spacing மற்றும் font sizes போன்ற மீண்டும் பயன்படுத்தக்கூடிய values-ஐ சேமிக்க உதவுகின்றன. இவை ஒரே மாதிரியான வடிவமைப்பை பராமரிக்கவும் வலைத்தளங்களை எளிதாக புதுப்பிக்கவும் உதவுகின்றன.",
    realWorldUsage:
      "CSS variables are used in design systems, reusable themes, dark mode, and large websites where consistent colors and spacing are important.",
    realWorldUsageTamil:
      "Design systems, reusable themes, dark mode மற்றும் ஒரே மாதிரியான நிறங்கள் மற்றும் இடைவெளிகள் தேவைப்படும் பெரிய வலைத்தளங்களில் CSS Variables பயன்படுகின்றன.",
    syntax: `:root {
  --primary-color: blue;
  --main-spacing: 20px;
}

.box {
  background-color: var(--primary-color);
  padding: var(--main-spacing);
}`,
    syntaxExplanationEnglish: [
      "CSS custom properties are declared using names that begin with two hyphens (--).",
      ":root is commonly used to declare global custom properties.",
      "var() retrieves the value of a custom property.",
      "Variables can be reused in multiple CSS rules.",
      "Changing a variable value can update every rule that uses it."
    ],
    syntaxExplanationTamil: [
      "CSS Custom Properties இரண்டு hyphens (--) உடன் தொடங்கும் பெயர்களைப் பயன்படுத்தி வரையறுக்கப்படுகின்றன.",
      ":root பொதுவாக அனைத்து இடங்களிலும் பயன்படுத்தக்கூடிய variables-ஐ வரையறுக்க பயன்படுகிறது.",
      "var() ஒரு custom property-ன் value-ஐ பெறுகிறது.",
      "Variables-ஐ பல CSS rules-ல் மீண்டும் பயன்படுத்தலாம்.",
      "ஒரு variable-ன் value-ஐ மாற்றினால் அதை பயன்படுத்தும் அனைத்து rules-லும் மாற்றம் ஏற்படும்."
    ],
    exampleProgram: `<!DOCTYPE html>
<html>
<head>
  <title>CSS Variables</title>
  <style>
    :root {
      --primary-color: blue;
      --main-spacing: 20px;
    }

    .box {
      background-color: var(--primary-color);
      padding: var(--main-spacing);
      color: white;
    }
  </style>
</head>
<body>
  <div class="box">
    DEEP CODE
  </div>
</body>
</html>`,
    programExplanationEnglish: [
      ":root declares two reusable CSS variables.",
      "--primary-color stores the value blue.",
      "--main-spacing stores the value 20 pixels.",
      "var(--primary-color) applies the blue background.",
      "var(--main-spacing) applies 20 pixels of padding.",
      "The box displays white text."
    ],
    programExplanationTamil: [
      ":root இரண்டு மீண்டும் பயன்படுத்தக்கூடிய CSS variables-ஐ வரையறுக்கிறது.",
      "--primary-color நீல நிற value-ஐ சேமிக்கிறது.",
      "--main-spacing 20 pixels value-ஐ சேமிக்கிறது.",
      "var(--primary-color) நீல நிற பின்னணியை வழங்குகிறது.",
      "var(--main-spacing) 20 pixels padding-ஐ வழங்குகிறது.",
      "Box-ல் வெள்ளை நிற எழுத்துகள் காட்டப்படுகின்றன."
    ],
    output:
      "A blue box with white DEEP CODE text and 20 pixels of internal padding."
  }
]

];

export default topics;
