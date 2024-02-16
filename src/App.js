import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Aipowered from './components/Aipowered';
import Uiniqfigure from './components/Uiniqfigure';
import Blockchain from './components/Blockchain';
import Nexai from './components/Nexai';
import Whatnex from './components/Whatnex';
import Token from './components/Token';
import Ready from './components/Ready';
import Footer from './components/Footer';
import Backtop from './components/Backtop';
import { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from './components/Loader';
function App() {
  const [preloder, setpreloder] = useState(true)
  setTimeout(() => {
    setpreloder(false)
    document.body.classList.remove("overflow-hidden")

  }, 4000);
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      {preloder && <Loader />}
      <Header />
      <Aipowered />
      <Uiniqfigure />
      <Blockchain />
      <Nexai />
      <Whatnex />
      <Token />
      <Ready />
      <Footer />
      <Backtop />
    </>
  );
}

export default App;
