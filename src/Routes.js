import React, { Component } from "react";
import {
    BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import App from "./App";


export default () => {
    return(
        
        <div>
        <BrowserRouter>
      <Route path="/oi" element={<App />} />
    </BrowserRouter>
        </div>
    );
}