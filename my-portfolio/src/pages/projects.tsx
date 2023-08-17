import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import ParticlesContainer from '@/components/ParticlesContainer';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }: any) => {
  return (
    <article className=' relative w-full flex items-center rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link
        href={link}
        target='_blank'
        className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className='w-full h-auto'
        />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
            {title}
          </h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className='w-10'>
            {' '}
            <GithubIcon className={undefined} />{' '}
          </Link>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
          >
            {' '}
            Visit Project{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }: any) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
      <div className='absolute top-0 -right-3 -z-10 w-[101.3%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

      <Link
        href={link}
        target='_blank'
        className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className='w-full h-auto'
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
          {type}
        </span>
        <Link
          href={link}
          target='_blank'
          className='hover:underline underline-offset-2'
        >
          <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>
            {title}
          </h2>
        </Link>
        {/* <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p> */}
        <div className='mt-2 flex items-center w-full justify-between '>
          <Link
            href={link}
            target='_blank'
            className='underline text-lg font-semibold md:text-base'
          >
            {' '}
            Visit{' '}
          </Link>
          <Link href={github} target='_blank' className='w-8 md:w-6 '>
            {' '}
            <GithubIcon className={undefined} />{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>YouJun | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      {/* <TransitionEffect /> */}
      <main className='w-full mb-16 flex flex-col  items-center justify-center dark:text-light'>
        <Layout className='pt-25 '>
          <AnimatedText
            text='지식을 능가하는 상상력'
            className={'mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'}
          />

          <div className='mb-20'>
            <FeaturedProject
              title='Crypto Screener Application'
              summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
              link='/'
              github='/my-portfolio'
              type='Featured Project'
              img={project1}
            />
          </div>

          <div >
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={3}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 4.5,
              }}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log('slide change')}
            >
             
              <SwiperSlide>
                <Project
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                  link='/'
                  github='/my-portfolio'
                  type='Featured Project'
                  img={project1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                  link='/'
                  github='/my-portfolio'
                  type='Featured Project'
                  img={project1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                  link='/'
                  github='/my-portfolio'
                  type='Featured Project'
                  img={project1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                  link='/'
                  github='/my-portfolio'
                  type='Featured Project'
                  img={project1}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Crypto Screener Application'
                  summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                  link='/'
                  github='/my-portfolio'
                  type='Featured Project'
                  img={project1}
                />
              </SwiperSlide>
     
            </Swiper>
          </div>

          <div className='grid grid-cols-12 gap-24 mt-20 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            {/* <div className='col-span-12'>
              <FeaturedProject
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                link='/'
                github='/my-portfolio'
                type='Featured Project'
                img={project1}
              />
            </div> */}
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                link='/'
                github='/my-portfolio'
                type='Featured Project'
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                link='/'
                github='/my-portfolio'
                type='Featured Project'
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                link='/'
                github='/my-portfolio'
                type='Featured Project'
                img={project1}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Crypto Screener Application'
                summary='A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency.'
                link='/'
                github='/my-portfolio'
                type='Featured Project'
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
