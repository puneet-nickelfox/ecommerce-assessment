import TYPES from "../types/types";

const initialState = {
  loading: false,
  currentCurrency:"SG",
  productList:null,
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.CURRENCY_TYPE:
      return {
        ...state,
        currentCurrency: action.payload,
      };

      case TYPES.PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };


    default:
      return state;
  }
}
