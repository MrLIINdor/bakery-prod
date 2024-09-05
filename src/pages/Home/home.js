import React from "react";
import CarouselImag from "../../components/Carousel/Carousels";
import MeritIcon from "../../components/Merit/Merit";
import "./home.css";
import Katalog from "../../components/Katalog/Katalog";

function Home() {
  return (
    <div>
      <CarouselImag />
      <MeritIcon />
      <Katalog />
    </div>
  );
}

export default Home;
