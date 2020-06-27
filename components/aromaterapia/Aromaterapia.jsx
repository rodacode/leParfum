import React from "react";
import LandingCard from "../landingCard/LandingCard";
import Fade from "react-reveal/Fade";

const Aromaterapia = () => {
  const items = [
    {
        title: 'Aceites esenciales puros',
        imgUrl: '/assets/img/aceites-esenciales-puros.jpg',
        text: 'Aceites esenciales importados de origen con certificado de analisis.'
    },
    {
        title: 'Aceites esenciales semipuros',
        imgUrl: '/assets/img/aceites-esenciales2.jpg',
        text: 'Aceites esenciales con agregados de materias primas especiales.'
    },
    {
        title: 'Aceites esenciales formulados',
        imgUrl: '/assets/img/aceites-esenciales-formulados.jpg',
        text: 'Se utilizan los mismos componentes que los aceites esenciales pero mezclados en una combinacion exclusiva.'

    }
  ];
  return (
    <Fade>
    <div className="aromatizacion section">
        <h2 className="title">Aromaterapia</h2>
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

export default Aromaterapia;
