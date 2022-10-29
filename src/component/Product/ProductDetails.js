import React from "react";
import { Fragment } from "react";
import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getProductDetails } from "./../../actions/productAction";

export default function ProductDetails({ match }) {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  React.useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Fragment>
      <div className="productDetails">
        <div>
          <Carousel></Carousel>
          {product.images &&
            product.images.map((item, i) => (
              <img
                className="CarouselImage"
                key={item.url}
                src={item.url}
                alt={item.i}
              />
            ))}
          <h2>Product Details</h2>
        </div>
      </div>
    </Fragment>
  );
}
