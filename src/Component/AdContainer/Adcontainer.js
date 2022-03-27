import React from "react";
import "./Adcontainer.css";
const Adcontainer = (props) => {
  const { favorite } = props;

  return (
    <div className="add-container">
      <h4 className="heading">Your Favourite Destination</h4>
      <h3 className="dreamtag">Selected Country: {favorite.length}</h3>
      {favorite.map((item) => (
        <div key={item.id}>
              <img className="img-fluid" src={item.picture} alt=""></img>
              
        </div>
      ))}
      <div>{favorite.length === 0 && <div>Cart is Empty</div>}</div>
    </div>
  );
};

export default Adcontainer;
