import Image from "next/image";
import Hero from "./_components/Hero";
import Feature from "./_components/Feature";
import Testimonials from "./_components/Testimonial";
import About from "./_components/About";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <Feature/>
    <Testimonials/>
    <About/>
    <Contact/>
    </>
  );
}
