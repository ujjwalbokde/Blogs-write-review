import Image from "next/image";
import Hero from "./_components/Hero";
import Feature from "./_components/Feature";
import Categories from "./_components/Categories";
import Testimonials from "./_components/Testimonial";
import About from "./_components/About";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <>
    <Hero/>
    <Feature/>
    <Categories/>
    <Testimonials/>
    <About/>
    <Contact/>
    </>
  );
}
