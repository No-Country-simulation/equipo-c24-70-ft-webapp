import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </>
  );
}

export default App;
