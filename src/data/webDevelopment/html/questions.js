
const questions = [
  {
    topicId: 1,
    id: 1,
    title: "Create Your First Heading",
    questionEnglish: "Create an HTML page that displays the heading 'Welcome to DEEP CODE'.",
    questionTamil: "'Welcome to DEEP CODE' என்ற தலைப்பைக் காட்டும் HTML பக்கத்தை உருவாக்கவும்.",
    hintEnglish: "Use the h1 element inside the body.",
    hintTamil: "Body-க்குள் h1 element-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "Welcome to DEEP CODE",
    expectedOutputTamil: "Welcome to DEEP CODE",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Welcome to DEEP CODE</h1>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 2,
    title: "Display a Paragraph",
    questionEnglish: "Create an HTML page that displays the paragraph 'I am learning HTML'.",
    questionTamil: "'I am learning HTML' என்ற பத்தியைக் காட்டும் HTML பக்கத்தை உருவாக்கவும்.",
    hintEnglish: "Use the p element.",
    hintTamil: "p element-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "I am learning HTML",
    expectedOutputTamil: "I am learning HTML",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<p>I am learning HTML</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 3,
    title: "Display Your Name",
    questionEnglish: "Create an HTML page that displays your name using a heading and your course using a paragraph.",
    questionTamil: "ஒரு heading-ல் உங்கள் பெயரையும், paragraph-ல் உங்கள் படிப்பையும் காட்டும் HTML பக்கத்தை உருவாக்கவும்.",
    hintEnglish: "Use h1 for your name and p for your course.",
    hintTamil: "உங்கள் பெயருக்கு h1 மற்றும் படிப்புக்கு p பயன்படுத்தவும்.",
    expectedOutput: "Deepak\nB.Sc. Computer Science",
    expectedOutputTamil: "Deepak\nB.Sc. Computer Science",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Deepak</h1>\n<p>B.Sc. Computer Science</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 4,
    title: "Display Two Paragraphs",
    questionEnglish: "Create an HTML page with two paragraphs: 'HTML creates structure' and 'CSS adds style'.",
    questionTamil: "'HTML creates structure' மற்றும் 'CSS adds style' என்ற இரண்டு பத்திகளைக் கொண்ட HTML பக்கத்தை உருவாக்கவும்.",
    hintEnglish: "Use two separate p elements.",
    hintTamil: "தனித்தனியாக இரண்டு p elements-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "HTML creates structure\nCSS adds style",
    expectedOutputTamil: "HTML கட்டமைப்பை உருவாக்குகிறது\nCSS தோற்றத்தை அமைக்கிறது",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<p>HTML creates structure</p>\n<p>CSS adds style</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 5,
    title: "Create a Simple Introduction",
    questionEnglish: "Create a webpage with the heading 'About Me', followed by a paragraph introducing yourself.",
    questionTamil: "'About Me' என்ற heading-ஐயும் அதைத் தொடர்ந்து உங்களை அறிமுகப்படுத்தும் paragraph-ஐயும் கொண்ட webpage உருவாக்கவும்.",
    hintEnglish: "Combine h1 and p elements.",
    hintTamil: "h1 மற்றும் p elements-ஐ இணைத்துப் பயன்படுத்தவும்.",
    expectedOutput: "About Me\nMy name is Deepak. I am interested in Cybersecurity.",
    expectedOutputTamil: "About Me\nஎன் பெயர் Deepak. எனக்கு Cybersecurity-ல் ஆர்வம் உள்ளது.",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>About Me</h1>\n<p>My name is Deepak. I am interested in Cybersecurity.</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 6,
    title: "Create a Course Introduction",
    questionEnglish: "Create a webpage that displays 'Web Development' as a heading and explains in a paragraph that it includes HTML, CSS and JavaScript.",
    questionTamil: "'Web Development' என்ற தலைப்பையும் அதில் HTML, CSS மற்றும் JavaScript அடங்கும் என்ற விளக்கத்தையும் கொண்ட webpage உருவாக்கவும்.",
    hintEnglish: "Use one h1 and one p element.",
    hintTamil: "ஒரு h1 மற்றும் ஒரு p element-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "Web Development\nWeb development includes HTML, CSS and JavaScript.",
    expectedOutputTamil: "Web Development\nWeb development-ல் HTML, CSS மற்றும் JavaScript அடங்கும்.",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Web Development</h1>\n<p>Web development includes HTML, CSS and JavaScript.</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 7,
    title: "Build a Basic Profile",
    questionEnglish: "Create a basic profile webpage with your name, age and career goal using headings and paragraphs.",
    questionTamil: "உங்கள் பெயர், வயது மற்றும் தொழில் இலக்கைக் headings மற்றும் paragraphs பயன்படுத்திக் காட்டும் profile webpage உருவாக்கவும்.",
    hintEnglish: "Use h1 for your name and p elements for the other details.",
    hintTamil: "உங்கள் பெயருக்கு h1 மற்றும் மற்ற விவரங்களுக்கு p elements பயன்படுத்தவும்.",
    expectedOutput: "Deepak\nAge: 20\nCareer Goal: Cybersecurity",
    expectedOutputTamil: "Deepak\nவயது: 20\nதொழில் இலக்கு: Cybersecurity",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Deepak</h1>\n<p>Age: 20</p>\n<p>Career Goal: Cybersecurity</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 8,
    title: "Create a Simple Information Page",
    questionEnglish: "Create a webpage about your college with a heading 'My College' and two paragraphs describing your department and what you are learning.",
    questionTamil: "'My College' என்ற heading-ஐயும் உங்கள் துறை மற்றும் நீங்கள் கற்றுக்கொள்வதை விவரிக்கும் இரண்டு paragraphs-ஐயும் கொண்ட webpage உருவாக்கவும்.",
    hintEnglish: "Use one h1 and two p elements.",
    hintTamil: "ஒரு h1 மற்றும் இரண்டு p elements-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "My College\nDepartment: Computer Science\nI am learning web development.",
    expectedOutputTamil: "My College\nதுறை: Computer Science\nநான் Web Development கற்றுக்கொண்டு இருக்கிறேன்.",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>My College</h1>\n<p>Department: Computer Science</p>\n<p>I am learning web development.</p>\n</body>\n</html>"
  },
  {
    topicId: 1,
    id: 9,
    title: "Challenge: Personal Introduction Page",
    questionEnglish: "Build a personal introduction webpage containing your name, education, interests and career goal. Organize the information using suitable HTML elements.",
    questionTamil: "உங்கள் பெயர், கல்வி, ஆர்வங்கள் மற்றும் தொழில் இலக்கு ஆகியவற்றைக் கொண்ட personal introduction webpage உருவாக்கவும். பொருத்தமான HTML elements மூலம் தகவல்களை ஒழுங்குபடுத்தவும்.",
    hintEnglish: "Think about how headings and paragraphs can organize different pieces of information.",
    hintTamil: "வெவ்வேறு தகவல்களை headings மற்றும் paragraphs மூலம் எவ்வாறு ஒழுங்குபடுத்தலாம் என்று சிந்தியுங்கள்.",
    expectedOutput: "A personal introduction webpage displaying your name, education, interests and career goal.",
    expectedOutputTamil: "உங்கள் பெயர், கல்வி, ஆர்வங்கள் மற்றும் தொழில் இலக்கைக் காட்டும் personal introduction webpage.",
    challenge: true
  },
  {
    topicId: 1,
    id: 10,
    title: "Challenge: Build a Mini Webpage",
    questionEnglish: "Create a mini webpage for a fictional technology company. Include its company name, a short description, its services and a contact message. Use suitable HTML elements.",
    questionTamil: "ஒரு கற்பனையான technology company-க்காக mini webpage உருவாக்கவும். நிறுவனத்தின் பெயர், சிறிய விளக்கம், சேவைகள் மற்றும் தொடர்பு செய்தி ஆகியவற்றைச் சேர்த்து பொருத்தமான HTML elements-ஐப் பயன்படுத்தவும்.",
    hintEnglish: "Plan the page using headings and paragraphs. Think about how you would organize the company information.",
    hintTamil: "Headings மற்றும் paragraphs மூலம் பக்கத்தைத் திட்டமிடுங்கள். நிறுவனத் தகவல்களை எவ்வாறு ஒழுங்குபடுத்தலாம் என்று சிந்தியுங்கள்.",
    expectedOutput: "A mini company webpage displaying the company name, description, services and contact message.",
    expectedOutputTamil: "நிறுவனத்தின் பெயர், விளக்கம், சேவைகள் மற்றும் தொடர்பு செய்தியைக் காட்டும் mini company webpage.",
    challenge: true
  },



  {
    topicId: 2,
    id: 1,
    title: "Create a Basic HTML Document",
    questionEnglish: "Create a valid HTML document using DOCTYPE, html, head and body elements. Display 'Hello HTML' inside the body.",
    questionTamil: "DOCTYPE, html, head மற்றும் body elements-ஐப் பயன்படுத்தி சரியான HTML document உருவாக்கவும். Body-க்குள் 'Hello HTML' என்பதைக் காட்டவும்.",
    hintEnglish: "Start with <!DOCTYPE html> and place the visible content inside body.",
    hintTamil: "<!DOCTYPE html> என்று தொடங்கி, தெரியும் உள்ளடக்கத்தை body-க்குள் எழுதவும்.",
    expectedOutput: "Hello HTML",
    expectedOutputTamil: "Hello HTML",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>My First Page</title>\n</head>\n<body>\n<p>Hello HTML</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 2,
    title: "Set the Browser Tab Title",
    questionEnglish: "Create an HTML document with the browser tab title 'My Website'. Display 'Welcome' inside the body.",
    questionTamil: "Browser tab-ல் 'My Website' என்ற title-ஐக் காட்டும் HTML document உருவாக்கவும். Body-க்குள் 'Welcome' என்பதைக் காட்டவும்.",
    hintEnglish: "Write the title element inside head.",
    hintTamil: "title element-ஐ head-க்குள் எழுதவும்.",
    expectedOutput: "Browser tab: My Website\nPage content: Welcome",
    expectedOutputTamil: "Browser tab: My Website\nபக்க உள்ளடக்கம்: Welcome",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>My Website</title>\n</head>\n<body>\n<h1>Welcome</h1>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 3,
    title: "Separate Head and Body",
    questionEnglish: "Create an HTML document with the title 'Student Page' inside head and the text 'I am a student' inside body.",
    questionTamil: "head-க்குள் 'Student Page' என்ற title-ஐயும் body-க்குள் 'I am a student' என்ற உரையையும் கொண்ட HTML document உருவாக்கவும்.",
    hintEnglish: "The title belongs inside head, while visible content belongs inside body.",
    hintTamil: "title என்பது head-க்குள் இருக்க வேண்டும்; பயனருக்குத் தெரியும் உள்ளடக்கம் body-க்குள் இருக்க வேண்டும்.",
    expectedOutput: "Browser tab: Student Page\nI am a student",
    expectedOutputTamil: "Browser tab: Student Page\nI am a student",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Student Page</title>\n</head>\n<body>\n<p>I am a student</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 4,
    title: "Create a Page with Two Sections of Content",
    questionEnglish: "Create a complete HTML document that displays the heading 'My Learning' and the paragraph 'I am learning web development'.",
    questionTamil: "'My Learning' என்ற heading மற்றும் 'I am learning web development' என்ற paragraph-ஐக் காட்டும் முழுமையான HTML document உருவாக்கவும்.",
    hintEnglish: "Use the complete HTML structure and place h1 and p inside body.",
    hintTamil: "முழுமையான HTML structure-ஐப் பயன்படுத்தி h1 மற்றும் p-ஐ body-க்குள் எழுதவும்.",
    expectedOutput: "My Learning\nI am learning web development",
    expectedOutputTamil: "My Learning\nநான் web development கற்றுக்கொண்டு இருக்கிறேன்.",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>My Learning</title>\n</head>\n<body>\n<h1>My Learning</h1>\n<p>I am learning web development</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 5,
    title: "Create a Student Profile Document",
    questionEnglish: "Create a complete HTML document with the title 'Student Profile'. Display the student's name, department and college year inside the body.",
    questionTamil: "'Student Profile' என்ற title கொண்ட முழுமையான HTML document உருவாக்கவும். Body-க்குள் மாணவரின் பெயர், துறை மற்றும் படிக்கும் ஆண்டைக் காட்டவும்.",
    hintEnglish: "Use title inside head and headings or paragraphs inside body.",
    hintTamil: "head-க்குள் title-ஐயும் body-க்குள் headings அல்லது paragraphs-ஐயும் பயன்படுத்தவும்.",
    expectedOutput: "Student Profile\nName: Deepak\nDepartment: Computer Science\nYear: Final Year",
    expectedOutputTamil: "Student Profile\nபெயர்: Deepak\nதுறை: Computer Science\nஆண்டு: Final Year",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Student Profile</title>\n</head>\n<body>\n<h1>Student Profile</h1>\n<p>Name: Deepak</p>\n<p>Department: Computer Science</p>\n<p>Year: Final Year</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 6,
    title: "Create a College Information Page",
    questionEnglish: "Create a complete HTML document with the title 'My College'. Display the college name as a heading and its department information as a paragraph.",
    questionTamil: "'My College' என்ற title கொண்ட முழுமையான HTML document உருவாக்கவும். College பெயரை heading ஆகவும் அதன் department தகவலை paragraph ஆகவும் காட்டவும்.",
    hintEnglish: "Use the title element inside head and h1 and p elements inside body.",
    hintTamil: "head-க்குள் title element-ஐயும் body-க்குள் h1 மற்றும் p elements-ஐயும் பயன்படுத்தவும்.",
    expectedOutput: "My College\nABC College of Arts and Science\nDepartment: Computer Science",
    expectedOutputTamil: "My College\nABC College of Arts and Science\nதுறை: Computer Science",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>My College</title>\n</head>\n<body>\n<h1>ABC College of Arts and Science</h1>\n<p>Department: Computer Science</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 7,
    title: "Create a Simple Product Page",
    questionEnglish: "Create a complete HTML document for a product. Set the browser title to 'Product Details'. Display the product name, price and a short description inside the body.",
    questionTamil: "ஒரு product-க்கான முழுமையான HTML document உருவாக்கவும். Browser title-ஐ 'Product Details' என்று அமைத்து, body-க்குள் product பெயர், விலை மற்றும் சிறிய விளக்கத்தைக் காட்டவும்.",
    hintEnglish: "Use a title in head and suitable headings and paragraphs in body.",
    hintTamil: "head-ல் title-ஐயும் body-ல் பொருத்தமான headings மற்றும் paragraphs-ஐயும் பயன்படுத்தவும்.",
    expectedOutput: "Product Details\nWireless Mouse\nPrice: Rs. 499\nA comfortable wireless mouse.",
    expectedOutputTamil: "Product Details\nWireless Mouse\nவிலை: Rs. 499\nவசதியான wireless mouse.",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Product Details</title>\n</head>\n<body>\n<h1>Wireless Mouse</h1>\n<p>Price: Rs. 499</p>\n<p>A comfortable wireless mouse.</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 8,
    title: "Build a Complete Welcome Page",
    questionEnglish: "Create a complete HTML document for a learning website. Set its title to 'Learn With Us'. Display a welcome heading, a short introduction and a course name.",
    questionTamil: "ஒரு learning website-க்கான முழுமையான HTML document உருவாக்கவும். அதன் title-ஐ 'Learn With Us' என்று அமைத்து, welcome heading, சிறிய அறிமுகம் மற்றும் course பெயரைக் காட்டவும்.",
    hintEnglish: "Remember to place metadata and title in head and all visible content in body.",
    hintTamil: "Metadata மற்றும் title-ஐ head-க்குள், தெரியும் அனைத்து உள்ளடக்கத்தையும் body-க்குள் எழுதவும்.",
    expectedOutput: "Learn With Us\nWelcome to Our Learning Website\nLearn at your own pace.\nCourse: HTML Basics",
    expectedOutputTamil: "Learn With Us\nஎங்கள் Learning Website-க்கு வரவேற்கிறோம்\nஉங்கள் வேகத்தில் கற்றுக்கொள்ளுங்கள்.\nபாடம்: HTML Basics",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<head>\n<title>Learn With Us</title>\n</head>\n<body>\n<h1>Welcome to Our Learning Website</h1>\n<p>Learn at your own pace.</p>\n<p>Course: HTML Basics</p>\n</body>\n</html>"
  },
  {
    topicId: 2,
    id: 9,
    title: "Challenge: Build a Personal Website Structure",
    questionEnglish: "Create a complete HTML document for a personal website. Include a suitable browser title, a main heading, an introduction, education details and career goals. Organize the document correctly using head and body.",
    questionTamil: "ஒரு personal website-க்கான முழுமையான HTML document உருவாக்கவும். பொருத்தமான browser title, main heading, அறிமுகம், கல்வி விவரங்கள் மற்றும் தொழில் இலக்குகளைச் சேர்க்கவும். head மற்றும் body-ஐச் சரியாகப் பயன்படுத்தி document-ஐ அமைக்கவும்.",
    hintEnglish: "Plan what belongs inside head and what should be visible inside body. Use suitable heading and paragraph elements.",
    hintTamil: "head-க்குள் என்ன இருக்க வேண்டும், body-க்குள் என்ன தெரிய வேண்டும் என்று திட்டமிடுங்கள். பொருத்தமான heading மற்றும் paragraph elements-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "A complete personal website displaying a title, introduction, education details and career goal.",
    expectedOutputTamil: "Title, அறிமுகம், கல்வி விவரங்கள் மற்றும் தொழில் இலக்கைக் காட்டும் முழுமையான personal website.",
    challenge: true
  },
  {
    topicId: 2,
    id: 10,
    title: "Challenge: Create a Business Webpage Structure",
    questionEnglish: "Create a complete HTML document for a fictional web development company. Include a browser title, company name, company introduction, three services and a contact message. Place each part in the correct document section.",
    questionTamil: "ஒரு கற்பனையான web development நிறுவனத்திற்கான முழுமையான HTML document உருவாக்கவும். Browser title, நிறுவனத்தின் பெயர், அறிமுகம், மூன்று சேவைகள் மற்றும் தொடர்பு செய்தி ஆகியவற்றைச் சேர்த்து ஒவ்வொன்றையும் சரியான document பகுதியில் அமைக்கவும்.",
    hintEnglish: "Use head for page information and body for visible content. Organize the content using headings and paragraphs.",
    hintTamil: "Page தகவல்களுக்கு head-ஐயும் தெரியும் உள்ளடக்கத்திற்கு body-ஐயும் பயன்படுத்தவும். Headings மற்றும் paragraphs மூலம் உள்ளடக்கத்தை ஒழுங்குபடுத்தவும்.",
    expectedOutput: "A complete business webpage displaying the company name, introduction, three services and contact message.",
    expectedOutputTamil: "நிறுவனத்தின் பெயர், அறிமுகம், மூன்று சேவைகள் மற்றும் தொடர்பு செய்தியைக் காட்டும் முழுமையான business webpage.",
    challenge: true
  },

  {
    topicId: 3,
    id: 1,
    title: "Display a Main Heading",
    questionEnglish: "Create an HTML page that displays 'Welcome to Web Development' using the main heading element.",
    questionTamil: "'Welcome to Web Development' என்பதை main heading ஆகக் காட்டும் HTML பக்கத்தை உருவாக்கவும்.",
    hintEnglish: "Use the h1 element inside the body.",
    hintTamil: "Body-க்குள் h1 element-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "Welcome to Web Development",
    expectedOutputTamil: "Welcome to Web Development",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Welcome to Web Development</h1>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 2,
    title: "Display a Second-Level Heading",
    questionEnglish: "Create an HTML page that displays 'HTML Basics' using the second-level heading element.",
    questionTamil: "'HTML Basics' என்பதை இரண்டாம் நிலைத் தலைப்பாகக் காட்டும் HTML பக்கத்தை உருவாக்கவும்.",
    hintEnglish: "Use the h2 element.",
    hintTamil: "h2 element-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "HTML Basics",
    expectedOutputTamil: "HTML Basics",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h2>HTML Basics</h2>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 3,
    title: "Use Three Heading Levels",
    questionEnglish: "Create an HTML page that displays 'Web Development', 'HTML' and 'HTML Headings' using h1, h2 and h3 respectively.",
    questionTamil: "'Web Development', 'HTML' மற்றும் 'HTML Headings' ஆகியவற்றை முறையே h1, h2 மற்றும் h3 பயன்படுத்திக் காட்டவும்.",
    hintEnglish: "Use h1 for the main heading, h2 for the section and h3 for the subsection.",
    hintTamil: "முக்கிய தலைப்புக்கு h1, section-க்கு h2 மற்றும் subsection-க்கு h3 பயன்படுத்தவும்.",
    expectedOutput: "Web Development\nHTML\nHTML Headings",
    expectedOutputTamil: "Web Development\nHTML\nHTML Headings",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Web Development</h1>\n<h2>HTML</h2>\n<h3>HTML Headings</h3>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 4,
    title: "Display All Six Heading Levels",
    questionEnglish: "Create an HTML page that displays the texts 'Heading One' to 'Heading Six' using h1 to h6 respectively.",
    questionTamil: "'Heading One' முதல் 'Heading Six' வரை உள்ள உரைகளை முறையே h1 முதல் h6 வரை பயன்படுத்திக் காட்டவும்.",
    hintEnglish: "HTML provides six heading elements: h1, h2, h3, h4, h5 and h6.",
    hintTamil: "HTML-ல் h1, h2, h3, h4, h5 மற்றும் h6 என ஆறு heading elements உள்ளன.",
    expectedOutput: "Heading One\nHeading Two\nHeading Three\nHeading Four\nHeading Five\nHeading Six",
    expectedOutputTamil: "Heading One\nHeading Two\nHeading Three\nHeading Four\nHeading Five\nHeading Six",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Heading One</h1>\n<h2>Heading Two</h2>\n<h3>Heading Three</h3>\n<h4>Heading Four</h4>\n<h5>Heading Five</h5>\n<h6>Heading Six</h6>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 5,
    title: "Create a Course Heading Structure",
    questionEnglish: "Create a webpage for a programming course. Display 'Programming Course' as h1, 'Java' as h2 and 'Variables' as h3.",
    questionTamil: "ஒரு programming course-க்கான webpage உருவாக்கவும். 'Programming Course' என்பதை h1 ஆகவும், 'Java' என்பதை h2 ஆகவும், 'Variables' என்பதை h3 ஆகவும் காட்டவும்.",
    hintEnglish: "Organize the headings from the main topic to the subsection.",
    hintTamil: "முக்கிய தலைப்பிலிருந்து துணைத் தலைப்பு வரை headings-ஐ ஒழுங்குபடுத்தவும்.",
    expectedOutput: "Programming Course\nJava\nVariables",
    expectedOutputTamil: "Programming Course\nJava\nVariables",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Programming Course</h1>\n<h2>Java</h2>\n<h3>Variables</h3>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 6,
    title: "Create Multiple Section Headings",
    questionEnglish: "Create a webpage with 'My Portfolio' as the main heading and three section headings: 'About Me', 'Education' and 'Skills'.",
    questionTamil: "'My Portfolio' என்ற main heading-ஐயும், 'About Me', 'Education' மற்றும் 'Skills' என்ற மூன்று section headings-ஐயும் கொண்ட webpage உருவாக்கவும்.",
    hintEnglish: "Use h1 for the main heading and h2 for all three sections.",
    hintTamil: "Main heading-க்கு h1 மற்றும் மூன்று sections-க்கும் h2 பயன்படுத்தவும்.",
    expectedOutput: "My Portfolio\nAbout Me\nEducation\nSkills",
    expectedOutputTamil: "My Portfolio\nAbout Me\nEducation\nSkills",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>My Portfolio</h1>\n<h2>About Me</h2>\n<h2>Education</h2>\n<h2>Skills</h2>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 7,
    title: "Organize a News Article",
    questionEnglish: "Create a news article structure using 'Technology News' as h1, 'Cybersecurity Updates' as h2 and 'New Security Tools Released' as h3.",
    questionTamil: "'Technology News' என்பதை h1 ஆகவும், 'Cybersecurity Updates' என்பதை h2 ஆகவும், 'New Security Tools Released' என்பதை h3 ஆகவும் பயன்படுத்தி news article structure உருவாக்கவும்.",
    hintEnglish: "Use different heading levels to show the relationship between the main topic, section and article title.",
    hintTamil: "Main topic, section மற்றும் article title ஆகியவற்றின் தொடர்பைக் காட்ட வெவ்வேறு heading levels-ஐப் பயன்படுத்தவும்.",
    expectedOutput: "Technology News\nCybersecurity Updates\nNew Security Tools Released",
    expectedOutputTamil: "Technology News\nCybersecurity Updates\nNew Security Tools Released",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>Technology News</h1>\n<h2>Cybersecurity Updates</h2>\n<h3>New Security Tools Released</h3>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 8,
    title: "Build a College Website Heading Structure",
    questionEnglish: "Create a college webpage with 'ABC College' as h1. Add 'Departments' and 'Admissions' as h2 headings. Under Departments, display 'Computer Science' as an h3 heading.",
    questionTamil: "'ABC College' என்பதை h1 ஆகக் கொண்ட college webpage உருவாக்கவும். 'Departments' மற்றும் 'Admissions' ஆகியவற்றை h2 ஆகவும், Departments-ன் கீழ் 'Computer Science' என்பதை h3 ஆகவும் காட்டவும்.",
    hintEnglish: "Use h1 for the college name, h2 for main sections and h3 for a department under Departments.",
    hintTamil: "College பெயருக்கு h1, முக்கிய sections-க்கு h2 மற்றும் Departments-ன் கீழுள்ள துறைக்கு h3 பயன்படுத்தவும்.",
    expectedOutput: "ABC College\nDepartments\nComputer Science\nAdmissions",
    expectedOutputTamil: "ABC College\nDepartments\nComputer Science\nAdmissions",
    challenge: false,
    solution: "<!DOCTYPE html>\n<html>\n<body>\n<h1>ABC College</h1>\n<h2>Departments</h2>\n<h3>Computer Science</h3>\n<h2>Admissions</h2>\n</body>\n</html>"
  },
  {
    topicId: 3,
    id: 9,
    title: "Challenge: Build a Documentation Heading Structure",
    questionEnglish: "Create a heading structure for a web development documentation page. Use 'Web Development Guide' as the main heading. Include HTML, CSS and JavaScript as section headings. Under HTML, include 'Elements' and 'Attributes' as subsection headings.",
    questionTamil: "ஒரு web development documentation page-க்கான heading structure உருவாக்கவும். 'Web Development Guide' என்பதை main heading ஆகவும், HTML, CSS மற்றும் JavaScript ஆகியவற்றை section headings ஆகவும் அமைக்கவும். HTML-ன் கீழ் 'Elements' மற்றும் 'Attributes' ஆகியவற்றை subsection headings ஆகச் சேர்க்கவும்.",
    hintEnglish: "Plan the hierarchy carefully. Use h1 for the main heading, h2 for the three sections and h3 for the HTML subsections.",
    hintTamil: "Heading hierarchy-ஐ கவனமாகத் திட்டமிடுங்கள். Main heading-க்கு h1, மூன்று sections-க்கு h2 மற்றும் HTML துணைப் பகுதிகளுக்கு h3 பயன்படுத்தவும்.",
    expectedOutput: "A documentation heading structure with one main heading, three section headings and two HTML subsection headings.",
    expectedOutputTamil: "ஒரு main heading, மூன்று section headings மற்றும் இரண்டு HTML subsection headings கொண்ட documentation structure.",
    challenge: true
  },
  {
    topicId: 3,
    id: 10,
    title: "Challenge: Design a Learning Platform Heading Hierarchy",
    questionEnglish: "Create the heading hierarchy for an online learning platform. Include 'DEEP CODE' as the main heading, 'Programming' and 'Web Development' as section headings. Under Web Development, add HTML, CSS and JavaScript as subsection headings. Choose suitable heading levels.",
    questionTamil: "ஒரு online learning platform-க்கான heading hierarchy உருவாக்கவும். 'DEEP CODE' என்பதை main heading ஆகவும், 'Programming' மற்றும் 'Web Development' ஆகியவற்றை section headings ஆகவும் அமைக்கவும். Web Development-ன் கீழ் HTML, CSS மற்றும் JavaScript ஆகியவற்றை subsection headings ஆகச் சேர்க்கவும். பொருத்தமான heading levels-ஐத் தேர்ந்தெடுக்கவும்.",
    hintEnglish: "Think about the parent-child relationship between the platform, its sections and the technologies.",
    hintTamil: "Platform, அதன் sections மற்றும் technologies ஆகியவற்றுக்கிடையிலான parent-child தொடர்பைப் பற்றி சிந்தியுங்கள்.",
    expectedOutput: "A heading hierarchy with DEEP CODE, Programming, Web Development, HTML, CSS and JavaScript.",
    expectedOutputTamil: "DEEP CODE, Programming, Web Development, HTML, CSS மற்றும் JavaScript ஆகியவற்றைக் கொண்ட heading hierarchy.",
    challenge: true
  },



{
  id: 1,
  topicId: 4,
  title: "Create a Paragraph",
  questionEnglish: "Create a paragraph that displays the text 'Welcome to my website'.",
  questionTamil: "'Welcome to my website' என்ற உரையைக் காட்டும் ஒரு paragraph உருவாக்கவும்.",
  hintEnglish: "Use the <p> tag.",
  hintTamil: "<p> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "Welcome to my website",
  expectedOutputTamil: "Welcome to my website",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>Welcome to my website</p>
</body>
</html>`
},

{
  id: 2,
  topicId: 4,
  title: "Bold Text",
  questionEnglish: "Display the text 'Cybersecurity is interesting' with the word 'Cybersecurity' in bold.",
  questionTamil: "'Cybersecurity is interesting' என்ற உரையில் 'Cybersecurity' என்ற வார்த்தையை தடிமனாகக் காட்டவும்.",
  hintEnglish: "Use the <strong> tag around the word.",
  hintTamil: "அந்த வார்த்தையைச் சுற்றி <strong> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "Cybersecurity is interesting (Cybersecurity appears bold)",
  expectedOutputTamil: "Cybersecurity is interesting (Cybersecurity தடிமனாகத் தோன்றும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p><strong>Cybersecurity</strong> is interesting</p>
</body>
</html>`
},

{
  id: 3,
  topicId: 4,
  title: "Italic Text",
  questionEnglish: "Display the sentence 'Learning HTML is fun' with the word 'fun' in italic.",
  questionTamil: "'Learning HTML is fun' என்ற வாக்கியத்தில் 'fun' என்ற வார்த்தையை சாய்வாகக் காட்டவும்.",
  hintEnglish: "Use the <em> tag around 'fun'.",
  hintTamil: "'fun' என்ற வார்த்தையைச் சுற்றி <em> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "Learning HTML is fun (fun appears italic)",
  expectedOutputTamil: "Learning HTML is fun (fun சாய்வாகத் தோன்றும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>Learning HTML is <em>fun</em></p>
</body>
</html>`
},

{
  id: 4,
  topicId: 4,
  title: "Underline Text",
  questionEnglish: "Create a paragraph that displays 'Important Notice' with the words underlined.",
  questionTamil: "'Important Notice' என்ற வார்த்தைகள் அடிக்கோடுடன் தோன்றும் paragraph உருவாக்கவும்.",
  hintEnglish: "Use the <u> tag.",
  hintTamil: "<u> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "Important Notice (underlined)",
  expectedOutputTamil: "Important Notice (அடிக்கோடுடன் தோன்றும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p><u>Important Notice</u></p>
</body>
</html>`
},

{
  id: 5,
  topicId: 4,
  title: "Line Break",
  questionEnglish: "Display your name and course on separate lines using a single paragraph.",
  questionTamil: "ஒரே paragraph-ஐ பயன்படுத்தி உங்கள் பெயர் மற்றும் படிப்பை தனித்தனி வரிகளில் காட்டவும்.",
  hintEnglish: "Use the <br> tag to break the line.",
  hintTamil: "வரியைப் பிரிக்க <br> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "Deepak\nB.Sc. Computer Science",
  expectedOutputTamil: "Deepak\nB.Sc. Computer Science",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>Deepak<br>B.Sc. Computer Science</p>
</body>
</html>`
},

{
  id: 6,
  topicId: 4,
  title: "Small and Highlighted Text",
  questionEnglish: "Display the text 'HTML Basics' normally and show 'Beginner Level' in smaller text.",
  questionTamil: "'HTML Basics' என்ற உரையை இயல்பாகவும், 'Beginner Level' என்ற உரையை சிறிய அளவிலும் காட்டவும்.",
  hintEnglish: "Use the <small> tag for smaller text.",
  hintTamil: "சிறிய உரைக்கு <small> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "HTML Basics\nBeginner Level (smaller text)",
  expectedOutputTamil: "HTML Basics\nBeginner Level (சிறிய உரை)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>HTML Basics</p>
  <small>Beginner Level</small>
</body>
</html>`
},

{
  id: 7,
  topicId: 4,
  title: "Deleted and Inserted Text",
  questionEnglish: "Display the old price '₹1000' as deleted text and the new price '₹800' as inserted text.",
  questionTamil: "பழைய விலையான '₹1000'-ஐ நீக்கப்பட்ட உரையாகவும், புதிய விலையான '₹800'-ஐ சேர்க்கப்பட்ட உரையாகவும் காட்டவும்.",
  hintEnglish: "Use <del> for deleted text and <ins> for inserted text.",
  hintTamil: "நீக்கப்பட்ட உரைக்கு <del>, சேர்க்கப்பட்ட உரைக்கு <ins> பயன்படுத்தவும்.",
  expectedOutput: "₹1000 (deleted)\n₹800 (inserted)",
  expectedOutputTamil: "₹1000 (நீக்கப்பட்ட உரை)\n₹800 (சேர்க்கப்பட்ட உரை)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>Old Price: <del>₹1000</del></p>
  <p>New Price: <ins>₹800</ins></p>
</body>
</html>`
},

{
  id: 8,
  topicId: 4,
  title: "Subscript and Superscript",
  questionEnglish: "Display the chemical formula H2O using subscript and the mathematical expression x2 using superscript.",
  questionTamil: "H2O என்ற வேதியியல் சூத்திரத்தில் 2-ஐ கீழொட்டாகவும், x2 என்ற கணிதக் குறியீட்டில் 2-ஐ மேலொட்டாகவும் காட்டவும்.",
  hintEnglish: "Use <sub> for subscript and <sup> for superscript.",
  hintTamil: "கீழொட்டிற்கு <sub>, மேலொட்டிற்கு <sup> பயன்படுத்தவும்.",
  expectedOutput: "H₂O and x²",
  expectedOutputTamil: "H₂O மற்றும் x²",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>H<sub>2</sub>O</p>
  <p>x<sup>2</sup></p>
</body>
</html>`
},

{
  id: 9,
  topicId: 4,
  title: "Student Introduction",
  questionEnglish: "Create a student introduction using at least three paragraphs. Use bold, italic, and underline formatting for suitable words.",
  questionTamil: "குறைந்தது மூன்று paragraphs பயன்படுத்தி ஒரு மாணவர் அறிமுகத்தை உருவாக்கவும். பொருத்தமான வார்த்தைகளுக்கு bold, italic மற்றும் underline formatting பயன்படுத்தவும்.",
  hintEnglish: "Combine <p>, <strong>, <em>, and <u> tags.",
  hintTamil: "<p>, <strong>, <em>, <u> ஆகிய tags-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A student introduction with at least three paragraphs and different text formatting.",
  expectedOutputTamil: "குறைந்தது மூன்று paragraphs மற்றும் பல்வேறு text formatting கொண்ட மாணவர் அறிமுகம்.",
  challenge: true
},

{
  id: 10,
  topicId: 4,
  title: "Course Information Page",
  questionEnglish: "Create a course information section for a Cybersecurity course. Include a course description, important topics, a highlighted notice, and a line showing the course duration. Use suitable text formatting tags.",
  questionTamil: "Cybersecurity course-க்கான தகவல் பகுதியை உருவாக்கவும். Course விளக்கம், முக்கியமான தலைப்புகள், சிறப்பாகக் காட்டப்படும் அறிவிப்பு மற்றும் course கால அளவை தனி வரியில் சேர்க்கவும். பொருத்தமான text formatting tags-ஐ பயன்படுத்தவும்.",
  hintEnglish: "Combine paragraphs, bold, italic, underline, small text, and line breaks where appropriate.",
  hintTamil: "தேவையான இடங்களில் paragraphs, bold, italic, underline, small text மற்றும் line breaks ஆகியவற்றைப் பயன்படுத்தவும்.",
  expectedOutput: "A formatted Cybersecurity course information section containing all requested details.",
  expectedOutputTamil: "கேட்கப்பட்ட அனைத்து விவரங்களையும் கொண்ட formatting செய்யப்பட்ட Cybersecurity course தகவல் பகுதி.",
  challenge: true
},

// TOPIC 5: Links and Anchor Tags

{
  id: 1,
  topicId: 5,
  title: "Create Your First Link",
  questionEnglish: "Create a hyperlink with the text 'Visit Google' that opens https://www.google.com.",
  questionTamil: "'Visit Google' என்ற உரையுடன் https://www.google.com இணையதளத்தைத் திறக்கும் hyperlink உருவாக்கவும்.",
  hintEnglish: "Use the <a> tag with the href attribute.",
  hintTamil: "href attribute உடன் <a> tag-ஐ பயன்படுத்தவும்.",
  expectedOutput: "Visit Google (clickable link)",
  expectedOutputTamil: "Visit Google (கிளிக் செய்யக்கூடிய இணைப்பு)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="https://www.google.com">Visit Google</a>
</body>
</html>`
},

{
  id: 2,
  topicId: 5,
  title: "Open Link in New Tab",
  questionEnglish: "Create a link named 'Visit YouTube' that opens YouTube in a new browser tab.",
  questionTamil: "'Visit YouTube' என்ற பெயரில் YouTube-ஐ புதிய browser tab-ல் திறக்கும் link உருவாக்கவும்.",
  hintEnglish: "Use the target attribute with the value _blank.",
  hintTamil: "target attribute-க்கு _blank என்ற value-ஐ வழங்கவும்.",
  expectedOutput: "Visit YouTube (opens in a new tab)",
  expectedOutputTamil: "Visit YouTube (புதிய tab-ல் திறக்கும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Visit YouTube</a>
</body>
</html>`
},

{
  id: 3,
  topicId: 5,
  title: "Create an Email Link",
  questionEnglish: "Create a link that opens the user's email application when clicked. Display the text 'Contact Us'.",
  questionTamil: "கிளிக் செய்யும்போது பயனரின் email application-ஐத் திறக்கும் link உருவாக்கவும். 'Contact Us' என்ற உரையைக் காட்டவும்.",
  hintEnglish: "Use mailto: inside the href attribute.",
  hintTamil: "href attribute-க்குள் mailto: என்பதைப் பயன்படுத்தவும்.",
  expectedOutput: "Contact Us (opens the email application)",
  expectedOutputTamil: "Contact Us (email application திறக்கும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="mailto:contact@example.com">Contact Us</a>
</body>
</html>`
},

{
  id: 4,
  topicId: 5,
  title: "Create a Telephone Link",
  questionEnglish: "Create a clickable telephone link that displays the number '+911234567890'.",
  questionTamil: "'+911234567890' என்ற எண்ணைக் காட்டும் clickable telephone link உருவாக்கவும்.",
  hintEnglish: "Use the tel: protocol inside href.",
  hintTamil: "href-க்குள் tel: protocol-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "+911234567890 (clickable telephone link)",
  expectedOutputTamil: "+911234567890 (கிளிக் செய்யக்கூடிய தொலைபேசி இணைப்பு)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="tel:+911234567890">+911234567890</a>
</body>
</html>`
},

{
  id: 5,
  topicId: 5,
  title: "Link to Another Page",
  questionEnglish: "Create a link named 'About Us' that opens a page called about.html.",
  questionTamil: "'About Us' என்ற பெயரில் about.html என்ற பக்கத்தைத் திறக்கும் link உருவாக்கவும்.",
  hintEnglish: "Use the relative file path in the href attribute.",
  hintTamil: "href attribute-ல் relative file path-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "About Us (opens about.html when that file exists)",
  expectedOutputTamil: "About Us (about.html கோப்பு இருந்தால் அந்தப் பக்கம் திறக்கும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="about.html">About Us</a>
</body>
</html>`
},

{
  id: 6,
  topicId: 5,
  title: "Create an Internal Page Link",
  questionEnglish: "Create a page with a heading 'My Courses' and a link at the top that takes the user directly to that heading.",
  questionTamil: "'My Courses' என்ற heading கொண்ட பக்கத்தை உருவாக்கவும். மேலே உள்ள link-ஐ கிளிக் செய்தால் அந்த heading-க்கு நேரடியாகச் செல்ல வேண்டும்.",
  hintEnglish: "Give the heading an id and use # followed by that id in the link.",
  hintTamil: "Heading-க்கு id கொடுத்து, link-ல் அந்த id-க்கு முன் # பயன்படுத்தவும்.",
  expectedOutput: "A 'Go to My Courses' link that jumps to the My Courses heading.",
  expectedOutputTamil: "My Courses heading-க்கு அழைத்துச் செல்லும் 'Go to My Courses' link.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="#courses">Go to My Courses</a>

  <h2 id="courses">My Courses</h2>
  <p>HTML</p>
  <p>CSS</p>
  <p>JavaScript</p>
</body>
</html>`
},

{
  id: 7,
  topicId: 5,
  title: "Create Multiple Navigation Links",
  questionEnglish: "Create a simple navigation section with three links: Home, About, and Contact. Link them to index.html, about.html, and contact.html respectively.",
  questionTamil: "Home, About மற்றும் Contact என்ற மூன்று links கொண்ட navigation பகுதியை உருவாக்கவும். அவற்றை முறையே index.html, about.html மற்றும் contact.html கோப்புகளுடன் இணைக்கவும்.",
  hintEnglish: "Use three separate <a> tags.",
  hintTamil: "மூன்று தனித்தனி <a> tags-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "Home | About | Contact (three clickable links)",
  expectedOutputTamil: "Home | About | Contact (மூன்று clickable links)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  </nav>
</body>
</html>`
},

{
  id: 8,
  topicId: 5,
  title: "Create a Download Link",
  questionEnglish: "Create a link named 'Download Notes' that allows users to download a file called notes.pdf.",
  questionTamil: "'Download Notes' என்ற பெயரில் notes.pdf கோப்பைப் பதிவிறக்க உதவும் link உருவாக்கவும்.",
  hintEnglish: "Use the download attribute in the anchor tag.",
  hintTamil: "Anchor tag-ல் download attribute-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "Download Notes (offers notes.pdf for download when the file exists)",
  expectedOutputTamil: "Download Notes (notes.pdf கோப்பு இருந்தால் பதிவிறக்க உதவும்)",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="notes.pdf" download>Download Notes</a>
</body>
</html>`
},

{
  id: 9,
  topicId: 5,
  title: "Personal Portfolio Navigation",
  questionEnglish: "Create a personal portfolio navigation section with links to Home, Skills, Projects, and Contact. Each link should navigate to its corresponding section on the same page.",
  questionTamil: "Home, Skills, Projects மற்றும் Contact ஆகியவற்றுக்கான links கொண்ட personal portfolio navigation பகுதியை உருவாக்கவும். ஒவ்வொரு link-ம் அதற்குரிய அதே பக்கத்தின் section-க்கு அழைத்துச் செல்ல வேண்டும்.",
  hintEnglish: "Use <nav>, anchor tags, section IDs, and internal links.",
  hintTamil: "<nav>, anchor tags, section IDs மற்றும் internal links-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A portfolio page with four working navigation links and four corresponding sections.",
  expectedOutputTamil: "நான்கு செயல்படும் navigation links மற்றும் அவற்றுக்குரிய நான்கு sections கொண்ட portfolio பக்கம்.",
  challenge: true
},

{
  id: 10,
  topicId: 5,
  title: "Build a Business Website Navigation",
  questionEnglish: "Create a navigation section for a small business website with Home, Services, Gallery, About, and Contact links. Make each link navigate to its matching section. Also make the Contact link open an email application.",
  questionTamil: "ஒரு சிறு வணிக இணையதளத்திற்காக Home, Services, Gallery, About மற்றும் Contact links கொண்ட navigation பகுதியை உருவாக்கவும். ஒவ்வொரு link-ம் அதற்குரிய section-க்கு செல்ல வேண்டும். Contact link email application-ஐத் திறக்க வேண்டும்.",
  hintEnglish: "Combine internal anchor links with a mailto: link.",
  hintTamil: "Internal anchor links மற்றும் mailto: link-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A business website navigation with five links, working section navigation, and an email contact link.",
  expectedOutputTamil: "ஐந்து links, செயல்படும் section navigation மற்றும் email contact link கொண்ட வணிக இணையதள navigation.",
  challenge: true
},

// TOPIC 6: HTML Images

{
  id: 1,
  topicId: 6,
  title: "Display Your First Image",
  questionEnglish: "Display an image named profile.jpg on a webpage.",
  questionTamil: "profile.jpg என்ற பெயருடைய படத்தை ஒரு இணையப் பக்கத்தில் காட்டவும்.",
  hintEnglish: "Use the <img> tag with the src attribute.",
  hintTamil: "src attribute உடன் <img> tag-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "The profile.jpg image appears on the webpage.",
  expectedOutputTamil: "இணையப் பக்கத்தில் profile.jpg படம் தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <img src="profile.jpg" alt="Profile photo">
</body>
</html>`
},

{
  id: 2,
  topicId: 6,
  title: "Add Alternative Text",
  questionEnglish: "Display an image named laptop.jpg and provide the alternative text 'Laptop on a desk'.",
  questionTamil: "laptop.jpg என்ற படத்தைக் காட்டி, அதற்கு 'Laptop on a desk' என்ற மாற்று உரையை வழங்கவும்.",
  hintEnglish: "Use the alt attribute inside the <img> tag.",
  hintTamil: "<img> tag-க்குள் alt attribute-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "The laptop image appears. Its alternative text is available if the image cannot load.",
  expectedOutputTamil: "Laptop படம் தோன்றும். படம் ஏற்றப்படாவிட்டால் அதன் மாற்று உரை கிடைக்கும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <img src="laptop.jpg" alt="Laptop on a desk">
</body>
</html>`
},

{
  id: 3,
  topicId: 6,
  title: "Set Image Width",
  questionEnglish: "Display an image named college.jpg with a width of 300 pixels.",
  questionTamil: "college.jpg என்ற படத்தை 300 pixels அகலத்தில் காட்டவும்.",
  hintEnglish: "Use the width attribute.",
  hintTamil: "width attribute-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "The college image appears with a width of 300 pixels.",
  expectedOutputTamil: "College படம் 300 pixels அகலத்தில் தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <img src="college.jpg" alt="College building" width="300">
</body>
</html>`
},

{
  id: 4,
  topicId: 6,
  title: "Set Image Height",
  questionEnglish: "Display an image named student.jpg with a height of 200 pixels.",
  questionTamil: "student.jpg என்ற படத்தை 200 pixels உயரத்தில் காட்டவும்.",
  hintEnglish: "Use the height attribute.",
  hintTamil: "height attribute-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "The student image appears with a height of 200 pixels.",
  expectedOutputTamil: "Student படம் 200 pixels உயரத்தில் தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <img src="student.jpg" alt="Student" height="200">
</body>
</html>`
},

{
  id: 5,
  topicId: 6,
  title: "Display Multiple Images",
  questionEnglish: "Display three images named html.jpg, css.jpg, and javascript.jpg on the same webpage.",
  questionTamil: "html.jpg, css.jpg மற்றும் javascript.jpg என்ற மூன்று படங்களையும் ஒரே இணையப் பக்கத்தில் காட்டவும்.",
  hintEnglish: "Use three separate <img> tags.",
  hintTamil: "மூன்று தனித்தனி <img> tags-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "Three images representing HTML, CSS, and JavaScript appear on the webpage.",
  expectedOutputTamil: "HTML, CSS மற்றும் JavaScript ஆகியவற்றைக் குறிக்கும் மூன்று படங்கள் தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <img src="html.jpg" alt="HTML logo">
  <img src="css.jpg" alt="CSS logo">
  <img src="javascript.jpg" alt="JavaScript logo">
</body>
</html>`
},

{
  id: 6,
  topicId: 6,
  title: "Create a Clickable Image",
  questionEnglish: "Display an image named logo.png. When the user clicks it, open https://www.google.com.",
  questionTamil: "logo.png என்ற படத்தைக் காட்டவும். பயனர் அதைக் கிளிக் செய்யும்போது https://www.google.com திறக்க வேண்டும்.",
  hintEnglish: "Place the <img> tag inside an <a> tag.",
  hintTamil: "<img> tag-ஐ <a> tag-க்குள் வைக்கவும்.",
  expectedOutput: "A clickable logo image that opens Google.",
  expectedOutputTamil: "Google-ஐத் திறக்கும் clickable logo படம்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="https://www.google.com">
    <img src="logo.png" alt="Website logo">
  </a>
</body>
</html>`
},

{
  id: 7,
  topicId: 6,
  title: "Add an Image with a Caption",
  questionEnglish: "Display an image of a laptop with the caption 'My Learning Setup'.",
  questionTamil: "Laptop படத்தைக் காட்டி, அதற்குக் கீழே 'My Learning Setup' என்ற caption-ஐக் காட்டவும்.",
  hintEnglish: "Use <figure>, <img>, and <figcaption> tags.",
  hintTamil: "<figure>, <img> மற்றும் <figcaption> tags-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A laptop image with the caption 'My Learning Setup' below it.",
  expectedOutputTamil: "Laptop படத்திற்குக் கீழே 'My Learning Setup' என்ற caption தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <figure>
    <img src="laptop.jpg" alt="Laptop setup" width="300">
    <figcaption>My Learning Setup</figcaption>
  </figure>
</body>
</html>`
},

{
  id: 8,
  topicId: 6,
  title: "Use an Online Image",
  questionEnglish: "Display an online image using its image URL and provide suitable alternative text.",
  questionTamil: "ஒரு online image-ன் URL-ஐப் பயன்படுத்தி அந்தப் படத்தைக் காட்டவும். அதற்குப் பொருத்தமான alternative text வழங்கவும்.",
  hintEnglish: "Place the complete image URL inside the src attribute.",
  hintTamil: "முழுமையான image URL-ஐ src attribute-க்குள் வழங்கவும்.",
  expectedOutput: "The online image loads and appears on the webpage.",
  expectedOutputTamil: "Online image ஏற்றப்பட்டு இணையப் பக்கத்தில் தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <img
    src="https://placehold.co/300x200"
    alt="Sample placeholder image"
  >
</body>
</html>`
},

{
  id: 9,
  topicId: 6,
  title: "Build a Student Profile Card",
  questionEnglish: "Create a student profile section with a profile image, student name, course, and a short description. Use suitable image attributes and semantic HTML elements.",
  questionTamil: "Profile படம், மாணவரின் பெயர், படிப்பு மற்றும் சிறிய விளக்கம் கொண்ட student profile பகுதியை உருவாக்கவும். பொருத்தமான image attributes மற்றும் semantic HTML elements-ஐப் பயன்படுத்தவும்.",
  hintEnglish: "Combine <section>, <figure>, <img>, <figcaption>, and paragraph tags.",
  hintTamil: "<section>, <figure>, <img>, <figcaption> மற்றும் paragraph tags-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A student profile section showing an image, name, course, and description.",
  expectedOutputTamil: "படம், பெயர், படிப்பு மற்றும் விளக்கம் கொண்ட student profile பகுதி.",
  challenge: true
},

{
  id: 10,
  topicId: 6,
  title: "Create a Business Image Gallery",
  questionEnglish: "Build an image gallery for a photography studio. Display at least four images with suitable alternative text and captions. Make each image clickable so that it opens a larger or original image.",
  questionTamil: "ஒரு photography studio-க்காக image gallery உருவாக்கவும். குறைந்தது நான்கு படங்களைப் பொருத்தமான alternative text மற்றும் captions உடன் காட்டவும். ஒவ்வொரு படத்தையும் கிளிக் செய்தால் அதன் பெரிய அல்லது அசல் படம் திறக்க வேண்டும்.",
  hintEnglish: "Combine <figure>, <img>, <figcaption>, and <a> tags. Use CSS only if you want to arrange the images in a grid.",
  hintTamil: "<figure>, <img>, <figcaption> மற்றும் <a> tags-ஐ இணைத்துப் பயன்படுத்தவும். படங்களை grid வடிவில் அமைக்க விரும்பினால் CSS-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A photography gallery containing at least four clickable images with captions.",
  expectedOutputTamil: "குறைந்தது நான்கு clickable படங்கள் மற்றும் captions கொண்ட photography gallery.",
  challenge: true
},



];


export default questions;
