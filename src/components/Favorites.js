import React from "react";

export const Favorites = ({ favorites }) => {

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
    buyerFavorites = (
      <h2 className="no-favorites-message">
        You currently have no favorites
      </h2>
    );
  } else if (favorites && Array.isArray(favorites)) {
    buyerFavorites = favorites.map((favorite) => (
      <div className="favorite-house" key={favorite.property.id}>
        <h2 className="house-title">{favorite.property.title}</h2>
        <img className="house-image" src={favorite.property.image} alt="fav" />
        <div className="house-details">
          <p className="house-address">Address: {favorite.property.address}</p>
          <p className="house-price">Price: {favorite.property.price}</p>
          <p className="house-bedrooms">Bedrooms: {favorite.property.bedrooms}</p>
          <p className="house-bathrooms">Bathrooms: {favorite.property.bathrooms}</p>
        </div>
        <button
          className="delete-button"
          onClick={() => handleDelete(favorite.id)}
        >
          Delete
        </button>
      </div>
    ));
  } else {
    buyerFavorites = <h2>Loading favorites...</h2>;
  }

  return (
    <div className="favorites-container">
      <style>
        {`
          .favorites-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 20px;
          }

          .favorite-house {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 8px;
          }

          .house-title {
            margin: 0;
            margin-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
          }

          .house-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 10px;
          }

          .house-details {
            margin-bottom: 10px;
          }

          .house-address,
          .house-price,
          .house-bedrooms,
          .house-bathrooms {
            margin: 0;
            margin-bottom: 5px;
          }

          .delete-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;
          }

          .no-favorites-message {
            color: red;
          }
        `}
      </style>
      {buyerFavorites}
    </div>
  );
};
