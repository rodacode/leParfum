import React from "react";
import LandingCard from "../landingCard/LandingCard";
import Fade from "react-reveal/Fade";
import "./aromatizacion0.scss";

const Aromatizacion0 = () => {
  const items = [
    {
      title: "Sahumerios",
      imgUrl: "/assets/img/sahumerios.jpg",
      text: "Desarrollamos aromas exclusivos con las mejores materias primas.",
    },
    {
      title: "Velas",
      imgUrl: "/assets/img/velas.jpg",
      text:
        "En este tipo de soporte debemos tener en cuenta dos propiedades principales la disoliucion de la esencia en la parafina y el proceso de quema en la mecha.",
    },
    {
      title: "Hornillos",
      imgUrl: "/assets/img/hornillos.jpg",
      text:
        "Productos pensados para lograr un adecuado difusion e impacto en todo tipo de hornillos.",
    },
  ];
  return (
    <Fade>
      <div className="aromatizacion section">
        <h2 className="title">Aromatización0</h2>
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

export default Aromatizacion0;
