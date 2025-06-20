import Contact from "@/component/Contact/Contact"
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


export default function App(){
  return (
    <section className="">
    <Header />
    <FloatingButton />
    <Hero />
    <Service />
    {/* <Working /> */}
    <OurPresence />
    <About />
    <Review />
    <Contact />
    <Banner />
    <Footer />
    </section>
  )
}