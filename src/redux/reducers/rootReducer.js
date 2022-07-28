import { combineReducers } from "redux";
import ecommerceReducer from "./ecommerceReducer";

export default combineReducers({
  ecommerce:ecommerceReducer,
});
