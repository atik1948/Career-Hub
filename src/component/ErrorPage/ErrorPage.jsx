import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="surface-card w-full max-w-xl p-10 text-center">
        <p className="text-xs font-bold tracking-widest text-teal-700">404 ERROR</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Page Not Found
        </h2>
        <p className="mt-3 text-slate-600">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
