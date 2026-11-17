
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

// TOPIC 7: HTML Lists

{
  id: 1,
  topicId: 7,
  title: "Create an Ordered List",
  questionEnglish: "Create an ordered list containing three programming languages: Java, Python, and C++.",
  questionTamil: "Java, Python மற்றும் C++ ஆகிய மூன்று programming languages கொண்ட ordered list உருவாக்கவும்.",
  hintEnglish: "Use the <ol> tag with three <li> elements.",
  hintTamil: "மூன்று <li> elements உடன் <ol> tag-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "1. Java\n2. Python\n3. C++",
  expectedOutputTamil: "1. Java\n2. Python\n3. C++",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <ol>
    <li>Java</li>
    <li>Python</li>
    <li>C++</li>
  </ol>
</body>
</html>`
},

{
  id: 2,
  topicId: 7,
  title: "Create an Unordered List",
  questionEnglish: "Create an unordered list containing three hobbies: Reading, Coding, and Gaming.",
  questionTamil: "Reading, Coding மற்றும் Gaming ஆகிய மூன்று பொழுதுபோக்குகளைக் கொண்ட unordered list உருவாக்கவும்.",
  hintEnglish: "Use the <ul> tag with <li> elements.",
  hintTamil: "<li> elements உடன் <ul> tag-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "• Reading\n• Coding\n• Gaming",
  expectedOutputTamil: "• Reading\n• Coding\n• Gaming",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <ul>
    <li>Reading</li>
    <li>Coding</li>
    <li>Gaming</li>
  </ul>
</body>
</html>`
},

{
  id: 3,
  topicId: 7,
  title: "Create a Shopping List",
  questionEnglish: "Create a shopping list containing Milk, Bread, Eggs, and Rice using an unordered list.",
  questionTamil: "Milk, Bread, Eggs மற்றும் Rice ஆகியவற்றைக் கொண்ட shopping list-ஐ unordered list பயன்படுத்தி உருவாக்கவும்.",
  hintEnglish: "Place each shopping item inside a separate <li> element.",
  hintTamil: "ஒவ்வொரு பொருளையும் தனித்தனி <li> element-க்குள் வைக்கவும்.",
  expectedOutput: "• Milk\n• Bread\n• Eggs\n• Rice",
  expectedOutputTamil: "• Milk\n• Bread\n• Eggs\n• Rice",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Shopping List</h2>
  <ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
    <li>Rice</li>
  </ul>
</body>
</html>`
},

{
  id: 4,
  topicId: 7,
  title: "Create a Numbered To-Do List",
  questionEnglish: "Create a numbered to-do list with these tasks: Wake Up, Study HTML, Practice Coding, and Complete Homework.",
  questionTamil: "Wake Up, Study HTML, Practice Coding மற்றும் Complete Homework ஆகிய பணிகளைக் கொண்ட numbered to-do list உருவாக்கவும்.",
  hintEnglish: "Use an ordered list and add each task as a list item.",
  hintTamil: "Ordered list பயன்படுத்தி ஒவ்வொரு பணியையும் list item ஆகச் சேர்க்கவும்.",
  expectedOutput: "1. Wake Up\n2. Study HTML\n3. Practice Coding\n4. Complete Homework",
  expectedOutputTamil: "1. Wake Up\n2. Study HTML\n3. Practice Coding\n4. Complete Homework",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>My To-Do List</h2>
  <ol>
    <li>Wake Up</li>
    <li>Study HTML</li>
    <li>Practice Coding</li>
    <li>Complete Homework</li>
  </ol>
</body>
</html>`
},

{
  id: 5,
  topicId: 7,
  title: "Change Ordered List Starting Number",
  questionEnglish: "Create an ordered list containing HTML, CSS, and JavaScript. Make the numbering start from 5.",
  questionTamil: "HTML, CSS மற்றும் JavaScript கொண்ட ordered list உருவாக்கவும். அதன் எண் 5-இல் தொடங்க வேண்டும்.",
  hintEnglish: "Use the start attribute in the <ol> tag.",
  hintTamil: "<ol> tag-ல் start attribute-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "5. HTML\n6. CSS\n7. JavaScript",
  expectedOutputTamil: "5. HTML\n6. CSS\n7. JavaScript",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <ol start="5">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ol>
</body>
</html>`
},

{
  id: 6,
  topicId: 7,
  title: "Create a Description List",
  questionEnglish: "Create a description list containing three web technologies and their meanings: HTML - Structure, CSS - Styling, and JavaScript - Interactivity.",
  questionTamil: "HTML - Structure, CSS - Styling மற்றும் JavaScript - Interactivity ஆகிய மூன்று web technologies மற்றும் அவற்றின் விளக்கங்களைக் கொண்ட description list உருவாக்கவும்.",
  hintEnglish: "Use <dl> for the list, <dt> for each term, and <dd> for its description.",
  hintTamil: "List-க்கு <dl>, ஒவ்வொரு term-க்கும் <dt>, அதன் விளக்கத்திற்கு <dd> பயன்படுத்தவும்.",
  expectedOutput: "HTML\n  Structure\nCSS\n  Styling\nJavaScript\n  Interactivity",
  expectedOutputTamil: "HTML\n  Structure\nCSS\n  Styling\nJavaScript\n  Interactivity",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <dl>
    <dt>HTML</dt>
    <dd>Structure</dd>

    <dt>CSS</dt>
    <dd>Styling</dd>

    <dt>JavaScript</dt>
    <dd>Interactivity</dd>
  </dl>
</body>
</html>`
},

{
  id: 7,
  topicId: 7,
  title: "Create a Nested List",
  questionEnglish: "Create a nested list with the main category 'Programming Languages' and the sub-items Java, Python, and C++.",
  questionTamil: "'Programming Languages' என்ற முக்கியப் பிரிவையும், அதன் கீழ் Java, Python மற்றும் C++ என்ற துணைப் பட்டியலையும் கொண்ட nested list உருவாக்கவும்.",
  hintEnglish: "Place another <ul> inside the parent <li> element.",
  hintTamil: "Parent <li> element-க்குள் மற்றொரு <ul>-ஐ வைக்கவும்.",
  expectedOutput: "• Programming Languages\n  • Java\n  • Python\n  • C++",
  expectedOutputTamil: "• Programming Languages\n  • Java\n  • Python\n  • C++",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <ul>
    <li>Programming Languages
      <ul>
        <li>Java</li>
        <li>Python</li>
        <li>C++</li>
      </ul>
    </li>
  </ul>
</body>
</html>`
},

{
  id: 8,
  topicId: 7,
  title: "Reverse Ordered List",
  questionEnglish: "Create an ordered list containing Gold, Silver, and Bronze. Display the numbering in descending order starting from 3.",
  questionTamil: "Gold, Silver மற்றும் Bronze கொண்ட ordered list உருவாக்கவும். எண்கள் 3-இல் தொடங்கி இறங்கு வரிசையில் காட்டப்பட வேண்டும்.",
  hintEnglish: "Use the reversed attribute in the <ol> tag.",
  hintTamil: "<ol> tag-ல் reversed attribute-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "3. Gold\n2. Silver\n1. Bronze",
  expectedOutputTamil: "3. Gold\n2. Silver\n1. Bronze",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <ol reversed>
    <li>Gold</li>
    <li>Silver</li>
    <li>Bronze</li>
  </ol>
</body>
</html>`
},

{
  id: 9,
  topicId: 7,
  title: "Build a Course Syllabus",
  questionEnglish: "Create a course syllabus using a nested list. Include three main modules: Frontend Development, Backend Development, and Database. Add at least two topics under each module.",
  questionTamil: "Nested list பயன்படுத்தி ஒரு course syllabus உருவாக்கவும். Frontend Development, Backend Development மற்றும் Database ஆகிய மூன்று முக்கிய modules-ஐச் சேர்த்து, ஒவ்வொரு module-க்கும் குறைந்தது இரண்டு topics சேர்க்கவும்.",
  hintEnglish: "Use a parent list with nested unordered lists for the module topics.",
  hintTamil: "ஒவ்வொரு module-ன் topics-க்கும் nested unordered lists கொண்ட parent list-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A course syllabus with three main modules and at least two subtopics under each module.",
  expectedOutputTamil: "மூன்று முக்கிய modules மற்றும் ஒவ்வொன்றின் கீழும் குறைந்தது இரண்டு துணைத் தலைப்புகள் கொண்ட course syllabus.",
  challenge: true
},

{
  id: 10,
  topicId: 7,
  title: "Create a Restaurant Menu",
  questionEnglish: "Build a restaurant menu using HTML lists. Include at least three food categories, with three items under each category. Use suitable ordered, unordered, or nested lists.",
  questionTamil: "HTML lists பயன்படுத்தி ஒரு restaurant menu உருவாக்கவும். குறைந்தது மூன்று உணவு வகைகளைச் சேர்த்து, ஒவ்வொரு வகையின் கீழும் மூன்று உணவுப் பொருட்களைச் சேர்க்கவும். பொருத்தமான ordered, unordered அல்லது nested lists-ஐப் பயன்படுத்தவும்.",
  hintEnglish: "Use nested lists to organize food categories and their items.",
  hintTamil: "உணவு வகைகளையும் அவற்றின் பொருட்களையும் ஒழுங்குபடுத்த nested lists-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A restaurant menu with at least three categories and three food items in each category.",
  expectedOutputTamil: "குறைந்தது மூன்று வகைகளும் ஒவ்வொரு வகையிலும் மூன்று உணவுப் பொருட்களும் கொண்ட restaurant menu.",
  challenge: true
},

// TOPIC 8: HTML Tables

{
  id: 1,
  topicId: 8,
  title: "Create Your First Table",
  questionEnglish: "Create an HTML table with two columns: Name and Age. Add one student record: Deepak, 20.",
  questionTamil: "Name மற்றும் Age என்ற இரண்டு columns கொண்ட HTML table உருவாக்கவும். Deepak, 20 என்ற ஒரு மாணவர் விவரத்தைச் சேர்க்கவும்.",
  hintEnglish: "Use <table>, <tr>, <th>, and <td> tags.",
  hintTamil: "<table>, <tr>, <th> மற்றும் <td> tags-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A table with Name and Age headings and one row containing Deepak and 20.",
  expectedOutputTamil: "Name மற்றும் Age தலைப்புகளுடன் Deepak மற்றும் 20 கொண்ட ஒரு வரி உள்ள table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Deepak</td>
      <td>20</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 2,
  topicId: 8,
  title: "Add Multiple Rows",
  questionEnglish: "Create a student table with three columns: Name, Course, and College. Add two student records.",
  questionTamil: "Name, Course மற்றும் College என்ற மூன்று columns கொண்ட மாணவர் table உருவாக்கவும். இரண்டு மாணவர் விவரங்களைச் சேர்க்கவும்.",
  hintEnglish: "Create a separate <tr> for each student record.",
  hintTamil: "ஒவ்வொரு மாணவர் விவரத்திற்கும் தனித்தனி <tr> உருவாக்கவும்.",
  expectedOutput: "A table with three headings and two student records.",
  expectedOutputTamil: "மூன்று தலைப்புகள் மற்றும் இரண்டு மாணவர் விவரங்கள் கொண்ட table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Course</th>
      <th>College</th>
    </tr>
    <tr>
      <td>Deepak</td>
      <td>B.Sc. Computer Science</td>
      <td>ABC College</td>
    </tr>
    <tr>
      <td>Arun</td>
      <td>BCA</td>
      <td>XYZ College</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 3,
  topicId: 8,
  title: "Add a Table Caption",
  questionEnglish: "Create a table showing three programming languages and add the caption 'Programming Languages'.",
  questionTamil: "மூன்று programming languages-ஐக் காட்டும் table உருவாக்கி, அதற்கு 'Programming Languages' என்ற caption சேர்க்கவும்.",
  hintEnglish: "Use the <caption> tag immediately after the opening <table> tag.",
  hintTamil: "தொடக்க <table> tag-க்கு அடுத்ததாக <caption> tag-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A table with the caption Programming Languages and three language entries.",
  expectedOutputTamil: "Programming Languages என்ற caption மற்றும் மூன்று மொழிகள் கொண்ட table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <caption>Programming Languages</caption>
    <tr>
      <th>Language</th>
    </tr>
    <tr>
      <td>Java</td>
    </tr>
    <tr>
      <td>Python</td>
    </tr>
    <tr>
      <td>C++</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 4,
  topicId: 8,
  title: "Merge Table Columns",
  questionEnglish: "Create a table with three columns. In the first row, display 'Student Details' across all three columns using colspan.",
  questionTamil: "மூன்று columns கொண்ட table உருவாக்கவும். முதல் வரியில் 'Student Details' என்ற உரை colspan பயன்படுத்தி மூன்று columns முழுவதும் தோன்ற வேண்டும்.",
  hintEnglish: "Use colspan=\"3\" inside a <th> or <td> element.",
  hintTamil: "<th> அல்லது <td> element-க்குள் colspan=\"3\" பயன்படுத்தவும்.",
  expectedOutput: "A table whose first row contains Student Details across three columns.",
  expectedOutputTamil: "முதல் வரியில் Student Details மூன்று columns முழுவதும் இணைக்கப்பட்ட table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <tr>
      <th colspan="3">Student Details</th>
    </tr>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Course</th>
    </tr>
    <tr>
      <td>Deepak</td>
      <td>20</td>
      <td>B.Sc. CS</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 5,
  topicId: 8,
  title: "Merge Table Rows",
  questionEnglish: "Create a table with columns Name, Course, and Department. Use rowspan to make the department 'Computer Science' cover two student rows.",
  questionTamil: "Name, Course மற்றும் Department columns கொண்ட table உருவாக்கவும். இரண்டு மாணவர் வரிகளுக்கும் 'Computer Science' என்ற department பொதுவாக இருக்க rowspan பயன்படுத்தவும்.",
  hintEnglish: "Use rowspan=\"2\" in the department cell.",
  hintTamil: "Department cell-ல் rowspan=\"2\" பயன்படுத்தவும்.",
  expectedOutput: "A table where Computer Science occupies one cell spanning two student rows.",
  expectedOutputTamil: "Computer Science என்ற ஒரே cell இரண்டு மாணவர் வரிகளையும் இணைக்கும் table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Course</th>
      <th>Department</th>
    </tr>
    <tr>
      <td>Deepak</td>
      <td>B.Sc. CS</td>
      <td rowspan="2">Computer Science</td>
    </tr>
    <tr>
      <td>Arun</td>
      <td>BCA</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 6,
  topicId: 8,
  title: "Use Table Head and Body",
  questionEnglish: "Create a student marks table using <thead> and <tbody>. Include columns for Name and Marks and add two student records.",
  questionTamil: "<thead> மற்றும் <tbody> பயன்படுத்தி மாணவர் மதிப்பெண் table உருவாக்கவும். Name மற்றும் Marks columns மற்றும் இரண்டு மாணவர் விவரங்களைச் சேர்க்கவும்.",
  hintEnglish: "Place the heading row inside <thead> and student records inside <tbody>.",
  hintTamil: "Heading row-ஐ <thead>-க்குள்ளும் மாணவர் விவரங்களை <tbody>-க்குள்ளும் வைக்கவும்.",
  expectedOutput: "A student marks table with a header section and two data rows.",
  expectedOutputTamil: "Header பகுதி மற்றும் இரண்டு data rows கொண்ட மாணவர் மதிப்பெண் table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <thead>
      <tr>
        <th>Name</th>
        <th>Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Deepak</td>
        <td>90</td>
      </tr>
      <tr>
        <td>Arun</td>
        <td>85</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`
},

{
  id: 7,
  topicId: 8,
  title: "Create a Product Price Table",
  questionEnglish: "Create a product table with columns Product Name, Quantity, and Price. Add three products with their details.",
  questionTamil: "Product Name, Quantity மற்றும் Price columns கொண்ட product table உருவாக்கவும். மூன்று பொருட்களின் விவரங்களைச் சேர்க்கவும்.",
  hintEnglish: "Use table headings and separate data rows for each product.",
  hintTamil: "Table headings மற்றும் ஒவ்வொரு பொருளுக்கும் தனித்தனி data rows பயன்படுத்தவும்.",
  expectedOutput: "A product table containing three products, their quantities, and prices.",
  expectedOutputTamil: "மூன்று பொருட்கள், அவற்றின் அளவு மற்றும் விலைகளைக் கொண்ட product table.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Product List</h2>
  <table border="1">
    <tr>
      <th>Product Name</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
    <tr>
      <td>Keyboard</td>
      <td>2</td>
      <td>₹800</td>
    </tr>
    <tr>
      <td>Mouse</td>
      <td>3</td>
      <td>₹400</td>
    </tr>
    <tr>
      <td>Monitor</td>
      <td>1</td>
      <td>₹8000</td>
    </tr>
  </table>
</body>
</html>`
},

{
  id: 8,
  topicId: 8,
  title: "Add a Table Footer",
  questionEnglish: "Create a shopping bill table with Product and Price columns. Add two products and display the total amount in a <tfoot> section.",
  questionTamil: "Product மற்றும் Price columns கொண்ட shopping bill table உருவாக்கவும். இரண்டு பொருட்களைச் சேர்த்து, மொத்தத் தொகையை <tfoot> பகுதியில் காட்டவும்.",
  hintEnglish: "Use <tfoot> for the final total row.",
  hintTamil: "இறுதி மொத்தத் தொகை வரிக்கு <tfoot> பயன்படுத்தவும்.",
  expectedOutput: "A shopping bill with two product rows and a total row in the footer.",
  expectedOutputTamil: "இரண்டு பொருள் வரிகள் மற்றும் footer-ல் மொத்தத் தொகை வரி கொண்ட shopping bill.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <table border="1">
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Keyboard</td>
        <td>₹800</td>
      </tr>
      <tr>
        <td>Mouse</td>
        <td>₹400</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <td>₹1200</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>`
},

{
  id: 9,
  topicId: 8,
  title: "Build a College Timetable",
  questionEnglish: "Create a college timetable with columns for Day, 9 AM, 10 AM, and 11 AM. Add at least five weekdays and their subjects. Use colspan or rowspan wherever appropriate.",
  questionTamil: "Day, 9 AM, 10 AM மற்றும் 11 AM columns கொண்ட college timetable உருவாக்கவும். குறைந்தது ஐந்து வார நாட்களையும் அவற்றின் பாடங்களையும் சேர்க்கவும். தேவையான இடங்களில் colspan அல்லது rowspan பயன்படுத்தவும்.",
  hintEnglish: "Organize the timetable using table headings, rows, and data cells.",
  hintTamil: "Table headings, rows மற்றும் data cells பயன்படுத்தி timetable-ஐ அமைக்கவும்.",
  expectedOutput: "A college timetable with at least five weekdays and three time-slot columns.",
  expectedOutputTamil: "குறைந்தது ஐந்து வார நாட்கள் மற்றும் மூன்று நேர columns கொண்ட college timetable.",
  challenge: true
},

{
  id: 10,
  topicId: 8,
  title: "Build a Student Result Sheet",
  questionEnglish: "Create a student result sheet with columns for Roll Number, Name, HTML Marks, CSS Marks, JavaScript Marks, and Total. Include at least three students. Add a caption and organize the table using thead, tbody, and tfoot.",
  questionTamil: "Roll Number, Name, HTML Marks, CSS Marks, JavaScript Marks மற்றும் Total columns கொண்ட மாணவர் மதிப்பெண் பட்டியலை உருவாக்கவும். குறைந்தது மூன்று மாணவர்களைச் சேர்க்கவும். Caption சேர்த்து thead, tbody மற்றும் tfoot பயன்படுத்தி table-ஐ அமைக்கவும்.",
  hintEnglish: "Use <caption>, <thead>, <tbody>, and <tfoot>. Calculate each student's total marks.",
  hintTamil: "<caption>, <thead>, <tbody> மற்றும் <tfoot> பயன்படுத்தவும். ஒவ்வொரு மாணவரின் மொத்த மதிப்பெண்களையும் கணக்கிடவும்.",
  expectedOutput: "A result sheet with three student records and their total marks.",
  expectedOutputTamil: "மூன்று மாணவர் விவரங்கள் மற்றும் அவர்களின் மொத்த மதிப்பெண்கள் கொண்ட result sheet.",
  challenge: true
},

// TOPIC 9: HTML Forms

{
  id: 1,
  topicId: 9,
  title: "Create Your First Form",
  questionEnglish: "Create a simple HTML form containing a text input for the user's name and a submit button.",
  questionTamil: "பயனரின் பெயரை உள்ளிட text input மற்றும் submit button கொண்ட எளிய HTML form உருவாக்கவும்.",
  hintEnglish: "Use the <form>, <input>, and <button> tags.",
  hintTamil: "<form>, <input> மற்றும் <button> tags-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A form with a name input field and a Submit button.",
  expectedOutputTamil: "பெயரை உள்ளிடும் input field மற்றும் Submit button கொண்ட form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 2,
  topicId: 9,
  title: "Create a Registration Form",
  questionEnglish: "Create a student registration form with fields for full name, email address, and phone number.",
  questionTamil: "முழுப் பெயர், email address மற்றும் phone number ஆகியவற்றுக்கான fields கொண்ட student registration form உருவாக்கவும்.",
  hintEnglish: "Use separate input elements with suitable labels and input types.",
  hintTamil: "பொருத்தமான labels மற்றும் input types உடன் தனித்தனி input elements பயன்படுத்தவும்.",
  expectedOutput: "A registration form with name, email, and phone number fields.",
  expectedOutputTamil: "பெயர், email மற்றும் phone number fields கொண்ட registration form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Student Registration</h2>
  <form>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name">
    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <br><br>

    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone">
    <br><br>

    <button type="submit">Register</button>
  </form>
</body>
</html>`
},

{
  id: 3,
  topicId: 9,
  title: "Create a Feedback Form",
  questionEnglish: "Create a feedback form with a name field, a message textarea, and a submit button.",
  questionTamil: "பெயர் field, message textarea மற்றும் submit button கொண்ட feedback form உருவாக்கவும்.",
  hintEnglish: "Use <textarea> for the message field.",
  hintTamil: "Message field-க்கு <textarea> பயன்படுத்தவும்.",
  expectedOutput: "A feedback form with a name input, message text area, and Submit button.",
  expectedOutputTamil: "பெயர் input, message textarea மற்றும் Submit button கொண்ட feedback form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Feedback Form</h2>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <br><br>

    <label for="message">Your Feedback:</label>
    <textarea id="message" name="message"></textarea>
    <br><br>

    <button type="submit">Submit Feedback</button>
  </form>
</body>
</html>`
},

{
  id: 4,
  topicId: 9,
  title: "Create a Course Selection Form",
  questionEnglish: "Create a course selection form with a dropdown containing HTML, CSS, JavaScript, and Python. Add a submit button.",
  questionTamil: "HTML, CSS, JavaScript மற்றும் Python ஆகிய options கொண்ட dropdown மற்றும் submit button உடைய course selection form உருவாக்கவும்.",
  hintEnglish: "Use the <select> and <option> tags.",
  hintTamil: "<select> மற்றும் <option> tags-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "A course dropdown with four options and a Submit button.",
  expectedOutputTamil: "நான்கு options மற்றும் Submit button கொண்ட course dropdown.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Select a Course</h2>
  <form>
    <label for="course">Choose Course:</label>
    <select id="course" name="course">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
    </select>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 5,
  topicId: 9,
  title: "Create a Gender Selection Form",
  questionEnglish: "Create a form that allows a user to select one option from Male, Female, and Other using radio buttons.",
  questionTamil: "Male, Female மற்றும் Other ஆகியவற்றில் ஒன்றை radio buttons மூலம் தேர்வு செய்யும் form உருவாக்கவும்.",
  hintEnglish: "Use radio inputs with the same name attribute.",
  hintTamil: "ஒரே name attribute கொண்ட radio inputs-ஐப் பயன்படுத்தவும்.",
  expectedOutput: "Three radio button options: Male, Female, and Other.",
  expectedOutputTamil: "Male, Female மற்றும் Other ஆகிய மூன்று radio button options.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <p>Select Gender:</p>

    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>

    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>

    <input type="radio" id="other" name="gender" value="other">
    <label for="other">Other</label>

    <br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 6,
  topicId: 9,
  title: "Create a Skills Selection Form",
  questionEnglish: "Create a form that allows students to select multiple skills using checkboxes: HTML, CSS, JavaScript, and Python.",
  questionTamil: "HTML, CSS, JavaScript மற்றும் Python ஆகிய skills-ல் பலவற்றை checkboxes மூலம் தேர்வு செய்யும் form உருவாக்கவும்.",
  hintEnglish: "Use checkbox inputs. Give each checkbox a suitable value.",
  hintTamil: "Checkbox inputs பயன்படுத்தி ஒவ்வொன்றுக்கும் பொருத்தமான value வழங்கவும்.",
  expectedOutput: "Four checkboxes for HTML, CSS, JavaScript, and Python.",
  expectedOutputTamil: "HTML, CSS, JavaScript மற்றும் Python ஆகியவற்றுக்கான நான்கு checkboxes.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <p>Select Your Skills:</p>

    <input type="checkbox" id="html" name="skills" value="HTML">
    <label for="html">HTML</label>

    <input type="checkbox" id="css" name="skills" value="CSS">
    <label for="css">CSS</label>

    <input type="checkbox" id="javascript" name="skills" value="JavaScript">
    <label for="javascript">JavaScript</label>

    <input type="checkbox" id="python" name="skills" value="Python">
    <label for="python">Python</label>

    <br><br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 7,
  topicId: 9,
  title: "Create a Login Form",
  questionEnglish: "Create a login form with username and password fields and a Login button.",
  questionTamil: "Username மற்றும் password fields மற்றும் Login button கொண்ட login form உருவாக்கவும்.",
  hintEnglish: "Use a text input for username and a password input for the password.",
  hintTamil: "Username-க்கு text input மற்றும் password-க்கு password input பயன்படுத்தவும்.",
  expectedOutput: "A login form with username, password, and Login button.",
  expectedOutputTamil: "Username, password மற்றும் Login button கொண்ட login form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Login</h2>
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    <br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <br><br>

    <button type="submit">Login</button>
  </form>
</body>
</html>`
},

{
  id: 8,
  topicId: 9,
  title: "Group Form Fields",
  questionEnglish: "Create a registration form with two grouped sections: Personal Information and Account Information. Use fieldsets and legends to organize the fields.",
  questionTamil: "Personal Information மற்றும் Account Information என்ற இரண்டு பிரிவுகளைக் கொண்ட registration form உருவாக்கவும். Fields-ஐ ஒழுங்குபடுத்த fieldset மற்றும் legend பயன்படுத்தவும்.",
  hintEnglish: "Use <fieldset> to group related fields and <legend> to give each group a title.",
  hintTamil: "தொடர்புடைய fields-ஐ குழுவாக்க <fieldset> மற்றும் ஒவ்வொரு குழுவிற்கும் தலைப்பு வழங்க <legend> பயன்படுத்தவும்.",
  expectedOutput: "A registration form with two visually grouped sections and their titles.",
  expectedOutputTamil: "இரண்டு தனித்தனி பிரிவுகள் மற்றும் அவற்றின் தலைப்புகளைக் கொண்ட registration form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Registration Form</h2>
  <form>
    <fieldset>
      <legend>Personal Information</legend>

      <label for="name">Name:</label>
      <input type="text" id="name" name="name">
      <br><br>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email">
    </fieldset>

    <br>

    <fieldset>
      <legend>Account Information</legend>

      <label for="username">Username:</label>
      <input type="text" id="username" name="username">
      <br><br>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password">
    </fieldset>

    <br>
    <button type="submit">Register</button>
  </form>
</body>
</html>`
},

{
  id: 9,
  topicId: 9,
  title: "Build a College Admission Form",
  questionEnglish: "Create a college admission form containing student name, date of birth, email, phone number, gender selection, course selection, address, and a submit button. Organize related fields using fieldsets and legends.",
  questionTamil: "மாணவர் பெயர், பிறந்த தேதி, email, phone number, gender selection, course selection, address மற்றும் submit button கொண்ட college admission form உருவாக்கவும். தொடர்புடைய fields-ஐ fieldsets மற்றும் legends பயன்படுத்தி ஒழுங்குபடுத்தவும்.",
  hintEnglish: "Combine text, date, email, tel, radio, select, and textarea elements.",
  hintTamil: "Text, date, email, tel, radio, select மற்றும் textarea elements-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A college admission form containing all requested fields in organized sections.",
  expectedOutputTamil: "கேட்கப்பட்ட அனைத்து fields-களையும் ஒழுங்குபடுத்தப்பட்ட பிரிவுகளில் கொண்ட college admission form.",
  challenge: true
},

{
  id: 10,
  topicId: 9,
  title: "Build a Business Contact Form",
  questionEnglish: "Create a contact form for a web development company. Include full name, email, phone number, service selection (Website Development, Chatbot Integration, Automation), project description, preferred contact method, and a submit button.",
  questionTamil: "ஒரு web development நிறுவனத்திற்கான contact form உருவாக்கவும். Full name, email, phone number, service selection (Website Development, Chatbot Integration, Automation), project description, preferred contact method மற்றும் submit button சேர்க்கவும்.",
  hintEnglish: "Combine input fields, a dropdown, textarea, radio buttons, and a submit button.",
  hintTamil: "Input fields, dropdown, textarea, radio buttons மற்றும் submit button ஆகியவற்றை இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A business contact form containing all requested customer and project details.",
  expectedOutputTamil: "கேட்கப்பட்ட வாடிக்கையாளர் மற்றும் project விவரங்களைக் கொண்ட business contact form.",
  challenge: true
},

// TOPIC 10: HTML Input Types

{
  id: 1,
  topicId: 10,
  title: "Text Input",
  questionEnglish: "Create a form with a text input field that allows a user to enter their full name.",
  questionTamil: "பயனர் தனது முழுப் பெயரை உள்ளிடக்கூடிய text input field கொண்ட form உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"text\">.",
  hintTamil: "<input type=\"text\"> பயன்படுத்தவும்.",
  expectedOutput: "A text input field for entering a full name.",
  expectedOutputTamil: "முழுப் பெயரை உள்ளிடுவதற்கான text input field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name">
  </form>
</body>
</html>`
},

{
  id: 2,
  topicId: 10,
  title: "Email Input",
  questionEnglish: "Create a form with an email input field and a submit button.",
  questionTamil: "Email input field மற்றும் submit button கொண்ட form உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"email\">.",
  hintTamil: "<input type=\"email\"> பயன்படுத்தவும்.",
  expectedOutput: "An email input field and a Submit button.",
  expectedOutputTamil: "Email input field மற்றும் Submit button.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 3,
  topicId: 10,
  title: "Password Input",
  questionEnglish: "Create a password input field where the entered characters are hidden.",
  questionTamil: "உள்ளிடப்படும் எழுத்துக்கள் மறைக்கப்படும் password input field உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"password\">.",
  hintTamil: "<input type=\"password\"> பயன்படுத்தவும்.",
  expectedOutput: "A password field that masks the entered characters.",
  expectedOutputTamil: "உள்ளிடப்படும் எழுத்துக்களை மறைக்கும் password field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
  </form>
</body>
</html>`
},

{
  id: 4,
  topicId: 10,
  title: "Number Input",
  questionEnglish: "Create a number input field that allows a student to enter their age.",
  questionTamil: "மாணவர் தனது வயதை உள்ளிடக்கூடிய number input field உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"number\">.",
  hintTamil: "<input type=\"number\"> பயன்படுத்தவும்.",
  expectedOutput: "A number input field for entering age.",
  expectedOutputTamil: "வயதை உள்ளிடுவதற்கான number input field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age">
  </form>
</body>
</html>`
},

{
  id: 5,
  topicId: 10,
  title: "Date Input",
  questionEnglish: "Create a form field that allows a student to select their date of birth using a date picker.",
  questionTamil: "மாணவர் date picker மூலம் தனது பிறந்த தேதியைத் தேர்வு செய்யக்கூடிய form field உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"date\">.",
  hintTamil: "<input type=\"date\"> பயன்படுத்தவும்.",
  expectedOutput: "A date picker for selecting a date of birth.",
  expectedOutputTamil: "பிறந்த தேதியைத் தேர்வு செய்வதற்கான date picker.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob">
  </form>
</body>
</html>`
},

{
  id: 6,
  topicId: 10,
  title: "Radio Input",
  questionEnglish: "Create three radio options for selecting a course: HTML, CSS, and JavaScript. The user must select only one option.",
  questionTamil: "HTML, CSS மற்றும் JavaScript ஆகியவற்றில் ஒரு course-ஐ மட்டும் தேர்வு செய்ய மூன்று radio options உருவாக்கவும்.",
  hintEnglish: "Use radio inputs with the same name attribute.",
  hintTamil: "ஒரே name attribute கொண்ட radio inputs பயன்படுத்தவும்.",
  expectedOutput: "Three radio options for HTML, CSS, and JavaScript.",
  expectedOutputTamil: "HTML, CSS மற்றும் JavaScript ஆகியவற்றுக்கான மூன்று radio options.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <input type="radio" id="html" name="course" value="HTML">
    <label for="html">HTML</label>

    <input type="radio" id="css" name="course" value="CSS">
    <label for="css">CSS</label>

    <input type="radio" id="js" name="course" value="JavaScript">
    <label for="js">JavaScript</label>
  </form>
</body>
</html>`
},

{
  id: 7,
  topicId: 10,
  title: "Checkbox Input",
  questionEnglish: "Create checkbox inputs that allow a student to select multiple skills: HTML, CSS, JavaScript, and Python.",
  questionTamil: "HTML, CSS, JavaScript மற்றும் Python ஆகிய பல skills-ஐ மாணவர் தேர்வு செய்யக்கூடிய checkbox inputs உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"checkbox\">.",
  hintTamil: "<input type=\"checkbox\"> பயன்படுத்தவும்.",
  expectedOutput: "Four checkboxes for selecting programming and web development skills.",
  expectedOutputTamil: "Programming மற்றும் web development skills தேர்வு செய்வதற்கான நான்கு checkboxes.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <input type="checkbox" id="html" name="skills" value="HTML">
    <label for="html">HTML</label>

    <input type="checkbox" id="css" name="skills" value="CSS">
    <label for="css">CSS</label>

    <input type="checkbox" id="js" name="skills" value="JavaScript">
    <label for="js">JavaScript</label>

    <input type="checkbox" id="python" name="skills" value="Python">
    <label for="python">Python</label>
  </form>
</body>
</html>`
},

{
  id: 8,
  topicId: 10,
  title: "File Input",
  questionEnglish: "Create a file upload field that allows students to select a PDF file containing their resume.",
  questionTamil: "மாணவர்கள் தங்களது resume கொண்ட PDF கோப்பைத் தேர்வு செய்யக்கூடிய file upload field உருவாக்கவும்.",
  hintEnglish: "Use <input type=\"file\"> with the accept attribute.",
  hintTamil: "accept attribute உடன் <input type=\"file\"> பயன்படுத்தவும்.",
  expectedOutput: "A file selection field that accepts PDF files.",
  expectedOutputTamil: "PDF கோப்புகளைத் தேர்வு செய்யக்கூடிய file selection field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="resume">Upload Resume:</label>
    <input type="file" id="resume" name="resume" accept=".pdf">
  </form>
</body>
</html>`
},

{
  id: 9,
  topicId: 10,
  title: "Build a Job Application Form",
  questionEnglish: "Create a job application form with text, email, telephone, date, number, and file input fields. Include a submit button.",
  questionTamil: "Text, email, telephone, date, number மற்றும் file input fields கொண்ட job application form உருவாக்கவும். Submit button சேர்க்கவும்.",
  hintEnglish: "Combine different HTML input types according to the information being collected.",
  hintTamil: "சேகரிக்கப்படும் தகவல்களுக்கு ஏற்ப வெவ்வேறு HTML input types-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A job application form with all six requested input types.",
  expectedOutputTamil: "கேட்கப்பட்ட ஆறு input types கொண்ட job application form.",
  challenge: true
},

{
  id: 10,
  topicId: 10,
  title: "Build an Event Registration Form",
  questionEnglish: "Create an event registration form with name, email, date of birth, number of participants, course selection, and resume upload. Use suitable input types.",
  questionTamil: "பெயர், email, பிறந்த தேதி, பங்கேற்பாளர்களின் எண்ணிக்கை, course selection மற்றும் resume upload கொண்ட event registration form உருவாக்கவும். பொருத்தமான input types பயன்படுத்தவும்.",
  hintEnglish: "Choose appropriate input types such as text, email, date, number, radio, and file.",
  hintTamil: "Text, email, date, number, radio மற்றும் file போன்ற பொருத்தமான input types தேர்வு செய்யவும்.",
  expectedOutput: "A complete event registration form containing all requested input fields.",
  expectedOutputTamil: "கேட்கப்பட்ட அனைத்து input fields கொண்ட event registration form.",
  challenge: true
},

// TOPIC 11: HTML Form Attributes

{
  id: 1,
  topicId: 11,
  title: "Make an Input Required",
  questionEnglish: "Create a name input field that the user must fill before submitting the form.",
  questionTamil: "Form submit செய்வதற்கு முன்பு பயனர் கட்டாயம் நிரப்ப வேண்டிய name input field உருவாக்கவும்.",
  hintEnglish: "Use the required attribute.",
  hintTamil: "required attribute பயன்படுத்தவும்.",
  expectedOutput: "A required name input field that prevents empty submission through browser validation.",
  expectedOutputTamil: "காலியாக submit செய்வதை browser validation மூலம் தடுக்கும் required name input field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 2,
  topicId: 11,
  title: "Add Placeholder Text",
  questionEnglish: "Create an email input field that displays 'Enter your email' before the user types anything.",
  questionTamil: "பயனர் எதையும் உள்ளிடுவதற்கு முன்பு 'Enter your email' என்று காட்டும் email input field உருவாக்கவும்.",
  hintEnglish: "Use the placeholder attribute.",
  hintTamil: "placeholder attribute பயன்படுத்தவும்.",
  expectedOutput: "An email field displaying the placeholder 'Enter your email'.",
  expectedOutputTamil: "'Enter your email' என்ற placeholder காட்டும் email field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder="Enter your email"
    >
  </form>
</body>
</html>`
},

{
  id: 3,
  topicId: 11,
  title: "Set Minimum and Maximum Length",
  questionEnglish: "Create a username field that accepts a minimum of 4 characters and a maximum of 12 characters.",
  questionTamil: "குறைந்தது 4 மற்றும் அதிகபட்சம் 12 characters கொண்ட username-ஐ ஏற்றுக்கொள்ளும் field உருவாக்கவும்.",
  hintEnglish: "Use minlength and maxlength attributes.",
  hintTamil: "minlength மற்றும் maxlength attributes பயன்படுத்தவும்.",
  expectedOutput: "A username field with a minimum length of 4 and maximum length of 12.",
  expectedOutputTamil: "குறைந்தது 4 மற்றும் அதிகபட்சம் 12 characters கொண்ட username field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      minlength="4"
      maxlength="12"
    >
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 4,
  topicId: 11,
  title: "Set Number Range",
  questionEnglish: "Create an age input field that only accepts values from 18 to 60 using browser validation.",
  questionTamil: "Browser validation மூலம் 18 முதல் 60 வரை உள்ள வயதை மட்டும் ஏற்றுக்கொள்ளும் input field உருவாக்கவும்.",
  hintEnglish: "Use min and max attributes with a number input.",
  hintTamil: "Number input உடன் min மற்றும் max attributes பயன்படுத்தவும்.",
  expectedOutput: "An age input field with a minimum value of 18 and maximum value of 60.",
  expectedOutputTamil: "குறைந்தபட்சம் 18 மற்றும் அதிகபட்சம் 60 கொண்ட age input field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="age">Age:</label>
    <input
      type="number"
      id="age"
      name="age"
      min="18"
      max="60"
    >
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 5,
  topicId: 11,
  title: "Add Default Input Value",
  questionEnglish: "Create a text input field that already contains the default username 'Deepak'.",
  questionTamil: "Default username 'Deepak' ஏற்கனவே உள்ளிடப்பட்டிருக்கும் text input field உருவாக்கவும்.",
  hintEnglish: "Use the value attribute.",
  hintTamil: "value attribute பயன்படுத்தவும்.",
  expectedOutput: "A text field displaying Deepak as its initial value.",
  expectedOutputTamil: "Deepak என்ற ஆரம்ப value கொண்ட text field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="username">Username:</label>
    <input
      type="text"
      id="username"
      name="username"
      value="Deepak"
    >
  </form>
</body>
</html>`
},

{
  id: 6,
  topicId: 11,
  title: "Make an Input Read Only",
  questionEnglish: "Create a text field displaying the course name 'B.Sc. Computer Science'. Users should be able to see the value but not edit it.",
  questionTamil: "'B.Sc. Computer Science' என்ற course பெயரைக் காட்டும் text field உருவாக்கவும். பயனர்கள் value-ஐப் பார்க்கலாம், ஆனால் மாற்ற முடியாது.",
  hintEnglish: "Use the readonly attribute.",
  hintTamil: "readonly attribute பயன்படுத்தவும்.",
  expectedOutput: "A text field showing B.Sc. Computer Science that cannot be edited.",
  expectedOutputTamil: "மாற்ற முடியாத B.Sc. Computer Science value கொண்ட text field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="course">Course:</label>
    <input
      type="text"
      id="course"
      name="course"
      value="B.Sc. Computer Science"
      readonly
    >
  </form>
</body>
</html>`
},

{
  id: 7,
  topicId: 11,
  title: "Disable an Input Field",
  questionEnglish: "Create a text input field containing the value 'Registration Closed'. Disable the field so the user cannot interact with it.",
  questionTamil: "'Registration Closed' என்ற value கொண்ட text input field உருவாக்கவும். பயனர் அதனுடன் செயல்பட முடியாதபடி field-ஐ disable செய்யவும்.",
  hintEnglish: "Use the disabled attribute.",
  hintTamil: "disabled attribute பயன்படுத்தவும்.",
  expectedOutput: "A disabled text field displaying Registration Closed.",
  expectedOutputTamil: "Registration Closed என்ற உரையைக் காட்டும் செயல்படாத text field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="status">Status:</label>
    <input
      type="text"
      id="status"
      name="status"
      value="Registration Closed"
      disabled
    >
  </form>
</body>
</html>`
},

{
  id: 8,
  topicId: 11,
  title: "Add Pattern Validation",
  questionEnglish: "Create a text input field that accepts a 10-digit phone number using the pattern attribute.",
  questionTamil: "Pattern attribute பயன்படுத்தி 10 இலக்க phone number-ஐ ஏற்றுக்கொள்ளும் text input field உருவாக்கவும்.",
  hintEnglish: "Use pattern=\"[0-9]{10}\".",
  hintTamil: "pattern=\"[0-9]{10}\" பயன்படுத்தவும்.",
  expectedOutput: "A phone number field that accepts exactly 10 digits through browser validation.",
  expectedOutputTamil: "Browser validation மூலம் சரியாக 10 இலக்கங்களை ஏற்றுக்கொள்ளும் phone number field.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="phone">Phone Number:</label>
    <input
      type="text"
      id="phone"
      name="phone"
      pattern="[0-9]{10}"
      title="Enter exactly 10 digits"
      required
    >
    <button type="submit">Submit</button>
  </form>
</body>
</html>`
},

{
  id: 9,
  topicId: 11,
  title: "Build a Validated Registration Form",
  questionEnglish: "Create a student registration form with name, email, password, age, and phone number. Apply suitable required, placeholder, minlength, maxlength, min, max, and pattern attributes.",
  questionTamil: "Name, email, password, age மற்றும் phone number கொண்ட student registration form உருவாக்கவும். பொருத்தமான required, placeholder, minlength, maxlength, min, max மற்றும் pattern attributes பயன்படுத்தவும்.",
  hintEnglish: "Choose suitable validation attributes for each input type.",
  hintTamil: "ஒவ்வொரு input type-க்கும் பொருத்தமான validation attributes தேர்வு செய்யவும்.",
  expectedOutput: "A registration form with browser-based validation for all requested fields.",
  expectedOutputTamil: "கேட்கப்பட்ட அனைத்து fields-க்கும் browser validation கொண்ட registration form.",
  challenge: true
},

{
  id: 10,
  topicId: 11,
  title: "Create a Secure Job Application Form Interface",
  questionEnglish: "Build a job application form with required name and email fields, a password field with minimum length, a phone field with a 10-digit pattern, a readonly job role field, and a disabled application status field.",
  questionTamil: "Required name மற்றும் email fields, குறைந்தபட்ச நீளமுள்ள password field, 10 இலக்க pattern கொண்ட phone field, readonly job role field மற்றும் disabled application status field கொண்ட job application form உருவாக்கவும்.",
  hintEnglish: "Combine required, minlength, pattern, readonly, and disabled attributes appropriately.",
  hintTamil: "Required, minlength, pattern, readonly மற்றும் disabled attributes-ஐச் சரியான முறையில் இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A job application form with all requested fields and validation attributes.",
  expectedOutputTamil: "கேட்கப்பட்ட அனைத்து fields மற்றும் validation attributes கொண்ட job application form.",
  challenge: true
},

// TOPIC 12: HTML Buttons

{
  id: 1,
  topicId: 12,
  title: "Create a Basic Button",
  questionEnglish: "Create a button that displays the text 'Click Me'.",
  questionTamil: "'Click Me' என்ற உரையைக் காட்டும் button உருவாக்கவும்.",
  hintEnglish: "Use the <button> tag.",
  hintTamil: "<button> tag பயன்படுத்தவும்.",
  expectedOutput: "A button displaying Click Me.",
  expectedOutputTamil: "Click Me என்ற உரையைக் காட்டும் button.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <button>Click Me</button>
</body>
</html>`
},

{
  id: 2,
  topicId: 12,
  title: "Create a Submit Button",
  questionEnglish: "Create a form with a name input and a submit button displaying 'Register'.",
  questionTamil: "Name input மற்றும் 'Register' என்ற உரையைக் கொண்ட submit button உடைய form உருவாக்கவும்.",
  hintEnglish: "Use <button type=\"submit\">.",
  hintTamil: "<button type=\"submit\"> பயன்படுத்தவும்.",
  expectedOutput: "A form with a name field and Register submit button.",
  expectedOutputTamil: "Name field மற்றும் Register submit button கொண்ட form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Register</button>
  </form>
</body>
</html>`
},

{
  id: 3,
  topicId: 12,
  title: "Create a Reset Button",
  questionEnglish: "Create a form with name and email fields. Add a reset button that clears the entered values.",
  questionTamil: "Name மற்றும் email fields கொண்ட form உருவாக்கவும். உள்ளிடப்பட்ட values-ஐ அழிக்கும் reset button சேர்க்கவும்.",
  hintEnglish: "Use <button type=\"reset\">.",
  hintTamil: "<button type=\"reset\"> பயன்படுத்தவும்.",
  expectedOutput: "A form with name and email fields and a Reset button that restores their initial values.",
  expectedOutputTamil: "Name மற்றும் email fields மற்றும் அவற்றின் ஆரம்ப values-ஐ மீட்டமைக்கும் Reset button கொண்ட form.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <br><br>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </form>
</body>
</html>`
},

{
  id: 4,
  topicId: 12,
  title: "Create a Button with an Alert",
  questionEnglish: "Create a button displaying 'Show Message'. When clicked, it should display an alert saying 'Welcome to DEEP CODE'.",
  questionTamil: "'Show Message' என்ற button உருவாக்கவும். அதைக் கிளிக் செய்யும்போது 'Welcome to DEEP CODE' என்ற alert தோன்ற வேண்டும்.",
  hintEnglish: "Use the onclick attribute with JavaScript alert().",
  hintTamil: "JavaScript alert() உடன் onclick attribute பயன்படுத்தவும்.",
  expectedOutput: "Clicking the button displays an alert saying Welcome to DEEP CODE.",
  expectedOutputTamil: "Button-ஐ கிளிக் செய்தால் Welcome to DEEP CODE என்ற alert தோன்றும்.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <button onclick="alert('Welcome to DEEP CODE')">
    Show Message
  </button>
</body>
</html>`
},

{
  id: 5,
  topicId: 12,
  title: "Create a Navigation Button",
  questionEnglish: "Create a button named 'Visit Google' that opens Google when clicked.",
  questionTamil: "'Visit Google' என்ற button உருவாக்கவும். அதைக் கிளிக் செய்யும்போது Google திறக்க வேண்டும்.",
  hintEnglish: "Use an <a> element containing a button, or style an anchor as a button. Avoid nesting interactive elements.",
  hintTamil: "Button போல வடிவமைக்கப்பட்ட <a> element பயன்படுத்தவும். Interactive elements-ஐ ஒன்றுக்குள் ஒன்று வைக்க வேண்டாம்.",
  expectedOutput: "A button-like link that opens Google.",
  expectedOutputTamil: "Google-ஐத் திறக்கும் button போன்ற link.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <a href="https://www.google.com">
    <button type="button">Visit Google</button>
  </a>
</body>
</html>`
},

{
  id: 6,
  topicId: 12,
  title: "Create a Disabled Button",
  questionEnglish: "Create a button displaying 'Submit'. Disable the button so users cannot click it.",
  questionTamil: "'Submit' என்ற button உருவாக்கவும். பயனர்கள் அதைக் கிளிக் செய்ய முடியாதபடி disable செய்யவும்.",
  hintEnglish: "Use the disabled attribute.",
  hintTamil: "disabled attribute பயன்படுத்தவும்.",
  expectedOutput: "A disabled Submit button.",
  expectedOutputTamil: "செயல்படாத Submit button.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <button type="button" disabled>Submit</button>
</body>
</html>`
},

{
  id: 7,
  topicId: 12,
  title: "Create Multiple Buttons",
  questionEnglish: "Create three buttons displaying 'Home', 'About', and 'Contact'.",
  questionTamil: "'Home', 'About' மற்றும் 'Contact' என்ற உரைகளைக் கொண்ட மூன்று buttons உருவாக்கவும்.",
  hintEnglish: "Use three separate button elements.",
  hintTamil: "மூன்று தனித்தனி button elements பயன்படுத்தவும்.",
  expectedOutput: "Three buttons: Home, About, and Contact.",
  expectedOutputTamil: "Home, About மற்றும் Contact என்ற மூன்று buttons.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <button type="button">Home</button>
  <button type="button">About</button>
  <button type="button">Contact</button>
</body>
</html>`
},

{
  id: 8,
  topicId: 12,
  title: "Create a Button with JavaScript",
  questionEnglish: "Create a button named 'Change Text'. When clicked, it should change the paragraph text from 'Hello Student' to 'Welcome to Web Development'.",
  questionTamil: "'Change Text' என்ற button உருவாக்கவும். அதைக் கிளிக் செய்தால் paragraph-ல் உள்ள 'Hello Student' என்பது 'Welcome to Web Development' என்று மாற வேண்டும்.",
  hintEnglish: "Use an id on the paragraph and JavaScript innerText inside an onclick event.",
  hintTamil: "Paragraph-க்கு id கொடுத்து, onclick event-ல் JavaScript innerText பயன்படுத்தவும்.",
  expectedOutput: "Before clicking: Hello Student. After clicking: Welcome to Web Development.",
  expectedOutputTamil: "கிளிக் செய்வதற்கு முன்: Hello Student. கிளிக் செய்த பிறகு: Welcome to Web Development.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p id="message">Hello Student</p>

  <button
    type="button"
    onclick="document.getElementById('message').innerText = 'Welcome to Web Development'"
  >
    Change Text
  </button>
</body>
</html>`
},

{
  id: 9,
  topicId: 12,
  title: "Build an Interactive Profile Page",
  questionEnglish: "Create a student profile page with a welcome message and three buttons: Show Details, Hide Details, and Change Message. Use JavaScript to make each button perform its respective action.",
  questionTamil: "Welcome message மற்றும் Show Details, Hide Details, Change Message என்ற மூன்று buttons கொண்ட student profile page உருவாக்கவும். ஒவ்வொரு button-ம் அதற்குரிய செயலைச் செய்ய JavaScript பயன்படுத்தவும்.",
  hintEnglish: "Use onclick events, getElementById(), innerText, and the display property.",
  hintTamil: "onclick events, getElementById(), innerText மற்றும் display property பயன்படுத்தவும்.",
  expectedOutput: "An interactive student profile page where the buttons show, hide, and change content.",
  expectedOutputTamil: "Content-ஐக் காட்டவும், மறைக்கவும், மாற்றவும் கூடிய interactive student profile page.",
  challenge: true
},

{
  id: 10,
  topicId: 12,
  title: "Build a Business Landing Page",
  questionEnglish: "Create a landing page for a web development company with a heading, description, and three buttons: Explore Services, Contact Us, and Get Started. Make the buttons perform suitable actions using HTML links or JavaScript.",
  questionTamil: "ஒரு web development நிறுவனத்திற்கான heading, description மற்றும் Explore Services, Contact Us, Get Started என்ற மூன்று buttons கொண்ட landing page உருவாக்கவும். HTML links அல்லது JavaScript பயன்படுத்தி buttons பொருத்தமான செயல்களைச் செய்யும்படி உருவாக்கவும்.",
  hintEnglish: "Combine headings, paragraphs, anchor elements, buttons, and JavaScript where needed.",
  hintTamil: "Headings, paragraphs, anchor elements, buttons மற்றும் தேவையான இடங்களில் JavaScript இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A business landing page with three working action buttons.",
  expectedOutputTamil: "மூன்று செயல்படும் action buttons கொண்ட business landing page.",
  challenge: true
},

// TOPIC 13: Semantic HTML

{
  id: 1,
  topicId: 13,
  title: "Create a Header",
  questionEnglish: "Create a webpage with a semantic header containing the website name 'DEEP CODE'.",
  questionTamil: "'DEEP CODE' என்ற website பெயரைக் கொண்ட semantic header உடைய webpage உருவாக்கவும்.",
  hintEnglish: "Use the <header> tag.",
  hintTamil: "<header> tag பயன்படுத்தவும்.",
  expectedOutput: "A webpage displaying DEEP CODE inside a header section.",
  expectedOutputTamil: "Header பகுதியில் DEEP CODE காட்டப்படும் webpage.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <header>
    <h1>DEEP CODE</h1>
  </header>
</body>
</html>`
},

{
  id: 2,
  topicId: 13,
  title: "Create a Navigation Section",
  questionEnglish: "Create a navigation section containing links to Home, Courses, About, and Contact.",
  questionTamil: "Home, Courses, About மற்றும் Contact links கொண்ட navigation பகுதியை உருவாக்கவும்.",
  hintEnglish: "Use the <nav> tag with anchor elements.",
  hintTamil: "Anchor elements உடன் <nav> tag பயன்படுத்தவும்.",
  expectedOutput: "A navigation section with four links.",
  expectedOutputTamil: "நான்கு links கொண்ட navigation பகுதி.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <nav>
    <a href="#home">Home</a>
    <a href="#courses">Courses</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>
</body>
</html>`
},

{
  id: 3,
  topicId: 13,
  title: "Create a Main Content Section",
  questionEnglish: "Create a webpage with a main section containing a heading 'Welcome to Web Development' and a paragraph explaining HTML.",
  questionTamil: "'Welcome to Web Development' என்ற heading மற்றும் HTML பற்றிய விளக்கம் கொண்ட main section உருவாக்கவும்.",
  hintEnglish: "Use the <main> tag for the primary page content.",
  hintTamil: "முக்கியமான page content-க்கு <main> tag பயன்படுத்தவும்.",
  expectedOutput: "A main section with the requested heading and paragraph.",
  expectedOutputTamil: "கேட்கப்பட்ட heading மற்றும் paragraph கொண்ட main பகுதி.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <main>
    <h1>Welcome to Web Development</h1>
    <p>HTML is used to structure web pages.</p>
  </main>
</body>
</html>`
},

{
  id: 4,
  topicId: 13,
  title: "Create an Article",
  questionEnglish: "Create an article about Cybersecurity containing a heading and two paragraphs.",
  questionTamil: "Heading மற்றும் இரண்டு paragraphs கொண்ட Cybersecurity பற்றிய article உருவாக்கவும்.",
  hintEnglish: "Use the <article> tag to represent self-contained content.",
  hintTamil: "தனித்துவமாகப் பயன்படுத்தக்கூடிய content-க்கு <article> tag பயன்படுத்தவும்.",
  expectedOutput: "A Cybersecurity article with a heading and two paragraphs.",
  expectedOutputTamil: "Heading மற்றும் இரண்டு paragraphs கொண்ட Cybersecurity article.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <article>
    <h2>Introduction to Cybersecurity</h2>
    <p>Cybersecurity protects computers and networks.</p>
    <p>It helps prevent unauthorized access and attacks.</p>
  </article>
</body>
</html>`
},

{
  id: 5,
  topicId: 13,
  title: "Create an Aside Section",
  questionEnglish: "Create a webpage with a main article about HTML and an aside section displaying 'Related Topics: CSS and JavaScript'.",
  questionTamil: "HTML பற்றிய main article மற்றும் 'Related Topics: CSS and JavaScript' காட்டும் aside section கொண்ட webpage உருவாக்கவும்.",
  hintEnglish: "Use the <aside> tag for related or supplementary content.",
  hintTamil: "தொடர்புடைய அல்லது கூடுதல் தகவல்களுக்கு <aside> tag பயன்படுத்தவும்.",
  expectedOutput: "An HTML article with a separate related topics section.",
  expectedOutputTamil: "தனியான தொடர்புடைய தலைப்புகள் பகுதியைக் கொண்ட HTML article.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <main>
    <article>
      <h1>HTML</h1>
      <p>HTML structures web pages.</p>
    </article>

    <aside>
      <h3>Related Topics</h3>
      <p>CSS and JavaScript</p>
    </aside>
  </main>
</body>
</html>`
},

{
  id: 6,
  topicId: 13,
  title: "Create a Footer",
  questionEnglish: "Create a webpage footer displaying 'Copyright 2026 DEEP CODE'.",
  questionTamil: "'Copyright 2026 DEEP CODE' என்று காட்டும் webpage footer உருவாக்கவும்.",
  hintEnglish: "Use the <footer> tag.",
  hintTamil: "<footer> tag பயன்படுத்தவும்.",
  expectedOutput: "A footer displaying Copyright 2026 DEEP CODE.",
  expectedOutputTamil: "Copyright 2026 DEEP CODE என்று காட்டும் footer.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <footer>
    <p>Copyright 2026 DEEP CODE</p>
  </footer>
</body>
</html>`
},

{
  id: 7,
  topicId: 13,
  title: "Create a Figure with a Caption",
  questionEnglish: "Create a semantic figure containing an image named cybersecurity.jpg and a caption 'Cybersecurity Awareness'.",
  questionTamil: "cybersecurity.jpg என்ற படத்தையும் 'Cybersecurity Awareness' என்ற caption-ஐயும் கொண்ட semantic figure உருவாக்கவும்.",
  hintEnglish: "Use <figure>, <img>, and <figcaption>.",
  hintTamil: "<figure>, <img> மற்றும் <figcaption> பயன்படுத்தவும்.",
  expectedOutput: "A figure displaying the image with its caption.",
  expectedOutputTamil: "படத்தையும் அதன் caption-ஐயும் காட்டும் figure.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <figure>
    <img src="cybersecurity.jpg" alt="Cybersecurity awareness" width="300">
    <figcaption>Cybersecurity Awareness</figcaption>
  </figure>
</body>
</html>`
},

{
  id: 8,
  topicId: 13,
  title: "Create a Date and Time Section",
  questionEnglish: "Create a blog article with the heading 'Latest Technology News'. Display the publication date using the <time> element.",
  questionTamil: "'Latest Technology News' என்ற heading கொண்ட blog article உருவாக்கவும். வெளியிடப்பட்ட தேதியை <time> element பயன்படுத்திக் காட்டவும்.",
  hintEnglish: "Use the datetime attribute inside the <time> tag.",
  hintTamil: "<time> tag-க்குள் datetime attribute பயன்படுத்தவும்.",
  expectedOutput: "A blog article showing its publication date.",
  expectedOutputTamil: "வெளியிடப்பட்ட தேதியைக் காட்டும் blog article.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <article>
    <h2>Latest Technology News</h2>
    <p>
      Published on:
      <time datetime="2026-11-18">November 18, 2026</time>
    </p>
  </article>
</body>
</html>`
},

{
  id: 9,
  topicId: 13,
  title: "Build a Semantic Blog Page",
  questionEnglish: "Build a complete blog webpage about Cybersecurity using header, nav, main, article, aside, and footer. Include suitable headings, paragraphs, and navigation links.",
  questionTamil: "Header, nav, main, article, aside மற்றும் footer பயன்படுத்தி Cybersecurity பற்றிய முழுமையான blog webpage உருவாக்கவும். பொருத்தமான headings, paragraphs மற்றும் navigation links சேர்க்கவும்.",
  hintEnglish: "Organize each part of the page according to its semantic purpose.",
  hintTamil: "ஒவ்வொரு page பகுதியையும் அதன் semantic பயன்பாட்டிற்கு ஏற்ப ஒழுங்குபடுத்தவும்.",
  expectedOutput: "A complete semantic blog page with all requested sections.",
  expectedOutputTamil: "கேட்கப்பட்ட அனைத்து sections கொண்ட முழுமையான semantic blog page.",
  challenge: true
},

{
  id: 10,
  topicId: 13,
  title: "Build a DEEP CODE Homepage",
  questionEnglish: "Create a semantic homepage for DEEP CODE. Include a header with the platform name, navigation links, a main section describing the platform, an article about learning programming, an aside with popular courses, and a footer.",
  questionTamil: "DEEP CODE-க்கான semantic homepage உருவாக்கவும். Platform பெயருடன் header, navigation links, platform-ஐ விளக்கும் main section, programming கற்றல் பற்றிய article, பிரபலமான courses கொண்ட aside மற்றும் footer சேர்க்கவும்.",
  hintEnglish: "Use semantic HTML elements to structure the entire homepage.",
  hintTamil: "முழு homepage-ஐ அமைக்க semantic HTML elements பயன்படுத்தவும்.",
  expectedOutput: "A complete DEEP CODE homepage using semantic HTML elements.",
  expectedOutputTamil: "Semantic HTML elements பயன்படுத்தி உருவாக்கப்பட்ட முழுமையான DEEP CODE homepage.",
  challenge: true
},

// TOPIC 14: Div and Span Elements

{
  id: 1,
  topicId: 14,
  title: "Create a Div Container",
  questionEnglish: "Create a div container containing a heading 'About Me' and a paragraph introducing yourself.",
  questionTamil: "'About Me' என்ற heading மற்றும் உங்களை அறிமுகப்படுத்தும் paragraph கொண்ட div container உருவாக்கவும்.",
  hintEnglish: "Use the <div> tag to group the elements.",
  hintTamil: "Elements-ஐ ஒன்றாகக் குழுவாக்க <div> tag பயன்படுத்தவும்.",
  expectedOutput: "A div containing an About Me heading and a paragraph.",
  expectedOutputTamil: "About Me heading மற்றும் paragraph கொண்ட div.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <div>
    <h2>About Me</h2>
    <p>My name is Deepak. I am learning web development.</p>
  </div>
</body>
</html>`
},

{
  id: 2,
  topicId: 14,
  title: "Highlight Text Using Span",
  questionEnglish: "Create a paragraph that displays 'I love HTML'. Use a span element to group the word 'HTML'.",
  questionTamil: "'I love HTML' என்ற paragraph உருவாக்கவும். 'HTML' என்ற வார்த்தையை group செய்ய span element பயன்படுத்தவும்.",
  hintEnglish: "Place the word inside the <span> tag.",
  hintTamil: "அந்த வார்த்தையை <span> tag-க்குள் வைக்கவும்.",
  expectedOutput: "I love HTML, with HTML wrapped inside a span element.",
  expectedOutputTamil: "HTML என்ற வார்த்தை span element-க்குள் இருக்கும் I love HTML paragraph.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>I love <span>HTML</span></p>
</body>
</html>`
},

{
  id: 3,
  topicId: 14,
  title: "Create Multiple Div Sections",
  questionEnglish: "Create three separate div sections with the headings Home, About, and Contact.",
  questionTamil: "Home, About மற்றும் Contact என்ற headings கொண்ட மூன்று தனித்தனி div sections உருவாக்கவும்.",
  hintEnglish: "Use a separate <div> for each section.",
  hintTamil: "ஒவ்வொரு section-க்கும் தனித்தனி <div> பயன்படுத்தவும்.",
  expectedOutput: "Three separate sections titled Home, About, and Contact.",
  expectedOutputTamil: "Home, About மற்றும் Contact என்ற தலைப்புகளைக் கொண்ட மூன்று தனித்தனி sections.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <div>
    <h2>Home</h2>
    <p>Welcome to our website.</p>
  </div>

  <div>
    <h2>About</h2>
    <p>Learn about our company.</p>
  </div>

  <div>
    <h2>Contact</h2>
    <p>Contact us for more information.</p>
  </div>
</body>
</html>`
},

{
  id: 4,
  topicId: 14,
  title: "Use Span Inside a Paragraph",
  questionEnglish: "Create a paragraph displaying 'My career goal is Cybersecurity'. Wrap the word 'Cybersecurity' inside a span element.",
  questionTamil: "'My career goal is Cybersecurity' என்ற paragraph உருவாக்கவும். 'Cybersecurity' என்ற வார்த்தையை span element-க்குள் வைக்கவும்.",
  hintEnglish: "Use a span element inside the paragraph.",
  hintTamil: "Paragraph-க்குள் span element பயன்படுத்தவும்.",
  expectedOutput: "My career goal is Cybersecurity, with Cybersecurity wrapped in span.",
  expectedOutputTamil: "Cybersecurity என்ற வார்த்தை span-க்குள் இருக்கும் paragraph.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>
    My career goal is
    <span>Cybersecurity</span>
  </p>
</body>
</html>`
},

{
  id: 5,
  topicId: 14,
  title: "Create a Profile Container",
  questionEnglish: "Create a profile container using div. Include your name, course, age, and career goal.",
  questionTamil: "Div பயன்படுத்தி ஒரு profile container உருவாக்கவும். அதில் உங்கள் பெயர், படிப்பு, வயது மற்றும் career goal சேர்க்கவும்.",
  hintEnglish: "Group the profile details inside one div element.",
  hintTamil: "Profile விவரங்களை ஒரே div element-க்குள் குழுவாக்கவும்.",
  expectedOutput: "A profile container displaying name, course, age, and career goal.",
  expectedOutputTamil: "பெயர், படிப்பு, வயது மற்றும் career goal காட்டும் profile container.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <div>
    <h2>Student Profile</h2>
    <p>Name: Deepak</p>
    <p>Course: B.Sc. Computer Science</p>
    <p>Age: 20</p>
    <p>Career Goal: Cybersecurity</p>
  </div>
</body>
</html>`
},

{
  id: 6,
  topicId: 14,
  title: "Group Important Information",
  questionEnglish: "Create a paragraph about web development. Use separate span elements to group the words HTML, CSS, and JavaScript.",
  questionTamil: "Web development பற்றிய paragraph உருவாக்கவும். HTML, CSS மற்றும் JavaScript வார்த்தைகளை தனித்தனி span elements மூலம் group செய்யவும்.",
  hintEnglish: "Use three span elements inside one paragraph.",
  hintTamil: "ஒரே paragraph-க்குள் மூன்று span elements பயன்படுத்தவும்.",
  expectedOutput: "A paragraph containing HTML, CSS, and JavaScript inside separate span elements.",
  expectedOutputTamil: "HTML, CSS மற்றும் JavaScript ஆகியவை தனித்தனி span elements-க்குள் உள்ள paragraph.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <p>
    Web development uses
    <span>HTML</span>,
    <span>CSS</span>, and
    <span>JavaScript</span>.
  </p>
</body>
</html>`
},

{
  id: 7,
  topicId: 14,
  title: "Create a Product Container",
  questionEnglish: "Create a product container using div. Include the product name, description, price, and an Add to Cart button.",
  questionTamil: "Div பயன்படுத்தி product container உருவாக்கவும். Product name, description, price மற்றும் Add to Cart button சேர்க்கவும்.",
  hintEnglish: "Place all product details inside a single div element.",
  hintTamil: "அனைத்து product விவரங்களையும் ஒரே div element-க்குள் வைக்கவும்.",
  expectedOutput: "A product container showing product details and an Add to Cart button.",
  expectedOutputTamil: "Product விவரங்கள் மற்றும் Add to Cart button கொண்ட product container.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <div>
    <h2>Wireless Mouse</h2>
    <p>Comfortable wireless mouse.</p>
    <p>Price: ₹500</p>
    <button type="button">Add to Cart</button>
  </div>
</body>
</html>`
},

{
  id: 8,
  topicId: 14,
  title: "Create Nested Div Containers",
  questionEnglish: "Create an outer div named concept-section using an id. Inside it, create two inner div sections titled HTML Basics and HTML Examples.",
  questionTamil: "concept-section என்ற id கொண்ட outer div உருவாக்கவும். அதற்குள் HTML Basics மற்றும் HTML Examples என்ற தலைப்புகளைக் கொண்ட இரண்டு inner div sections உருவாக்கவும்.",
  hintEnglish: "Place two div elements inside the outer div.",
  hintTamil: "Outer div-க்குள் இரண்டு div elements வைக்கவும்.",
  expectedOutput: "One outer concept section containing two inner sections.",
  expectedOutputTamil: "இரண்டு inner sections கொண்ட ஒரு outer concept section.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <div id="concept-section">
    <div>
      <h2>HTML Basics</h2>
      <p>Learn the basics of HTML.</p>
    </div>

    <div>
      <h2>HTML Examples</h2>
      <p>Explore practical HTML examples.</p>
    </div>
  </div>
</body>
</html>`
},

{
  id: 9,
  topicId: 14,
  title: "Build a Student Profile Card",
  questionEnglish: "Create a student profile card using div containers. Include a profile image, name, course, career goal, and a short description. Use span elements to group important details.",
  questionTamil: "Div containers பயன்படுத்தி student profile card உருவாக்கவும். Profile image, பெயர், படிப்பு, career goal மற்றும் சிறிய விளக்கம் சேர்க்கவும். முக்கிய விவரங்களை group செய்ய span elements பயன்படுத்தவும்.",
  hintEnglish: "Combine nested div and span elements with image and text elements.",
  hintTamil: "Nested div மற்றும் span elements-ஐ image மற்றும் text elements உடன் இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A student profile card containing an image and organized profile information.",
  expectedOutputTamil: "படம் மற்றும் ஒழுங்குபடுத்தப்பட்ட profile விவரங்கள் கொண்ட student profile card.",
  challenge: true
},

{
  id: 10,
  topicId: 14,
  title: "Build a Business Service Section",
  questionEnglish: "Create a business services section for ATEXRA using div containers. Include at least three service blocks: Website Development, AI Chatbot Integration, and Automation. Use span elements to highlight important words in the descriptions.",
  questionTamil: "Div containers பயன்படுத்தி ATEXRA-க்கான business services பகுதியை உருவாக்கவும். Website Development, AI Chatbot Integration மற்றும் Automation ஆகிய குறைந்தது மூன்று service blocks சேர்க்கவும். விளக்கங்களில் முக்கிய வார்த்தைகளை highlight செய்ய span elements பயன்படுத்தவும்.",
  hintEnglish: "Create an outer div and separate inner div containers for each service.",
  hintTamil: "Outer div மற்றும் ஒவ்வொரு service-க்கும் தனித்தனி inner div containers உருவாக்கவும்.",
  expectedOutput: "An ATEXRA services section with three service blocks and highlighted words.",
  expectedOutputTamil: "மூன்று service blocks மற்றும் முக்கிய வார்த்தைகள் highlight செய்யப்பட்ட ATEXRA services பகுதி.",
  challenge: true
},

// TOPIC 15: HTML Audio

{
  id: 1,
  topicId: 15,
  title: "Add Audio to a Webpage",
  questionEnglish: "Add an audio file named music.mp3 to a webpage using the HTML audio element.",
  questionTamil: "HTML audio element பயன்படுத்தி music.mp3 என்ற audio கோப்பை webpage-ல் சேர்க்கவும்.",
  hintEnglish: "Use the <audio> tag with a source element.",
  hintTamil: "Source element உடன் <audio> tag பயன்படுத்தவும்.",
  expectedOutput: "An audio player that can load music.mp3.",
  expectedOutputTamil: "music.mp3 கோப்பை ஏற்றக்கூடிய audio player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <audio controls>
    <source src="music.mp3" type="audio/mpeg">
    Your browser does not support audio.
  </audio>
</body>
</html>`
},

{
  id: 2,
  topicId: 15,
  title: "Add Audio Controls",
  questionEnglish: "Display an audio player for song.mp3 with playback controls such as play, pause, and volume.",
  questionTamil: "Play, pause மற்றும் volume போன்ற playback controls கொண்ட song.mp3 audio player உருவாக்கவும்.",
  hintEnglish: "Add the controls attribute to the audio element.",
  hintTamil: "Audio element-க்கு controls attribute சேர்க்கவும்.",
  expectedOutput: "An audio player with browser-provided playback controls.",
  expectedOutputTamil: "Browser வழங்கும் playback controls கொண்ட audio player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <audio src="song.mp3" controls>
    Your browser does not support audio.
  </audio>
</body>
</html>`
},

{
  id: 3,
  topicId: 15,
  title: "Add Multiple Audio Sources",
  questionEnglish: "Create an audio player with two source formats: audio.mp3 and audio.ogg.",
  questionTamil: "audio.mp3 மற்றும் audio.ogg ஆகிய இரண்டு source formats கொண்ட audio player உருவாக்கவும்.",
  hintEnglish: "Use multiple <source> elements inside the audio element.",
  hintTamil: "Audio element-க்குள் பல <source> elements பயன்படுத்தவும்.",
  expectedOutput: "An audio player that can use either supported audio format.",
  expectedOutputTamil: "ஆதரிக்கப்படும் audio format-ஐப் பயன்படுத்தக்கூடிய audio player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support audio.
  </audio>
</body>
</html>`
},

{
  id: 4,
  topicId: 15,
  title: "Enable Audio Loop",
  questionEnglish: "Create an audio player that continuously repeats the file background.mp3 after it finishes.",
  questionTamil: "background.mp3 முடிந்ததும் மீண்டும் மீண்டும் இயங்கும் audio player உருவாக்கவும்.",
  hintEnglish: "Use the loop attribute.",
  hintTamil: "loop attribute பயன்படுத்தவும்.",
  expectedOutput: "An audio player that repeats the audio file.",
  expectedOutputTamil: "Audio கோப்பை மீண்டும் மீண்டும் இயக்கும் audio player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <audio controls loop>
    <source src="background.mp3" type="audio/mpeg">
  </audio>
</body>
</html>`
},

{
  id: 5,
  topicId: 15,
  title: "Enable Audio Preloading",
  questionEnglish: "Create an audio player for podcast.mp3 that hints to the browser to load audio metadata before playback.",
  questionTamil: "Playback தொடங்குவதற்கு முன்பு audio metadata-ஐ ஏற்றுமாறு browser-க்கு அறிவுறுத்தும் podcast.mp3 audio player உருவாக்கவும்.",
  hintEnglish: "Use preload=\"metadata\".",
  hintTamil: "preload=\"metadata\" பயன்படுத்தவும்.",
  expectedOutput: "An audio player configured to preload metadata.",
  expectedOutputTamil: "Metadata-ஐ முன்கூட்டியே ஏற்ற அமைக்கப்பட்ட audio player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <audio controls preload="metadata">
    <source src="podcast.mp3" type="audio/mpeg">
  </audio>
</body>
</html>`
},

{
  id: 6,
  topicId: 15,
  title: "Create an Audio Description",
  questionEnglish: "Create an audio section with a heading 'Listen to Our Podcast', a paragraph describing the podcast, and an audio player for podcast.mp3.",
  questionTamil: "'Listen to Our Podcast' என்ற heading, podcast பற்றிய paragraph மற்றும் podcast.mp3 audio player கொண்ட audio section உருவாக்கவும்.",
  hintEnglish: "Combine heading, paragraph, and audio elements.",
  hintTamil: "Heading, paragraph மற்றும் audio elements-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A podcast section with a heading, description, and audio player.",
  expectedOutputTamil: "Heading, விளக்கம் மற்றும் audio player கொண்ட podcast பகுதி.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <section>
    <h2>Listen to Our Podcast</h2>
    <p>Explore the latest technology discussions.</p>

    <audio controls>
      <source src="podcast.mp3" type="audio/mpeg">
    </audio>
  </section>
</body>
</html>`
},

{
  id: 7,
  topicId: 15,
  title: "Create Multiple Audio Players",
  questionEnglish: "Create two separate audio players for welcome.mp3 and lesson.mp3. Give each player a suitable heading.",
  questionTamil: "welcome.mp3 மற்றும் lesson.mp3 ஆகியவற்றிற்கு இரண்டு தனித்தனி audio players உருவாக்கவும். ஒவ்வொரு player-க்கும் பொருத்தமான heading கொடுக்கவும்.",
  hintEnglish: "Use two separate audio elements.",
  hintTamil: "இரண்டு தனித்தனி audio elements பயன்படுத்தவும்.",
  expectedOutput: "Two audio players with their respective headings.",
  expectedOutputTamil: "அவற்றுக்குரிய headings உடன் இரண்டு audio players.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <h2>Welcome Audio</h2>
  <audio controls>
    <source src="welcome.mp3" type="audio/mpeg">
  </audio>

  <h2>Lesson Audio</h2>
  <audio controls>
    <source src="lesson.mp3" type="audio/mpeg">
  </audio>
</body>
</html>`
},

{
  id: 8,
  topicId: 15,
  title: "Add Audio with Fallback Text",
  questionEnglish: "Create an audio player for announcement.mp3 and display a fallback message if the browser does not support the audio element.",
  questionTamil: "announcement.mp3-க்கான audio player உருவாக்கவும். Browser audio element-ஐ ஆதரிக்காவிட்டால் மாற்று செய்தியைக் காட்டவும்.",
  hintEnglish: "Place fallback text inside the audio element after the source element.",
  hintTamil: "Source element-க்கு அடுத்ததாக audio element-க்குள் fallback text வைக்கவும்.",
  expectedOutput: "An audio player with a fallback message for unsupported browsers.",
  expectedOutputTamil: "ஆதரிக்காத browser-களுக்கான மாற்று செய்தி கொண்ட audio player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <audio controls>
    <source src="announcement.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
    Please use a modern browser.
  </audio>
</body>
</html>`
},

{
  id: 9,
  topicId: 15,
  title: "Build a Podcast Page",
  questionEnglish: "Create a podcast webpage with a title, description, host name, publication date, and at least three audio episodes. Each episode should have its own heading and audio player.",
  questionTamil: "Title, description, host name, publication date மற்றும் குறைந்தது மூன்று audio episodes கொண்ட podcast webpage உருவாக்கவும். ஒவ்வொரு episode-க்கும் தனித்தனி heading மற்றும் audio player இருக்க வேண்டும்.",
  hintEnglish: "Use semantic sections, headings, paragraphs, time, and audio elements.",
  hintTamil: "Semantic sections, headings, paragraphs, time மற்றும் audio elements பயன்படுத்தவும்.",
  expectedOutput: "A podcast webpage with three independently playable episodes.",
  expectedOutputTamil: "தனித்தனியாக இயக்கக்கூடிய மூன்று episodes கொண்ட podcast webpage.",
  challenge: true
},

{
  id: 10,
  topicId: 15,
  title: "Build a Learning Audio Library",
  questionEnglish: "Create an audio learning library for DEEP CODE with three categories: HTML Lessons, CSS Lessons, and JavaScript Lessons. Add at least two audio lessons under each category, with suitable headings and audio controls.",
  questionTamil: "DEEP CODE-க்காக HTML Lessons, CSS Lessons மற்றும் JavaScript Lessons என்ற மூன்று பிரிவுகளைக் கொண்ட audio learning library உருவாக்கவும். ஒவ்வொரு பிரிவிலும் குறைந்தது இரண்டு audio lessons, பொருத்தமான headings மற்றும் audio controls சேர்க்கவும்.",
  hintEnglish: "Use nested sections or articles and separate audio players for each lesson.",
  hintTamil: "Nested sections அல்லது articles மற்றும் ஒவ்வொரு lesson-க்கும் தனித்தனி audio players பயன்படுத்தவும்.",
  expectedOutput: "A DEEP CODE audio library with three categories and at least six audio lessons.",
  expectedOutputTamil: "மூன்று பிரிவுகள் மற்றும் குறைந்தது ஆறு audio lessons கொண்ட DEEP CODE audio library.",
  challenge: true
},

// TOPIC 16: HTML Video

{
  id: 1,
  topicId: 16,
  title: "Add a Video to a Webpage",
  questionEnglish: "Display a video named introduction.mp4 on a webpage using the HTML video element.",
  questionTamil: "HTML video element பயன்படுத்தி introduction.mp4 என்ற video-ஐ webpage-ல் காட்டவும்.",
  hintEnglish: "Use the <video> tag with a source element.",
  hintTamil: "Source element உடன் <video> tag பயன்படுத்தவும்.",
  expectedOutput: "A video player that can load introduction.mp4.",
  expectedOutputTamil: "introduction.mp4 கோப்பை ஏற்றக்கூடிய video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video width="500">
    <source src="introduction.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
</body>
</html>`
},

{
  id: 2,
  topicId: 16,
  title: "Add Video Controls",
  questionEnglish: "Display a video named lesson.mp4 with play, pause, volume, and playback controls.",
  questionTamil: "Play, pause, volume மற்றும் playback controls கொண்ட lesson.mp4 video-ஐக் காட்டவும்.",
  hintEnglish: "Add the controls attribute to the video element.",
  hintTamil: "Video element-க்கு controls attribute சேர்க்கவும்.",
  expectedOutput: "A video player displaying browser playback controls.",
  expectedOutputTamil: "Browser playback controls காட்டும் video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video width="500" controls>
    <source src="lesson.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
</body>
</html>`
},

{
  id: 3,
  topicId: 16,
  title: "Set Video Dimensions",
  questionEnglish: "Display a video named demo.mp4 with a width of 600 pixels and a height of 350 pixels.",
  questionTamil: "demo.mp4 என்ற video-ஐ 600 pixels அகலம் மற்றும் 350 pixels உயரத்தில் காட்டவும்.",
  hintEnglish: "Use the width and height attributes.",
  hintTamil: "width மற்றும் height attributes பயன்படுத்தவும்.",
  expectedOutput: "A video player with dimensions 600 by 350 pixels.",
  expectedOutputTamil: "600 × 350 pixels அளவுள்ள video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video width="600" height="350" controls>
    <source src="demo.mp4" type="video/mp4">
  </video>
</body>
</html>`
},

{
  id: 4,
  topicId: 16,
  title: "Enable Video Loop",
  questionEnglish: "Create a video player for background.mp4 that repeats the video continuously.",
  questionTamil: "background.mp4 video-ஐ தொடர்ந்து மீண்டும் இயக்கும் video player உருவாக்கவும்.",
  hintEnglish: "Use the loop attribute.",
  hintTamil: "loop attribute பயன்படுத்தவும்.",
  expectedOutput: "A video player that repeats the video after it finishes.",
  expectedOutputTamil: "Video முடிந்ததும் மீண்டும் இயக்கும் video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video controls loop width="500">
    <source src="background.mp4" type="video/mp4">
  </video>
</body>
</html>`
},

{
  id: 5,
  topicId: 16,
  title: "Add a Video Poster",
  questionEnglish: "Create a video player for course.mp4 that displays thumbnail.jpg before the video starts playing.",
  questionTamil: "course.mp4 video இயக்கப்படுவதற்கு முன்பு thumbnail.jpg படத்தைக் காட்டும் video player உருவாக்கவும்.",
  hintEnglish: "Use the poster attribute.",
  hintTamil: "poster attribute பயன்படுத்தவும்.",
  expectedOutput: "A video player showing thumbnail.jpg as its preview image.",
  expectedOutputTamil: "Preview படமாக thumbnail.jpg காட்டும் video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video controls width="500" poster="thumbnail.jpg">
    <source src="course.mp4" type="video/mp4">
  </video>
</body>
</html>`
},

{
  id: 6,
  topicId: 16,
  title: "Add Multiple Video Sources",
  questionEnglish: "Create a video player with two sources: video.mp4 and video.webm.",
  questionTamil: "video.mp4 மற்றும் video.webm ஆகிய இரண்டு sources கொண்ட video player உருவாக்கவும்.",
  hintEnglish: "Use multiple source elements inside the video element.",
  hintTamil: "Video element-க்குள் பல source elements பயன்படுத்தவும்.",
  expectedOutput: "A video player that can select a supported video format.",
  expectedOutputTamil: "ஆதரிக்கப்படும் video format-ஐத் தேர்வு செய்யக்கூடிய video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video controls width="500">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support video.
  </video>
</body>
</html>`
},

{
  id: 7,
  topicId: 16,
  title: "Enable Video Muted Mode",
  questionEnglish: "Create a video player for presentation.mp4 that starts with its audio muted.",
  questionTamil: "presentation.mp4 என்ற video-ஐ அதன் audio mute செய்யப்பட்ட நிலையில் தொடங்கும் video player உருவாக்கவும்.",
  hintEnglish: "Use the muted attribute.",
  hintTamil: "muted attribute பயன்படுத்தவும்.",
  expectedOutput: "A video player that starts without sound.",
  expectedOutputTamil: "ஒலி இல்லாமல் தொடங்கும் video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video controls muted width="500">
    <source src="presentation.mp4" type="video/mp4">
  </video>
</body>
</html>`
},

{
  id: 8,
  topicId: 16,
  title: "Add Video Subtitles",
  questionEnglish: "Create a video player for lesson.mp4 and add an English subtitle track using subtitles.vtt.",
  questionTamil: "lesson.mp4 video player உருவாக்கி subtitles.vtt பயன்படுத்தி English subtitle track சேர்க்கவும்.",
  hintEnglish: "Use the <track> element with kind, src, srclang, and label attributes.",
  hintTamil: "kind, src, srclang மற்றும் label attributes உடன் <track> element பயன்படுத்தவும்.",
  expectedOutput: "A video player with an English subtitle track.",
  expectedOutputTamil: "English subtitle track கொண்ட video player.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <video controls width="500">
    <source src="lesson.mp4" type="video/mp4">

    <track
      src="subtitles.vtt"
      kind="subtitles"
      srclang="en"
      label="English"
      default
    >
  </video>
</body>
</html>`
},

{
  id: 9,
  topicId: 16,
  title: "Build a Video Learning Page",
  questionEnglish: "Create a learning webpage with a heading, lesson description, a video player with a poster image, English subtitles, and a list of related lessons.",
  questionTamil: "Heading, lesson description, poster image கொண்ட video player, English subtitles மற்றும் தொடர்புடைய lessons பட்டியல் கொண்ட learning webpage உருவாக்கவும்.",
  hintEnglish: "Combine headings, paragraphs, video, track, image poster, and list elements.",
  hintTamil: "Headings, paragraphs, video, track, image poster மற்றும் list elements-ஐ இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "A video learning page with lesson details, a playable video, subtitles, and related lessons.",
  expectedOutputTamil: "Lesson விவரங்கள், இயக்கக்கூடிய video, subtitles மற்றும் தொடர்புடைய lessons கொண்ட learning page.",
  challenge: true
},

{
  id: 10,
  topicId: 16,
  title: "Build a DEEP CODE Video Library",
  questionEnglish: "Create a DEEP CODE video library with three categories: HTML Tutorials, CSS Tutorials, and JavaScript Tutorials. Add at least two videos under each category. Include headings, descriptions, poster images, and video controls.",
  questionTamil: "HTML Tutorials, CSS Tutorials மற்றும் JavaScript Tutorials என்ற மூன்று பிரிவுகளைக் கொண்ட DEEP CODE video library உருவாக்கவும். ஒவ்வொரு பிரிவிலும் குறைந்தது இரண்டு videos சேர்க்கவும். Headings, descriptions, poster images மற்றும் video controls சேர்க்கவும்.",
  hintEnglish: "Organize the page using sections and separate video elements for every lesson.",
  hintTamil: "Sections பயன்படுத்தி ஒவ்வொரு lesson-க்கும் தனித்தனி video elements அமைக்கவும்.",
  expectedOutput: "A DEEP CODE video library containing three categories and at least six video players.",
  expectedOutputTamil: "மூன்று பிரிவுகள் மற்றும் குறைந்தது ஆறு video players கொண்ட DEEP CODE video library.",
  challenge: true
},

// TOPIC 17: HTML Iframes

{
  id: 1,
  topicId: 17,
  title: "Create Your First Iframe",
  questionEnglish: "Create an iframe that displays https://www.example.com inside a webpage.",
  questionTamil: "https://www.example.com இணையதளத்தை ஒரு webpage-க்குள் காட்டும் iframe உருவாக்கவும்.",
  hintEnglish: "Use the <iframe> tag with the src attribute.",
  hintTamil: "src attribute உடன் <iframe> tag பயன்படுத்தவும்.",
  expectedOutput: "An embedded frame attempting to display the example.com website.",
  expectedOutputTamil: "example.com இணையதளத்தைக் காட்ட முயற்சிக்கும் embedded frame.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe src="https://www.example.com"></iframe>
</body>
</html>`
},

{
  id: 2,
  topicId: 17,
  title: "Set Iframe Dimensions",
  questionEnglish: "Create an iframe displaying https://www.example.com with a width of 600 pixels and a height of 400 pixels.",
  questionTamil: "https://www.example.com இணையதளத்தைக் காட்டும் 600 pixels அகலம் மற்றும் 400 pixels உயரம் கொண்ட iframe உருவாக்கவும்.",
  hintEnglish: "Use the width and height attributes.",
  hintTamil: "width மற்றும் height attributes பயன்படுத்தவும்.",
  expectedOutput: "An iframe with dimensions 600 by 400 pixels.",
  expectedOutputTamil: "600 × 400 pixels அளவுள்ள iframe.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    src="https://www.example.com"
    width="600"
    height="400"
    title="Example Website"
  ></iframe>
</body>
</html>`
},

{
  id: 3,
  topicId: 17,
  title: "Embed a YouTube Video",
  questionEnglish: "Embed a YouTube video using an iframe with the video ID dQw4w9WgXcQ.",
  questionTamil: "dQw4w9WgXcQ என்ற video ID பயன்படுத்தி iframe மூலம் YouTube video ஒன்றை embed செய்யவும்.",
  hintEnglish: "Use the YouTube embed URL format: https://www.youtube.com/embed/VIDEO_ID.",
  hintTamil: "YouTube embed URL வடிவத்தைப் பயன்படுத்தவும்: https://www.youtube.com/embed/VIDEO_ID.",
  expectedOutput: "An iframe containing the embedded YouTube video, subject to YouTube availability and embedding permissions.",
  expectedOutputTamil: "YouTube availability மற்றும் embedding அனுமதியைப் பொறுத்து embedded video காட்டும் iframe.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video"
    allowfullscreen
  ></iframe>
</body>
</html>`
},

{
  id: 4,
  topicId: 17,
  title: "Add a Frame Border",
  questionEnglish: "Create an iframe displaying https://www.example.com and add a visible border using the style attribute.",
  questionTamil: "https://www.example.com இணையதளத்தைக் காட்டும் iframe உருவாக்கி style attribute மூலம் border சேர்க்கவும்.",
  hintEnglish: "Use the style attribute with border: 2px solid black.",
  hintTamil: "border: 2px solid black என்ற style attribute பயன்படுத்தவும்.",
  expectedOutput: "An embedded frame surrounded by a black border.",
  expectedOutputTamil: "கருப்பு border கொண்ட embedded frame.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    src="https://www.example.com"
    width="500"
    height="300"
    title="Example Website"
    style="border: 2px solid black;"
  ></iframe>
</body>
</html>`
},

{
  id: 5,
  topicId: 17,
  title: "Embed a Google Map",
  questionEnglish: "Create an iframe that embeds a Google Map using a Google Maps embed URL.",
  questionTamil: "Google Maps embed URL பயன்படுத்தி Google Map-ஐக் காட்டும் iframe உருவாக்கவும்.",
  hintEnglish: "Use a valid Google Maps embed URL as the iframe source.",
  hintTamil: "Iframe source ஆகச் சரியான Google Maps embed URL பயன்படுத்தவும்.",
  expectedOutput: "An iframe displaying an embedded Google Map, if the supplied URL is valid.",
  expectedOutputTamil: "வழங்கப்பட்ட URL சரியாக இருந்தால் Google Map காட்டும் iframe.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    src="https://www.google.com/maps?q=Chennai&output=embed"
    width="600"
    height="400"
    title="Map of Chennai"
    loading="lazy"
  ></iframe>
</body>
</html>`
},

{
  id: 6,
  topicId: 17,
  title: "Add Iframe Title",
  questionEnglish: "Create an iframe that displays an external website and provide an accessible title describing its content.",
  questionTamil: "வெளிப்புற இணையதளத்தைக் காட்டும் iframe உருவாக்கி, அதன் உள்ளடக்கத்தை விளக்கும் accessible title வழங்கவும்.",
  hintEnglish: "Use the title attribute.",
  hintTamil: "title attribute பயன்படுத்தவும்.",
  expectedOutput: "An iframe with a descriptive title attribute.",
  expectedOutputTamil: "விளக்கமான title attribute கொண்ட iframe.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    src="https://www.example.com"
    width="500"
    height="300"
    title="Example Website Content"
  ></iframe>
</body>
</html>`
},

{
  id: 7,
  topicId: 17,
  title: "Load an Iframe Lazily",
  questionEnglish: "Create an iframe that displays an external webpage and uses lazy loading.",
  questionTamil: "வெளிப்புற webpage-ஐக் காட்டி lazy loading பயன்படுத்தும் iframe உருவாக்கவும்.",
  hintEnglish: "Use loading=\"lazy\".",
  hintTamil: "loading=\"lazy\" பயன்படுத்தவும்.",
  expectedOutput: "An iframe configured to load when it approaches the visible area.",
  expectedOutputTamil: "பார்க்கக்கூடிய பகுதிக்கு அருகில் வரும்போது load ஆக அமைக்கப்பட்ட iframe.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    src="https://www.example.com"
    width="500"
    height="300"
    title="Example Website"
    loading="lazy"
  ></iframe>
</body>
</html>`
},

{
  id: 8,
  topicId: 17,
  title: "Create a Sandboxed Iframe",
  questionEnglish: "Create an iframe displaying an external webpage with the sandbox attribute enabled.",
  questionTamil: "Sandbox attribute இயக்கப்பட்ட நிலையில் வெளிப்புற webpage-ஐக் காட்டும் iframe உருவாக்கவும்.",
  hintEnglish: "Add the sandbox attribute to the iframe.",
  hintTamil: "Iframe-க்கு sandbox attribute சேர்க்கவும்.",
  expectedOutput: "An iframe with sandbox restrictions applied to its embedded content.",
  expectedOutputTamil: "Embedded content-க்கு sandbox கட்டுப்பாடுகள் பயன்படுத்தப்பட்ட iframe.",
  challenge: false,
  solution: `<!DOCTYPE html>
<html>
<body>
  <iframe
    src="https://www.example.com"
    width="500"
    height="300"
    title="Sandboxed Website"
    sandbox
  ></iframe>
</body>
</html>`
},

{
  id: 9,
  topicId: 17,
  title: "Build an Online Learning Page",
  questionEnglish: "Create an online learning page that embeds a YouTube tutorial, a Google Map showing a college location, and an external documentation website. Give each iframe a suitable title and dimensions.",
  questionTamil: "YouTube tutorial, கல்லூரி இடத்தைக் காட்டும் Google Map மற்றும் வெளிப்புற documentation இணையதளம் ஆகியவற்றை embed செய்யும் online learning page உருவாக்கவும். ஒவ்வொரு iframe-க்கும் பொருத்தமான title மற்றும் dimensions வழங்கவும்.",
  hintEnglish: "Use three separate iframe elements with suitable URLs, titles, widths, and heights.",
  hintTamil: "பொருத்தமான URLs, titles, widths மற்றும் heights உடன் மூன்று தனித்தனி iframe elements பயன்படுத்தவும்.",
  expectedOutput: "An online learning page with three embedded resources.",
  expectedOutputTamil: "மூன்று embedded resources கொண்ட online learning page.",
  challenge: true
},

{
  id: 10,
  topicId: 17,
  title: "Build a Business Location Page",
  questionEnglish: "Create a business location page for ATEXRA. Include a heading, business address, Google Map iframe, and an embedded video introducing the business.",
  questionTamil: "ATEXRA-க்கான business location page உருவாக்கவும். Heading, business address, Google Map iframe மற்றும் நிறுவனத்தை அறிமுகப்படுத்தும் embedded video சேர்க்கவும்.",
  hintEnglish: "Combine headings, paragraphs, Google Maps iframe, and YouTube iframe.",
  hintTamil: "Headings, paragraphs, Google Maps iframe மற்றும் YouTube iframe இணைத்துப் பயன்படுத்தவும்.",
  expectedOutput: "An ATEXRA business page with address, map, and introduction video.",
  expectedOutputTamil: "Address, map மற்றும் introduction video கொண்ட ATEXRA business page.",
  challenge: true
}










];


export default questions;
