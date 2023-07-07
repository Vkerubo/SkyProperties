import { useRef } from "react";

function Navbar() {
  const navRef = useRef();

  return (
    <header>
      <h3>Sky Properties</h3>
      <nav ref={navRef}>
        <a href="/">Home</a>
        <a href="/login">Sign In</a>
        <a href="/signup">Sign Up</a>
      </nav>
    </header>
  );
}

export default Navbar;
