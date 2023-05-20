import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleBack}
      className="rounded-[10px]  bg-sky-500 self-start animate-bounce transition-all 
          duration-500 hover:bg-secondary-color  flex items-center shadow-lg py-3.5 px-14 
          font-semibold text-xl uppercase"
    >
      <ion-icon size="large" name="arrow-back-outline"></ion-icon>
      Back
    </button>
  );
};

export default ButtonBack;
