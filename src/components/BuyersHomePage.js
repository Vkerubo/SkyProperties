import React, { useState } from "react";

function BuyersHomePage({ property }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const toggleModal = (selectedProperty) => {
    setSelectedProperty(selectedProperty);
  };

  const closeModal = () => {
    setSelectedProperty(null);
  };

  const handleAddressClick = (address) => {
    console.log(address);
    // Add your desired functionality here
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const sortProperties = (properties) => {
    switch (sortBy) {
      case "alphabetical":
        return properties.sort((a, b) => a.address.localeCompare(b.address));
      case "priceLowToHigh":
        return properties.sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return properties.sort((a, b) => b.price - a.price);
      case "bedrooms":
        return properties.sort((a, b) => a.bedrooms - b.bedrooms);
      case "bathrooms":
        return properties.sort((a, b) => a.bathrooms - b.bathrooms);
      default:
        return properties;
    }
  };

  const filteredProperties = property.filter((house) =>
    house.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProperties = sortProperties(filteredProperties);

  const theProperties = sortedProperties.map((house) => {
    return (
      <div key={house.id} className="property">
        <h2>{house.title}</h2>
        <img src={house.image} alt="property" />
        <p className="address">
          <em
            onClick={() => handleAddressClick(house.address)}
            className="address-link"
          >
            Address: {house.address}
          </em>
        </p>
        <p>Price: {house.price}</p>
        <p>Bedrooms: {house.bedrooms}</p>
        <p>Bathrooms: {house.bathrooms}</p>
        <div className="modal-wrapper">
          <button onClick={() => toggleModal(house)}>
            Sellers Information
          </button>
          {selectedProperty === house && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  <button>X</button>
                </span>
                <p>Name: {house.seller.name}</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${house.seller.email}`}
                    className="email-link"
                  >
                    {house.seller.email}
                  </a>
                </p>
                <p>Phone: {house.seller.phone}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Address"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={handleSearch}>Search</button>
        <select value={sortBy} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
          <option value="bedrooms">Bedrooms</option>
          <option value="bathrooms">Bathrooms</option>
        </select>
      </div>
      {theProperties}
    </div>
  );
}

export default BuyersHomePage;
