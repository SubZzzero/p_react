import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";



export const SearchContext = React.createContext("")


export default function App() {
  const [inputSearch, setInputSearch] = useState("")

  return (
    <>
      <SearchContext.Provider value={{ inputSearch, setInputSearch }}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}