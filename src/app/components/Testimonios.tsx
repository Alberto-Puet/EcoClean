'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Star } from 'lucide-react'

const testimonios = [
  {
    nombre: 'María G.',
    texto: '¡Los productos son increíbles! Limpian perfecto y además me siento bien usando algo ecológico.',
  },
  {
    nombre: 'Carlos R.',
    texto: 'Uso los productos EcoClean en mi empresa. Son eficaces y mis clientes valoran nuestro compromiso con el ambiente.',
  },
  {
    nombre: 'Lucía P.',
    texto: 'Me encanta que no tengan fragancias artificiales. Y saber que no dañan al planeta es un plus enorme.',
  },
  {
    nombre: 'Sofía D.',
    texto: 'Desde que uso estos productos mi casa no solo está limpia, también libre de químicos agresivos.',
  },
  {
    nombre: 'Pedro M.',
    texto: 'El asesoramiento que me dieron fue excelente. Compré al por mayor para mi negocio y no puedo estar más satisfecho.',
  },
  {
    nombre: 'Valeria T.',
    texto: 'Me sorprendió que algo biodegradable pudiera limpiar tan bien. Muy recomendable.',
  },
]

export default function Testimonios() {
  return (
    <section className="bg-[#0D1F1C] text-white py-20 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          freeMode={true}
          grabCursor={false}
        >
          {testimonios.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#121212] p-8 rounded-xl shadow-md border border-[#2a2a2a] max-w-md mx-auto transition-transform duration-500 ease-in-out">
                <div className="flex justify-center gap-1 mb-4 text-[#cf7806]">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={18} fill="#cf7806" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic mb-4">&quot;{t.texto}&quot;</p>
                <p className="font-semibold text-[#cf7806]">{t.nombre}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
