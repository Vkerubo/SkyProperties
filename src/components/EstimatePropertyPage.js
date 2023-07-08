import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const EstimatePropertyPage = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [numStories, setNumStories] = useState("");
  const [numBedrooms, setNumBedrooms] = useState("");
  const [numBathrooms, setNumBathrooms] = useState("");
  const [estimatePrice, setEstimatePrice] = useState(0);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePropertySizeChange = (e) => {
    setPropertySize(e.target.value);
  };

  const handleNumStoriesChange = (e) => {
    setNumStories(e.target.value);
  };

  const handleNumBedroomsChange = (e) => {
    setNumBedrooms(e.target.value);
  };

  const handleNumBathroomsChange = (e) => {
    setNumBathrooms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleClose = () => {
      history.push("/"); // Navigate back to the LandingPage route
    };

    // Calculate the estimate price based on the input values
    const calculatedPrice = calculatePrice(
      propertySize,
      numStories,
      numBedrooms,
      numBathrooms
    );

    // Set the estimate price
    setEstimatePrice(calculatedPrice);

    // Add your logic to handle sending the email with the estimate
    // You can use a server-side API or a third-party service for email sending

    // Example: Send email with property value estimate
    sendEmail(
      email,
      "Property Value Estimate",
      `Your property value estimate: $${calculatedPrice}`
    );

    // Reset the form
    setEmail("");
    setAddress("");
    setPropertySize("");
    setNumStories("");
    setNumBedrooms("");
    setNumBathrooms("");
  };

  const calculatePrice = (
    propertySize,
    numStories,
    numBedrooms,
    numBathrooms
  ) => {
    // Add your calculation logic here
    // This is just a dummy calculation based on the input values
    const price =
      (parseInt(propertySize) +
        parseInt(numStories) +
        parseInt(numBedrooms) +
        parseInt(numBathrooms)) *
      1000;
    return price;
  };

  const sendEmail = (to, subject, body) => {
    // Implement your email sending logic here
    // This can be done using an API or a third-party service
    // Example using a dummy function
    console.log("Sending email to:", to);
    console.log("Subject:", subject);
    console.log("Body:", body);
  };

  return (
    <div className="estimate-property-page">
      <h3>Thinking of selling your home?</h3>
      <h1>Get a free home value estimate now.</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Enter your email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Home Address:</Label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="property-size">Property Size (sqft):</Label>
          <Input
            type="number"
            id="property-size"
            value={propertySize}
            onChange={handlePropertySizeChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="num-stories">Number of Stories:</Label>
          <Input
            type="number"
            id="num-stories"
            value={numStories}
            onChange={handleNumStoriesChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="num-bedrooms">Number of Bedrooms:</Label>
          <Input
            type="number"
            id="num-bedrooms"
            value={numBedrooms}
            onChange={handleNumBedroomsChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="num-bathrooms">Number of Bathrooms:</Label>
          <Input
            type="number"
            id="num-bathrooms"
            value={numBathrooms}
            onChange={handleNumBathroomsChange}
            required
          />
        </FormGroup>
        <Button type="submit">Get Property Value Estimate</Button>
      </Form>
      {estimatePrice > 0 && (
        <div>
          <h2>Property Value Estimate:</h2>
          <p>${estimatePrice}</p>
        </div>
      )}
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default EstimatePropertyPage;

