import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button className="back-btn" onClick={goBack}>
      BACK
    </button>
  );
}
