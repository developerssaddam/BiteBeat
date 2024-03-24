import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <Nav />
      <main className="mHeight">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
