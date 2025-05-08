"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const opciones = [
  {
    titulo: "Para el Hogar",
    descripcion: "Productos pensados para una limpieza ecológica y segura en el hogar.",
    link: "/productos/para-el-hogar",
    imagen: "/hogar.jpg",
  },
  {
    titulo: "Industriales",
    descripcion: "Soluciones eficientes y biodegradables para entornos profesionales.",
    link: "/productos/industriales",
    imagen: "/industriales.jpg",
  },
  {
    titulo: "Estética Vehicular",
    descripcion: "Cuidá tu vehículo y el planeta con productos especializados.",
    link: "/productos/estetica-vehicular",
    imagen: "/vehicular.jpg",
  },
];

export default function ProductosPage() {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#e3bf5f] mb-4">
          Elegí una categoría de productos
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Descubrí nuestras líneas de limpieza sustentable pensadas para diferentes necesidades.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {opciones.map((opcion, i) => (
          <motion.div
            key={opcion.titulo}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeInUp}
            className="bg-[#1b4832] hover:bg-[#265f43] transition text-white rounded-xl overflow-hidden shadow-md hover:shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-52"
            >
              <Image
                src={opcion.imagen}
                alt={opcion.titulo}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold text-[#e3bf5f] mb-2">{opcion.titulo}</h2>
              <p className="text-sm mb-4 text-gray-200">{opcion.descripcion}</p>
              <Link
                href={opcion.link}
                className="inline-block mt-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-sm text-sm font-medium"
              >
                Ver productos
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
