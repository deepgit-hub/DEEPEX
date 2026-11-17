
import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import "../styles/QuestionDetails.css";

function QuestionDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const { languageId, topicId, questionId } = useParams();

  const isWebDevelopment =
    location.pathname.startsWith("/web-question/");

  const [showSolution, setShowSolution] = useState(false);

  const [topic, setTopic] = useState(null);
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================================
  // COMPILER LINKS
  // =====================================

  const compilerLinks = {
    cpp: "https://onecompiler.com/cpp",
    java: "https://onecompiler.com/java",
    python: "https://onecompiler.com/python",

    html: "https://onecompiler.com/html",
    css: "https://onecompiler.com/html",
    javascript: "https://onecompiler.com/javascript",
  };

  // =====================================
  // FETCH TOPIC AND QUESTION
  // =====================================

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const collectionName = isWebDevelopment
          ? "webDevelopment"
          : "languages";

        // Fetch Topic
        const topicRef = doc(
          db,
          collectionName,
          languageId,
          "concepts",
          topicId
        );

        const topicSnap = await getDoc(topicRef);

        if (!topicSnap.exists()) {
          setTopic(null);
          setQuestion(null);
          return;
        }

        setTopic(topicSnap.data());

        // Fetch Question
        const questionRef = doc(
          db,
          collectionName,
          languageId,
          "concepts",
          topicId,
          "questions",
          questionId
        );

        const questionSnap = await getDoc(questionRef);

        if (!questionSnap.exists()) {
          setQuestion(null);
          return;
        }

        setQuestion(questionSnap.data());

      } catch (error) {
        console.error("Error fetching question:", error);
        setTopic(null);
        setQuestion(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [languageId, topicId, questionId, isWebDevelopment]);

  // =====================================
  // LOADING
  // =====================================

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!topic || !question) {
    return <h2>Question not found.</h2>;
  }

  // =====================================
  // BACK NAVIGATION
  // =====================================

  const handleBack = () => {
    if (isWebDevelopment) {
      navigate(`/web-questions/${languageId}/${topicId}`);
    } else {
      navigate(`/questions/${languageId}/${topicId}`);
    }
  };

  // =====================================
  // OPEN COMPILER
  // =====================================

  const handleRunCode = () => {
    const compilerUrl = compilerLinks[languageId];

    if (!compilerUrl) {
      alert("Compiler is not available for this technology.");
      return;
    }

    window.open(compilerUrl, "_blank", "noopener,noreferrer");
  };

  // =====================================
  // PAGE
  // =====================================

  return (
    <div className="question-details-page">

      <button
        className="back-btn"
        onClick={handleBack}
      >
        ⬅ Back
      </button>

      <div className="details-header">

        <h1>{topic.title}</h1>

        <p>{question.title}</p>

      </div>

      {/* QUESTION ENGLISH */}

      <div className="info-card">

        <h2>📝 Question (English)</h2>

        <p>{question.questionEnglish}</p>

      </div>

      {/* QUESTION TAMIL */}

      <div className="info-card">

        <h2>🌐 Question (Tamil)</h2>

        <p>{question.questionTamil}</p>

      </div>

      {/* HINT ENGLISH */}

      <div className="info-card">

        <h2>💡 Hint (English)</h2>

        <p>{question.hintEnglish}</p>

      </div>

      {/* HINT TAMIL */}

      <div className="info-card">

        <h2>💡 Hint (Tamil)</h2>

        <p>{question.hintTamil}</p>

      </div>

      {/* EXPECTED OUTPUT */}

      <div className="code-card output-card">

        <h2>🎯 Expected Output</h2>

        <pre>{question.expectedOutput}</pre>

      </div>

      {/* BUTTONS */}

      <div className="button-group">

        <button
          className="run-btn"
          onClick={handleRunCode}
        >
          💻 {isWebDevelopment ? "Open Web Playground" : "Run Code"}
        </button>

        {!question.challenge && (
          <button
            className="solution-btn"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution
              ? "Hide Solution"
              : "📖 View Solution"}
          </button>
        )}

      </div>

      {/* SOLUTION */}

      {showSolution && !question.challenge && (

        <div className="code-card solution-card">

          <h2>📖 Solution</h2>

          <pre>
            <code>{question.solution}</code>
          </pre>

        </div>

      )}

    </div>
  );
}

export default QuestionDetails;
