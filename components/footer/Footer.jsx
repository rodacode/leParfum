import React from "react";
import './footer.scss';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer__tels">
                    <p><span className="tel">+54 4752-4438 / 4754-4481 </span><span className="whatsapp">1527080866
                </span></p>
                </div>
                <div className="footer__social">
                    <ul className="social-icons">
                        <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li>
                        <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;