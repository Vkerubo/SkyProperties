import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaMapMarker } from "react-icons/fa";

const Div = styled.div`
  background: #315e6b;
  padding: 1.5rem;
  gap: 1rem;
  display: flex;
  align-items: center; /* Added align-items: center */

  .name {
    color: #fff;
    font-size: 1.2rem;
    margin-right: auto; /* Added margin-right: auto */
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
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
    gap: 2rem;
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

  @media screen and (max-width: 768px) {
    /* Responsive styles for screens with a maximum width of 768px */
    flex-direction: column;
    text-align: center;
    padding: 1rem;

    .footer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-top: 1rem;
    }

    .name {
      font-size: 1rem; /* Decrease the font size for smaller screens */
    }

    .footer,
    .contact-info,
    .creator {
      font-size: 1rem; /* Decrease the font size for smaller screens */
    }
  }
`;


const Contact = () => {
  return (
    <Div>
      <div className="name">
        © {new Date().getFullYear()} Skyproperties. All Rights Reserved
      </div>

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
