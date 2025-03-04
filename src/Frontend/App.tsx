import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./pages/Contact/Contact/Contact";
import Features from "./pages/Home/Features/Features";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Hero from "./pages/Home/Hero/Hero";
import PricingPlans from "./pages/Home/PricingPlans/PricingPlans";
import Testimonials from "./pages/Home/Testimonials/Testimonials";
import WhatWeDo from "./pages/Home/WhatWeDo/WhatWeDo";
import WhoWeAre from "./pages/Home/WhoWeAre/WhoWeAre";
import AboutUs from "./pages/About/AboutUs/AboutUs";
import OurServices from "./pages/OurServices/OurServices/OurServices";
import Login from "./pages/Login/Login/Login";
import OurTeam from "./pages/About/OurTeam/OurTeam";
import FAQs from "./pages/OurServices/FAQs/FAQs";
import WhyChooseUs from "./pages/Contact/WhyChooseUs/WhyChooseUs";

const Home = () => (
  <>
    <Hero />
    <Features />
    <WhoWeAre />
    <WhatWeDo />
    <PricingPlans />
    <Testimonials />
  </>
);

const About = () => (
  <>
    <AboutUs />
    <OurTeam />
  </>
);

const Services = () => (
  <>
    <OurServices />
    <FAQs />
  </>
);

const ContactPage = () => (
  <>
    <WhyChooseUs />
    <Contact />
  </>
);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
