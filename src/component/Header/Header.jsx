import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const homePath = basePath || "/";

  const handleStartApplying = (event) => {
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    if (currentPath !== homePath) return;
    event.preventDefault();
    const target = document.getElementById("featured-jobs");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(
        null,
        "",
        `${import.meta.env.BASE_URL}#featured-jobs`,
      );
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-700"
              : "font-semibold text-slate-600 hover:text-teal-700"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/applied-jobs"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-700"
              : "font-semibold text-slate-600 hover:text-teal-700"
          }
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "font-bold text-teal-700"
              : "font-semibold text-slate-600 hover:text-teal-700"
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-lg">
      <div className="navbar site-container py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow-xl bg-white border border-slate-200"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/" className="text-2xl font-extrabold tracking-tight text-slate-900">
            CareerHub
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/#featured-jobs"
            onClick={handleStartApplying}
            className="btn-primary"
          >
            Start Applying
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
