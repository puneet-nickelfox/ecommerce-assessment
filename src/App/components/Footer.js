import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Select } from "@material-ui/core";
import {connect} from 'react-redux';
import {updateCurrency} from '../../redux/actions/ecommerceActions'


const useStyles = makeStyles({
  footer: {
    backgroundColor: "#fff",
    borderTop: "1px solid #e9e6e6",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    left: 0,
    padding: "20px 0",
    position: "fixed",
    right: 0,
  },
  trademark: {
    marginLeft: 50,
    color: "#747a76",
    fontSize: ".8em",
  },
});
function Footer(props) {
  const classes = useStyles();

  const handleChange=(e)=>{
    console.log(e.target.value)
    props.updateCurrency(e.target.value)
  }
  return (
    <div className={classes.footer}>
      <p className={classes.trademark}>© 2022 DemoStore</p>
      {/* <p>
        To complete checkout on Ablr's staging environment, refer to our{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.ablr.com/docs/ablr/docs/Test-Credentials.md"
        >
          Test Credentials
        </a>{" "}
        documentation.
      </p> */}

      <select onChange={(e)=>handleChange(e)}>
      <option value="SG">Singapore</option>
        <option value="MY">Malaysia</option>
       
      </select>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCurrency: (data) => dispatch(updateCurrency(data)),

 
});

export default connect(null, mapDispatchToProps)(Footer);
