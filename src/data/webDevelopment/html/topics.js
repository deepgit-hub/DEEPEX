const topics = [
  {
    "id": 1,
    "title": "Introduction to HTML",
    "englishDefinition": "HTML stands for HyperText Markup Language. It is used to structure content on web pages.",
    "tamilDefinition": "HTML என்பது HyperText Markup Language என்பதன் சுருக்கமாகும். இணையப் பக்கங்களின் உள்ளடக்கத்தை கட்டமைக்க இது பயன்படுகிறது.",
    "realWorldUsage": "HTML creates the basic structure of websites, including headings, paragraphs, images and links.",
    "realWorldUsageTamil": "இணையதளங்களில் தலைப்புகள், பத்திகள், படங்கள் மற்றும் இணைப்புகள் போன்றவற்றை உருவாக்க HTML பயன்படுகிறது.",
    "syntax": "<h1>Hello World</h1>\n<p>Welcome to HTML</p>",
    "syntaxExplanationEnglish": ["h1 creates a main heading.", "p creates a paragraph."],
    "syntaxExplanationTamil": ["h1 முக்கிய தலைப்பை உருவாக்குகிறது.", "p ஒரு பத்தியை உருவாக்குகிறது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<head>\n<title>My First Page</title>\n</head>\n<body>\n<h1>Hello World</h1>\n<p>Welcome to HTML</p>\n</body>\n</html>",
    "programExplanationEnglish": ["DOCTYPE declares an HTML5 document.", "html is the root element.", "head contains page information.", "title sets the browser tab title.", "body contains visible content.", "h1 displays a heading and p displays a paragraph."],
    "programExplanationTamil": ["DOCTYPE HTML5 document என்பதை அறிவிக்கிறது.", "html முழு document-ஐ உள்ளடக்குகிறது.", "head பக்கத்தின் தகவல்களைக் கொண்டுள்ளது.", "title browser tab-ல் பெயரைக் காட்டுகிறது.", "body பயனருக்குத் தெரியும் உள்ளடக்கத்தைக் கொண்டுள்ளது.", "h1 தலைப்பையும் p பத்தியையும் காட்டுகிறது."],
    "output": "Hello World\nWelcome to HTML"
  },
  {
    "id": 2,
    "title": "HTML Document Structure",
    "englishDefinition": "An HTML document follows a standard structure using DOCTYPE, html, head and body elements.",
    "tamilDefinition": "ஒரு HTML document DOCTYPE, html, head மற்றும் body ஆகிய elements-ஐப் பயன்படுத்தி ஒரு குறிப்பிட்ட கட்டமைப்பைப் பின்பற்றுகிறது.",
    "realWorldUsage": "Every website page uses an HTML document structure to organize its content.",
    "realWorldUsageTamil": "ஒவ்வொரு இணையதளப் பக்கமும் உள்ளடக்கத்தை ஒழுங்குபடுத்த HTML document structure-ஐப் பயன்படுத்துகிறது.",
    "syntax": "<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\nContent\n</body>\n</html>",
    "syntaxExplanationEnglish": ["DOCTYPE declares HTML5.", "html is the root element.", "head contains metadata.", "body contains visible content."],
    "syntaxExplanationTamil": ["DOCTYPE HTML5 என்பதை அறிவிக்கிறது.", "html அடிப்படை root element ஆகும்.", "head metadata-ஐக் கொண்டுள்ளது.", "body தெரியும் உள்ளடக்கத்தைக் கொண்டுள்ளது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<head>\n<title>Student Profile</title>\n</head>\n<body>\n<h1>Student Profile</h1>\n<p>Name: Deepak</p>\n</body>\n</html>",
    "programExplanationEnglish": ["DOCTYPE declares the document type.", "html wraps the complete page.", "head contains the title.", "body contains the heading and paragraph."],
    "programExplanationTamil": ["DOCTYPE document வகையை அறிவிக்கிறது.", "html முழுப் பக்கத்தையும் உள்ளடக்குகிறது.", "head title-ஐக் கொண்டுள்ளது.", "body தலைப்பு மற்றும் பத்தியைக் கொண்டுள்ளது."],
    "output": "Student Profile\nName: Deepak"
  },
  {
    "id": 3,
    "title": "HTML Headings",
    "englishDefinition": "HTML provides six heading elements from h1 to h6 to organize headings at different levels.",
    "tamilDefinition": "HTML-ல் h1 முதல் h6 வரை ஆறு heading elements உள்ளன. இவை வெவ்வேறு நிலைகளில் தலைப்புகளை அமைக்க உதவுகின்றன.",
    "realWorldUsage": "Headings organize articles, blogs, documentation and website sections.",
    "realWorldUsageTamil": "கட்டுரைகள், blogs, documentation மற்றும் இணையதளப் பகுதிகளை ஒழுங்குபடுத்த headings பயன்படுகின்றன.",
    "syntax": "<h1>Main Heading</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>",
    "syntaxExplanationEnglish": ["h1 represents the main heading.", "h2 represents a section heading.", "h3 to h6 represent lower heading levels."],
    "syntaxExplanationTamil": ["h1 முக்கிய தலைப்பைக் குறிக்கிறது.", "h2 ஒரு பகுதியின் தலைப்பைக் குறிக்கிறது.", "h3 முதல் h6 வரை துணைத் தலைப்புகளைக் குறிக்கின்றன."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Web Development</h1>\n<h2>HTML</h2>\n<h3>HTML Headings</h3>\n<h4>Example</h4>\n</body>\n</html>",
    "programExplanationEnglish": ["h1 displays the main topic.", "h2 displays a section.", "h3 displays a subsection.", "h4 displays a lower-level heading."],
    "programExplanationTamil": ["h1 முக்கிய தலைப்பைக் காட்டுகிறது.", "h2 ஒரு பகுதியைக் காட்டுகிறது.", "h3 துணைப் பகுதியைக் காட்டுகிறது.", "h4 கீழ்நிலைத் தலைப்பைக் காட்டுகிறது."],
    "output": "Web Development\nHTML\nHTML Headings\nExample"
  },
  {
    "id": 4,
    "title": "Paragraphs and Text Formatting",
    "englishDefinition": "The p element creates paragraphs. Elements like strong, em, mark, small and del provide meaning or emphasis to text.",
    "tamilDefinition": "p element பத்திகளை உருவாக்குகிறது. strong, em, mark, small மற்றும் del போன்ற elements உரைக்கு முக்கியத்துவம் அல்லது குறிப்பிட்ட பொருளை வழங்குகின்றன.",
    "realWorldUsage": "Text formatting is used in blogs, articles, product descriptions and notices.",
    "realWorldUsageTamil": "Blogs, கட்டுரைகள், product descriptions மற்றும் அறிவிப்புகளில் text formatting பயன்படுகிறது.",
    "syntax": "<p>A paragraph</p>\n<strong>Important</strong>\n<em>Emphasized</em>\n<mark>Highlighted</mark>",
    "syntaxExplanationEnglish": ["p creates a paragraph.", "strong marks important text.", "em emphasizes text.", "mark highlights text."],
    "syntaxExplanationTamil": ["p ஒரு பத்தியை உருவாக்குகிறது.", "strong முக்கியமான உரையைக் குறிக்கிறது.", "em உரைக்கு முக்கியத்துவம் வழங்குகிறது.", "mark உரையை highlight செய்கிறது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<p>Welcome to HTML.</p>\n<p><strong>Practice daily.</strong></p>\n<p><em>Build projects.</em></p>\n<p><mark>Important reminder</mark></p>\n</body>\n</html>",
    "programExplanationEnglish": ["The first p displays normal text.", "strong marks the second message as important.", "em emphasizes the third message.", "mark highlights the reminder."],
    "programExplanationTamil": ["முதல் p சாதாரண உரையைக் காட்டுகிறது.", "strong இரண்டாவது செய்தியை முக்கியமானதாகக் குறிக்கிறது.", "em மூன்றாவது செய்திக்கு முக்கியத்துவம் வழங்குகிறது.", "mark நினைவூட்டலை highlight செய்கிறது."],
    "output": "Welcome to HTML.\nPractice daily.\nBuild projects.\nImportant reminder"
  },
  {
    "id": 5,
    "title": "Links and Anchor Tags",
    "englishDefinition": "The a element creates hyperlinks. The href attribute specifies the destination of a link.",
    "tamilDefinition": "a element hyperlinks-ஐ உருவாக்குகிறது. href attribute அந்த link செல்ல வேண்டிய இடத்தைக் குறிப்பிடுகிறது.",
    "realWorldUsage": "Links are used in navigation menus, websites, email links and references.",
    "realWorldUsageTamil": "Navigation menus, இணையதள இணைப்புகள், email links மற்றும் references ஆகியவற்றில் links பயன்படுகின்றன.",
    "syntax": "<a href=\"https://example.com\">Visit Website</a>",
    "syntaxExplanationEnglish": ["a creates an anchor element.", "href specifies the destination.", "The text between the tags becomes clickable."],
    "syntaxExplanationTamil": ["a anchor element-ஐ உருவாக்குகிறது.", "href செல்ல வேண்டிய இடத்தைக் குறிப்பிடுகிறது.", "Tag-களுக்கு இடையில் உள்ள உரை click செய்யக்கூடியதாக இருக்கும்."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Useful Links</h1>\n<a href=\"https://www.example.com\">Visit Example</a>\n<br>\n<a href=\"mailto:hello@example.com\">Send Email</a>\n</body>\n</html>",
    "programExplanationEnglish": ["h1 displays the heading.", "The first anchor links to an external website.", "br moves the next link to a new line.", "mailto opens an email application."],
    "programExplanationTamil": ["h1 தலைப்பைக் காட்டுகிறது.", "முதல் anchor வெளிப்புற இணையதளத்திற்குச் செல்கிறது.", "br அடுத்த link-ஐ புதிய வரியில் காட்டுகிறது.", "mailto email application-ஐத் திறக்க உதவுகிறது."],
    "output": "Useful Links\nVisit Example\nSend Email"
  },
  {
    "id": 6,
    "title": "HTML Images",
    "englishDefinition": "The img element displays images on a web page. The src attribute specifies the image location and alt provides alternative text.",
    "tamilDefinition": "img element இணையப் பக்கத்தில் படங்களைக் காட்டுகிறது. src படத்தின் இடத்தையும் alt மாற்று விளக்க உரையையும் வழங்குகிறது.",
    "realWorldUsage": "Images are used for product photos, profile pictures, banners and galleries.",
    "realWorldUsageTamil": "Product photos, profile pictures, banners மற்றும் galleries ஆகியவற்றில் images பயன்படுகின்றன.",
    "syntax": "<img src=\"photo.jpg\" alt=\"Student photo\" width=\"300\">",
    "syntaxExplanationEnglish": ["img embeds an image.", "src specifies the image path.", "alt describes the image.", "width sets its displayed width."],
    "syntaxExplanationTamil": ["img படத்தைச் சேர்க்கிறது.", "src படத்தின் பாதையைக் குறிப்பிடுகிறது.", "alt படத்தை விவரிக்கிறது.", "width படத்தின் அகலத்தை அமைக்கிறது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>My Learning Desk</h1>\n<img src=\"desk.jpg\" alt=\"Laptop and books on a desk\" width=\"300\">\n</body>\n</html>",
    "programExplanationEnglish": ["h1 displays the heading.", "img embeds the image.", "src points to desk.jpg.", "alt describes the image if it cannot be displayed.", "width sets the image width."],
    "programExplanationTamil": ["h1 தலைப்பைக் காட்டுகிறது.", "img படத்தைச் சேர்க்கிறது.", "src desk.jpg கோப்பைக் குறிப்பிடுகிறது.", "படம் தெரியாவிட்டால் alt அதன் விளக்கத்தைக் கொடுக்கிறது.", "width படத்தின் அகலத்தை அமைக்கிறது."],
    "output": "My Learning Desk\nAn image appears if desk.jpg is available."
  },
  {
    "id": 7,
    "title": "HTML Lists",
    "englishDefinition": "HTML supports unordered lists, ordered lists and description lists to group related items.",
    "tamilDefinition": "தொடர்புடைய தகவல்களைப் பட்டியலிட HTML unordered lists, ordered lists மற்றும் description lists-ஐ ஆதரிக்கிறது.",
    "realWorldUsage": "Lists are used for menus, instructions, shopping lists and website features.",
    "realWorldUsageTamil": "Menus, வழிமுறைகள், shopping lists மற்றும் website features ஆகியவற்றில் lists பயன்படுகின்றன.",
    "syntax": "<ul>\n<li>HTML</li>\n<li>CSS</li>\n</ul>\n<ol>\n<li>Plan</li>\n<li>Build</li>\n</ol>",
    "syntaxExplanationEnglish": ["ul creates an unordered list.", "ol creates an ordered list.", "li creates a list item.", "dl, dt and dd create a description list."],
    "syntaxExplanationTamil": ["ul unordered list-ஐ உருவாக்குகிறது.", "ol ordered list-ஐ உருவாக்குகிறது.", "li ஒரு list item-ஐ உருவாக்குகிறது.", "dl, dt மற்றும் dd description list-ஐ உருவாக்குகின்றன."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h2>Technologies</h2>\n<ul>\n<li>HTML</li>\n<li>CSS</li>\n<li>JavaScript</li>\n</ul>\n<h2>Steps</h2>\n<ol>\n<li>Plan</li>\n<li>Develop</li>\n<li>Test</li>\n</ol>\n</body>\n</html>",
    "programExplanationEnglish": ["The first h2 introduces the technology list.", "ul creates a bulleted list.", "Each li creates an item.", "The second h2 introduces the steps.", "ol creates a numbered list."],
    "programExplanationTamil": ["முதல் h2 technology list-ஐ அறிமுகப்படுத்துகிறது.", "ul bullet list-ஐ உருவாக்குகிறது.", "ஒவ்வொரு li-யும் ஒரு item-ஐ உருவாக்குகிறது.", "இரண்டாவது h2 படிகளை அறிமுகப்படுத்துகிறது.", "ol எண் பட்டியலை உருவாக்குகிறது."],
    "output": "Technologies\n• HTML\n• CSS\n• JavaScript\nSteps\n1. Plan\n2. Develop\n3. Test"
  },
  {
    "id": 8,
    "title": "HTML Tables",
    "englishDefinition": "The table element displays information in rows and columns using tr, th and td elements.",
    "tamilDefinition": "table element tr, th மற்றும் td elements-ஐப் பயன்படுத்தி தகவல்களை வரிசைகள் மற்றும் நெடுவரிசைகளில் காட்டுகிறது.",
    "realWorldUsage": "Tables are used for timetables, marksheets, price comparisons and reports.",
    "realWorldUsageTamil": "நேர அட்டவணைகள், மதிப்பெண் பட்டியல்கள், விலை ஒப்பீடுகள் மற்றும் reports-ல் tables பயன்படுகின்றன.",
    "syntax": "<table>\n<tr><th>Name</th><th>Course</th></tr>\n<tr><td>Deepak</td><td>Computer Science</td></tr>\n</table>",
    "syntaxExplanationEnglish": ["table creates a table.", "tr creates a row.", "th creates a header cell.", "td creates a data cell."],
    "syntaxExplanationTamil": ["table அட்டவணையை உருவாக்குகிறது.", "tr ஒரு வரிசையை உருவாக்குகிறது.", "th தலைப்பு cell-ஐ உருவாக்குகிறது.", "td தரவு cell-ஐ உருவாக்குகிறது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<table border=\"1\">\n<caption>Student Details</caption>\n<tr><th>Name</th><th>Department</th></tr>\n<tr><td>Deepak</td><td>Computer Science</td></tr>\n</table>\n</body>\n</html>",
    "programExplanationEnglish": ["table creates the table.", "caption gives the table a title.", "The first tr contains header cells.", "The second tr contains student data.", "CSS is preferred for modern table styling."],
    "programExplanationTamil": ["table அட்டவணையை உருவாக்குகிறது.", "caption அட்டவணைக்குத் தலைப்பைக் கொடுக்கிறது.", "முதல் tr தலைப்பு cells-ஐக் கொண்டுள்ளது.", "இரண்டாவது tr மாணவர் தரவைக் கொண்டுள்ளது.", "நவீன table styling-க்கு CSS பயன்படுத்துவது சிறந்தது."],
    "output": "Student Details\nName | Department\nDeepak | Computer Science"
  },
  {
    "id": 9,
    "title": "HTML Forms",
    "englishDefinition": "The form element groups controls used to collect information from users, such as inputs and buttons.",
    "tamilDefinition": "form element input மற்றும் button போன்ற controls-ஐக் குழுவாக்கி பயனர்களிடமிருந்து தகவல்களைப் பெற உதவுகிறது.",
    "realWorldUsage": "Forms are used for registration, login, contact pages, feedback and online applications.",
    "realWorldUsageTamil": "Registration, login, contact pages, feedback மற்றும் online applications-ல் forms பயன்படுகின்றன.",
    "syntax": "<form action=\"/submit\" method=\"post\">\n<label for=\"name\">Name:</label>\n<input type=\"text\" id=\"name\" name=\"name\">\n<button type=\"submit\">Submit</button>\n</form>",
    "syntaxExplanationEnglish": ["form groups form controls.", "action specifies where data is sent.", "method specifies the HTTP method.", "label describes a control.", "input collects information."],
    "syntaxExplanationTamil": ["form controls-ஐக் குழுவாக்குகிறது.", "action data எங்கு அனுப்பப்பட வேண்டும் என்பதைக் குறிப்பிடுகிறது.", "method HTTP method-ஐக் குறிப்பிடுகிறது.", "label control-ஐ விவரிக்கிறது.", "input தகவலைப் பெறுகிறது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Contact Us</h1>\n<form action=\"#\" method=\"get\">\n<label for=\"visitorName\">Your name:</label>\n<input type=\"text\" id=\"visitorName\" name=\"visitorName\">\n<button type=\"submit\">Send</button>\n</form>\n</body>\n</html>",
    "programExplanationEnglish": ["h1 displays the heading.", "form groups the controls.", "label describes the input.", "input collects the name.", "The submit button submits the form; this example has no server backend."],
    "programExplanationTamil": ["h1 தலைப்பைக் காட்டுகிறது.", "form controls-ஐக் குழுவாக்குகிறது.", "label input-ஐ விவரிக்கிறது.", "input பெயரைப் பெறுகிறது.", "submit button form-ஐ அனுப்புகிறது; இந்த example-ல் server backend இல்லை."],
    "output": "Contact Us\nYour name: [text field] [Send]"
  },
  {
    "id": 10,
    "title": "HTML Input Types",
    "englishDefinition": "The input element creates form controls. Its type attribute determines whether it accepts text, email, password, numbers, dates, radio choices or checkboxes.",
    "tamilDefinition": "input element form controls-ஐ உருவாக்குகிறது. type attribute மூலம் text, email, password, numbers, dates, radio choices அல்லது checkboxes போன்றவற்றைத் தேர்ந்தெடுக்கலாம்.",
    "realWorldUsage": "Input types are used in registration forms, login pages, surveys and booking applications.",
    "realWorldUsageTamil": "Registration forms, login pages, surveys மற்றும் booking applications-ல் input types பயன்படுகின்றன.",
    "syntax": "<input type=\"text\">\n<input type=\"email\">\n<input type=\"password\">\n<input type=\"number\">\n<input type=\"checkbox\">",
    "syntaxExplanationEnglish": ["text accepts general text.", "email is intended for email addresses.", "password masks entered characters.", "number accepts numeric input.", "radio allows one choice in a group; checkbox allows independent choices."],
    "syntaxExplanationTamil": ["text பொதுவான உரையைப் பெறுகிறது.", "email மின்னஞ்சல் முகவரிக்குப் பயன்படுகிறது.", "password உள்ளிடப்படும் எழுத்துகளை மறைக்கிறது.", "number எண்களைப் பெறுகிறது.", "radio ஒரு group-ல் ஒரு தேர்வையும் checkbox தனித்தனி தேர்வுகளையும் அனுமதிக்கிறது."],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<form>\n<label>Email: <input type=\"email\" name=\"email\"></label><br>\n<label>Password: <input type=\"password\" name=\"password\"></label><br>\n<label>Age: <input type=\"number\" name=\"age\"></label><br>\n<label><input type=\"checkbox\" name=\"updates\"> Receive updates</label>\n</form>\n</body>\n</html>",
    "programExplanationEnglish": ["form groups the controls.", "The email input accepts an email address.", "The password input masks characters.", "The number input accepts a numeric value.", "The checkbox allows the user to opt into updates."],
    "programExplanationTamil": ["form controls-ஐக் குழுவாக்குகிறது.", "email input மின்னஞ்சல் முகவரியைப் பெறுகிறது.", "password input எழுத்துகளை மறைக்கிறது.", "number input எண் மதிப்பைப் பெறுகிறது.", "updates பெற checkbox மூலம் தேர்வு செய்யலாம்."],
    "output": "Email: [email field]\nPassword: [masked field]\nAge: [number field]\n☐ Receive updates"
  },
  
  {
    "id": 11,
    "title": "HTML Form Attributes",
    "englishDefinition": "HTML form attributes provide additional instructions to form controls. Common attributes include name, value, placeholder, required, readonly, min, max and maxlength.",
    "tamilDefinition": "HTML form attributes form controls-க்கு கூடுதல் வழிமுறைகளை வழங்குகின்றன. name, value, placeholder, required, readonly, min, max மற்றும் maxlength ஆகியவை பொதுவான attributes ஆகும்.",
    "realWorldUsage": "Form attributes are used to create user-friendly registration forms, login pages and online applications with required fields and validation.",
    "realWorldUsageTamil": "Required fields மற்றும் validation கொண்ட registration forms, login pages மற்றும் online applications உருவாக்க form attributes பயன்படுகின்றன.",
    "syntax": "<input type=\"text\" name=\"username\" placeholder=\"Enter your name\" required>",
    "syntaxExplanationEnglish": [
      "name identifies the form field when data is submitted.",
      "placeholder displays a hint inside an empty field.",
      "required makes the field mandatory.",
      "value specifies an initial value.",
      "maxlength limits the number of characters."
    ],
    "syntaxExplanationTamil": [
      "name form submit செய்யப்படும் போது field-ஐ அடையாளம் காண உதவுகிறது.",
      "placeholder காலியான field-க்குள் வழிகாட்டி உரையைக் காட்டுகிறது.",
      "required அந்த field கட்டாயமாக நிரப்பப்பட வேண்டும் எனக் குறிப்பிடுகிறது.",
      "value ஆரம்ப மதிப்பை அமைக்கிறது.",
      "maxlength உள்ளிடக்கூடிய எழுத்துகளின் எண்ணிக்கையைக் கட்டுப்படுத்துகிறது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Registration Form</h1>\n<form>\n<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Enter username\" required maxlength=\"20\">\n<button type=\"submit\">Register</button>\n</form>\n</body>\n</html>",
    "programExplanationEnglish": [
      "The heading displays Registration Form.",
      "The form groups the input and button.",
      "The label describes the username field.",
      "The placeholder displays a hint.",
      "The required attribute makes the field mandatory.",
      "The maxlength attribute limits the username to 20 characters."
    ],
    "programExplanationTamil": [
      "Heading Registration Form என்ற தலைப்பைக் காட்டுகிறது.",
      "form input மற்றும் button-ஐக் குழுவாக்குகிறது.",
      "label username field-ஐ விவரிக்கிறது.",
      "placeholder வழிகாட்டி உரையைக் காட்டுகிறது.",
      "required field கட்டாயம் என்பதை உறுதிப்படுத்துகிறது.",
      "maxlength username-ஐ 20 எழுத்துகளுக்கு கட்டுப்படுத்துகிறது."
    ],
    "output": "Registration Form\nUsername: [Enter username]\n[Register]"
  },
  {
    "id": 12,
    "title": "HTML Buttons",
    "englishDefinition": "The button element creates a clickable button. Its type attribute can be submit, reset or button, depending on the required action.",
    "tamilDefinition": "button element click செய்யக்கூடிய button-ஐ உருவாக்குகிறது. தேவைக்கேற்ப அதன் type attribute submit, reset அல்லது button ஆக இருக்கலாம்.",
    "realWorldUsage": "Buttons are used for submitting forms, clearing fields, opening menus and triggering actions on websites.",
    "realWorldUsageTamil": "Forms submit செய்தல், fields-ஐ அழித்தல், menus திறத்தல் மற்றும் இணையதளங்களில் செயல்களைத் தொடங்குதல் போன்றவற்றில் buttons பயன்படுகின்றன.",
    "syntax": "<button type=\"submit\">Submit</button>\n<button type=\"reset\">Clear</button>\n<button type=\"button\">Click Me</button>",
    "syntaxExplanationEnglish": [
      "submit sends the form data.",
      "reset restores form controls to their initial values.",
      "button creates a normal clickable button without submitting the form by default."
    ],
    "syntaxExplanationTamil": [
      "submit form data-ஐ அனுப்புகிறது.",
      "reset form controls-ஐ ஆரம்ப நிலைக்கு மாற்றுகிறது.",
      "button இயல்பாக form submit செய்யாத சாதாரண click செய்யக்கூடிய button-ஐ உருவாக்குகிறது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Student Details</h1>\n<form>\n<label for=\"student\">Name:</label>\n<input type=\"text\" id=\"student\" name=\"student\">\n<button type=\"submit\">Save</button>\n<button type=\"reset\">Clear</button>\n</form>\n<button type=\"button\">More Information</button>\n</body>\n</html>",
    "programExplanationEnglish": [
      "The heading displays Student Details.",
      "The form contains a name input.",
      "The Save button submits the form.",
      "The Clear button resets the input.",
      "More Information is a normal button and does not submit the form."
    ],
    "programExplanationTamil": [
      "Heading Student Details என்ற தலைப்பைக் காட்டுகிறது.",
      "form பெயரைப் பெறும் input-ஐக் கொண்டுள்ளது.",
      "Save button form-ஐ submit செய்கிறது.",
      "Clear button input-ஐ ஆரம்ப நிலைக்கு மாற்றுகிறது.",
      "More Information ஒரு சாதாரண button; இது form-ஐ submit செய்யாது."
    ],
    "output": "Student Details\nName: [text field]\n[Save] [Clear]\n[More Information]"
  },
  {
    "id": 13,
    "title": "Semantic HTML",
    "englishDefinition": "Semantic HTML elements describe the meaning and purpose of content. Common elements include header, nav, main, section, article, aside and footer.",
    "tamilDefinition": "Semantic HTML elements ஒரு இணையப் பக்கத்தின் உள்ளடக்கத்தின் பொருளையும் நோக்கத்தையும் விளக்குகின்றன. header, nav, main, section, article, aside மற்றும் footer ஆகியவை பொதுவான elements ஆகும்.",
    "realWorldUsage": "Semantic elements organize blogs, news websites, portfolios and business websites while helping browsers and assistive technologies understand the page.",
    "realWorldUsageTamil": "Blogs, news websites, portfolios மற்றும் business websites-ஐ ஒழுங்குபடுத்த semantic elements பயன்படுகின்றன. இவை browser மற்றும் assistive technologies பக்கத்தைப் புரிந்துகொள்ள உதவுகின்றன.",
    "syntax": "<header>Website Header</header>\n<nav>Navigation Links</nav>\n<main>\n<section>Section Content</section>\n<article>Article Content</article>\n</main>\n<footer>Footer Content</footer>",
    "syntaxExplanationEnglish": [
      "header represents introductory content.",
      "nav contains important navigation links.",
      "main contains the primary content of the page.",
      "section groups related content.",
      "article represents independent content.",
      "footer contains closing or additional information."
    ],
    "syntaxExplanationTamil": [
      "header அறிமுகப் பகுதியைக் குறிக்கிறது.",
      "nav முக்கிய navigation links-ஐக் கொண்டுள்ளது.",
      "main பக்கத்தின் முக்கிய உள்ளடக்கத்தைக் கொண்டுள்ளது.",
      "section தொடர்புடைய உள்ளடக்கங்களைக் குழுவாக்குகிறது.",
      "article தனித்துப் புரிந்துகொள்ளக்கூடிய உள்ளடக்கத்தைக் குறிக்கிறது.",
      "footer இறுதிப் பகுதி அல்லது கூடுதல் தகவல்களைக் கொண்டுள்ளது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<header><h1>My Portfolio</h1></header>\n<nav><a href=\"#about\">About</a></nav>\n<main>\n<section id=\"about\">\n<h2>About Me</h2>\n<p>I am learning web development.</p>\n</section>\n<article>\n<h2>Latest Update</h2>\n<p>I created my first webpage.</p>\n</article>\n</main>\n<footer>Copyright 2026</footer>\n</body>\n</html>",
    "programExplanationEnglish": [
      "header contains the portfolio heading.",
      "nav contains the About navigation link.",
      "main wraps the main page content.",
      "section groups the About information.",
      "article contains an independent update.",
      "footer displays copyright information."
    ],
    "programExplanationTamil": [
      "header portfolio தலைப்பைக் கொண்டுள்ளது.",
      "nav About navigation link-ஐக் கொண்டுள்ளது.",
      "main பக்கத்தின் முக்கிய உள்ளடக்கத்தை உள்ளடக்குகிறது.",
      "section About தகவல்களைக் குழுவாக்குகிறது.",
      "article தனித்த update தகவலைக் கொண்டுள்ளது.",
      "footer copyright தகவலைக் காட்டுகிறது."
    ],
    "output": "My Portfolio\nAbout\nAbout Me\nI am learning web development.\nLatest Update\nI created my first webpage.\nCopyright 2026"
  },
  {
    "id": 14,
    "title": "Div and Span Elements",
    "englishDefinition": "The div element is a generic block-level container, while span is a generic inline container. They group content for styling and scripting.",
    "tamilDefinition": "div என்பது பொதுவான block-level container ஆகும். span என்பது inline container ஆகும். இவை content-ஐ CSS styling மற்றும் JavaScript செயல்களுக்காகக் குழுவாக்க உதவுகின்றன.",
    "realWorldUsage": "div and span are used to organize website sections, cards, labels and specific words that need styling.",
    "realWorldUsageTamil": "Website sections, cards, labels மற்றும் தனியாக styling செய்ய வேண்டிய சொற்களை ஒழுங்குபடுத்த div மற்றும் span பயன்படுகின்றன.",
    "syntax": "<div>\n<h2>Profile</h2>\n<p>Hello <span>Deepak</span></p>\n</div>",
    "syntaxExplanationEnglish": [
      "div creates a block-level container.",
      "span creates an inline container.",
      "Both can be targeted using CSS classes or IDs.",
      "Use semantic elements when they better describe the content."
    ],
    "syntaxExplanationTamil": [
      "div ஒரு block-level container-ஐ உருவாக்குகிறது.",
      "span ஒரு inline container-ஐ உருவாக்குகிறது.",
      "இரண்டையும் CSS classes அல்லது IDs மூலம் தேர்ந்தெடுக்கலாம்.",
      "உள்ளடக்கத்தைச் சரியாக விவரிக்கும் semantic elements இருந்தால் அவற்றைப் பயன்படுத்த வேண்டும்."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<div>\n<h2>Student Profile</h2>\n<p>Name: <span>Deepak</span></p>\n<p>Course: B.Sc. Computer Science</p>\n</div>\n</body>\n</html>",
    "programExplanationEnglish": [
      "div groups the profile information.",
      "h2 displays the profile heading.",
      "The first paragraph displays the student's name.",
      "span groups the name as inline content.",
      "The second paragraph displays the course."
    ],
    "programExplanationTamil": [
      "div profile தகவல்களைக் குழுவாக்குகிறது.",
      "h2 profile தலைப்பைக் காட்டுகிறது.",
      "முதல் paragraph மாணவரின் பெயரைக் காட்டுகிறது.",
      "span பெயரை inline content ஆகக் குழுவாக்குகிறது.",
      "இரண்டாவது paragraph படிப்பைக் காட்டுகிறது."
    ],
    "output": "Student Profile\nName: Deepak\nCourse: B.Sc. Computer Science"
  },
  {
    "id": 15,
    "title": "HTML Audio",
    "englishDefinition": "The audio element embeds sound files into a web page. The controls attribute displays browser playback controls.",
    "tamilDefinition": "audio element இணையப் பக்கத்தில் ஒலிக் கோப்புகளைச் சேர்க்கிறது. controls attribute browser playback controls-ஐக் காட்டுகிறது.",
    "realWorldUsage": "Audio is used for podcasts, recorded lessons, language learning and audio instructions.",
    "realWorldUsageTamil": "Podcasts, பதிவு செய்யப்பட்ட பாடங்கள், மொழிக் கற்றல் மற்றும் audio வழிமுறைகளில் audio பயன்படுகிறது.",
    "syntax": "<audio controls>\n<source src=\"lesson.mp3\" type=\"audio/mpeg\">\n</audio>",
    "syntaxExplanationEnglish": [
      "audio embeds an audio player.",
      "controls displays play and pause controls.",
      "source specifies the audio file.",
      "type identifies the audio format."
    ],
    "syntaxExplanationTamil": [
      "audio audio player-ஐச் சேர்க்கிறது.",
      "controls play மற்றும் pause controls-ஐக் காட்டுகிறது.",
      "source audio file-ஐக் குறிப்பிடுகிறது.",
      "type audio format-ஐ அடையாளப்படுத்துகிறது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>HTML Audio Lesson</h1>\n<audio controls>\n<source src=\"lesson.mp3\" type=\"audio/mpeg\">\nYour browser does not support audio.\n</audio>\n</body>\n</html>",
    "programExplanationEnglish": [
      "h1 displays the lesson heading.",
      "audio creates the audio player.",
      "controls displays playback controls.",
      "source points to the lesson.mp3 file.",
      "Fallback text appears if audio is unsupported."
    ],
    "programExplanationTamil": [
      "h1 பாடத்தின் தலைப்பைக் காட்டுகிறது.",
      "audio audio player-ஐ உருவாக்குகிறது.",
      "controls playback controls-ஐக் காட்டுகிறது.",
      "source lesson.mp3 கோப்பைக் குறிப்பிடுகிறது.",
      "Audio ஆதரிக்கப்படாவிட்டால் மாற்று உரை காட்டப்படும்."
    ],
    "output": "HTML Audio Lesson\nAn audio player with playback controls appears if lesson.mp3 is available."
  },
  {
    "id": 16,
    "title": "HTML Video",
    "englishDefinition": "The video element embeds video files into a web page. Attributes such as controls, width, height and poster configure the player.",
    "tamilDefinition": "video element இணையப் பக்கத்தில் video கோப்புகளைச் சேர்க்கிறது. controls, width, height மற்றும் poster போன்ற attributes video player-ஐ அமைக்க உதவுகின்றன.",
    "realWorldUsage": "Video is used for tutorials, product demonstrations, recorded lectures and training materials.",
    "realWorldUsageTamil": "Tutorials, product demonstrations, பதிவு செய்யப்பட்ட வகுப்புகள் மற்றும் training materials-ல் video பயன்படுகிறது.",
    "syntax": "<video controls width=\"400\">\n<source src=\"lesson.mp4\" type=\"video/mp4\">\n</video>",
    "syntaxExplanationEnglish": [
      "video embeds a video player.",
      "controls displays playback controls.",
      "width sets the displayed width.",
      "source specifies the video file and format.",
      "poster can specify a preview image before playback."
    ],
    "syntaxExplanationTamil": [
      "video video player-ஐச் சேர்க்கிறது.",
      "controls playback controls-ஐக் காட்டுகிறது.",
      "width காட்டப்படும் அகலத்தை அமைக்கிறது.",
      "source video file மற்றும் அதன் format-ஐக் குறிப்பிடுகிறது.",
      "poster video play ஆவதற்கு முன் காட்டப்படும் preview படத்தைக் குறிப்பிடுகிறது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>HTML Tutorial</h1>\n<video controls width=\"400\" poster=\"thumbnail.jpg\">\n<source src=\"html-tutorial.mp4\" type=\"video/mp4\">\nYour browser does not support video.\n</video>\n</body>\n</html>",
    "programExplanationEnglish": [
      "h1 displays the tutorial heading.",
      "video creates the video player.",
      "controls displays playback controls.",
      "width sets the player width.",
      "poster displays a preview image.",
      "source specifies the MP4 video file."
    ],
    "programExplanationTamil": [
      "h1 tutorial தலைப்பைக் காட்டுகிறது.",
      "video video player-ஐ உருவாக்குகிறது.",
      "controls playback controls-ஐக் காட்டுகிறது.",
      "width player அகலத்தை அமைக்கிறது.",
      "poster preview படத்தைக் காட்டுகிறது.",
      "source MP4 video கோப்பைக் குறிப்பிடுகிறது."
    ],
    "output": "HTML Tutorial\nA video player with a preview image and playback controls appears when the files are available."
  },
  {
    "id": 17,
    "title": "HTML Iframes",
    "englishDefinition": "The iframe element embeds another web page or browsing context inside the current page using the src attribute.",
    "tamilDefinition": "iframe element src attribute-ஐப் பயன்படுத்தி மற்றொரு web page-ஐ தற்போதைய பக்கத்திற்குள் embed செய்கிறது.",
    "realWorldUsage": "Iframes can be used to embed maps, videos and external content from websites that allow embedding.",
    "realWorldUsageTamil": "Embed செய்ய அனுமதிக்கும் websites-இலிருந்து maps, videos மற்றும் வெளிப்புற உள்ளடக்கங்களைச் சேர்க்க iframe பயன்படுகிறது.",
    "syntax": "<iframe src=\"https://example.com\" title=\"Example Website\" width=\"500\" height=\"300\"></iframe>",
    "syntaxExplanationEnglish": [
      "iframe creates an embedded browsing area.",
      "src specifies the page to embed.",
      "title describes the embedded content.",
      "width and height define the frame dimensions."
    ],
    "syntaxExplanationTamil": [
      "iframe embedded browsing பகுதியை உருவாக்குகிறது.",
      "src embed செய்ய வேண்டிய பக்கத்தைக் குறிப்பிடுகிறது.",
      "title embed செய்யப்பட்ட உள்ளடக்கத்தை விவரிக்கிறது.",
      "width மற்றும் height frame அளவுகளை அமைக்கின்றன."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<h1>Embedded Website</h1>\n<iframe src=\"https://example.com\" title=\"Example Website\" width=\"500\" height=\"300\"></iframe>\n</body>\n</html>",
    "programExplanationEnglish": [
      "h1 displays the heading.",
      "iframe creates an area for another page.",
      "src specifies the external website.",
      "title provides an accessible description.",
      "The target website must permit embedding."
    ],
    "programExplanationTamil": [
      "h1 தலைப்பைக் காட்டுகிறது.",
      "iframe மற்றொரு பக்கத்திற்கான பகுதியை உருவாக்குகிறது.",
      "src வெளிப்புற இணையதளத்தைக் குறிப்பிடுகிறது.",
      "title அணுகல்தன்மைக்கான விளக்கத்தை வழங்குகிறது.",
      "Embed செய்யப்படும் website அதற்கு அனுமதி வழங்கியிருக்க வேண்டும்."
    ],
    "output": "Embedded Website\nThe external website may appear inside the frame if embedding is allowed."
  },
  {
    "id": 18,
    "title": "HTML Attributes",
    "englishDefinition": "Attributes provide additional information to HTML elements. Common global attributes include id, class, title, lang and hidden.",
    "tamilDefinition": "Attributes HTML elements-க்கு கூடுதல் தகவல்களை வழங்குகின்றன. id, class, title, lang மற்றும் hidden ஆகியவை பொதுவான global attributes ஆகும்.",
    "realWorldUsage": "Attributes identify elements, connect labels, provide additional information and allow CSS or JavaScript to target elements.",
    "realWorldUsageTamil": "Elements-ஐ அடையாளம் காணுதல், labels-ஐ இணைத்தல், கூடுதல் தகவல் வழங்குதல் மற்றும் CSS அல்லது JavaScript மூலம் elements-ஐத் தேர்ந்தெடுத்தல் போன்றவற்றில் attributes பயன்படுகின்றன.",
    "syntax": "<p id=\"intro\" class=\"highlight\" title=\"Introduction\">Welcome</p>",
    "syntaxExplanationEnglish": [
      "id gives an element a unique identifier within a page.",
      "class assigns reusable class names.",
      "title provides additional advisory information.",
      "Attributes are written inside an opening tag."
    ],
    "syntaxExplanationTamil": [
      "id ஒரு page-க்குள் தனித்துவமான அடையாளத்தை வழங்குகிறது.",
      "class மீண்டும் பயன்படுத்தக்கூடிய class பெயர்களை வழங்குகிறது.",
      "title கூடுதல் விளக்கத் தகவலை வழங்குகிறது.",
      "Attributes opening tag-க்குள் எழுதப்படுகின்றன."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html lang=\"en\">\n<body>\n<h1 id=\"pageTitle\" class=\"main-heading\">Student Portal</h1>\n<p class=\"notice\" title=\"Read this message\">Welcome to the portal.</p>\n</body>\n</html>",
    "programExplanationEnglish": [
      "lang identifies the document language.",
      "id uniquely identifies the heading.",
      "class assigns a reusable class name.",
      "The paragraph uses another class.",
      "title provides additional information."
    ],
    "programExplanationTamil": [
      "lang document மொழியை அடையாளப்படுத்துகிறது.",
      "id heading-ஐ தனித்துவமாக அடையாளப்படுத்துகிறது.",
      "class மீண்டும் பயன்படுத்தக்கூடிய class பெயரை வழங்குகிறது.",
      "paragraph மற்றொரு class-ஐப் பயன்படுத்துகிறது.",
      "title கூடுதல் தகவலை வழங்குகிறது."
    ],
    "output": "Student Portal\nWelcome to the portal."
  },
  {
    "id": 19,
    "title": "HTML Entities",
    "englishDefinition": "HTML entities represent reserved characters and special symbols using named or numeric character references.",
    "tamilDefinition": "HTML entities reserved characters மற்றும் சிறப்பு குறியீடுகளை named அல்லது numeric character references மூலம் காட்டுகின்றன.",
    "realWorldUsage": "Entities are used to display angle brackets, ampersands, copyright symbols and other special characters.",
    "realWorldUsageTamil": "Angle brackets, ampersands, copyright symbols மற்றும் பிற சிறப்பு எழுத்துகளைக் காட்ட entities பயன்படுகின்றன.",
    "syntax": "&lt; displays <\n&gt; displays >\n&amp; displays &\n&quot; displays \"\n&copy; displays ©",
    "syntaxExplanationEnglish": [
      "&lt; represents the less-than symbol.",
      "&gt; represents the greater-than symbol.",
      "&amp; represents the ampersand.",
      "&quot; represents a quotation mark.",
      "&copy; represents the copyright symbol."
    ],
    "syntaxExplanationTamil": [
      "&lt; less-than குறியீட்டைக் குறிக்கிறது.",
      "&gt; greater-than குறியீட்டைக் குறிக்கிறது.",
      "&amp; ampersand குறியீட்டைக் குறிக்கிறது.",
      "&quot; quotation mark-ஐக் குறிக்கிறது.",
      "&copy; copyright குறியீட்டைக் குறிக்கிறது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html>\n<body>\n<p>Use &lt;h1&gt; to create a heading.</p>\n<p>HTML &amp; CSS</p>\n<p>&copy; 2026 DEEP CODE</p>\n</body>\n</html>",
    "programExplanationEnglish": [
      "The first paragraph uses entities to display angle brackets as text.",
      "The ampersand entity displays the & character.",
      "The copyright entity displays the copyright symbol."
    ],
    "programExplanationTamil": [
      "முதல் paragraph angle brackets-ஐ உரையாகக் காட்ட entities-ஐப் பயன்படுத்துகிறது.",
      "ampersand entity & குறியீட்டைக் காட்டுகிறது.",
      "copyright entity copyright குறியீட்டைக் காட்டுகிறது."
    ],
    "output": "Use <h1> to create a heading.\nHTML & CSS\n© 2026 DEEP CODE"
  },
  {
    "id": 20,
    "title": "HTML Meta Tags",
    "englishDefinition": "Meta elements provide information about an HTML document. They are placed inside the head element and commonly define character encoding, viewport settings and page descriptions.",
    "tamilDefinition": "Meta elements ஒரு HTML document பற்றிய தகவல்களை வழங்குகின்றன. இவை head element-க்குள் வைக்கப்படுகின்றன. Character encoding, viewport settings மற்றும் page descriptions ஆகியவற்றை அமைக்கப் பயன்படுகின்றன.",
    "realWorldUsage": "Meta tags help browsers display text correctly, support mobile-friendly layouts and provide page descriptions that search engines may use.",
    "realWorldUsageTamil": "Text-ஐ சரியாகக் காட்டவும், mobile-friendly layout உருவாக்கவும், search engines பயன்படுத்தக்கூடிய page descriptions வழங்கவும் meta tags உதவுகின்றன.",
    "syntax": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"Learn HTML step by step.\">",
    "syntaxExplanationEnglish": [
      "charset UTF-8 declares the character encoding.",
      "The viewport meta element helps control the layout on mobile devices.",
      "width=device-width matches the viewport width to the device width.",
      "initial-scale sets the initial zoom level.",
      "description provides a short summary of the page."
    ],
    "syntaxExplanationTamil": [
      "charset UTF-8 character encoding-ஐ அறிவிக்கிறது.",
      "viewport meta element mobile devices-ல் layout-ஐ அமைக்க உதவுகிறது.",
      "width=device-width viewport அகலத்தை device அகலத்துடன் பொருத்துகிறது.",
      "initial-scale ஆரம்ப zoom அளவை அமைக்கிறது.",
      "description பக்கத்தின் சுருக்கமான விளக்கத்தை வழங்குகிறது."
    ],
    "exampleProgram": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<meta name=\"description\" content=\"Beginner-friendly HTML lessons from DEEP CODE.\">\n<title>Learn HTML | DEEP CODE</title>\n</head>\n<body>\n<h1>Learn HTML</h1>\n<p>Start building web pages.</p>\n</body>\n</html>",
    "programExplanationEnglish": [
      "lang identifies the document language.",
      "charset declares UTF-8 character encoding.",
      "viewport helps the page adapt to device width.",
      "description provides a short page summary.",
      "title sets the browser tab title.",
      "body contains the visible heading and paragraph."
    ],
    "programExplanationTamil": [
      "lang document மொழியை அடையாளப்படுத்துகிறது.",
      "charset UTF-8 character encoding-ஐ அறிவிக்கிறது.",
      "viewport device அகலத்திற்கு ஏற்ப பக்கம் அமைவதற்கு உதவுகிறது.",
      "description பக்கத்தின் சுருக்கமான விளக்கத்தை வழங்குகிறது.",
      "title browser tab-ல் தலைப்பைக் காட்டுகிறது.",
      "body தெரியும் heading மற்றும் paragraph-ஐக் கொண்டுள்ளது."
    ],
    "output": "Learn HTML\nStart building web pages."
  }

];

export default topics;