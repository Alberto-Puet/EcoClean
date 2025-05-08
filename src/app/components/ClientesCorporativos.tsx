"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";


const empresas = [
  "/empresa1.png",
  "/empresa2.png",
  "/empresa3.png",
  "/empresa4.png",
  "/empresa5.png",
  "/empresa6.png",
]

const ClientesCorporativos = () => {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 ">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Soluciones sustentables para <span className="text-[#e3bf5f]">empresas comprometidas</span>.
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Sabemos que la imagen de tu empresa también se construye desde los pequeños gestos.
          <br />
          Con nuestros productos ecológicos, además de cuidar el planeta, sumás valor a tu marca.
        </p>

        <ul className="text-white flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base">
        <li className="flex items-center">
    <FaCheck className="text-green-500 mr-2" />
    Precios por volumen
  </li>
  <li className="flex items-center">
    <FaCheck className="text-green-500 mr-2" />
    Asesoramiento personalizado
  </li>
  <li className="flex items-center">
    <FaCheck className="text-green-500 mr-2" />
    Envíos a todo el país
  </li>
        </ul>
      </div>

      <div className=" flex mx-auto bg-[#e3bf5f] mb-8">
        <Swiper
        className='max-w-6xl '
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          grabCursor={true}
          allowTouchMove={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {empresas.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Image
              width={200}
              height={100}
                src={logo}
                alt={`Logo empresa ${index + 1}`}
                className="h-16 w-auto  transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Botón debajo del slider */}
      <div className="text-center mt-10">
        <a href='/contacto' className="bg-[#1b4832] hover:bg-[#2a3a32] cursor-pointer transition-colors text-[#e3bf5f] px-6 py-3 rounded-sm font-medium">
          Pedí tu cotización
        </a>
      </div>
    </section>
  )
}

export default ClientesCorporativos
