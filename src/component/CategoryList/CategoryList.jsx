import categoriesData from "../../../data/categories.json";

const CategoryList = () => {
  return (
    <section className="section-wrap">
      <div className="site-container">
        <div className="text-center">
          <h2 className="section-title">Explore Job Categories</h2>
          <p className="section-subtitle mx-auto">
            Find the role that matches your strengths and quickly jump into the
            most active job verticals.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className="surface-card surface-card-hover cursor-pointer p-7"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 ring-1 ring-teal-100">
              <img
                src={category.logo}
                alt={category.category_name}
                className="h-7 w-7 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              {category.category_name}
            </h3>
            <p className="text-sm text-slate-500">{category.availability}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
