import Head from "next/head";
import Filosofia from "../components/filosofia/Filosofia";
import Header from "../components/header/Header";
import Aromatizacion from "../components/aromatizacion/Aromatizacion";
import Aromatizacion0 from "../components/aromatizacion0/Aromatizacion0";
import Limpieza from "../components/limpieza/Limpieza";
import Cosmetica from "../components/cosmetica/Cosmetica";
import Aromaterapia from "../components/aromaterapia/Aromaterapia";
import Contacto from "../components/contacto/Contacto";
import Footer from "../components/footer/Footer";
import Quotes from "../components/quotes/Quotes";
import { Container } from 'reactstrap';

import "../styles/index.scss";


const Home = () => (
  <div className="containerWithHead">
    <Head>
      <title>Le Parfum</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="http://fonts.googleapis.com/css?family=Italianno|Quintessential|Bilbo+Swash+Caps"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/yeti/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-chJtTd1EMa6hQI40eyJWF6829eEk4oIe7b3nNtUni7VxA3uHc/uIM/8ppyjrggfV"
        crossOrigin="anonymous"
      ></link>
    </Head>

    <main>
    <Container>
    <div className="container">
        <Header />
        <Filosofia />
        <Aromatizacion />
        <Aromatizacion0 />
        <Quotes />
        <Limpieza />
        <Cosmetica />
        <Aromaterapia />
        <Contacto />
        <Footer />
      </div>
      </Container>
    </main>
  </div>
);

export default Home;
