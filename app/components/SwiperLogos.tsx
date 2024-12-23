'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Se necessário
import 'swiper/css/pagination'; // Se necessário
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
    <div className="my-8 c-swiper">
      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13].map((client, index) => (
          <SwiperSlide 
          key={index}>
            <Image width={90} height={90} src={client} alt={`client${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )}


export default SwiperLogos


