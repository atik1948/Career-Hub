import { Link, useLoaderData } from "react-router-dom";

const Blog = () => {
  const blogs = useLoaderData();

  return (
    <section className="section-wrap">
      <div className="site-container">
      <div className="text-center mb-10">
        <h2 className="section-title">Career Blog</h2>
        <p className="section-subtitle mx-auto">
          Practical career advice, interview tips, and job search strategy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((post) => (
          <article
            key={post.id}
            className="surface-card surface-card-hover p-6"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="chip"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
            <p className="text-sm text-slate-500 mt-2">{post.excerpt}</p>

            <div className="flex items-center justify-between mt-6 text-sm text-slate-500">
              <p>{post.author}</p>
              <p>{post.read_time}</p>
            </div>

            <div className="mt-5">
              <Link to={`/blog/${post.slug}`} className="btn-primary">
                Read Article
              </Link>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Blog;
