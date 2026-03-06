import { useLoaderData, useParams } from "react-router-dom";
import { applyJob, isJobApplied } from "../../utils/applyJob";
import { useState } from "react";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idint = parseInt(id);
  const job = jobs.find((job) => job.id === idint);
  const [applied, setApplied] = useState(isJobApplied(idint));
  const [message, setMessage] = useState("");

  if (!job) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold">Job not found</h2>
        <p className="mt-2">The job you're looking for doesn't exist.</p>
      </div>
    );
  }

  const handleApply = () => {
    const result = applyJob(job);
    setMessage(result.message);
    if (result.success) {
      setApplied(true);
    }
  };

  return (
    <div>
      <div className="page-hero">
        <h2 className="relative z-10 text-center text-4xl font-extrabold tracking-tight text-slate-900">
          Job Details
        </h2>
      </div>

      <div className="site-container section-wrap pt-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="surface-card p-6 md:p-7">
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="font-bold text-slate-900">
                  Job Description:
                </span>{" "}
                {job.job_description}
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="font-bold text-slate-900">
                  Job Responsibility:
                </span>{" "}
                {job.job_responsibility}
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <h3 className="font-bold text-slate-900 mb-2">
                Educational Requirements:
              </h3>
              <p className="text-slate-600 text-sm">
                {job.educational_requirements}
              </p>
            </div>

            <div className="surface-card p-6 md:p-7">
              <h3 className="font-bold text-slate-900 mb-2">Experiences:</h3>
              <p className="text-slate-600 text-sm">{job.experiences}</p>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="surface-card p-6 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Job Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                  <AiFillDollarCircle className="text-teal-700 text-lg" />
                  <span>
                    <span className="font-medium text-slate-900">Salary:</span>{" "}
                    {job.salary} (Per Month)
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <span className="font-medium text-slate-900">Job Title:</span>
                  <span>{job.job_title}</span>
                </div>
              </div>

              <div className="border-t border-slate-200 my-4"></div>

              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-slate-600">
                  <MdPhone className="text-teal-700 text-lg" />
                  <span>
                    <span className="font-medium text-slate-900">Phone:</span>{" "}
                    {job.contact_information?.phone}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <MdEmail className="text-teal-700 text-lg" />
                  <span>
                    <span className="font-medium text-slate-900">Email:</span>{" "}
                    {job.contact_information?.email}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-600">
                  <MdLocationPin className="text-teal-700 text-lg" />
                  <span>
                    <span className="font-medium text-slate-900">Address:</span>{" "}
                    {job.contact_information?.address}
                  </span>
                </div>
              </div>

              {message && (
                <div
                  className={`alert ${applied ? "alert-success" : "alert-error"} mt-4 text-xs py-2`}
                >
                  {message}
                </div>
              )}

              <button
                onClick={handleApply}
                disabled={applied}
                className={`btn w-full mt-6 border-0 ${applied ? "bg-green-600 text-white" : "bg-teal-700 hover:bg-teal-800 text-white"}`}
              >
                {applied ? "Already Applied" : "Apply Now"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
