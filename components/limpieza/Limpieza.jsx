import React from "react";
import LandingCard from "../landingCard/LandingCard";
import Fade from "react-reveal/Fade";
import "./limpieza.scss";

const Limpieza = () => {
  const items = [
    {
      title: "Limpieza de pisos",
      imgUrl: "/assets/img/limpieza_de_pisos.jpg",
      text:
        "La limpieza para pisos requiere de esencias con una salida potente y alta perdurabilidad en esos aspectos apuntamos en nuestro trabajo diario.",
    },
    {
      title: "Suavizantes",
      imgUrl: "/assets/img/suavizantes.jpg",
      text:
        "Las formulaciones  para estos producto requiere utilizar materias primas  que soporte el lavado y permanescan en la tela.",
    },
    {
      title: "Detergentes",
      imgUrl: "../assets/img/detergentes.jpg",
      text: "Productos pensados especialmente para esta aplicacion.",
    },
  ];
  return (
    <Fade>
      <div className="limpieza section">
        <h2 className="title">Limpieza</h2>
        <div className="cards__container">
          {items.map((item) => (
            <LandingCard
              key={item.title}
              title={item.title}
              content={item.text}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Limpieza;
