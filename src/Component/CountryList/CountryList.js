import React from "react";
import "./CountryList.css";
const CountryList = (props) => {
  const { handleClick } = props;
  const { id, price, picture, name } = props.country;
  console.log(props);
  return (
    <div className="countryList">
      <img className="img-fluid" src={picture} alt=""></img>
      <h5 className="nametag">{name}</h5>
      <h6 className="dreamtag">
        Budget: $ <span className="price">{price}</span>
      </h6>
      <button
        onClick={() => props.handleClick(props.country)}
        className="btn btn-success buton"
      >
        Add To Favorite<i class="fa-solid fa-heart-circle-plus"></i>
      </button>
    </div>
  );
};

export default CountryList;
