import React, { useState } from "react";
import axios from "axios";
import { Styles } from "styled-components";

export const SellersHomePage = ({ seller }) => {
  const [sellerProperties, setSellerProperties] = useState(seller?.properties);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleUpdateProperty = async (propertyId, updatedData) => {
    try {
      // Make an API request to update the property
      const response = await axios.put(
        `/properties/${propertyId}`,
        updatedData
      );
      // Handle the response and update the UI if needed
      console.log("Property updated:", response.data);
      // Update the property in the UI state
      setSellerProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.id === propertyId ? response.data : property
        )
      );
      // Reset the selected property
      setSelectedProperty(null);
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleDeleteProperty = async (propertyId) => {
    try {
      // Make an API request to delete the property
      await axios.delete(`/properties/${propertyId}`);
      // Remove the deleted property from the UI state
      setSellerProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== propertyId)
      );
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleUpdate = (propertyId) => {
    // Find the selected property by its ID
    const propertyToUpdate = sellerProperties.find(
      (property) => property.id === propertyId
    );
    // Set the selected property in the state
    setSelectedProperty(propertyToUpdate);
  };

  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
    // Get the updated data from the form inputs
    const updatedData = {
      price: event.target.price.value,
      bathrooms: event.target.bathrooms.value,
      bedrooms: event.target.bedrooms.value,
    };
    // Call the handleUpdateProperty function with the selected property ID and updated data
    handleUpdateProperty(selectedProperty.id, updatedData);
  };

  const myProperties = sellerProperties?.map((property) => {
    const { id, title, image, price, bathrooms, bedrooms } = property;

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
        {selectedProperty && selectedProperty.id === id ? (
          <form onSubmit={handleUpdateFormSubmit}>
            <input
              type="number"
              name="price"
              defaultValue={selectedProperty.price}
            />
            <input
              type="number"
              name="bathrooms"
              defaultValue={selectedProperty.bathrooms}
            />
            <input
              type="number"
              name="bedrooms"
              defaultValue={selectedProperty.bedrooms}
            />
            <button type="submit">Save</button>
          </form>
        ) : (
          <button onClick={() => handleUpdate(id)}>Update</button>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  });

  return <div style={styles.container}>{myProperties}</div>;
};

// Styles...
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "20px",
    padding: "20px",
  },
  propertyContainer: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  propertyTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  propertyImage: {
    width: "100%",
    marginBottom: "10px",
  },
  propertyInfo: {
    fontSize: "16px",
    marginBottom: "5px",
  },
};
