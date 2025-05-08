"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Div from "../components/div";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Nosotros = () => {
  return (
    <section className="bg-[#0D1F1C] text-[#0D1F1C] py-20 px-10 sm:px-6 md:px-12">
      <motion.div 
        className="max-w-6xl mx-auto text-center mb-16"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInUp}
      >
        <h1 className="text-4xl text-[#e3bf5f] md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-lg text-white max-w-3xl mx-auto">
          Conocé la historia, los valores y el propósito detrás de nuestra empresa de productos de limpieza biodegradables.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">Nuestros comienzos</h2>
          <p className="text-white leading-relaxed">
            Todo comenzó en el año 2010, cuando tres amigos apasionados por el cuidado del medio ambiente
            decidieron emprender un nuevo camino. Frustrados por la cantidad de químicos agresivos y envases plásticos de un solo uso
            en los productos tradicionales, decidieron crear una alternativa local, responsable y sostenible.
            Así nació <strong>EcoClean</strong>, con el objetivo de ofrecer productos de limpieza verdaderamente biodegradables,
            sin dañar la salud ni el planeta.
          </p>
        </motion.div>
        <motion.div 
          className="relative w-full h-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src="/nosotros1.jpg"
            alt="Nuestros comienzos"
            fill
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div 
          className="relative w-full h-80"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Image
            src="/nosotros2.jpg"
            alt="Nuestra trayectoria"
            fill
            className="rounded-2xl object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold mb-4">Más de una década haciendo la diferencia</h2>
          <p className="text-white leading-relaxed">
            En estos más de 10 años de trabajo, fuimos creciendo gracias al boca en boca y al compromiso
            de nuestros clientes. Hoy contamos con una planta propia, distribuimos a todo el país, y tenemos
            más de 20 productos certificados con ingredientes de origen vegetal y envases reciclables o reutilizables.
            Además, trabajamos con cooperativas locales y ONG para impulsar una economía circular.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl font-bold mb-6">Nuestros valores</h2>
        <p className="text-white mb-6">
          Nos guía un fuerte compromiso con la sostenibilidad, la transparencia y la innovación.
          Creemos que la limpieza del hogar no debe estar reñida con el cuidado del planeta.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {["Sustentabilidad", "Compromiso social", "Calidad y eficacia"].map((titulo, i) => (
            <motion.div
              key={i}
              className="bg-[#F3F7F4] p-6 rounded-xl shadow hover:scale-105 transition-transform"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-lg font-bold mb-2">{titulo}</h3>
              <p className="text-sm text-gray-600">
                {titulo === "Sustentabilidad" && "Desde las materias primas hasta el packaging, cada decisión busca reducir nuestra huella ecológica."}
                {titulo === "Compromiso social" && "Apoyamos el trabajo local y colaboramos con iniciativas de educación ambiental."}
                {titulo === "Calidad y eficacia" && "Nuestros productos limpian con la misma eficacia que los convencionales, pero sin tóxicos."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Div/>
        <h2 className="text-2xl text-[#e3bf5f] font-bold my-4">Seguimos creciendo con vos</h2>
        <p className="text-white mx-auto mb-6 max-w-3xl">
          Nuestro camino recién empieza. Cada vez más personas se suman al cambio y eligen limpiar su hogar sin ensuciar el planeta. Gracias por ser parte.
        </p>
        <Image
          src="/nosotros3.jpg"
          alt="Equipo Verde Limpio"
          width={600}
          height={400}
          className="mx-auto rounded-xl object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Nosotros;