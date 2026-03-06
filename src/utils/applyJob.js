// Utility functions for managing applied jobs in localStorage

const APPLIED_JOBS_KEY = "appliedJobs";

// Get all applied jobs from localStorage
export const getAppliedJobs = () => {
  const storedJobs = localStorage.getItem(APPLIED_JOBS_KEY);
  if (!storedJobs) return [];

  try {
    return JSON.parse(storedJobs);
  } catch (err) {
    if (import.meta.env.DEV) {
      console.warn(
        "Failed to parse applied jobs from localStorage, resetting to []",
        err,
      );
    }
    localStorage.setItem(APPLIED_JOBS_KEY, JSON.stringify([]));
    return [];
  }
};

// Save a job to applied jobs
export const applyJob = (job) => {
  const appliedJobs = getAppliedJobs();

  // Check if already applied
  const isAlreadyApplied = appliedJobs.some(
    (appliedJob) => appliedJob.id === job.id,
  );

  if (isAlreadyApplied) {
    return {
      success: false,
      message: "You have already applied for this job!",
    };
  }

  // Add application date
  const jobWithDate = {
    ...job,
    appliedDate: new Date().toISOString(),
  };

  appliedJobs.push(jobWithDate);
  localStorage.setItem(APPLIED_JOBS_KEY, JSON.stringify(appliedJobs));

  return { success: true, message: "Job applied successfully!" };
};

// Remove a job from applied jobs
export const removeAppliedJob = (jobId) => {
  const appliedJobs = getAppliedJobs();
  const filteredJobs = appliedJobs.filter((job) => job.id !== jobId);
  localStorage.setItem(APPLIED_JOBS_KEY, JSON.stringify(filteredJobs));
  return { success: true, message: "Application removed successfully!" };
};

// Check if a job has been applied
export const isJobApplied = (jobId) => {
  const appliedJobs = getAppliedJobs();
  return appliedJobs.some((job) => job.id === jobId);
};
