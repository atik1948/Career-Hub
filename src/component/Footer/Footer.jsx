const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="site-container py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tight text-white">CareerHub</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
              CareerHub helps professionals discover quality opportunities,
              prepare better, and manage applications without the usual clutter.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-teal-500 hover:text-teal-400"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-teal-500 hover:text-teal-400"
              >
                IG
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-teal-500 hover:text-teal-400"
              >
                IN
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white">Platform</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Browse Jobs</li>
              <li>Apply Tracker</li>
              <li>Career Blog</li>
              <li>Saved Roles</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Resume Tips</li>
              <li>Interview Guides</li>
              <li>Remote Work Guide</li>
              <li>Salary Insights</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>hello@careerhub.dev</li>
              <li>+1 777 978 5570</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          <p>© {currentYear} CareerHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
