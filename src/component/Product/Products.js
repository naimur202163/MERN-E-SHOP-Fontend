import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Home/ProductCard";
import Loader from "../layout/Loader/Loader";
import MetaData from "../layout/MetaData";
import { getProduct } from "./../../actions/productAction";

export default function Products() {
  const { loading, products, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct);
  }, [dispatch, error, alert]);

  console.log(products);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
