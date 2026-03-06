import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogPost = () => {
  const blogs = useLoaderData();
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="site-container section-wrap text-center">
        <h2 className="text-2xl font-bold text-slate-900">Article not found</h2>
        <p className="text-slate-500 mt-2">
          The blog article you are looking for does not exist.
        </p>
        <Link to="/blog" className="btn-primary mt-5">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="site-container max-w-4xl section-wrap">
      <Link to="/blog" className="font-semibold text-teal-700 hover:underline">
        Back to Blog
      </Link>

      <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
        <span>{post.author}</span>
        <span>{post.published_at}</span>
        <span>{post.read_time}</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {post.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 leading-relaxed shadow-sm md:p-8">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPost;
