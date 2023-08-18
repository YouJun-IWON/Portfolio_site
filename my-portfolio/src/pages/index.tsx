import Layout from '@/components/layout';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/circleMe.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';
import ParticlesContainer from '@/components/ParticlesContainer';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>YouJun | Portfolio</title>
        
      </Head>

      <TransitionEffect />
      <ParticlesContainer />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-25 md:pt-16 sm:pt-8 dark:bg-transparent bg-transparent'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full '>
              <Image
                src={profilePic}
                alt='YouJun'
                className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              ></Image>
            </div>

            <div className='w-1/2 flex flex-col self-center lg:w-full lg:text-center gap-5'>
              <AnimatedText
                text=''
                className=' !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl'
              />
              <Image
                src='https://res.cloudinary.com/dhtq54adh/image/upload/v1692164650/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7_1_hpzctq.png'
                className='absolute -translate-x-48 -translate-y-40 md:-translate-x-10 md:-translate-y-16 '
                width={900}
                height={900}
                alt=''
              />

              <div className='text-[50px] md:text-[25px] md:mt-2  font-semibold leading-[1] '>
                <span className='mr-4'>I am a</span>
                <TypeAnimation
                  sequence={[
                    'Web3-Developer',
                    2000,
                    'Writer',
                    2000,
                    'Designer',
                    2000,
                    'Entrepreneur',
                    2000,
                  ]}
                  speed={50}
                  className='text-primary'
                  wrapper='span'
                  repeat={Infinity}
                />
              </div>

              <AnimatedText
                text='As a skilled Web3 developer, I am dedicated to turning ideas
                into innovative web applications. Explore my latest projects and
                articles, showcasing my expertise in React.js / NextJS and Web3
                Development.'
                className='!normal-case !items-start !text-start !text-lg !font-medium !md:text-sm !sm:text-xs'
              />

              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link
                  href='https://candle-keyboard-dd4.notion.site/Web3-Developer-253efdad5e5d4385b9e2a80e4b9d19c7?pvs=4'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold   dark:bg-light md:p-2 md:px-4 md:text-base
                  animate-bounce 
                   bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80   py-2.5 text-center mr-2 mb-2'
                  // download={true}
                >
                  Resume
                  <svg
                    className='w-6 h-6 ml-2 text-yellow-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 21 21'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z'
                    />
                  </svg>
                </Link>
                {/* <Link
                  href='mailto:tndhworl1998@gmail.com'
                  target={'_blank'}
                  className='ml-4 text-lg dark:text-light font-medium capitalize text-dark underline md:text-base'
                >
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 z-10 animate-pulse bottom-8 lg:hidden inline-block w-24'>
          <Image
            src={lightBulb}
            alt='Youjun'
            className='w-full  opacity-90 h-auto'
          ></Image>
          {/* <div className='absolute z-10 w-5 h-5 animate-ping mb-12 mr-5 bg-yellow-300 rounded-full bottom-5 right-5'></div> */}
        </div>
      </main>
    </>
  );
}
