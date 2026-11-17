
import TopicCard from "../components/TopicCard";
import MentorSupport from "../components/MentorSupportButton";
import ThingsToRemember from "../components/ThingsToRemember";

import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import {
  Languages,
  Globe2,
  CodeXml,
} from "lucide-react";

import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const { languageId } = useParams();

  // Detect Web Development route
  const isWebDevelopment =
    location.pathname.startsWith("/web-home/");

  const [topics, setTopics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [student, setStudent] = useState(null);
  const [showRemember, setShowRemember] = useState(false);

  // Leaderboard states
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboards, setLeaderboards] = useState({});
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);

  const leaderboardLanguages = [
    { id: "java", name: "☕ Java" },
    { id: "python", name: "🐍 Python" },
    { id: "cpp", name: "⚡ C++" },
  ];

  // =====================================
  // FETCH TOPICS
  // =====================================

  useEffect(() => {
    async function fetchTopics() {
      try {
        const snapshot = await getDocs(
          collection(
            db,
            isWebDevelopment ? "webDevelopment" : "languages",
            languageId,
            "concepts"
          )
        );

        const data = snapshot.docs
          .map((document) => ({
            id: Number(document.id),
            ...document.data(),
          }))
          .sort((a, b) => a.id - b.id);

        setTopics(data);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    }

    async function fetchStudent() {
      // Web Development does not use student progress
      if (isWebDevelopment) {
        setStudent(null);
        return;
      }

      try {
        const currentStudent = JSON.parse(
          localStorage.getItem("student")
        );

        if (!currentStudent?.username) return;

        const studentRef = doc(
          db,
          "students",
          currentStudent.username
        );

        const studentSnap = await getDoc(studentRef);

        if (studentSnap.exists()) {
          const data = studentSnap.data();

          setStudent(data);

          localStorage.setItem(
            "student",
            JSON.stringify(data)
          );
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    }

    setTopics([]);

    fetchTopics();
    fetchStudent();

  }, [languageId, isWebDevelopment]);

  // =====================================
  // SEARCH
  // =====================================

  const filteredTopics = topics.filter((topic) =>
    topic.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  // =====================================
  // PROGRAMMING LANGUAGE PROGRESS
  // =====================================

  const completedTopicsByLanguage =
    student?.completedTopicsByLanguage || {};

  const currentLanguageTopics =
    completedTopicsByLanguage[languageId] || [];

  const completedCount = currentLanguageTopics.length;

  const progress =
    topics.length > 0
      ? Math.round((completedCount / topics.length) * 100)
      : 0;

  // =====================================
  // LEADERBOARD
  // =====================================

  const fetchLeaderboards = async () => {
    try {
      setLeaderboardLoading(true);

      const studentsSnapshot = await getDocs(
        collection(db, "students")
      );

      const allStudents = studentsSnapshot.docs.map(
        (document) => ({
          username: document.id,
          ...document.data(),
        })
      );

      const results = {};

      leaderboardLanguages.forEach((language) => {
        results[language.id] = allStudents
          .map((student) => {
            const completed =
              student.completedTopicsByLanguage?.[language.id] || [];

            return {
              username: student.username,
              name: student.name || student.username,
              completedCount: completed.length,
            };
          })
          .filter((student) => student.completedCount > 0)
          .sort(
            (a, b) =>
              b.completedCount - a.completedCount ||
              a.name.localeCompare(b.name)
          )
          .slice(0, 3);
      });

      setLeaderboards(results);

    } catch (error) {
      console.error("Error fetching leaderboards:", error);
    } finally {
      setLeaderboardLoading(false);
    }
  };

  const handleLeaderboardOpen = async () => {
    setShowLeaderboard(true);
    await fetchLeaderboards();
  };

  // =====================================
  // TOPIC NAVIGATION
  // =====================================

  const handleTopicClick = (topicId) => {
    if (isWebDevelopment) {
      navigate(`/web-topic/${languageId}/${topicId}`);
    } else {
      navigate(`/topic/${languageId}/${topicId}`);
    }
  };

  return (
    <div className="home-page">

      <div className="container">

        {/* BACK BUTTON */}

        <button
          className="home-back-btn"
          onClick={() =>
            navigate(
              isWebDevelopment
                ? "/web-development"
                : "/deep"
            )
          }
        >
          ← Back to {isWebDevelopment ? "Web Development" : "DEEPEX"}
        </button>

        {/* HERO */}

        <section className="hero">

          <span className="hero-badge">
            🚀 A Learning Platform by your Supreme Senior DEEPAK
          </span>

          <h1 className="hero-title">
            Master {languageId?.toUpperCase()} Through Real Learning,
            <br />
            Not Just Theory.
          </h1>

          <p className="hero-description">
            Welcome to a bilingual learning platform where every concept is
            taught in both <strong>English</strong> and <strong>Tamil</strong>.
            Learn with simple explanations, real-world applications,
            practical examples, and challenge questions.
          </p>

          <p className="hero-description">
            Understand not only <strong>how</strong> things work,
            but also <strong>where</strong>, <strong>why</strong>, and
            <strong>when</strong> they are used in real-world development.
          </p>

          <div className="hero-features">

            <div className="feature-card">
              <div className="feature-header">
                <Languages className="feature-icon" />
                <h3>Bilingual Learning</h3>
              </div>
              <p>
                Every concept is explained in both English and Tamil.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <Globe2 className="feature-icon" />
                <h3>Real-World Applications</h3>
              </div>
              <p>
                Learn where every concept is used in real projects.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-header">
                <CodeXml className="feature-icon" />
                <h3>Practice as You Learn</h3>
              </div>
              <p>
                Strengthen your understanding through practical questions.
              </p>
            </div>

          </div>

        </section>

        {/* TOPICS */}

        <section className="topics-section">

          <div className="section-header">

            <h2>
              📚 {languageId?.toUpperCase()} Learning Hub
            </h2>

            <p>
              {isWebDevelopment
                ? "Explore every topic and strengthen your web development skills."
                : "Explore every topic and track your learning progress."}
            </p>

          </div>

          {/* LEARNING HUB ACTIONS */}

          {!isWebDevelopment && (
            <div className="remember-button-container">

              <button
                className="remember-btn"
                onClick={() => setShowRemember(true)}
              >
                📌 Things to Remember
              </button>

              <button
                className="remember-btn"
                onClick={() => navigate("/choose-language")}
              >
                🌐 Switch Language
              </button>

            </div>
          )}

          {/* SEARCH */}

          <div className="topic-search">

            <span className="search-icon">🔍</span>

            <input
              type="text"
              placeholder={`Search ${languageId?.toUpperCase()} topics...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

          </div>

          {/* PROGRAMMING PROGRESS */}

          {!isWebDevelopment && (
            <div className="progress-card">

              <div className="progress-top">
                <h3>📈 Overall Progress</h3>
                <span className="progress-percent">
                  {progress}%
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="progress-bottom">

                <p>
                  <strong>{completedCount}</strong>
                  {" / "}
                  <strong>{topics.length}</strong>
                  {" Topics Completed"}
                </p>

                <div className="progress-actions">

                  <p className="progress-message">
                    {student && topics.length > 0
                      ? `🚀 Keep going! You've completed ${completedCount} of ${topics.length} topics.`
                      : "Loading your progress..."}
                  </p>

                  <button
                    className="deep-leaderboard-btn"
                    onClick={handleLeaderboardOpen}
                  >
                    🏆 LEADERBOARD
                  </button>

                </div>

              </div>

            </div>
          )}

          {/* TOPIC GRID */}

          <div className="topics-grid">

            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                title={topic.title}
                completed={
                  !isWebDevelopment &&
                  currentLanguageTopics.includes(topic.id)
                }
                onClick={() => handleTopicClick(topic.id)}
              />
            ))}

            {filteredTopics.length === 0 && (
              <p>
                {topics.length === 0
                  ? "No topics available yet."
                  : "No matching topics found."}
              </p>
            )}

          </div>

        </section>

        {/* THINGS TO REMEMBER */}

        {!isWebDevelopment && (
          <ThingsToRemember
            isOpen={showRemember}
            onClose={() => setShowRemember(false)}
            language={languageId}
          />
        )}

        <MentorSupport />

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-left">

            <h2>🌾 DEEP CODE</h2>

            <p>
              Empowering Tamil students to rise, innovate,
              and lead the future of technology.
            </p>

            <p className="footer-quote">
              "From Tamil classrooms to global companies —
              your journey starts with a single line of code."
            </p>

            <p className="footer-quote">
              Every expert programmer was once a beginner.
              Start today, stay consistent, and let your code
              speak for itself.
            </p>

          </div>

          <div className="footer-center">

            <h3>👨‍💻 About the Developer</h3>

            <p>
              Hi! I'm <strong>Deepak</strong>, a Computer Science
              student passionate about helping Tamil students
              learn technology through simple explanations,
              practical exercises, and real-world examples.
            </p>

          </div>

          <div className="footer-right">

            <div className="footer-buttons">

              <button
                className="portfolio-btn1"
                onClick={() =>
                  window.open(
                    "https://deepgit-hub.github.io/Digital-Portfolio/",
                    "_blank"
                  )
                }
              >
                👨‍💻 More about DEEPAK
              </button>

              <button
                className="portfolio-btn2"
                onClick={() =>
                  window.open(
                    "https://thequeenslab.vercel.app/",
                    "_blank"
                  )
                }
              >
                🌏︎ To Build Websites
              </button>

            </div>

          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 DEEP CODE • Designed & Developed by DEEPAK L
        </p>

      </footer>

      {/* PROGRAMMING LEADERBOARD */}

      {!isWebDevelopment && showLeaderboard && (

        <div
          className="deep-leaderboard-overlay"
          onClick={() => setShowLeaderboard(false)}
        >

          <div
            className="deep-leaderboard-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="deep-leaderboard-modal-header">

              <div>
                <h2>🏆 DEEP CODE LEADERBOARD</h2>
                <p>Top 3 students in each programming language</p>
              </div>

              <button
                className="deep-leaderboard-close"
                onClick={() => setShowLeaderboard(false)}
                aria-label="Close leaderboard"
              >
                ×
              </button>

            </div>

            <div className="deep-leaderboard-categories">

              {leaderboardLanguages.map((language) => {

                const rankings = leaderboards[language.id] || [];

                return (

                  <div
                    className="deep-leaderboard-category"
                    key={language.id}
                  >

                    <h3>{language.name}</h3>

                    <div className="deep-leaderboard-table-wrapper">

                      <table className="deep-leaderboard-table">

                        <thead>
                          <tr>
                            <th>Rank</th>
                            <th>Student Name</th>
                            <th>Completed Concepts</th>
                          </tr>
                        </thead>

                        <tbody>

                          {leaderboardLoading ? (

                            <tr>
                              <td colSpan="3">Loading rankings...</td>
                            </tr>

                          ) : rankings.length === 0 ? (

                            <tr>
                              <td colSpan="3">
                                Students are learning in this language 🌱
                              </td>
                            </tr>

                          ) : (

                            rankings.map((student, index) => (

                              <tr key={student.username}>
                                <td>
                                  {["🥇", "🥈", "🥉"][index]}
                                </td>
                                <td>{student.name}</td>
                                <td>{student.completedCount}</td>
                              </tr>

                            ))

                          )}

                        </tbody>

                      </table>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="deep-leaderboard-modal-footer">
              <p>DEEPEX · Learn. Practice. Grow.</p>
            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Home;
