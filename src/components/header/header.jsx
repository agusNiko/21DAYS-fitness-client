import "./Header.css";
import { fallDown as Menu } from "react-burger-menu";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        justifyContent: "space-around",
      }}
    >
      <h1>21 Days</h1>
      <Menu right width={"250px"}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    </div>
  );
};

export default Header;
