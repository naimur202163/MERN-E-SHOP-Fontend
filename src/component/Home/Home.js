import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import Product from "./ProductCard";
import MetaData from "../layout/MetaData";
export default function Home() {
  const product = {
    edit: false,
    isHalf: true,
    name: "Blue  Tshirt",
    images: [{ url: "https://i.ibb.co/hDysN82/top1.jpg" }],
    price: "$300",
    _id: "naimur",
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <Fragment>
      <MetaData title="Ecommerce" />
      <div className="banner">
        <p>Wellcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll
            <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </Fragment>
  );
}
