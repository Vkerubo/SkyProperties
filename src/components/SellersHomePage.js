import React from "react";

export const SellersHomePage = ({ seller }) => {
  const sellerProperties = seller?.properties;
  const myProperties = sellerProperties?.map((property) => {
    return (
      <div key={property.id}>
        <h2>{property.title}</h2>
        <img src={property.image} alt="property" />
        <h3>Price: {property.price}</h3>
        <h4>Bathrooms: {property.bathrooms}</h4>
        <h4>Bedrooms: {property.bedrooms}</h4>
      </div>
    );
  });

  return <div>{myProperties}</div>;
};
