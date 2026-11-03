
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { db } from "../firebase";
import "../styles/DeepLearnConcept.css";

function DeepLearnConcept() {
  const { categoryId, conceptId } = useParams();
  const navigate = useNavigate();

  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isRead, setIsRead] = useState(false);
  const [progressLoading, setProgressLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Map Workplace route ID to its Firestore field/document ID.
  const progressField =
    categoryId === "workplace" ? "workspace" : categoryId;

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

  // Fetch concept and student progress.
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setProgressLoading(true);
        setError("");

        const student = JSON.parse(
          localStorage.getItem("student")
        );

        if (!student?.username) {
          throw new Error(
            "Student login information not found."
          );
        }

        // Fetch concept from deepLearn collection.
        const conceptRef = doc(
          db,
          "deepLearn",
          firebaseCategoryId,
          "concepts",
          conceptId
        );

        const conceptSnap = await getDoc(conceptRef);

        if (!conceptSnap.exists()) {
          setError("Concept not found.");
          return;
        }

        const conceptData = {
          id: conceptSnap.id,
          ...conceptSnap.data(),
        };

        setConcept(conceptData);

        // Fetch progress from existing student document.
        const studentRef = doc(
          db,
          "students",
          student.username
        );

        const studentSnap = await getDoc(studentRef);

        if (studentSnap.exists()) {
          const completedConcepts =
            studentSnap.data()[progressField] || [];

          setIsRead(
            completedConcepts.includes(
              Number(conceptData.conceptId)
            )
          );
        } else {
          throw new Error("Student record not found.");
        }

      } catch (err) {
        console.error("Error fetching concept:", err);
        setError(
          err.message || "Unable to load this concept."
        );
      } finally {
        setLoading(false);
        setProgressLoading(false);
      }
    };

    fetchData();
  }, [categoryId, conceptId, firebaseCategoryId, progressField]);

  // Mark as Read / Mark as Unread.
  const handleToggleRead = async () => {
    if (!concept || saving) return;

    try {
      setSaving(true);

      const student = JSON.parse(
        localStorage.getItem("student")
      );

      if (!student?.username) {
        throw new Error(
          "Student login information not found."
        );
      }

      // Update existing student document.
      const studentRef = doc(
        db,
        "students",
        student.username
      );

      const currentConceptId = Number(
        concept.conceptId
      );

      await setDoc(
        studentRef,
        {
          [progressField]: isRead
            ? arrayRemove(currentConceptId)
            : arrayUnion(currentConceptId),
        },
        { merge: true }
      );

      // Update UI only after Firestore succeeds.
      setIsRead(!isRead);

    } catch (err) {
      console.error(
        "Progress update failed:",
        err
      );

      alert(
        "Unable to update your progress. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  // Loading state.
  if (loading) {
    return (
      <div className="deep-concept-loading">
        <h2>Loading concept...</h2>
      </div>
    );
  }

  // Error state.
  if (error || !concept) {
    return (
      <div className="deep-concept-loading">
        <h2>{error || "Concept not found."}</h2>
      </div>
    );
  }

  return (
    <div className="deep-concept-page">

      {/* HEADER */}
      <section className="deep-concept-header">

        <button
          className="deep-concept-back-btn"
          onClick={() =>
            navigate(`/deep-speak/${categoryId}`)
          }
        >
          ← Back to {categoryName}
        </button>

        <div className="deep-concept-badge">
          Concept {concept.conceptId}
        </div>

        <h1>{concept.title}</h1>

        <p>{categoryName}</p>

      </section>

      {/* CONTENT */}
      <section className="deep-concept-content">

        {/* UNDERSTAND */}
        <div className="deep-learning-section">

          <h2>🧠 Understand</h2>

          <div className="deep-language-block">
            <div className="deep-language-label">
              English
            </div>

            <p>{concept.understand?.english}</p>
          </div>

          <div className="deep-language-block">
            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>{concept.understand?.tamil}</p>
          </div>

        </div>

        {/* SEE THE SITUATION */}
        <div className="deep-learning-section">

          <h2>🎭 See the Situation</h2>

          <div className="deep-language-block">
            <div className="deep-language-label">
              English
            </div>

            <p>{concept.seeTheSituation?.english}</p>
          </div>

          <div className="deep-language-block">
            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>{concept.seeTheSituation?.tamil}</p>
          </div>

        </div>

        {/* COMMON MISTAKE */}
        <div className="deep-learning-section mistake-section">

          <h2>⚠️ Common Mistake</h2>

          <div className="deep-language-block">
            <div className="deep-language-label">
              English
            </div>

            <p>{concept.commonMistake?.english}</p>
          </div>

          <div className="deep-language-block">
            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>{concept.commonMistake?.tamil}</p>
          </div>

        </div>

        {/* BETTER APPROACH */}
        <div className="deep-learning-section better-section">

          <h2>✅ Better Approach</h2>

          <div className="deep-language-block">
            <div className="deep-language-label">
              English
            </div>

            <p>{concept.betterApproach?.english}</p>
          </div>

          <div className="deep-language-block">
            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>{concept.betterApproach?.tamil}</p>
          </div>

        </div>

        {/* USEFUL EXPRESSIONS */}
        <div className="deep-learning-section">

          <h2>💬 Useful Expressions</h2>

          <div className="deep-expressions">

            {concept.usefulExpressions?.map(
              (expression, index) => (
                <div
                  className="deep-expression"
                  key={index}
                >

                  <p className="deep-expression-english">
                    {expression.english}
                  </p>

                  <p className="deep-expression-tamil">
                    {expression.tamil}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

        {/* TRY YOURSELF */}
        <div className="deep-learning-section try-section">

          <h2>🚀 Try Yourself</h2>

          <div className="deep-language-block">
            <div className="deep-language-label">
              English
            </div>

            <p>{concept.tryYourself?.english}</p>
          </div>

          <div className="deep-language-block">
            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>{concept.tryYourself?.tamil}</p>
          </div>

        </div>

        {/* PROGRESS ACTION */}
        <div className="deep-concept-action">

          <button
            className="deep-concept-complete-btn"
            onClick={handleToggleRead}
            disabled={progressLoading || saving}
          >
            {progressLoading
              ? "Loading progress..."
              : saving
              ? "Updating..."
              : isRead
              ? "✓ Mark as Unread"
              : "✓ Mark as Read"}
          </button>

          <button
            className="deep-concept-back-btn"
            onClick={() =>
              navigate(`/deep-speak/${categoryId}`)
            }
          >
            ← Back to Concepts
          </button>

        </div>

      </section>

    </div>
  );
}

export default DeepLearnConcept;
