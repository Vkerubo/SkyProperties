import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  background-color: #202a44;
  padding: 40px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #f5f5f5;
  font-size: 16px;
  line-height: 1.5;
`;

const LandingAbout = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        Buyer Side: Find your dream home effortlessly. Discover the perfect
        property with personalized recommendations and intuitive search filters.
      </Description>
      <Description>
        Seller Side: Sell your house effortlessly. Attract interested buyers,
        negotiate offers, and close deals efficiently with our user-friendly
        platform.
      </Description>
    </AboutContainer>
  );
};

export default LandingAbout;