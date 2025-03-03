import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Home/Contact/Contact";
import Features from "./pages/Home/Features/Features";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Hero from "./pages/Home/Hero/Hero";
import PricingPlans from "./pages/Home/PricingPlans/PricingPlans";
import Testimonials from "./pages/Home/Testimonials/Testimonials";
import WhatWeDo from "./pages/Home/WhatWeDo/WhatWeDo";
import WhoWeAre from "./pages/Home/WhoWeAre/WhoWeAre";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <WhoWeAre />
      <WhatWeDo />
      <PricingPlans />
      <Testimonials />
      <Contact />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
