import { useState } from "react";
import Job from "../Job/Job";
import jobsData from "../../../data/jobs.json";

const FeaturedJobs = () => {
  const [dataLength, setDataLength] = useState(4);

  return (
    <section id="featured-jobs" className="section-wrap pt-0">
      <div className="site-container">
      <div className="text-center mb-12">
        <h3 className="section-title">Featured Jobs</h3>
        <p className="section-subtitle mx-auto">
          Handpicked roles from fast-growing teams. Apply with confidence and
          track every move from one dashboard.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {jobsData.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>

      <div className="text-center mt-10">
        {dataLength < jobsData.length && (
          <button
            onClick={() => setDataLength(jobsData.length)}
            className="btn-primary"
          >
            See All Jobs
          </button>
        )}
      </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
