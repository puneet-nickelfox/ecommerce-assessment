import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import DemoStore from "../assets/logo/demo-store.png";

const useStyles = makeStyles({
  root: (props) => ({
    height: 70,
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position:"relative"
  }),
  contentHeader: {
    position:"relative",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
  },
  logo: {
   
    width: 96,
    height: 40,
  
  },
});
function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <MenuIcon />
      </div>
      <div className={classes.contentHeader}>
          <div>
        <img className={classes.logo} src={DemoStore} alt="storeicon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
