'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    pregunta: '¿Los productos son seguros para mascotas y niños?',
    respuesta: 'Sí, nuestros productos están formulados con ingredientes biodegradables y no tóxicos, ideales para hogares con niños y mascotas.',
  },
  {
    pregunta: '¿Hacen envíos a todo el país?',
    respuesta: 'Sí, realizamos envíos a todas las provincias de Argentina a través de servicios logísticos confiables.',
  },
  {
    pregunta: '¿Puedo comprar al por mayor?',
    respuesta: '¡Por supuesto! Ofrecemos precios especiales para compras mayoristas. Contactanos para una cotización personalizada.',
  },
  {
    pregunta: '¿Cómo sé qué producto es el indicado para mi necesidad?',
    respuesta: 'Contamos con asesoramiento gratuito. Podés pedir una consulta y te ayudamos a elegir la mejor opción según tu caso.',
  },
  {
    pregunta: '¿Los envases son reciclables?',
    respuesta: 'Sí, todos nuestros envases están hechos de materiales reciclables. Además, fomentamos la reutilización.',
  },
  {
    pregunta: '¿Ofrecen productos sin fragancia?',
    respuesta: 'Sí, tenemos versiones sin fragancias artificiales para personas alérgicas o sensibles.',
  },
]

export default function Faqs() {
  const [abierta, setAbierta] = useState<number | null>(null)

  const toggle = (index: number) => {
    setAbierta(abierta === index ? null : index)
  }

  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#2a2a2a] rounded-xl bg-[#e3bf5f] p-5 cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-[#183d2b]">{faq.pregunta}</h3>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    abierta === i ? 'rotate-180 text-black' : 'rotate-0 text-black'
                  }`}
                />
              </div>
              {abierta === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-black mt-4"
                >
                  {faq.respuesta}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
