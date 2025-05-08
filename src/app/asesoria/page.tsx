"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AsesoriasPage() {
  return (
    <section className="bg-[#0D1F1C] text-white min-h-screen flex flex-col justify-center px-6 md:px-12 py-20">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-[#e3bf5f]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Asesorías ecológicas para empresas
        </motion.h1>
        <motion.p
          className="text-gray-300 text-lg max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Implementá un plan de limpieza sostenible, reducí tu huella ambiental y convertí a tu empresa en un ejemplo de responsabilidad ecológica. Te acompañamos paso a paso.
        </motion.p>

        <div className="w-full grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            className="bg-[#1b4832] p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-[#e3bf5f] mb-3">
              ¿Qué incluye?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
              <li>Diagnóstico ambiental de instalaciones</li>
              <li>Capacitación al personal en limpieza ecológica</li>
              <li>Recomendaciones de productos biodegradables</li>
              <li>Plan personalizado de mantenimiento sustentable</li>
              <li>Seguimiento mensual durante 3 meses</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-[#1b4832] p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-[#e3bf5f] mb-3">
              Precio del servicio
            </h3>
            <p className="text-lg text-white font-bold mb-1">$300.000 ARS</p>
            <p className="text-sm text-gray-300 mb-4">
              (por asesoría completa, incluye visita, capacitación y seguimiento)
            </p>
            <p className="text-sm text-gray-300">
              El precio puede ajustarse según la escala del establecimiento. Consultanos para cotizaciones personalizadas.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contacto"
            className="inline-block bg-[#e3bf5f] text-[#0D1F1C] font-semibold px-8 py-3 rounded-md hover:bg-[#d1aa45] transition"
          >
            Pedí tu asesoría
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
