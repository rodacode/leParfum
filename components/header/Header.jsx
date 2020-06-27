import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "./header.scss";

const Header = () => {
  return (
    <section className="main-container container-fluid">
      <Fade big>
        <div className="header-container__contact">
          <div className="tels">
              <span className="tel">+54 4752-4438 / 4754-4481 </span>
              <span className="whatsapp">1527080866</span>
          </div>
          <div className="social">
            <ul className="social-icons">
              <li>
                <a href="#" className="icoRss" title="Rss">
                  <i className="fa fa-rss"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icoFacebook" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="icoTwitter" title="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
      <div className="header-container">
        <div className="header-container__nav">
          <Zoom>
            <div className="logo-container">
              <h1 className="logo">Le Parfum</h1>
              <h2 className="creadores">Creadores de aromas</h2>
            </div>
            <div className="menu-container"></div>
          </Zoom>
        </div>
        <div className="header-container__text">
          <Fade big>
            <h2 className="header__quote">
              Empleamos los mejores talentos de la industria <br /> y las
              mejores materias primas.
            </h2>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Header;
