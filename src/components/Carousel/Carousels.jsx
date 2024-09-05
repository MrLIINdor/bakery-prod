import React from "react";
import { Carousel, Button } from "react-bootstrap";
import bgItemKurasan from "../../images/backgraund.png";
import "./Carousels.css";

function CarouselImag() {
  return (
    <Carousel className="Carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 imgesa"
          src={bgItemKurasan}
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start mb-5">
          <h5 className="TitleCarisel fs-1 text-nowrap">Pani Provance</h5>
          <p className="text-start w-75">
            Самая вкусная выпечка, которую вы когда-либо видели
          </p>
          <Button className="BtnCatalog">Каталог</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgesa"
          src={bgItemKurasan}
          alt="First slide"
        />
        <Carousel.Caption className="d-flex flex-column align-items-start mb-5">
          <h5 className="TitleCarisel fs-1 text-nowrap">
            Специально для Вас, с любовью!
          </h5>
          <p className="text-start w-75">Печем хлеб с 1998 года.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImag;
