import React from "react";

export const SellersHomePage = ({ seller }) => {
  const sellerProperties = seller?.properties;
  const myProperties = sellerProperties?.map((property) => {
    return (
      <div key={property.id} style={styles.propertyContainer}>
        <h2 style={styles.propertyTitle}>{property.title}</h2>
        <img src={property.image} alt="property" style={styles.propertyImage} />
        <h3 style={styles.propertyInfo}>Price: {property.price}</h3>
        <h4 style={styles.propertyInfo}>Bathrooms: {property.bathrooms}</h4>
        <h4 style={styles.propertyInfo}>Bedrooms: {property.bedrooms}</h4>
      </div>
    );
  });

  return <div style={styles.container}>{myProperties}</div>;
};

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
