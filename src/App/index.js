import React, { Component, Suspense, useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import AppContainer from "./AppContainer";
import "./theme/index.scss";

const Router = (props) => {
  const authPages = publicRoutes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ) : null;
  });

  return (
    <Suspense >
      <Switch>
        <Redirect exact from="/" to="/productlist" />
        {authPages}
      </Switch>
    </Suspense>
  );
};

const App = (props) => {

  return (
      <AppContainer>
      <Router />
      </AppContainer>
  );
};


export default App;
