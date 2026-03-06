import { MdLocationPin } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    salary,
    job_type,
    location,
    remote_or_onsite,
    job_title,
    company_name,
    logo,
  } = job;

  return (
    <article className="surface-card surface-card-hover p-6">
      <figure className="justify-start mb-4">
        <img src={logo} alt={company_name} className="h-9 object-contain" />
      </figure>
      <div className="card-body p-0">
        <h2 className="text-xl font-extrabold tracking-tight text-slate-900">{job_title}</h2>
        <p className="mb-4 text-sm text-slate-500">{company_name}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          <span className="chip">
            {remote_or_onsite}
          </span>
          <span className="chip">
            {job_type}
          </span>
        </div>

        <div className="mb-6 flex flex-wrap gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <MdLocationPin className="text-lg text-teal-700" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <AiFillDollarCircle className="text-lg text-teal-700" />
            <span>Salary: {salary}</span>
          </div>
        </div>

        <div className="card-actions justify-start">
          <Link to={`/job/${id}`} className="btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Job;
