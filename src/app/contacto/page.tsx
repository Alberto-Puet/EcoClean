"use client";
import { useEffect, useState } from "react";

const Contacto = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <section
      className="w-full min-h-screen bg-cover bg-center relative flex items-center justify-center px-4 md:px-16 py-12"
      style={{ backgroundImage: "url('/contacto.jpg')" }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto izquierda */}
        <div
          className={`text-white transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl font-bold mb-4">
            ¿Querés saber más o necesitás ayuda? <span className="text-[#e3bf5f]">Estamos para vos.</span>
          </h1>
          <p className="text-lg">
            Completá el formulario y nos pondremos en contacto lo antes posible. Ya sea una consulta, sugerencia o simplemente para saludarnos, tu mensaje es bienvenido.
          </p>
        </div>

        {/* Formulario derecha */}
        <div
          className={`relative z-10 bg-slate-200 backdrop-blur-md rounded-xl shadow-lg w-full p-8 transition-all duration-1000 delay-200 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl font-bold mb-4 text-center text-[#0D1F1C]">
            Contactanos
          </h2>
          <form className="space-y-4 text-black ">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2"
              />
            </div>
            <div>
              <label
                htmlFor="mensaje"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="mensaje"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#e3bf5f] cursor-pointer text-[#1b4832] font-semibold py-2 px-4 rounded-md hover:bg-[#d1aa45] transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
