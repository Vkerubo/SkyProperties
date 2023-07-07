import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  return (
    <header style={headerStyle}>
      <h3 style={titleStyle}>Sky Properties</h3>
      <nav ref={navRef}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/login" style={linkStyle}>Sign In</a>
        <a href="/signup" style={linkStyle}>Sign Up</a>
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

const titleStyle = {
  fontSize: "24px",
  margin: "0",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "10px",
};

