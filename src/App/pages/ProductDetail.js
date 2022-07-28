import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const useStyles = makeStyles({
  productPageContainer: {
    display: "flex",
    marginBottom: "100px",
    maxWidth: "1000px",
    padding: "0 100px",
  },
  productText: {
    minWidth: "50%",
    paddingRight: 20,
    textAlign: " left",
  },
  productImage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minWidth: "50%",
  },
  productTitle: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    fontSize: "1.3em",
    fontWeight: 700,
    justifyContent: "flex-start",
  },
  productRating: {
    marginLeft: 0,
    paddingTop: 0,
  },
  productPrice: {
    color: "#747a76",
    fontSize: ".9em",
  },
  productDescription: {
    fontSize: ".9em",
    lineHeight: "1.5em",
  },
  addToCartBtn: {
    backgroundColor: "#000",
    border: "none",
    borderRadius: "10px",
    boxShadow: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "1.1em",
    marginTop: "10px",
    padding: "15px 50px",
  },
  imageStyle: {
    animationName: "gracefulimage",
    animationDuration: "0.3s",
    animationIterationCount: 1,
    animationTimingFunction: "ease-in",
    height: "auto",
    maxHeight: 450,
    maxWidth: 500,
    minWidth: 300,
    objectFit: "scale-down",
  },
});

function ProductDetail(props) {
  const { productList, currentCurrency } = props;
  const classes = useStyles();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [finalObj, setFinalObj] = useState(null);

  console.log(id);
  useEffect(() => {
    console.log(productList, id, "lisstt");
    let obj = productList.filter((item) => item.id === parseInt(id));
    console.log(obj);
    setFinalObj(obj);
  }, []);

  const handleCheckout = (id, price) => {
    let payload = {
      store_id:
        currentCurrency === "SG" ? "SG-S-NPQPBAWN2N6J" : "MY-S-3B7VWDJVBTDR",
      amount: price,
      merchant_reference_id: "string",
      redirect_url: "http://localhost:3000/productdetail?id=107",
      expires_in_minutes: 5,
    };
    let headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          currentCurrency === "SG"
            ? "cEYwXkM6upcfgbC7ZP8vA9ZOMbnAkk3T3pPjMYM5"
            : "ClNI1Q9LujtJUlOqF8taVQyz1OHiewgkxa8cVZLt"
        }`,
      },
    };
    Axios.post(
      "https://api.uat.ablr.com/api/v2/public/merchant/checkout/",
      payload,
      headers
    )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data.checkout_url);
          window.open(res.data.data.checkout_url, "_blank");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.productPageContainer}>
      <div className={classes.productText}>
        <div className={classes.productTitle}>
          <h2>{finalObj?.[0]?.name}</h2>
          <div className={classes.productRating}>
            <ReactStars
              count={finalObj?.[0]?.rating}
              size={24}
              activeColor="#ffd700"
            />
          </div>
        </div>
        <p className={classes.productPrice}>
          {currentCurrency === "SG" ? "SGD" : "MYR"}{" "}
          {parseFloat(
            parseInt(finalObj?.[0]?.SGD) * (currentCurrency === "SG" ? 1 : 3.1)
          ).toFixed(2)}
        </p>
        <p className={classes.product}>{finalObj?.[0]?.description}</p>
        <div>
          <button
            className={classes.addToCartBtn}
            onClick={() =>
              handleCheckout(
                finalObj?.[0]?.id,
                parseFloat(
                  parseInt(finalObj?.[0]?.SGD) *
                    (currentCurrency === "SG" ? 1 : 3.1)
                ).toFixed(2)
              )
            }
          >
            Checkout
          </button>
        </div>
      </div>
      <div className={classes.productImage}>
        <img
          src={finalObj?.[0]?.image}
          alt={"productimage"}
          className={classes.imageStyle}
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    productList: state.ecommerce.productList,
    currentCurrency: state.ecommerce.currentCurrency,
  };
}

export default connect(mapStateToProps, null)(ProductDetail);
