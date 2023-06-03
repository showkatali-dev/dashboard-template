import { BsFillPersonFill, BsPieChartFill } from "react-icons/bs";
import { FaBlog, FaBriefcase } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo-1-1.png";

const Menu = () => {
  return (
    <>
      <NavLink to="/">
        <BsPieChartFill />
      </NavLink>
      <NavLink to="/about">
        <BsFillPersonFill />
      </NavLink>
      <NavLink to="/works">
        <FaBriefcase />
      </NavLink>
      <NavLink to="/contact">
        <RiMailOpenFill />
      </NavLink>
      <NavLink to="/blog">
        <FaBlog />
      </NavLink>
    </>
  );
};

const Navigation = () => {
  return (
    <div className="fixed left-0 top-0 bottom-0 bg-base-100 h-screen flex flex-col items-center p-2 pl-0 justify-start gap-6 z-50 nav">
      <img src={logo} alt="logo" className="w-10 pl-0.5" />
      <Menu />
    </div>
  );
};

export default Navigation;
