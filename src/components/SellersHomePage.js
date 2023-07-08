import React from "react";
import axios from "axios";
import { Styles } from "styled-components";

export const SellersHomePage = ({ seller }) => {
  const sellerProperties = seller?.properties;

  const handleUpdateProperty = async (propertyId, updatedData) => {
    try {
      // Make an API request to update the property
      const response = await axios.put(
        `/api/properties/${propertyId}`,
        updatedData
      );
      // Handle the response and update the UI if needed
      console.log("Property updated:", response.data);
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      // Make an API request to delete the property
      const response = await axios.delete(`/api/properties/${propertyId}`);
      // Handle the response and update the UI if needed
      console.log("Property deleted:", response.data);
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const myProperties = sellerProperties?.map((property) => {
    const { id, title, image, price, bathrooms, bedrooms } = property;

    const handleUpdate = () => {
      const updatedData = { price: 200000 }; // Example: Update price to 200000
      handleUpdateProperty(id, updatedData);
    };

    const handleDelete = () => {
      handleDeleteProperty(id);
    };

    return (
      <div key={id} style={styles.propertyContainer}>
        <h2 style={styles.propertyTitle}>{title}</h2>
        <img src={image} alt="property" style={styles.propertyImage} />
        <h3 style={styles.propertyInfo}>Price: {price}</h3>
        <h4 style={styles.propertyInfo}>Bathrooms: {bathrooms}</h4>
        <h4 style={styles.propertyInfo}>Bedrooms: {bedrooms}</h4>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  });

  return <div style={styles.container}>{myProperties}</div>;
};

// Styles...
