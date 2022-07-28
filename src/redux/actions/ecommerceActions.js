import TYPES from "../types/types";

export const updateCurrency = (data) => ({
  type: TYPES.CURRENCY_TYPE,
  payload: data,
});

export const updateProductList = (data) => ({
  type: TYPES.PRODUCT_LIST,
  payload: data,
});
