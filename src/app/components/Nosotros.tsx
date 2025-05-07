"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const Nosotros = () => {
  return (
    <div className="relative">
      <motion.div
        className="absolute -rotate-5 -top-35 md:-top-50 md:-left-60 sm:-left-40 lg:-top-80 lg:left-0 z-20 pointer-events-none"
        custom={0}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Image
          className="opacity-80"
          src="/bg-nosotros.png"
          alt="Fondo decorativo planta"
          width={900}
          height={900}
        />
      </motion.div>

      <section className="bg-[#0D1F1C] text-white py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center justify-center">
          {/* Imagen principal */}
          <motion.div
            className="relative w-full h-[350px] md:h-[450px] mx-auto"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="/nosotros.jpg"
                alt="Equipo trabajando con plantas"
                fill
                className="absolute object-cover rounded-xl z-50 "
              />
            </div>
          </motion.div>

          {/* Texto informativo */}
          <div className="text-center md:text-left relative z-100">
            <motion.h2
              className="text-4xl md:text-5xl font-semibold leading-tight mb-6"
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Donde la Naturaleza <br /> y la Tecnología se Unen
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed mb-6"
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              En BioGreen, creemos en el poder de la naturaleza para transformar espacios y vidas.
              Fusionamos diseño, sostenibilidad y tecnología para ofrecer productos pensados para el
              hogar y la industria.
            </motion.p>

            <motion.div
  className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-7 my-7"
  custom={3}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <div className="text-center">
    <span className="text-4xl font-bold text-emerald-400">
      <CountUp end={25} duration={2} />+
    </span>
    <p className="text-sm text-[#e3bf5f]">Años de experiencia</p>
  </div>
  <div className="text-center">
    <span className="text-4xl font-bold text-emerald-400">
      <CountUp end={100} duration={2.5} />%
    </span>
    <p className="text-sm text-[#e3bf5f]">Clientes satisfechos</p>
  </div>
</motion.div>

            <motion.button
              className="mt-8 bg-[#1b4832] hover:bg-[#2a3a32] cursor-pointer transition-colors text-[#e3bf5f] px-6 py-3 rounded-sm font-medium mx-auto md:mx-0"
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              Conocé más
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
