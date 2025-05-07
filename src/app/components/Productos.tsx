'use client';

import Image from 'next/image';

const Productos = () => {
  return (
    <section className="bg-[#0D1F1C]  py-16 px-4">
      <div className='container mx-auto lg:px-20 '>
      <h2 className="text-4xl text-white font-semibold text-center mb-4">
        Nuestros Productos
      </h2>
      <p className="text-center text-[#e3bf5f] text-sm mb-10">
        Soluciones ecológicas diseñadas para cada necesidad
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Producto izquierdo */}
        <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg shadow-black">
          <Image
            src="/producto1.jpg"
            alt="Producto 1"
            width={500}
            height={300}
            className="w-full h-64 object-cover object-bottom"
          />
        </div>

        {/* Producto central destacado */}
        <div className="relative hover:opacity-90 transition-all bg-white/5 rounded-2xl overflow-hidden shadow-xl shadow-black">
          <Image
            src="/producto2.jpg"
            alt="Producto Destacado"
            width={500}
            height={320}
            className="w-full h-80 object-cover"
          />
          <div className="absolute  inset-0 bg-black/40 flex flex-col justify-center items-center p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Línea Profesional BioGreen</h3>
            <p className="text-sm">Potencia ecológica para el hogar y la industria</p>
          </div>
        </div>

        {/* Producto derecho */}
        <div className="bg-white/5 rounded-2xl overflow-hidden shadow-lg shadow-black">
          <Image
            src="/producto3.jpg"
            alt="Producto 2"
            width={500}
            height={300}
            className="w-full h-64 object-cover object-bottom"
          />
        </div>
      </div>

      {/* Botón debajo del grid */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#1b4832] hover:bg-[#2a3a32] cursor-pointer text-[#e3bf5f] px-6 py-3 rounded-sm text-lg transition">
          Ver productos
        </button>
      </div>
      </div>
    </section>
  );
};

export default Productos;
