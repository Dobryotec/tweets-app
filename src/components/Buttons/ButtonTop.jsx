const ButtonTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-5 right-10 px-1.5 pt-[5px] pb-px bg-btn-following text-white
       animate-bounce transition-all duration-500 hover:shadow-custom hover:bg-sky-500 rounded-full"
      onClick={handleScrollToTop}
    >
      <ion-icon name="arrow-up" size="large"></ion-icon>
    </button>
  );
};

export default ButtonTop;
