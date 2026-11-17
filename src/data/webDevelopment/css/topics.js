
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
  }
];

export default topics;
