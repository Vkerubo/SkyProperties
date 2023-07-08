import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LandingAbout from "./LandingAbout";
import Services from "./Services";
import Contact from "./Contact";

const BackgroundImage = styled.div`
  background-image: url("https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Subtitle = styled.p`
  font-size: 25px;
  margin-bottom: 30px;
  padding: 10px;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 20px;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  text-align: left;
  color: black;
`;

const SlidingPhotos = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Photo = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-right: 10px;
  animation: ${slideAnimation} 10s linear infinite;
`;

const photos = [
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/164522/pexels-photo-164522.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400",
  // Add more photo URLs as needed
];


const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: calc(33.3333% - 20px);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

const CardTitle = styled.h3`
  /* Add your card title styles here */
`;

const CardDescription = styled.p`
  /* Add your card description styles here */
`;

const Button = styled.a`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;

const LandingHome = () => {
  const signupButtonStyle = {
    backgroundColor: "#bbb",
    color: "#333",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div>
      <Navbar />
      <BackgroundImage>
        <ContentWrapper>
          <Subtitle>
            Welcome to our House Dealership. Find your dream home today...
          </Subtitle>
          <Quote>"Home is where your story begins."</Quote>
        </ContentWrapper>
        <CardContainer>
          <CardTitle>FREE HOME VALUATION</CardTitle>
          <CardDescription>
            Thinking of selling your home? Find out what your home is worth in
            today's market.
          </CardDescription>
          <Button href="https://laxhomevalues.com/" target="_blank">
            GET AN ESTIMATE
          </Button>
        </CardContainer>
      </BackgroundImage>
      <h3>
        Sign up today to check our beautiful property listings{" "}
        <Link to="/signup">
          <button style={signupButtonStyle}>Sign up</button>
        </Link>
      </h3>
      <SlidingPhotos>
        {photos.map((photo, index) => (
          <Photo key={index} src={photo} alt={`Photo ${index + 1}`} />
        ))}
      </SlidingPhotos>
      <Services />
      <LandingAbout />
      <Contact />
    </div>
  );
};

export default LandingHome;
