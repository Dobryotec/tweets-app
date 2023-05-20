import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex justify-center  items-center gap-x-10">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-purple-800 text-5xl  "
            : "text-secondary-color text-4xl hover:text-purple-800 transition-all duration-450"
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-purple-800  text-5xl "
            : "text-secondary-color text-4xl  hover:text-purple-800 transition-all duration-450 "
        }
        to="/tweets"
      >
        Users
      </NavLink>
    </nav>
  );
};

export default Navigation;
