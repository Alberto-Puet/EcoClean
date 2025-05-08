'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const images = [
  '/hero1.jpg',
  '/hero2.jpg',
  '/hero3.jpg',
  '/hero4.jpg',
  '/hero5.jpg'
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Imagen de fondo con transición */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out z-0
            ${index === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-[4000ms] ease-in-out
              ${index === current ? 'scale-100' : 'scale-110'}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}

      {/* Contenido */}
      <div className="relative  z-20 flex flex-col gap-7 items-center justify-center h-full text-white text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-4xl font-semibold leading-snug"
        >
          Limpieza que cuida tu entorno y el planeta.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-lg md:text-2xl font-light text-slate-200"
        >
          Productos de limpieza ecológicos, biodegradables y altamente efectivos
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link
            href="/asesoria"
            className="bg-[#1b4832] hover:bg-[#2a3a32] text-[#e3bf5f]  transition-all duration-300 px-6 py-3 rounded-md shadow-lg font-medium"
          >
            Pedí una asesoría
          </Link>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-72 z-[15] pointer-events-none ">
  <div className="w-full h-full bg-gradient-to-t from-[#0D1F1C] via-[#0c1d1a]/80  to-transparent" />
</div>


    </section>
  );
}
