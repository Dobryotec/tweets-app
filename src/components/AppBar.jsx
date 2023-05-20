import Navigation from "./Navigation";

const AppBar = () => {
  return (
    <header
      className="container mx-auto py-10 shadow-xl font-bold 
    font-main rounded-b-md bg-sky-400"
    >
      <Navigation />
    </header>
  );
};

export default AppBar;
