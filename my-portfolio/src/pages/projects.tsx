import AnimatedText from '@/components/AnimatedText';

import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';

import React from 'react';

import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/effect-cards';

import { Canvas } from '@react-three/fiber';
import Blob from '@/components/Blob';
import OnGoingProjects from '@/components/onGoingProjects';
import ReactProjects from '@/components/ReactProjects';
import Web3Projects from '@/components/Web3Projects';
import NextJSProjects from '@/components/NextJSProjects';

const FramerImage = motion(Image);

const projects = () => {
  return (
    <>
      <Head>
        <title>YouJun | Projects</title>
        <meta name='description' content='any description' />
      </Head>
      {/* <TransitionEffect /> */}

      <main className='w-full flex flex-col  items-center justify-center dark:text-light'>
        <Layout className='pt-30 '>
          <div className='relative w-full items-center justify-center'>
            <div className='w-[100%] h-[60vh] '>
              <AnimatedText
                text='지식을 능가하는 상상력'
                project={true}
                className={
                  'lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl bg-transparent !absolute translate-y-72 z-10'
                }
              />

              <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                <Blob />
              </Canvas>
            </div>
          </div>

          <OnGoingProjects />

          <NextJSProjects />

          <Web3Projects />

          <ReactProjects />
        </Layout>
      </main>
    </>
  );
};

export default projects;
