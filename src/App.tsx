import Header from "./components/organisms/Header";
import Outstandings from "./components/templates/Outstandings";
import About from "./components/templates/About";
import Home from "./components/templates/Home";
import Market from "./components/templates/Market";
import Sustainability from "./components/templates/Sustainability";
import Partners from "./components/templates/Partners";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Market />
      <Sustainability />
      <Outstandings />
      <Partners />
    </>
  );
}
