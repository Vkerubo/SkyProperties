import { useRef } from "react";
import { FaHome } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img
          src="https://cdn.pixabay.com/photo/2017/04/08/18/46/house-2214100_640.png"
          alt="Company Logo"
          style={logoStyle}
        />
        <h3 style={titleStyle}>Sky Properties</h3>
      </div>
      <nav ref={navRef}>
        <a href="/" style={{ ...linkStyle, marginRight: "35px" }}>
          <FaHome style={{ color: linkStyle.color, fontSize: "24px" }} />
        </a>
        <a href="/login" style={linkStyle}>
          Login
        </a>
        <a href="/signup" style={linkStyle}>
          Sign Up
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

// Inline styles
const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  width: "40px",
  height: "40px",
  marginRight: "10px",
};

const titleStyle = {
  fontSize: "30px",
  margin: "0",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "10px",
};
