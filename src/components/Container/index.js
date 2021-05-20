import React from "react";
import Header from "../Header";
import Card from "../Card";
import Footer from "../Footer";

function Container(props) {
  return (
    <div className="container-fluid">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default Container;
