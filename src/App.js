import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFoundBlock from "./components/NotFoundBlock";


export default function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <NotFoundBlock />
    </>
  );
}