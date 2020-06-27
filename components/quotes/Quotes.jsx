import React from "react";
import Fade from "react-reveal/Fade";
import "./quotes.scss";

const Quotes = () => {
  return (
    <Fade>
      <section id="quotes">
        <div className="quotes__container">
          <Fade big>
            <div className="quotes-container">
              <div className="quote">
                <h3 className="quote__h3">
                  El aroma tiene un papel importante que desempeñar en la
                  evaluación de las marcas.
                </h3>
                <h3 className="quote__h3">
                  La mente humana tiene la capacidad de asociar, colores,
                  formas, texturas y aromas.
                </h3>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default Quotes;
