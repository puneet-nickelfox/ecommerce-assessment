import React from "react";

const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const ProductList = React.lazy(() => import("./pages/ProductList"));


const route = [
 
  { path: "/productlist", exact: true, name: "list", component: ProductList },
  {
    path: "/productdetail",
    exact: true,
    name: "detail",
    component: ProductDetail,
  },
 
];

export default route;