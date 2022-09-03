import Home from "src/pages/home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
type Props = {};

function AppRouter({}: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
