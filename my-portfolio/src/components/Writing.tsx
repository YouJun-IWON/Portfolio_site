import Image from 'next/image';
import React from 'react';

import pen1 from '../../public/images/hobby/pen1.png';
import pen2 from '../../public/images/hobby/pen2.png';
import pen3 from '../../public/images/hobby/pen3.png';

const WritingComponent = () => {
  return (
    <section
      className='w-full flex flex-row xl:flex-col justify-center min-h-[80vh] gap-10 border-2 border-blue-500 p-2 md:mt-10 
  '
    >
      <div className='relative flex-1 flex justify-center items-center  py-5 bg-blue-600 bg-cover bg-center md:hidden'>
        <Image
          src={pen1}
          alt='firstImage'
          width={500}
          height={700}
          className='rounded-lg relative z-1'
        ></Image>
      </div>

      <div className='relative w-3/5 md:w-full flex flex-col justify-center items-start padding-x pt-28 md:pt-10 p-5'>
        <p className='text-6xl font-montserrat text-blue-500'>#2</p>
        <div className='absolute -top-10 md:hidden'>
          <Image
            src={pen2}
            alt='firstImage'
            width={500}
            height={700}
            className='rounded-lg relative z-1'
          ></Image>
        </div>
        <div className='absolute -top-20 hidden md:flex -right-4'>
          <Image
            src={pen2}
            alt='firstImage'
            width={300}
            height={400}
            className='rounded-lg relative z-1'
          ></Image>
        </div>

        <h1 className=' -translate-x-32 mt-10 text-8xl md:-translate-x-0 xl:text-7xl lg:text-6xl md:text-3xl max-sm:text-[72px] max-sm:leading-[82] font-bold bg-white whitespace-nowrap relative z-10 p-5'>
          <span className=' text-blue-500 inline-block mt-3'>
            Writing&nbsp;
          </span>
          <span>Thinking</span>
        </h1>
        <p className='text-slate-700 text-lg leading-8 mt-6 xl:mb-0 max-w-sm dark:text-slate-200'>
          생각을 글로 남기는 것을 좋아합니다. 인상적인 생각과 감정이 들거나 중요하다고 판단되는 정보가 있으면 항상 기록합니다. 그리고 그 기록들을 기반으로 저의 생각을 실현화하는 방안에 대해 고민하고 글을 씁니다. <br></br>
          <br></br> 사람들과 글로서 생각을 공유하는 것을 즐깁니다. 대화하는 것과는 분명 다른 깊이의 내용을 전달하고, 상상을 통한 깊은 공감을 이루는 것을 좋아합니다.
        </p>
      </div>

      <div className='relative flex-1 justify-center items-center  py-5 bg-blue-600 bg-cover bg-center hidden md:flex '>
        <Image
          src={pen1}
          alt='firstImage'
          width={500}
          height={700}
          className='rounded-lg relative z-1'
        ></Image>
      </div>
    </section>
  );
};

export default WritingComponent;
