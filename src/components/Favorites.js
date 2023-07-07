import React from "react";

export const Favorites = ({ favorites }) => {
  console.log(favorites);
  
  const handleDelete = (favoriteId) => {
    fetch(`/favorites/${favoriteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          alert("Property removed from favorite");
          // handle success response, such as updating the UI
        } else {
          throw new Error("Error deleting property");
        }
      })
      .catch((error) => {
        // handle error
        console.error("Error deleting property:", error);
      });
  };

  let buyerFavorites;

  if (favorites && favorites.error) {
    buyerFavorites = <h2 style={{ color: "red" }}>You currently have no favorites</h2>;
  } else if (favorites && Array.isArray(favorites)) {
    buyerFavorites = favorites.map((favorite) => (
      <div key={favorite.property.id}>
        <h2>Title: {favorite.property.title}</h2>
        <img src={favorite.property.image} alt="fav" />
        <h3>Address: {favorite.property.address}</h3>
        <h4>Price: {favorite.property.price}</h4>
        <h4>Bedrooms: {favorite.property.bedrooms}</h4>
        <h4>Bathrooms: {favorite.property.bathrooms}</h4>
        <button onClick={() => handleDelete(favorite.id)}>Delete</button>
      </div>
    ));
  } else {
    buyerFavorites = <h2>Loading favorites...</h2>; // or any other loading state
  }
  
  return <div>{buyerFavorites}</div>;
};
