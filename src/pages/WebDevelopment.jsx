
import { useNavigate } from "react-router-dom";
import "../styles/WebDevelopment.css";

function WebDevelopment() {
  const navigate = useNavigate();

  const technologies = [
    {
      id: "html",
      icon: "🌐",
      name: "HTML",
      description:
        "Learn how to structure web pages using elements, tags, and semantic HTML.",
      subtitle: "Structure of Websites",
    },
    {
      id: "css",
      icon: "🎨",
      name: "CSS",
      description:
        "Learn how to style websites with colours, layouts, animations, and responsive designs.",
      subtitle: "Design of Websites",
    },
    {
      id: "javascript",
      icon: "⚡",
      name: "JavaScript",
      description:
        "Learn how to make websites interactive using programming logic and JavaScript.",
      subtitle: "Interactivity of Websites",
    },
  ];

  return (
    <div className="web-development-page">

      <div className="web-development-container">

        <div className="web-development-badge">
          🌐 DEEP CODE • WEB DEVELOPMENT
        </div>

        <h1>Choose Your Technology</h1>

        <p>
          Start learning web development step by step.
          Choose a technology to begin your journey.
        </p>

        <div className="web-development-options">

          {technologies.map((technology) => (
            <div
              className="web-development-card"
              key={technology.id}
            >

              <div className="web-development-icon">
                {technology.icon}
              </div>

              <h2>{technology.name}</h2>

              <h3>{technology.subtitle}</h3>

              <p>{technology.description}</p>

              <button
                onClick={() =>
                  navigate(`/web-home/${technology.id}`)
                }
              >
                Start Learning →
              </button>

            </div>
          ))}

        </div>

        <button
          className="web-development-back"
          onClick={() => navigate("/learning-choice")}
        >
          ← Back to Learning Paths
        </button>

      </div>

    </div>
  );
}

export default WebDevelopment;
