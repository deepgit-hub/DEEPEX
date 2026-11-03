import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/DeepLearnCategory.css";

function DeepLearnCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const firebaseCategoryId =
    categoryId === "workplace" ? "workspace" : categoryId;
  useEffect(() => {
    const fetchConcepts = async () => {
      try {
        setLoading(true);

        const conceptsRef = collection(
          db,
          "deepLearn",
          firebaseCategoryId,
          "concepts",
        );

        const snapshot = await getDocs(conceptsRef);

        const data = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.conceptId - b.conceptId);

        setConcepts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load concepts.");
      } finally {
        setLoading(false);
      }
    };

    fetchConcepts();
  }, [firebaseCategoryId]);

  const categoryNames = {
    communication: "Communication Skills",
    interview: "Interview Skills",
    workplace: "Workplace Skills",
    professional: "Professional Skills",
    personal: "Personal Skills",
  };

  const categoryName = categoryNames[categoryId] || "DEEP LEARN";

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
      {/* ================= HEADER ================= */}

      <section className="deep-category-header">
        <button
          className="deep-category-back-btn"
          onClick={() => navigate("/deep-speak")}
        >
          ← Back to DEEP LEARN
        </button>

        <div className="deep-category-badge">🎓 DEEPEX</div>

        <h1>{categoryName}</h1>

        <p>Explore the concepts below and improve your skills step by step.</p>
      </section>

      {/* ================= CONCEPTS ================= */}

      <section className="deep-concepts-section">
        <div className="deep-concepts-section-header">
          <h2>Learning Concepts</h2>

          <p>
            Choose a concept to understand it with English and Tamil
            explanations, situations, mistakes, and better approaches.
          </p>
        </div>

        <div className="deep-concepts-list">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              className="deep-concept-card"
              onClick={() =>
                navigate(`/deep-speak/${categoryId}/${concept.id}`)
              }
            >
              <div className="deep-concept-number">
                Concept {concept.conceptId}
              </div>

              <h3>{concept.title}</h3>

              <p className="deep-concept-preview">
                {concept.understand?.english}
              </p>

              <span className="deep-concept-arrow">Learn →</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DeepLearnCategory;
