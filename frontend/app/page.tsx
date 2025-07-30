import Contact from "@/component/Contactform/Contact"
import Footer from "@/component/Footer/footer"
import Header from "@/component/Header/header"
import Review from "@/component/Review/Review"
import About from "@/component/About/About"
import OurPresence from "@/component/OurPresence/OurPresence"
import Service from "@/component/Services/Service"
import Working from "@/component/Working/Working"
import Hero from "@/component/Hero/Hero"
import FloatingButton from "@/component/Button/FloatingButton"
import Banner from "@/component/Banners/Banner"
import MediisistHero from "@/component/Hero/Hero2"
import TestimonialsSection from "@/component/Review/Review"
import FAQAccordion from "@/component/FAQ/FAQ"
// import MedicalServices from "@/component/MedicalServices/MedicalServices"
import MedicalSpecialtiesCard from "@/component/MedicalServices/MedicalServices"
import FeaturedDoctor from "@/component/FeaturedDoctor/FeatureDoctor"

export default function App(){
  return (
    <>
    {/* <Header /> */}
    <FloatingButton />
    <MediisistHero />
    {/* <Hero /> */}
    {/* <MedicalServices /> */}
    <MedicalSpecialtiesCard />
    <FeaturedDoctor />
    {/* <Service /> */}
    {/* <Working /> */}
    <OurPresence />
    <About />

    <TestimonialsSection />
    <FAQAccordion />
    {/* <Review /> */}
    {/* <Contact /> */}
    {/* <Banner /> */}
    {/* <Footer /> */}
    </>
  )
}