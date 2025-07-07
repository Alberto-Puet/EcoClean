"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
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

export default function LimpiezaEcologicaPage() {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0}
      >
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#e3bf5f]" variants={fadeInUp} custom={1}>
          Cómo elegir productos de limpieza ecológicos para tu hogar
        </motion.h1>

        <motion.p className="text-gray-300 mb-8" variants={fadeInUp} custom={2}>
          Descubrí por qué los productos biodegradables son la mejor opción para cuidar tu salud y el medio ambiente.
        </motion.p>

        <motion.div
          className="relative w-full h-80 rounded-xl overflow-hidden mb-10"
          variants={fadeInUp}
          custom={3}
        >
          <Image
            src="/blog1.jpg"
            alt="Productos de limpieza ecologicos"
            fill
            className="object-cover"
          />
        </motion.div>

        <article className="space-y-6 text-gray-200 leading-relaxed">
          <motion.p variants={fadeInUp} custom={4}>
            En un mundo donde el impacto ambiental de nuestras decisiones diarias es cada vez más evidente,
            optar por productos de limpieza ecológicos se ha convertido en una acción concreta para contribuir al cambio.
            Pero, ¿qué significa realmente que un producto sea &quot;ecológico&quot;?
          </motion.p>

          <motion.h2 className="text-2xl font-semibold text-[#e3bf5f]" variants={fadeInUp} custom={5}>
            1. Revisiá los ingredientes
          </motion.h2>
          <motion.p variants={fadeInUp} custom={6}>
            Un buen producto ecológico no debe contener sustancias tóxicas como amoníaco, cloro o fosfatos. Buscá en la etiqueta
            componentes naturales, biodegradables y no irritantes. Muchas marcas responsables detallan los ingredientes en su envase.
          </motion.p>

          <motion.h2 className="text-2xl font-semibold text-[#e3bf5f]" variants={fadeInUp} custom={7}>
            2. Verificá la certificación
          </motion.h2>
          <motion.p variants={fadeInUp} custom={8}>
            Elegí productos certificados por organismos que avalen su compromiso ambiental, como Ecocert, USDA Organic o etiquetas nacionales de sustentabilidad.
          </motion.p>

          <motion.h2 className="text-2xl font-semibold text-[#e3bf5f]" variants={fadeInUp} custom={9}>
            3. Optá por envases reutilizables o reciclables
          </motion.h2>
          <motion.p variants={fadeInUp} custom={10}>
            La ecología no solo está en la fórmula del producto, sino también en su envase. Preferí aquellos que vengan en botellas recicladas,
            con posibilidad de recarga o fabricados con materiales compostables.
          </motion.p>

          <motion.h2 className="text-2xl font-semibold text-[#e3bf5f]" variants={fadeInUp} custom={11}>
            4. Empezá por lo esencial
          </motion.h2>
          <motion.p variants={fadeInUp} custom={12}>
            No necesitás reemplazar todos tus productos de golpe. Podés comenzar por un limpiador multiuso, un detergente natural o un desinfectante sin cloro.
            Con pequeños pasos vas a notar el cambio.
          </motion.p>

          <motion.p className="mt-8 font-semibold text-[#e3bf5f]" variants={fadeInUp} custom={13}>
            Cuidar tu casa y el planeta es posible. Elegí inteligente, elegí ecológico.
          </motion.p>
        </article>
      </motion.div>
    </section>
  );
}
