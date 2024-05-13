import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Header from "../components/Header/Index";

const PrimaryPageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrimaryPageLayout;
