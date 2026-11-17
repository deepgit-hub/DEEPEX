
import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import "../styles/Question.css";

function Question() {
  const navigate = useNavigate();
  const location = useLocation();

  const { languageId, topicId } = useParams();

  // Detect Web Development
  const isWebDevelopment =
    location.pathname.startsWith("/web-questions/");

  const [topic, setTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // =====================================
  // FETCH TOPIC AND QUESTIONS
  // =====================================

  useEffect(() => {
    async function fetchQuestions() {
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

        const topicSnapshot = await getDoc(topicRef);

        if (!topicSnapshot.exists()) {
          setTopic(null);
          setQuestions([]);
          return;
        }

        setTopic(topicSnapshot.data());

        // Fetch Questions
        const questionSnapshot = await getDocs(
          collection(
            db,
            collectionName,
            languageId,
            "concepts",
            topicId,
            "questions"
          )
        );

        const questionData = questionSnapshot.docs.map(
          (document) => ({
            id: document.id,
            ...document.data(),
          })
        );

        // Sort questions numerically
        questionData.sort(
          (a, b) => Number(a.id) - Number(b.id)
        );

        setQuestions(questionData);

      } catch (error) {
        console.error("Error fetching questions:", error);
        setTopic(null);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();

  }, [languageId, topicId, isWebDevelopment]);

  // =====================================
  // LOADING
  // =====================================

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!topic) {
    return <h2>Topic not found.</h2>;
  }

  // =====================================
  // BACK NAVIGATION
  // =====================================

  const handleBack = () => {
    if (isWebDevelopment) {
      navigate(`/web-topic/${languageId}/${topicId}`);
    } else {
      navigate(`/topic/${languageId}/${topicId}`);
    }
  };

  // =====================================
  // QUESTION NAVIGATION
  // =====================================

  const handleQuestionClick = (questionId) => {
    if (isWebDevelopment) {
      navigate(
        `/web-question/${languageId}/${topicId}/${questionId}`
      );
    } else {
      navigate(
        `/question/${languageId}/${topicId}/${questionId}`
      );
    }
  };

  // =====================================
  // PAGE
  // =====================================

  return (
    <div className="question-page">

      <button
        className="back-btn"
        onClick={handleBack}
      >
        ⬅ Back
      </button>

      <div className="question-header">

        <h1>{topic.title}</h1>

        <p>
          Practice all 10 questions and strengthen your
          {isWebDevelopment
            ? " web development"
            : " programming"} skills.
        </p>

      </div>

      <div className="best-card">

        <h2>🚀 Ready to Practice?</h2>

        <p>Complete Questions 1–8 first.</p>

        <p>
          🏆 Questions 9 & 10 are Challenge Questions.
        </p>

      </div>

      {/* QUESTION GRID */}

      <div className="question-grid">

        {questions.map((question) => (

          <div
            key={question.id}
            className={`question-card ${
              question.challenge ? "challenge" : ""
            }`}
            onClick={() => handleQuestionClick(question.id)}
          >

            <div className="icon">
              {question.challenge ? "🏆" : "📄"}
            </div>

            <h3>{question.title}</h3>

            <p>
              {question.challenge
                ? "Challenge Question"
                : "Practice Question"}
            </p>

          </div>

        ))}

      </div>

      {questions.length === 0 && (
        <p>No questions available for this topic yet.</p>
      )}

    </div>
  );
}

export default Question;
