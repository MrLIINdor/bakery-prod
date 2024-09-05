import React, { lazy, Suspense } from "react";
import "./contact.css";

const Ymap = lazy(() => import("../../components/Ymap/Ymap"));

function Contact() {
  return (
    <div>
      <div className="ConteinerContact">
        <h2 className="TitleMap">Контакты</h2>
        <div className="MapConteiner">
          <Suspense
            fallback={
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            }
          >
            <Ymap className="Ymap" />
          </Suspense>
          <div className="PageConteiner">
            <p className="Adders">
              Наш адрес <br /> и часы работы
            </p>
            <p>Email: zakaz.pp@gmail.ru</p>
            <p>Телефон: +7 (495) 000-00-00</p>
            <p>
              Адрес: Город Москва,
              <br /> ул. Малинова 12,
              <br /> м. Орехово
            </p>
            <p>Понедельник — четверг: 7:00–17:00</p>
            <p>Воскресенье: выходной</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
