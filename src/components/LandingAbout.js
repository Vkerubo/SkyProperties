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
  margin-bottom: 10px;
`;

const LandingAbout = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        We are here to help you unlock the Perfect Home.
      </Description>
      <Description>
        Discover your dream home or sell with confidence. We make dreams meet
        reality.
      </Description>
      <Description>
        Join us today!
      </Description>
    </AboutContainer>
  );
};

export default LandingAbout;
