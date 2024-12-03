import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-slate-100">
      <div className="max-w-6xl mx-auto py-3 px-1 sm:px-4 flex items-center justify-between gap-1">
        <div className="flex font-semibold text-xl sm:text-2xl flex-wrap">
          <span className="text-slate-500">Arham</span>
          <span className="text-slate-700">Estate</span>
        </div>
        <form className=" bg-slate-200 flex items-center rounded-full p-3">
          <input
            type="text"
            placeholder="Search here..."
            className="w-36 sm:w-64 md:w-96 focus:outline-none bg-transparent"
          />
          <FaSearch className="text-slate-700" />
        </form>
        <div className="flex items-center gap-4 text-slate-700">
          <Link to={"/home"} className="hover:underline hidden sm:inline">
            Home
          </Link>
          <Link to={"/about"} className="hover:underline hidden sm:inline">
            About
          </Link>
          <Link to={"/sign-in"} className="hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
