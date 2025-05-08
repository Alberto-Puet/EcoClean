"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const productosHogar = [
  {
    id: 1,
    nombre: "Escoba ecologica",
    imagen: "/escoba.jpg",
    descripcion: "Ideal para todo tipo de superficies. Cerdas reforzadas.",
  },
  {
    id: 2,
    nombre: "Esponjas de cocina",
    imagen: "/esponja.jpg",
    descripcion: "Esponjas hechas de materiales como celulosa, fibra de coco, esponja vegetal o esponjas de bambú.",
  },
  {
    id: 3,
    nombre: "Desinfectante Floral",
    imagen: "/desinfectante.jpg",
    descripcion: "Aroma duradero. Elimina el 99.9% de bacterias.",
  },
  {
    id: 4,
    nombre: "Guantes de Limpieza",
    imagen: "/guantes.jpg",
    descripcion: "Látex resistente. Tallas M y L disponibles.",
  },
  {
    id: 5,
    nombre: "Aromatizante de Ambientes",
    imagen: "/aromatizante.jpg",
    descripcion: "Fragancias: Lavanda, Vainilla y Cítrico.",
  },
  {
    id: 6,
    nombre: "Papel Higiénico Premium",
    imagen: "/papel.jpg",
    descripcion: "Fabricado con papel reciclado o bambú, sin productos químicos ni blanqueadores",
  },
  {
    id: 7,
    nombre: "Toalla de Microfibra",
    imagen: "/toalla.jpg",
    descripcion: "Absorbe 10 veces su peso en agua.",
  },
  {
    id: 8,
    nombre: "Cubo de Basura ",
    imagen: "/cubo.jpg",
    descripcion: "Capacidad 20L. Fabricado con madera reciclada.",
  },
  {
    id: 9,
    nombre: "Bolsas de basura",
    imagen: "/bolsas.jpg",
    descripcion: "Bolsas fabricadas con bioplásticos que se descomponen más rápidamente que las convencionales.",
  },
];

export default function ParaElHogarPage() {
  const [cantidades, setCantidades] = useState<{ [id: number]: number }>({});

  const handleCantidadChange = (id: number, valor: number) => {
    setCantidades((prev) => ({ ...prev, [id]: Math.max(1, valor) }));
  };

  return (
    <section className=" bg-[#0f1b15]">
      <div className="px-6 py-10 max-w-6xl mt-20 mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Productos para el Hogar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productosHogar.map((producto, i) => (
          <motion.div
            key={producto.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className=" rounded-xl shadow-md overflow-hidden hover:shadow-lg transition bg-[#1b4832]"
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
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="text-[#e3bf5f] text-sm">{producto.descripcion}</p>

              <div className="flex items-center gap-3">
                <label htmlFor={`cantidad-${producto.id}`} className="text-sm">
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
