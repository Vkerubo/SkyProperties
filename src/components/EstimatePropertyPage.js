import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: ${props => (props.visible ? "block" : "none")};
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
  const [currentFormGroup, setCurrentFormGroup] = useState(0);
  const history = useHistory();

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

  const handlePrevious = () => {
    setCurrentFormGroup((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentFormGroup((prev) => prev + 1);
  };

  const handleClose = () => {
    history.push("/"); // Navigate back to the LandingPage route
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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

  const isCurrentFormGroup = (index) => {
    return index === currentFormGroup;
  };

  const isFirstFormGroup = currentFormGroup === 0;
  const isLastFormGroup = currentFormGroup === 5; // Update this value if you have more form groups

  return (
    <div className="estimate-property-page">
      <h3>Thinking of selling your home?</h3>
      <h1>Get a free home value estimate now.</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup visible={isCurrentFormGroup(0)}>
          <Label htmlFor="email">Enter your email:</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isFirstFormGroup && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {!isLastFormGroup && (
            <Button onClick={handleNext}>Next</Button>
          )}
        </FormGroup>
        <FormGroup visible={isCurrentFormGroup(1)}>
          <Label htmlFor="address">Home Address:</Label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
          {!isFirstFormGroup && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {!isLastFormGroup && (
            <Button onClick={handleNext}>Next</Button>
          )}
        </FormGroup>
        <FormGroup visible={isCurrentFormGroup(2)}>
          <Label htmlFor="property-size">Property Size (sqft):</Label>
          <Input
            type="number"
            id="property-size"
            value={propertySize}
            onChange={handlePropertySizeChange}
            required
          />
          {!isFirstFormGroup && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {!isLastFormGroup && (
            <Button onClick={handleNext}>Next</Button>)}
        </FormGroup>
        <FormGroup visible={isCurrentFormGroup(3)}>
          <Label htmlFor="num-stories">Number of Stories:</Label>
          <Input
            type="number"
            id="num-stories"
            value={numStories}
            onChange={handleNumStoriesChange}
            required
          />
          {!isFirstFormGroup && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {!isLastFormGroup && (
            <Button onClick={handleNext}>Next</Button>
          )}
        </FormGroup>
        <FormGroup visible={isCurrentFormGroup(4)}>
          <Label htmlFor="num-bedrooms">Number of Bedrooms:</Label>
          <Input
            type="number"
            id="num-bedrooms"
            value={numBedrooms}
            onChange={handleNumBedroomsChange}
            required
          />
          {!isFirstFormGroup && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {!isLastFormGroup && (
            <Button onClick={handleNext}>Next</Button>
          )}
        </FormGroup>
        <FormGroup visible={isCurrentFormGroup(5)}>
          <Label htmlFor="num-bathrooms">Number of Bathrooms:</Label>
          <Input
            type="number"
            id="num-bathrooms"
            value={numBathrooms}
            onChange={handleNumBathroomsChange}
            required
          />
          {!isFirstFormGroup && (
            <Button onClick={handlePrevious}>Previous</Button>
          )}
          {!isLastFormGroup && (
            <Button onClick={handleNext}>Next</Button>
          )}
        </FormGroup>
        <Button type="submit">
          {isLastFormGroup ? "Get Property Value Estimate" : "Click next to continue"}
        </Button>
      </Form>
      {estimatePrice > 0 && (
        <div>
          <h2>Property Value Estimate:</h2>
          <p>${estimatePrice}</p>
        </div>
      )}
      <Button onClick={handleClose}>Close</Button>
    </div>
  );
};

export default EstimatePropertyPage;

