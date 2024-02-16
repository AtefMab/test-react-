import React, { useState } from "react";
import Productdetails from "./productdetails";

const Allproducts = (props) => {
  return (
    <div>
      {props.data.map((e) => {
        return (
          <ul>
            <li>{e.title}</li>
            <li>{e.price}</li>
            <button
              onClick={() => {
                props.test(e);
              }}
            >
              see image
            </button>
          </ul>
        );
      })}
    </div>
  );
};

export default Allproducts;
