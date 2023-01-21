import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    <div><Search/></div>
      <div>
        <Carousel/>
      </div>
<div><Card/></div>
<div><Card/></div>
<div><Card/></div>
      <div>
        <Footer />
      </div>
      
    </>
  );
}
