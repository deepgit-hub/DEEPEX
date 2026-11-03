
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Workplace uses "workspace" in Firestore.
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        // Get logged-in student.
        const student = JSON.parse(
          localStorage.getItem("student")
        );

        if (!student?.username) {
          throw new Error("Student login information not found.");
        }

        // Fetch category concepts.
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

        // Fetch student's progress.
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

  // Calculate progress.
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

    <p>
      🚀 Keep going! You've completed {completedCount} of {totalConcepts} concepts.
    </p>

  </div>

</div>

<p>
  Explore the concepts below and improve your skills step by step.
</p>

        {/* PROGRESS BAR */}
        <div className="deep-progress-container">

          <div className="deep-progress-info">
            <div>
              <h3></h3>
              <p>
                
              </p>
            </div>

            <span className="deep-progress-percentage">
             
            </span>
          </div>

          <div
            className="deep-progress-track"
            role="progressbar"
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`${categoryName} progress`}
          >
            <div
              className="deep-progress-fill"
              style={{
                width: `${progressPercentage}%`,
              }}
            />
          </div>

          <p className="deep-progress-message">
            {progressPercentage === 100
              ? "🎉 Excellent! You've completed all concepts!"
              : progressPercentage === 0
              ? "Start learning and track your progress here!"
              : "Keep going! You're making progress."}
          </p>

        </div>

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

    </div>
  );
}

export default DeepLearnCategory;
