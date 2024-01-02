import Outstandings from "./components/templates/Outstandings";
import About from "./components/templates/About";
import Home from "./components/templates/Home";
import Market from "./components/templates/Market";
import Sustainability from "./components/templates/Sustainability";
import Partners from "./components/templates/Partners";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import { useEffect } from "react";
import { SimplyFade } from "simply-fades";

export default function App() {
  useEffect(() => {
    new SimplyFade({ offsetPx: 410 });
  }, []);
  return (
    <>
      <Header />
      <Home />
      <About />
      <Market />
      <Sustainability />
      <Outstandings />
      <Partners />
      <Footer />
    </>
  );
}
