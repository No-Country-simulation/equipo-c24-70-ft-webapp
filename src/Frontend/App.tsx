import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import PricingPlans from "./components/PricingPlans/PricingPlans";
import Testimonials from "./components/Testimonials/Testimonials";
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
      <PricingPlans />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
