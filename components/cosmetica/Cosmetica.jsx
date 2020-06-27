import React from "react";
import LandingCard from "../landingCard/LandingCard";
import Fade from "react-reveal/Fade";
import "./cosmetica.scss";

const Cosmetica = () => {
  const items = [
    {
      title: "Cremas",
      imgUrl: "/assets/img/cosmetica_cremas.jpg",
      text:
        "Esencias especialmente desarrolladas para esta aplicaion, formuladas con ingredientes de alta calidad e hipoalergenicos.",
    },
    {
      title: "Lociones",
      imgUrl: "/assets/img/lociones.jpg",
      text:
        "Las formulaciones exclusivas Le Parfum permiten obtener un producto de alta difusividad y excelente  performance.",
    },
    {
      title: "Colonias",
      imgUrl: "/assets/img/colonias.jpg",
      text:
        "Productos utilizando las mejores materias primas aprobadas por IFRA e hipoalergenicas.",
    },
  ];
  return (
    <Fade>
        <div className="aromatizacion section">
          <h2 className="title">Cosmetica</h2>
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

export default Cosmetica;
