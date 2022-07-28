import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Image1 from "../assets/images/01.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    minHeight: "100vh",
  },
  productCardContainer: {
    backgroundColor: "#f7f8f9",
    borderRadius: 10,
    cursor: "pointer",
    height: 300,
    margin: 20,
    maxWidth: 250,
    minWidth: 200,
    padding: 30,
    textAlign: "center",
    width: "30%",
  },
  productTitle: {
    fontWeight: 700,
    margin: "23px 0 6px",
    maxWidth: 200,
  },
  productPrice: {
    color: "#747a76",
    fontSize: ".8em",
    margin: 0,
  },
  imageStyle: {
    animationName: "gracefulimage",
    animationDuration: "0.3s",
    animationIterationCount: 1,
    animationTimingFunction: "ease-in",
  },
});

function Card(props) {
  const classes = useStyles();
  const { currentCurrency, data } = props;
  const history= useHistory()

  const handleClick = (id) => {
    history.push(`/productdetail?id=${id}`);
  };
  return (
    <div
      className={classes.productCardContainer}
      key={data.id}
      onClick={() => handleClick(data.id)}
    >
      <img
        src={data.image}
        width="200"
        alt="product-image"
        className={classes.imageStyle}
        //style={{"animation-name: gracefulimage; animation-duration: 0.3s; animation-iteration-count: 1; animation-timing-function: ease-in;"}}
      ></img>
      <p className={classes.productTitle}>{data.name}</p>
      <p className={classes.productPrice}>
        {currentCurrency === "SG" ? "SGD" : "MYR"}{" "}
        {parseFloat(
          parseInt(data.SGD) * (currentCurrency === "SG" ? 1 : 3.1)
        ).toFixed(2)}
      </p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentCurrency: state.ecommerce.currentCurrency,
  };
}

export default connect(mapStateToProps, null)(Card);
