import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartBlock from "./components/CartBlock";

export default function App() {
  const [inputSearch, setInputSearch] = useState("")
  return (
    <>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />

      <Routes>
        <Route path="/" element={<Home inputSearch={inputSearch} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<CartBlock />} />
      </Routes>
    </>
  );
}