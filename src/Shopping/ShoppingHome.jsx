import React from "react";
import { Link } from "react-router-dom";

const ShoppingHome = () => {
  return (
    <div className="product-home">
      <Link to="/mens">
        <h4>Men's Section</h4>
        <img
          src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          height={150}
          width={150}
          alt="mens"
        />
      </Link>
      <Link to="/womens">
        <h4>Women's Section</h4>
        <img
          src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
          height={150}
          width={150}
          alt="women"
        />
      </Link>
      <Link to="/jewelery">
        <h4>Jewelery Section</h4>
        <img
          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
          height={150}
          width={150}
          alt="mens"
        />
      </Link>
      <Link to="/electronics">
        <h4>Electronics Section</h4>
        <img
          src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
          height={150}
          width={150}
          alt="men"
        />
      </Link>
    </div>
  );
};

export default ShoppingHome;
