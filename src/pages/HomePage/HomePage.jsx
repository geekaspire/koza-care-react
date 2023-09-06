// import React from "react";

import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import AppointmentFormSection from "../../components/AppointmentFormSection/AppointmentFormSection";
import AppointmentSection from "../../components/AppointmentSection/AppointmentSection";
import BenefitsSection from "../../components/BenefitsSection/BenefitsSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <AboutUsSection />
      <AppointmentSection />
      <ServicesSection />
      <AppointmentFormSection />
      <TestimonialsSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
