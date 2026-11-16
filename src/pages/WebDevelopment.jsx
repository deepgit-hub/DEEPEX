
import { useNavigate } from "react-router-dom";

function WebDevelopment() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Web Development</h1>

      <p>Choose what you want to learn.</p>

      <button onClick={() => navigate("/learning-choice")}>
        Go Back
      </button>
    </div>
  );
}

export default WebDevelopment;
