
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
  

];

export default questions;
