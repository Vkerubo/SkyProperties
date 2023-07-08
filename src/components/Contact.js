import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

const Div = styled.div`
  background: #315e6b;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .name {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .footer {
    display: flex;
    justify-content: space-between; /* Changed from justify-content: flex-start to align items in the center */
    align-items: center; /* Changed from align-items: flex-start to align items in the center */
    gap: 2rem; /* Adjusted the gap between elements */
    img {
      width: 40px;
      height: 40px;
    }
    h2 {
      color: #fff;
      font-size: 1.2rem;
      margin: 0;
    }
  }
  .contact-info {
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 2rem; /* Adjusted the gap between elements */
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
    }
  }
  .creator {
    color: #fff;
    font-size: 1.2rem;
    margin-left: auto;
    a {
      text-decoration: none;
      color: #1460e5;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    /* Media queries styling here */
  }
`;

const Contact = () => {
  return (
    <Div>
      <div className="name">Sky Properties</div>
      <div className="footer">
        <div className="contact-info">
          <span>
            <FaEnvelope /> info@skyproperties.com
          </span>
          <span>
            <FaPhone /> +254 711 569 564
          </span>
          <span>
            <FaMapMarker /> 123 Main St, City, State
          </span>
        </div>
        <div className="creator">
          Websites by <a href="https://github.com/lewis-ma">G3Rails</a>
        </div>
      </div>
    </Div>
  );
};

export default Contact;
