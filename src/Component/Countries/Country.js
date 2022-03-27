import React, { useEffect, useState } from "react";
import CountryList from "../CountryList/CountryList";
import "./Country.css";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [favorite, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleClick = (country) => {
    console.log(country);
    const newFav = [...favorite, country];
    setCart(newFav);
  };
  return (
    <div className="container-fluid">
      {/* list Container Section */}
      <div className="row">
        <h2 className="container-fluid dreamtag">Add Your Dream Destination</h2>
        <div className="col-lg-9 col-sm-12 list-container">
          {countries.map((country) => (
            <CountryList
              key={country.id}
              country={country}
              handleClick={handleClick}
            ></CountryList>
          ))}
        </div>

        {/* Add Container Section */}
        <div className="col-lg-3 col-sm-12">
          <div className="add-container">
            <h4 className="heading">This is Add-Container</h4>
            <h3>Selected Country: {favorite.length}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
