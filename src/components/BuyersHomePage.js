import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function BuyersHomePage({ property }) {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  // const setFavorites = useState([]);
  const history = useHistory();

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

  // const fetchFavorites = () => {
  //   fetch("/favorites")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Error fetching favorites");
  //       }
  //     })
  //     .then((data) => {
  //       setFavorites(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching favorites:", error);
  //     });
  // };

   const handleCreate = (propertyId) => {
     fetch(`/favorites`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         id: propertyId,
       }),
     })
       .then((response) => {
         if (response.status === 201) {
           alert("Property added to favorites");
           // Navigate to the favorites page
           history.push("/buyer/favorites");
         } else {
           throw new Error("Error adding property to favorites");
         }
       })
       .catch((error) => {
         // handle error
         console.error("Error adding property to favorites:", error);
       });
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
        <button onClick={() => handleCreate(house.id)}>Add to Favorites</button>
        <img src={house.image} alt="property" className="property-image" />
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
        <div className="search-input-wrapper">
          <input
            type="text"
            placeholder="Search Address"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <select value={sortBy} onChange={handleSort}>
          <option value="">Sort By</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
          <option value="bedrooms">Bedrooms</option>
          <option value="bathrooms">Bathrooms</option>
        </select>
      </div>
      <div className="property-container">{theProperties}</div>
      <style>{`
        .container {
          padding: 0px;
          background-color: #f9f9f9;
          color: #333;
        }

        .search-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          margin-left: 20px;
        }

       .search-input-wrapper {
          display: flex;
          align-items: center;
          flex-grow: 1;
          border-radius: 5px;
          overflow: hidden;
        }

       input[type="text"] {
          flex: 1;
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-right: none; /* Remove right border to prevent overlapping with the button */
        }

        button {
          padding: 8px 16px;
          font-size: 16px;
          background-color: #315e6b;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        select {
          padding: 8px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 20px;
          background-color: #fff;
          margin-left: 60px;
          margin-right: 20px;
        }

        .property-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 20px;
        }

        .property {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fff;
        }

        .property h2 {
          margin-top: 0;
        }

        .property-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          margin-bottom: 10px;
        }

        .property .address {
          margin-bottom: 10px;
        }

        .property .address-link {
          cursor: pointer;
          color: #315e6b;
          text-decoration: underline;
        }

        .property p {
          margin: 5px 0;
        }

        .modal-wrapper {
          margin-top: 10px;
        }

        .modal-wrapper button {
          background-color: #315e6b;
          color: #fff;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          padding: 8px 16px;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background-color: #fff;
          padding: 20px;
          border-radius: 4px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }

        .close button {
          background-color: white;
          border: none;
          font-size: 20px;
          color: #333;
        }
      `}</style>
    </div>
  );
}

export default BuyersHomePage;
