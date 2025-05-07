"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faTriangleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const cards = [
  {
    titulo: "Limpieza sustentable",
    descripcion: "Guía rápida para comenzar de forma ecológica.",
    icono: faLeaf,
    link: "/blog",
  },
  {
    titulo: "Errores comunes",
    descripcion: "Evitá los químicos más dañinos al limpiar.",
    icono: faTriangleExclamation,
    link: "/blog",
  },
  {
    titulo: "¿Qué es biodegradable?",
    descripcion: "Aprendé cómo reconocer productos responsables.",
    icono: faCircleInfo,
    link: "/blog",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">
          Blog / Consejos ecológicos
        </h2>
        <p className="text-lg text-gray-300">
          Consejos simples para transformar tu limpieza en algo consciente.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#183d2b] rounded-2xl p-6 flex items-start gap-4 shadow hover:shadow-lg transition"
          >
            <FontAwesomeIcon
              icon={card.icono}
              className="text-[#e3bf5f] text-3xl mt-1"
            />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-[#e3bf5f] mb-1">
                {card.titulo}
              </h3>
              <p className="text-sm text-white mb-2">{card.descripcion}</p>
              <Link
                href={card.link}
                className="text-sm text-white font-medium hover:underline underline-offset-4 flex items-center gap-1"
              >
                Learn More
                <span className="text-[#e3bf5f]">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
