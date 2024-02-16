import React from "react";

const Productdetails = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <ul>
          <li>{props.one.title}</li>
          <li>{props.one.price}</li>
        </ul>
      </div>
      <img src={props.one.img}></img>
      <button
        onClick={() => {
          props.test({});
        }}
      >
        go back to all products
      </button>
    </div>
  );
};

export default Productdetails;
