"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const productosIndustriales = [
  {
    id: 1,
    nombre: "Detergente Concentrado",
    imagen: "/detergente-industrial.jpg",
    descripcion: "Para limpieza profunda en cocinas industriales y fábricas.",
  },
  {
    id: 2,
    nombre: "Desengrasante Biodegradable",
    imagen: "/desengrasante.jpg",
    descripcion: "Remueve grasa pesada sin dañar el medio ambiente.",
  },
  {
    id: 3,
    nombre: "Jabón para manos industrial",
    imagen: "/jabon-industrial.jpg",
    descripcion: "Formulación para alto tránsito. Suave con la piel.",
  },
  {
    id: 4,
    nombre: "Limpiador de pisos industriales",
    imagen: "/limpiador-pisos.jpg",
    descripcion: "Ideal para galpones, talleres y depósitos.",
  },
  {
    id: 5,
    nombre: "Alcohol en gel 5L",
    imagen: "/alcohol-gel.jpg",
    descripcion: "Bidón de gran capacidad. Uso continuo para empresas.",
  },
  {
    id: 6,
    nombre: "Toallas de papel reciclado",
    imagen: "/papel-industrial.jpg",
    descripcion: "100% recicladas. Pack de 300 hojas."
  },
  {
    id: 7,
    nombre: "Desinfectante de superficies",
    imagen: "/desinfectante-industrial.jpg",
    descripcion: "Apto para zonas de contacto directo. No tóxico.",
  },
  {
    id: 8,
    nombre: "Bolsa de residuos industriales",
    imagen: "/bolsas-industriales.jpg",
    descripcion: "Alta resistencia. Biodegradables. Pack de 25.",
  },
  {
    id: 9,
    nombre: "Pulverizador Reutilizable",
    imagen: "/pulverizador.jpg",
    descripcion: "Capacidad de 2L. Ideal para aplicar productos líquidos.",
  },
];

export default function IndustrialesPage() {
  const [cantidades, setCantidades] = useState<{ [id: number]: number }>({});

  const handleCantidadChange = (id: number, valor: number) => {
    setCantidades((prev) => ({ ...prev, [id]: Math.max(1, valor) }));
  };

  return (
    <section className="bg-[#0f1b15]">
      <div className="px-6 py-10 max-w-6xl mt-20 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Productos Industriales</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosIndustriales.map((producto, i) => (
            <motion.div
              key={producto.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition bg-[#1b4832]"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-4 space-y-3">
                <h2 className="text-xl font-semibold text-white">{producto.nombre}</h2>
                <p className="text-[#e3bf5f] text-sm">{producto.descripcion}</p>

                <div className="flex items-center gap-3">
                  <label htmlFor={`cantidad-${producto.id}`} className="text-sm text-white">
                    Cantidad:
                  </label>
                  <input
                    type="number"
                    id={`cantidad-${producto.id}`}
                    value={cantidades[producto.id] || 1}
                    onChange={(e) =>
                      handleCantidadChange(producto.id, parseInt(e.target.value) || 1)
                    }
                    className="w-16 border border-gray-300 rounded px-2 py-1 text-sm"
                    min={1}
                  />
                </div>

                <button className="w-full cursor-pointer mt-3 bg-emerald-600 text-white rounded py-2 px-4 text-sm font-medium hover:bg-emerald-500 transition">
                  Agregar al carrito
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
