"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function DetergenteNaturalPage() {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-[#e3bf5f]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={0}
        >
          5 beneficios de usar detergente natural en la cocina
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          Menos químicos, más seguridad: conocé las ventajas de cambiar tu detergente por una alternativa sostenible.
        </motion.p>

        <motion.div
          className="relative w-full h-80 rounded-xl overflow-hidden mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={2}
        >
          <Image
            src="/blog2.jpg"
            alt="Detergente natural"
            fill
            className="object-cover"
          />
        </motion.div>

        <article className="space-y-6 text-gray-200 leading-relaxed">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={3}
          >
            Elegir detergentes ecológicos no solo es mejor para el planeta, también lo es para tu cocina y tu salud. Con ingredientes naturales,
            evitás residuos químicos en platos y utensilios.
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={4}
          >
            <li>No dejan residuos nocivos en superficies que están en contacto con alimentos.</li>
            <li>Son suaves con la piel, ideales si lavás sin guantes.</li>
            <li>Vienen en envases reciclables o reutilizables.</li>
            <li>Son igual de efectivos que los tradicionales en la limpieza diaria.</li>
            <li>Reducís tu impacto ambiental sin resignar higiene.</li>
          </motion.ul>

          <motion.p
            className="mt-8 font-semibold text-[#e3bf5f]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={5}
          >
            Animate a cambiar. Tu cocina y el planeta lo van a agradecer.
          </motion.p>
        </article>
      </div>
    </section>
  );
}
