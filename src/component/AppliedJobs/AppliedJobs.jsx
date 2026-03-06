import { useState } from "react";
import { getAppliedJobs, removeAppliedJob } from "../../utils/applyJob";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState(() => getAppliedJobs());
  const [filter, setFilter] = useState("all");

  const handleRemove = (jobId) => {
    removeAppliedJob(jobId);
    setAppliedJobs(getAppliedJobs());
  };

  const filteredJobs = appliedJobs.filter((job) => {
    if (filter === "all") return true;
    return job.remote_or_onsite === filter;
  });

  return (
    <div>
      <div className="page-hero">
        <h2 className="relative z-10 text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Applied Jobs
        </h2>
      </div>

      <div className="site-container section-wrap pt-10">
        <div className="flex justify-end mb-8">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn-outline-pro cursor-pointer">
              Filter By v
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow-xl bg-white rounded-box w-52 border border-slate-200"
            >
              <li>
                <button type="button" onClick={() => setFilter("all")}>All</button>
              </li>
              <li>
                <button type="button" onClick={() => setFilter("Remote")}>
                  Remote
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setFilter("Onsite")}>
                  Onsite
                </button>
              </li>
            </ul>
          </div>
        </div>

        {appliedJobs.length === 0 ? (
          <div className="surface-card text-center py-16 px-4">
            <h2 className="text-2xl font-bold text-slate-700 mb-4">
              No applications yet
            </h2>
            <p className="text-slate-500 mb-6">
              Start applying for jobs to see them here
            </p>
            <Link to="/" className="btn-primary">
              Browse Jobs
            </Link>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="surface-card text-center py-16 px-4">
            <h2 className="text-2xl font-bold text-slate-700">
              No {filter} jobs found
            </h2>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="surface-card surface-card-hover p-6 flex flex-col md:flex-row items-center gap-6"
              >
                <div className="w-24 h-24 flex items-center justify-center bg-slate-50 rounded-xl border border-slate-200">
                  <img
                    src={job.logo}
                    alt={job.company_name}
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-slate-900">
                    {job.job_title}
                  </h3>
                  <p className="text-slate-500">{job.company_name}</p>

                  <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-3">
                    <span className="chip">
                      {job.remote_or_onsite}
                    </span>
                    <span className="chip">
                      {job.job_type}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-6 text-slate-500 text-sm mt-3 justify-center md:justify-start">
                    <div className="flex items-center gap-2">
                      <MdLocationPin className="text-teal-700" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AiFillDollarCircle className="text-teal-700" />
                      <span>Salary: {job.salary}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Link to={`/job/${job.id}`} className="btn-primary w-full">
                    View Details
                  </Link>
                  <button
                    onClick={() => handleRemove(job.id)}
                    className="btn btn-outline border-red-300 text-red-600 hover:bg-red-50 btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
