import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const Content = (props) => (
  <div
    style={{
      padding: "32px 50px",
      backgroundColor: "white",
    }}
  >
    {props.children}
  </div>
);

const AppContainer = (props) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root} >
        <div className={classes.contentHeader}>
          <Header  />
          <Divider/>
          <Content>{props.children}</Content>
          <Footer/>
        </div>
      </div>
    </div>
  );
};



export default withRouter(AppContainer);
