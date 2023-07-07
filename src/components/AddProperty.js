import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const AddProperty = ({ id }) => {
  console.log(id)
  const params = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/properties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        address,
        price,
        bedrooms,
        bathrooms,
        image,
        seller_id: id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Property not created");
        }
      })
      .then((user) => {
        console.log(user)
        alert("Property added");
        setError("");
        setTitle("");
        setAddress("");
        setPrice("");
        setBedrooms("");
        setBathrooms("");
        setImage("");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Add Property</h2>
      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          id="bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="images">Images:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit">Add Property</button>
    </form>
  );
};
