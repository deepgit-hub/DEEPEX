
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import MentorSupport from "../components/MentorSupportButton";
import SetupGuide from "../components/SetupGuide";

import "../styles/Topic.css";

function Topic() {
  const navigate = useNavigate();
  const location = useLocation();

  const { languageId, topicId } = useParams();

  // Detect Web Development
  const isWebDevelopment =
    location.pathname.startsWith("/web-topic/");

  const [topic, setTopic] = useState(null);

  const [showSetupGuide, setShowSetupGuide] =
    useState(false);

  const [loading, setLoading] = useState(true);

  const student = JSON.parse(
    localStorage.getItem("student")
  );

  // =====================================
  // FETCH TOPIC
  // =====================================

  useEffect(() => {
    async function fetchTopic() {
      try {
        setLoading(true);

        const collectionName = isWebDevelopment
          ? "webDevelopment"
          : "languages";

        const topicRef = doc(
          db,
          collectionName,
          languageId,
          "concepts",
          topicId
        );

        const topicSnap = await getDoc(topicRef);

        if (topicSnap.exists()) {
          setTopic(topicSnap.data());
        } else {
          setTopic(null);
        }

      } catch (error) {
        console.error("Error fetching topic:", error);
        setTopic(null);
      } finally {
        setLoading(false);
      }
    }

    fetchTopic();

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
  // PROGRAMMING PROGRESS
  // =====================================

  const completedTopicsByLanguage =
    student?.completedTopicsByLanguage || {};

  const currentLanguageTopics =
    completedTopicsByLanguage[languageId] || [];

  const isCompleted = currentLanguageTopics.includes(
    Number(topicId)
  );

  // =====================================
  // MARK AS LEARNED
  // =====================================

  const handleMarkAsLearned = async () => {
    try {
      if (!student) {
        alert("❌ Student information not found.");
        navigate("/");
        return;
      }

      const completedTopicsByLanguage = {
        ...(student.completedTopicsByLanguage || {}),
      };

      const currentLanguageTopics =
        completedTopicsByLanguage[languageId] || [];

      let updatedTopics;

      if (currentLanguageTopics.includes(Number(topicId))) {
        // Mark as Unread
        updatedTopics = currentLanguageTopics.filter(
          (id) => id !== Number(topicId)
        );
      } else {
        // Mark as Learned
        updatedTopics = [
          ...currentLanguageTopics,
          Number(topicId),
        ];
      }

      completedTopicsByLanguage[languageId] = updatedTopics;

      await updateDoc(
        doc(db, "students", student.username),
        {
          [`completedTopicsByLanguage.${languageId}`]:
            updatedTopics,
        }
      );

      const updatedStudent = {
        ...student,
        completedTopicsByLanguage,
      };

      localStorage.setItem(
        "student",
        JSON.stringify(updatedStudent)
      );

      alert(
        isCompleted
          ? "↩️ Topic marked as Unread."
          : "🎉 Topic marked as Learned!"
      );

      window.location.reload();

    } catch (error) {
      console.error(error);
      alert("❌ Failed to update progress.");
    }
  };

  // =====================================
  // NAVIGATION
  // =====================================

  const handleBack = () => {
    if (isWebDevelopment) {
      navigate(`/web-home/${languageId}`);
    } else {
      navigate(`/home/${languageId}`);
    }
  };

  const handleStartLearning = () => {
    if (isWebDevelopment) {
      navigate(`/web-questions/${languageId}/${topicId}`);
    } else {
      navigate(`/questions/${languageId}/${topicId}`);
    }
  };

  // =====================================
  // PAGE
  // =====================================

  return (
    <div className="topic-page">

      <div className="container">

        {/* HEADER */}

        <div className="topic-header">

          <button
            className="back-btn"
            onClick={handleBack}
          >
            ← Back
          </button>

          <h1 className="topic-title">
            {topic.title}
          </h1>

        </div>

        {/* ENGLISH DEFINITION */}

        <div className="topic-section">

          <h2>📖 English Definition</h2>

          <p>{topic.englishDefinition}</p>

        </div>

        {/* TAMIL DEFINITION */}

        <div className="topic-section">

          <h2>📖 Tamil Definition</h2>

          <p>{topic.tamilDefinition}</p>

        </div>

        {/* REAL WORLD USAGE */}

        <div className="topic-section">

          <h2>🌍 Real World Usage</h2>

          <p>{topic.realWorldUsage}</p>

        </div>

        {/* TAMIL REAL WORLD USAGE */}

        <div className="topic-section">

          <h2>🌍 நிஜ வாழ்க்கையில் பயன்பாடு</h2>

          <p>{topic.realWorldUsageTamil}</p>

        </div>

        {/* SYNTAX */}

        <div className="topic-section">

          <h2>💻 Syntax</h2>

          <pre className="code-box">
            <code>{topic.syntax}</code>
          </pre>

        </div>

        {/* SYNTAX EXPLANATION ENGLISH */}

        <div className="topic-section">

          <h2>📘 Syntax Explanation (English)</h2>

          <ul className="topic-list">

            {(topic.syntaxExplanationEnglish || []).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}

          </ul>

        </div>

        {/* SYNTAX EXPLANATION TAMIL */}

        <div className="topic-section">

          <h2>📗 Syntax Explanation (Tamil)</h2>

          <ul className="topic-list">

            {(topic.syntaxExplanationTamil || []).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}

          </ul>

        </div>

        {/* EXAMPLE PROGRAM */}

        <div className="topic-section">

          <h2>🖥 Example Program</h2>

          <pre className="code-box">
            <code>{topic.exampleProgram}</code>
          </pre>

        </div>

        {/* PROGRAM EXPLANATION ENGLISH */}

        <div className="topic-section">

          <h2>📘 Program Explanation (English)</h2>

          <ul className="topic-list">

            {(topic.programExplanationEnglish || []).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}

          </ul>

        </div>

        {/* PROGRAM EXPLANATION TAMIL */}

        <div className="topic-section">

          <h2>📗 Program Explanation (Tamil)</h2>

          <ul className="topic-list">

            {(topic.programExplanationTamil || []).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}

          </ul>

        </div>

        {/* OUTPUT */}

        <div className="topic-section">

          <h2>🖥 Output</h2>

          <pre className="code-box">
            <code>{topic.output}</code>
          </pre>

        </div>

        {/* BUTTONS */}

        <div className="topic-buttons">

          {/* PROGRAMMING SETUP GUIDE */}

          {!isWebDevelopment && (
            <button
              className="setup-btn"
              onClick={() => setShowSetupGuide(true)}
            >
              🚀 Get Your PC Ready
            </button>
          )}

          {/* START LEARNING */}

          <button
            className="topic-start-btn"
            onClick={handleStartLearning}
          >
            🚀 {isWebDevelopment ? "Start Practicing" : "Start Coding"}
          </button>

          {/* PROGRAMMING PROGRESS */}

          {!isWebDevelopment && (
            <button
              className="topic-complete-btn"
              onClick={handleMarkAsLearned}
            >
              {isCompleted
                ? "↩️ Mark as Unread"
                : "✅ Mark as Learned"}
            </button>
          )}

        </div>

        {/* SETUP GUIDE */}

        {!isWebDevelopment && (
          <SetupGuide
            isOpen={showSetupGuide}
            onClose={() => setShowSetupGuide(false)}
            language={languageId}
          />
        )}

      </div>

      {/* MENTOR SUPPORT */}

      <MentorSupport />

    </div>
  );
}

export default Topic;
