import Image from "next/image";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Productos from "./components/Productos";
import ClientesCorporativos from "./components/ClientesCorporativos";
import Blog from "./components/Blog";
import Div from "./components/Division";
import Testimonios from "./components/Testimonios";
import FAQs from "./components/FAQs";

export default function Home() {
  return (
    <section className="">
      <Hero/>
      <Nosotros/>
      <Div/>
      <Productos/>
      <Div/>
      <ClientesCorporativos/>
      <Div/>
      <Testimonios/>
      <Div/>
      <FAQs/>
      <Blog/>
    </section>
  );
}
