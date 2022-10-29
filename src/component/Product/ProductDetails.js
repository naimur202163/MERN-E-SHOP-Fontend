import React, { Fragment, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import "./ProductDetails.css";
import { Rating } from "@material-ui/lab";
const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { product, error } = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id, error]);

  return (
    <Fragment>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  className="CarouselImage"
                  key={i}
                  src={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
          <p>Product # {product._id}</p>
        </div>
        <div className="detailsBlock-2">
          <Rating />
          <span>{product.numOfReviews} Reviews</span>
        </div>
        <div className="detailsBlock-3">
          <h1>{`${product.price}`}</h1>

          <div className="detailsBlock-1">
            <div className="detailsBlock-1-1">
              <button>-</button>
              <input value="1" type="number" />
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
