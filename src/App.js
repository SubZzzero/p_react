import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CartBlock from "./components/CartBlock";



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
          <Route path="/cart" element={<CartBlock />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
}