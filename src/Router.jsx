import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from './Components/Header/Header'

import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function Router() {
  return (
      <React.StrictMode>
          <BrowserRouter basename="/Portfolio">
              <Header />
              <Routes>
                  <Route exact path="/Portfolio" element={<Home />} />   
              </Routes>
              <Footer />
          </BrowserRouter>
      </React.StrictMode>
  )   
}

export default Router
