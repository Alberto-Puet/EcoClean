"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const entradasBlog = [
  {
    titulo: "Cómo elegir productos de limpieza ecológicos para tu hogar",
    descripcion:
      "Descubrí por qué los productos biodegradables son la mejor opción para cuidar tu salud y el medio ambiente.",
    fecha: "06 May",
    imagen: "/blog1.jpg",
    link: "/blog/limpieza-ecologica",
  },
  {
    titulo: "5 beneficios de usar detergente natural en la cocina",
    descripcion:
      "Menos químicos, más seguridad: conocé las ventajas de cambiar tu detergente por una alternativa sostenible.",
    fecha: "28 Abr",
    imagen: "/blog2.jpg",
    link: "/blog/detergente-natural",
  },
  {
    titulo: "Reducí tu huella ambiental con hábitos de limpieza responsables",
    descripcion:
      "Pequeñas acciones diarias que, combinadas con productos biodegradables, marcan una gran diferencia.",
    fecha: "15 Abr",
    imagen: "/blog3.jpg",
    link: "/blog/huella-ambiental",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Últimas novedades</h2>
        <p className="text-lg text-gray-300">
          Consejos, novedades y curiosidades sobre el mundo de la limpieza ecológica y responsable.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {entradasBlog.map((entrada, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1b4832] rounded-2xl shadow overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <Image
                src={entrada.imagen}
                alt={entrada.titulo}
                width={500}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute bottom-2 left-4 bg-[#7c865e] text-white w-14 h-14 rounded-full flex flex-col items-center justify-center text-sm font-bold shadow-md z-10">
                <span>{entrada.fecha.split(" ")[0]}</span>
                <span className="text-xs ">{entrada.fecha.split(" ")[1]}</span>
              </div>
            </div>
            <div className="p-6 pt-8">
              <h3 className="text-lg font-bold mb-2">{entrada.titulo}</h3>
              <p className="text-sm text-gray-300 mb-4">{entrada.descripcion}</p>
              {/* <Link
                href={entrada.link}
                className="text-sm font-medium text-[#e3bf5f] hover:underline flex items-center gap-1"
              >
                Leer más <span>➔</span>
              </Link> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
