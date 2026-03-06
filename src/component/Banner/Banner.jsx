import userImage from "../../../assets/images/user.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  const homePath = basePath || "/";

  const handleGetStarted = (event) => {
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

  return (
    <section className="relative overflow-hidden border-b border-slate-200/70">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-slate-50 to-cyan-50" />
      <div className="site-container relative py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-700">
              Smart Career Platform
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Build a Career
              <br />
              You Actually
              <br />
              <span className="text-teal-700">Love Working In</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Explore verified opportunities, compare roles quickly, and manage
              all applications in one clean workspace from start to finish.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/#featured-jobs" onClick={handleGetStarted} className="btn-primary">
                Get Started
              </Link>
              <Link to="/blog" className="btn-outline-pro">
                Read Career Tips
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-teal-100/80 to-cyan-100/80 blur-2xl" />
            <img
              src={userImage}
              alt="Professional"
              className="w-full max-w-md rounded-3xl border border-slate-200 bg-white/80 p-2 object-contain shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
