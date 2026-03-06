import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
