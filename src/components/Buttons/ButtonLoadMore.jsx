const ButtonLoadMore = ({ handleLoadMore }) => {
  return (
    <button
      className="rounded-[10px] shadow-md py-3.5 px-14 mt-3 bg-sky-500 self-center 
      font-semibold text-lg uppercase transition-all duration-500 
      animate-bounce hover:bg-btn-following"
      onClick={handleLoadMore}
    >
      Load More
    </button>
  );
};

export default ButtonLoadMore;
