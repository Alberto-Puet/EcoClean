"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HuellaAmbientalPage() {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#e3bf5f]">
          Reducí tu huella ambiental con hábitos de limpieza responsables
        </h1>

        <p className="text-gray-300 mb-8">
          Pequeñas acciones diarias que, combinadas con productos biodegradables,
          marcan una gran diferencia.
        </p>

        <div className="relative w-full h-80 rounded-xl overflow-hidden mb-10">
          <Image
            src="/blog3.jpg"
            alt="Limpieza ecológica en el hogar"
            fill
            className="object-cover"
          />
        </div>

        <motion.article
          className="space-y-6 text-gray-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p>
            Adoptar hábitos de limpieza responsables no solo mejora tu entorno,
            también contribuye activamente a la protección del medio ambiente. Con
            cambios simples podés lograr un impacto positivo en el planeta.
          </p>

          <h2 className="text-2xl font-semibold text-[#e3bf5f]">
            1. Elegí productos biodegradables
          </h2>
          <p>
            Utilizá limpiadores que se degraden naturalmente sin dejar residuos
            tóxicos. Estos productos están formulados para ser efectivos y seguros
            tanto para tu salud como para los ecosistemas acuáticos.
          </p>

          <h2 className="text-2xl font-semibold text-[#e3bf5f]">
            2. Reducí el uso de plásticos
          </h2>
          <p>
            Reutilizá envases, optá por recargas y elegí empaques reciclables o
            compostables. Cada botella que evitás usar suma a la causa.
          </p>

          <h2 className="text-2xl font-semibold text-[#e3bf5f]">
            3. Dosificá con conciencia
          </h2>
          <p>
            Muchas veces usamos más producto del necesario. Seguir las
            instrucciones del envase y aplicar solo lo justo ayuda a evitar
            el desperdicio y reduce el impacto ambiental.
          </p>

          <h2 className="text-2xl font-semibold text-[#e3bf5f]">
            4. Incorporá hábitos sostenibles
          </h2>
          <p>
            Ventilá los espacios de forma natural, usá trapos reutilizables en lugar
            de papel descartable y preferí utensilios duraderos en tu rutina.
          </p>

          <p className="mt-8 font-semibold text-[#e3bf5f]">
            Con pequeñas decisiones conscientes, cada limpieza puede ser una
            acción por el planeta.
          </p>
        </motion.article>
      </motion.div>
    </section>
  );
}
