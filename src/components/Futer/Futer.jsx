import React from "react";
import logo from "../../images/black_logo.svg";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import phone from "../../images/phone.svg";
import "./Futers.css";

export default function Futer() {
  return (
    <div className="Futer">
      {/* <div> */}
      <img className="LogoFuter" src={logo} alt="" />
      {/* </div> */}

      <div className="Way">
        <p className="Pages">
          Адрес: Город Москва, <br />
          ул. Малинова 12, <br />
          м. Орехово
        </p>
        <p className="PagesEmail">Email: zakaz.pp@gmail.ru</p>
        <p className="PagesRights">
          © «Pani Provance» Все права защищены 2016–2021
        </p>
      </div>

      <div className="SocialNetwork">
        <div className="PagesBlock">
          <img className="IconsPhone" src={phone} alt="" />
          <p className="PagesCall">+7 985 954 33 55</p>
        </div>

        <div className="SocialBlock">
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="ArtIcons" src={instagram} alt="" />
          </a>
          <a
            href="https://twitter.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="ArtIcons" src={twitter} alt="" />
          </a>
          <a
            href="https://ru-ru.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="ArtIcons" src={facebook} alt="" />
          </a>
        </div>
        <p className="PagesTime">Время работы пн - чт 7:00 - 17:00</p>
      </div>
    </div>
  );
}
