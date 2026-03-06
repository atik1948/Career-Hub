import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div>
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
