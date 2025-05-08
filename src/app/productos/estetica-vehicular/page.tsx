"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const productosVehiculares = [
  {
    id: 1,
    nombre: "Shampoo para Auto Ecológico",
    imagen: "/shampoo-auto.jpg",
    descripcion: "Limpieza profunda sin dañar la pintura ni el ambiente. Biodegradable.",
  },
  {
    id: 2,
    nombre: "Cera Vegetal Protectora",
    imagen: "/cera.jpg",
    descripcion: "Brillo natural y protección contra el clima. Sin derivados del petróleo.",
  },
  {
    id: 3,
    nombre: "Limpiavidrios Eco",
    imagen: "/limpiavidrios.jpg",
    descripcion: "Fórmula sin amoníaco, ideal para parabrisas y espejos.",
  },
  {
    id: 4,
    nombre: "Ambientador Natural para Autos",
    imagen: "/ambientador-auto.jpg",
    descripcion: "Fragancia suave con aceites esenciales. Sin aerosoles.",
  },
  {
    id: 5,
    nombre: "Cepillo de Limpieza con Fibras Naturales",
    imagen: "/cepillo.jpg",
    descripcion: "Ideal para tapizados y alfombras. Mango de madera reciclada.",
  },
  {
    id: 6,
    nombre: "Desengrasante Biodegradable",
    imagen: "/desengrasante.jpg",
    descripcion: "Remueve suciedad pesada de motor y llantas sin dañar el ambiente.",
  },
];

export default function EsteticaVehicularPage() {
  const [cantidades, setCantidades] = useState<{ [id: number]: number }>({});

  const handleCantidadChange = (id: number, valor: number) => {
    setCantidades((prev) => ({ ...prev, [id]: Math.max(1, valor) }));
  };

  return (
    <section className="bg-[#0f1b15]">
      <div className="px-6 py-10 max-w-6xl mt-20 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Productos de Estética Vehicular
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosVehiculares.map((producto, i) => (
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
                <h2 className="text-xl font-semibold text-white">
                  {producto.nombre}
                </h2>
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
