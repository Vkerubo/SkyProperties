import React, { useState } from "react";

function EstimatePropertyPage({ closeModal }) {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="address">Home Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          required
        />
        <label htmlFor="property-size">Property Size (sqft):</label>
        <input
          type="number"
          id="property-size"
          value={propertySize}
          onChange={handlePropertySizeChange}
          required
        />
        <label htmlFor="num-stories">Number of Stories:</label>
        <input
          type="number"
          id="num-stories"
          value={numStories}
          onChange={handleNumStoriesChange}
          required
        />
        <label htmlFor="num-bedrooms">Number of Bedrooms:</label>
        <input
          type="number"
          id="num-bedrooms"
          value={numBedrooms}
          onChange={handleNumBedroomsChange}
          required
        />
        <label htmlFor="num-bathrooms">Number of Bathrooms:</label>
        <input
          type="number"
          id="num-bathrooms"
          value={numBathrooms}
          onChange={handleNumBathroomsChange}
          required
        />
        <button type="submit">Get Property Value Estimate</button>
      </form>
      {estimatePrice > 0 && (
        <div>
          <h2>Property Value Estimate:</h2>
          <p>${estimatePrice}</p>
        </div>
      )}
      <button onClick={closeModal}>Close</button>
    </div>
  );
}

export default EstimatePropertyPage;
