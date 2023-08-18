import Image from 'next/image';
import React from 'react';

import firstImage from '../../public/images/hobby/thirdImage.jpeg';
import secondImage from '../../public/images/hobby/secondImage.jpeg';
import thirdImage from '../../public/images/hobby/firstImage.jpeg';
import dumbbellImage from '../../public/images/hobby/dumbbell.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCards,
  EffectCube,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const GymComponent = () => {
  return (
    <section
      className='w-full flex flex-row xl:flex-col justify-center min-h-[80vh] gap-10 border-2 border-red-500 p-2 md:mt-10 
  '
    >
      <div className='relative w-2/5 md:w-full flex flex-col justify-center items-start padding-x pt-28 md:pt-10 p-5'>
        <p className='text-6xl font-montserrat text-red-500'>#1</p>
        <h1 className='mt-10 text-8xl xl:text-7xl lg:text-6xl md:text-3xl max-sm:text-[72px] max-sm:leading-[82] font-bold bg-white whitespace-nowrap relative z-10 p-5'>
          <span className='text-red-500 inline-block mt-3'>Weight&nbsp;</span>
          <span>Training</span>
        </h1>
        <p className='text-slate-700 text-lg leading-8 mt-6 mb-14 xl:mb-0 max-w-sm dark:text-slate-200'>
          건강한 몸과 쉽게 지치지 않는 체력을 통해 스타일리쉬한 삶, 창의적인
          생각, 묵직하게 바디감으로 밀고가는 유지력을 지향합니다. <br />
          <br />
          어제의 나보다 더 무겁고 많은 횟수로 한계를 돌파하는 것에 쾌감을
          느낍니다.
        </p>
        <div className='absolute -bottom-10 -right-16 md:-top-14 md:-right-10'>
          <Image
            src={dumbbellImage}
            alt='firstImage'
            width={250}
            height={250}
            className='rounded-lg relative z-1'
          ></Image>
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center  py-5 bg-orange-600 bg-cover bg-center md:hidden'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className='w-[65vh] h-[70vh] xl:w-[55vh] xl:h-[60vh] lg:w-[60vh] lg:h-[70vh] md:w-[40vh] md:h-[60vh] translate-x-5 lg:translate-x-0'
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {' '}
            <Image
              src={firstImage}
              alt='firstImage'
              fill
              className='rounded-lg relative z-1'
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src={secondImage}
              alt='firstImage'
              fill
              className='rounded-lg relative z-1'
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src={thirdImage}
              alt='firstImage'
              fill
              className='rounded-lg relative z-1'
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='relative flex-1 justify-center items-center  py-5 bg-orange-600 bg-cover bg-center hidden md:flex'>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination, Autoplay]}
          className='w-[65vh] h-[70vh] xl:w-[55vh] xl:h-[60vh] lg:w-[60vh] lg:h-[70vh] md:w-[40vh] md:h-[60vh] translate-x-5 lg:translate-x-0'
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            {' '}
            <Image
              src={firstImage}
              alt='firstImage'
              fill
              className='rounded-lg relative z-1'
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src={secondImage}
              alt='firstImage'
              fill
              className='rounded-lg relative z-1'
            ></Image>
          </SwiperSlide>
          <SwiperSlide>
            {' '}
            <Image
              src={thirdImage}
              alt='firstImage'
              fill
              className='rounded-lg relative z-1'
            ></Image>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default GymComponent;
