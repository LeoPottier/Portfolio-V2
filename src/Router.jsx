import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

function Router() {
  return (
    <React.StrictMode>
      <BrowserRouter basename="/Portfolio-V2/">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Router;
