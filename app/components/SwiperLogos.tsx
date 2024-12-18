'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import client1 from "@/app/assets/clients/client-1.png";
import client2 from "@/app/assets/clients/client-2.png";
import client3 from "@/app/assets/clients/client-3.png";
import client4 from "@/app/assets/clients/client-4.png";
import client5 from "@/app/assets/clients/client-5.png";
import client6 from "@/app/assets/clients/client-6.png";
import client7 from "@/app/assets/clients/client-7.png";
import client8 from "@/app/assets/clients/client-8.png";
import client9 from "@/app/assets/clients/client-9.png";
import client10 from "@/app/assets/clients/client-10.png";
import client11 from "@/app/assets/clients/client-11.png";
import client12 from "@/app/assets/clients/client-12.png";
import client13 from "@/app/assets/clients/client-13.png";



import Image from 'next/image';

const SwiperLogos = () => {
  return (
    <div className="my-8">
      <Swiper
        spaceBetween={50} // Espaço entre os slides
        slidesPerView={5} // Número de logos visíveis por vez
        loop={true} // Loop infinito
        autoplay={{
          delay: 2000, // Tempo entre os slides (em ms)
          disableOnInteraction: false, // Continua o autoplay mesmo após interação
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // Para telas menores, exibe apenas 1 logo
          },
          768: {
            slidesPerView: 2, // Para tablets, exibe 2 logos
          },
          1024: {
            slidesPerView: 3, // Para telas maiores, exibe 3 logos
          },
        }}
      >
        <SwiperSlide>
          <Image src={client1} alt="Empresa 1" width={50} className="w-full h-auto" />
           {/* Imagem do client1 ate client13 */}
           
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default SwiperLogos;
