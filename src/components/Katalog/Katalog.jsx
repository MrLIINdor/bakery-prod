import React from "react";
import rolls from "../../images/rolls.png";
import bagel from "../../images/bagel.png";
import bread from "../../images/bread.png";
import desert from "../../images/desert.png";
import lavash from "../../images/lavash.png";
import matnakash from "../../images/matnakash.png";
import "./Katalog.css";

const katalog = [
  { id: 1, title: "Булочки", src: rolls },
  { id: 2, title: "Курассаны", src: bagel },
  { id: 3, title: "Хлебушек", src: bread },
  { id: 4, title: "Десерт", src: desert },
  { id: 5, title: "Лаваш", src: lavash },
  { id: 6, title: "Матнакаш", src: matnakash },
];

export default function Katalog() {
  return (
    <div id="katalog">
      <div className="Kurasans">
        <p className="P1">Выпечка</p>
      </div>

      <div className="ContenerCatalog">
        {katalog.map((el) => (
          <div className="Card">
            <img className="Img" src={el.src} alt="" />
            <p className="Page">{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
