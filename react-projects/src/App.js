import React from "react";
import Header from "./components/Header";
import MainApp from "./components/MainApp";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, ResturantMenu } from "./pages";
import Tabs from "./step_form/Tabs";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Header />

    //   <Routes>
    //     <Route path="/" element={<MainApp />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/resturant/:resturant" element={<ResturantMenu />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <Tabs />
    </>
  );
};

export default App;
