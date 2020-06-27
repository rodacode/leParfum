import React from "react";
import Fade from "react-reveal/Fade";
import "./filosofia.scss";

const Filosofia = () => {
  return (
    <Fade>
      <section id="filosofia">
        <div className="filosofia__container">
          <div className="title">
            <h2>Filosofia</h2>
          </div>
          <Fade big>
            <div className="quotes-container">
              <p className="quotes">
                El aroma tiene un papel importante que desempeñar en la
                evaluación de las marcas. La mente humana tiene la capacidad de
                asociar, colores, formas, texturas y aromas.{" "}
              </p>
              <p className="quotes">
                Junto con nuestros clientes, trabajando en colaboración
                estrecha, logramos realizar su visión del aroma, creando
                fragancias para los productos de consumo en todo el país.
              </p>
            </div>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default Filosofia;
