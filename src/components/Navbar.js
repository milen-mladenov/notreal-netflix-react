import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NOT-NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4 ">Sign In</button>
        </Link>
        <Link to="/register">
          <button className="bg-red-600 px-6 py-4 rounded cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
