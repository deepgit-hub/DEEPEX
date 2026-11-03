
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase";
import "../styles/DeepLearnCategory.css";

function DeepLearnCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [concepts, setConcepts] = useState([]);
  const [completedConcepts, setCompletedConcepts] = useState([]);
  const [leaderboards, setLeaderboards] = useState({});
  const [loading, setLoading] = useState(true);
  const [leaderboardLoading, setLeaderboardLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const firebaseCategoryId =
    categoryId === "workplace" ? "workspace" : categoryId;

  const categoryNames = {
    communication: "Communication Skills",
    interview: "Interview Skills",
    workplace: "Workplace Skills",
    professional: "Professional Skills",
    personal: "Personal Skills",
  };

  const categoryName =
    categoryNames[categoryId] || "DEEP LEARN";

  const leaderboardCategories = [
    { id: "communication", name: "💬 Communication Skills" },
    { id: "interview", name: "🎤 Interview Skills" },
    { id: "workspace", name: "🏢 Workplace Skills" },
    { id: "professional", name: "💼 Professional Skills" },
    { id: "personal", name: "🌱 Personal Skills" },
  ];

  // Fetch concepts and current student progress
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const student = JSON.parse(
          localStorage.getItem("student")
        );

        if (!student?.username) {
          throw new Error("Student login information not found.");
        }

        const conceptsRef = collection(
          db,
          "deepLearn",
          firebaseCategoryId,
          "concepts"
        );

        const conceptsSnapshot = await getDocs(conceptsRef);

        const conceptsData = conceptsSnapshot.docs
          .map((document) => ({
            id: document.id,
            ...document.data(),
          }))
          .sort((a, b) => a.conceptId - b.conceptId);

        setConcepts(conceptsData);

        const studentRef = doc(
          db,
          "students",
          student.username
        );

        const studentSnapshot = await getDoc(studentRef);

        if (!studentSnapshot.exists()) {
          throw new Error("Student record not found.");
        }

        const progressField =
          categoryId === "workplace"
            ? "workspace"
            : categoryId;

        const completed =
          studentSnapshot.data()[progressField] || [];

        setCompletedConcepts(completed);
      } catch (err) {
        console.error("Error fetching category data:", err);
        setError(err.message || "Unable to load concepts.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, firebaseCategoryId]);

  // Fetch and calculate all five leaderboards
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

      leaderboardCategories.forEach((category) => {
        results[category.id] = allStudents
          .map((student) => {
            const completed =
              student[category.id] || [];

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
    } catch (err) {
      console.error("Error fetching leaderboards:", err);
    } finally {
      setLeaderboardLoading(false);
    }
  };

  const handleLeaderboardOpen = async () => {
    setShowLeaderboard(true);
    await fetchLeaderboards();
  };

  // Calculate progress
  const totalConcepts = concepts.length;

  const completedCount = concepts.filter((concept) =>
    completedConcepts.includes(Number(concept.conceptId))
  ).length;

  const progressPercentage =
    totalConcepts > 0
      ? Math.round((completedCount / totalConcepts) * 100)
      : 0;

  if (loading) {
    return (
      <div className="deep-category-loading">
        <h2>Loading concepts...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="deep-category-loading">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="deep-category-page">

      {/* HEADER */}
      <section className="deep-category-header">

        <button
          className="deep-category-back-btn"
          onClick={() => navigate("/deep-speak")}
        >
          ← Back to DEEP LEARN
        </button>

        <div className="deep-category-badge">
          🎓 DEEPEX
        </div>

        <h1>{categoryName}</h1>

        {/* OVERALL PROGRESS */}
        <div className="deep-category-progress">

          <div className="deep-category-progress-header">
            <h2>📈 Overall Progress</h2>
            <span>{progressPercentage}%</span>
          </div>

          <div className="deep-category-progress-track">
            <div
              className="deep-category-progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="deep-category-progress-footer">

            <p>
              {completedCount} / {totalConcepts} Concepts Completed
            </p>

            <div className="deep-progress-actions">

              <p>
                🚀 Keep going! You've completed {completedCount} of{" "}
                {totalConcepts} concepts.
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

        <p>
          Explore the concepts below and improve your skills step by step.
        </p>

      </section>

      {/* CONCEPTS */}
      <section className="deep-concepts-section">

        <div className="deep-concepts-section-header">
          <h2>Learning Concepts</h2>

          <p>
            Choose a concept to understand it with English and Tamil
            explanations, situations, mistakes, and better approaches.
          </p>
        </div>

        <div className="deep-concepts-list">

          {concepts.map((concept) => {
            const isCompleted = completedConcepts.includes(
              Number(concept.conceptId)
            );

            return (
              <button
                key={concept.id}
                className={`deep-concept-card ${
                  isCompleted ? "completed-concept" : ""
                }`}
                onClick={() =>
                  navigate(
                    `/deep-speak/${categoryId}/${concept.id}`
                  )
                }
              >
                <div className="deep-concept-number">
                  Concept {concept.conceptId}
                </div>

                {isCompleted && (
                  <span className="deep-concept-completed-label">
                    ✓ Completed
                  </span>
                )}

                <h3>{concept.title}</h3>

                <p className="deep-concept-preview">
                  {concept.understand?.english}
                </p>

                <span className="deep-concept-arrow">
                  Learn →
                </span>

              </button>
            );
          })}

        </div>
      </section>

      {/* DEEP SPEAK LEADERBOARD POPUP */}
      {showLeaderboard && (
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
                <h2>🏆 DEEP SPEAK LEADERBOARD</h2>
                <p>Top 3 students in each category</p>
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

              {leaderboardCategories.map((category) => {
                const rankings = leaderboards[category.id] || [];

                return (
                  <div
                    className="deep-leaderboard-category"
                    key={category.id}
                  >

                    <h3>{category.name}</h3>

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
                              <td colSpan="3">
                                Loading rankings...
                              </td>
                            </tr>
                          ) : rankings.length === 0 ? (
                            <tr>
                              <td colSpan="3">
                                Students are learning in this category 🌱
                              </td>
                            </tr>
                          ) : (
                            rankings.map((student, index) => (
                              <tr key={student.username}>
                                <td>
                                  {["🥇", "🥈", "🥉"][index]}
                                </td>
                                <b><td>{student.name}</td></b>
                                <b><td>{student.completedCount}</td></b>
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

export default DeepLearnCategory;
