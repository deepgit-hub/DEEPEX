
import { useNavigate } from "react-router-dom";
import "../styles/LearningChoice.css";

function LearningChoice() {
  const navigate = useNavigate();

  return (
    <div className="learning-choice-page">

      <div className="learning-choice-container">

        <div className="learning-choice-badge">
          💻 DEEP CODE
        </div>

        <h1>Choose Your Learning Path</h1>

        <p>
          Select what you want to learn and start
          building your technical skills.
        </p>

        <div className="learning-choice-options">

          {/* PROGRAMMING LANGUAGES */}

          <div className="learning-choice-card">

            <div className="learning-choice-icon">
              👨‍💻
            </div>

            <h2>Programming Languages</h2>

            <p>
              Learn programming concepts step by step
              and improve your problem-solving skills.
            </p>

            <div className="learning-choice-tags">
              <span>Java</span>
              <span>Python</span>
              <span>C++</span>
            </div>

            <button
              onClick={() => navigate("/choose-language")}
            >
              Explore Programming →
            </button>

          </div>

          {/* WEB DEVELOPMENT */}

          <div className="learning-choice-card">

            <div className="learning-choice-icon">
              🌐
            </div>

            <h2>Web Development</h2>

            <p>
              Learn how websites are structured, styled,
              and made interactive.
            </p>

            <div className="learning-choice-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <button
              onClick={() => navigate("/web-development")}
            >
              Explore Web Development →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LearningChoice;
