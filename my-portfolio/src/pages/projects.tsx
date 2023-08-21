import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// project Image
import iwonProject from '../../public/images/projects/Iwon.png';
import startbucksProject from '../../public/images/projects/starbucks.png';
import CoinSelectorProject from '../../public/images/projects/coinSeletor.png';
import ipadProject from '../../public/images/projects/ipad.png';
import loveProject from '../../public/images/projects/love.png';
import movieProject from '../../public/images/projects/movie.png';
import NextJSBlogProject from '../../public/images/projects/Blog.png';
import DisneyProject from '../../public/images/projects/disney+.png';
import PortfolioProject from '../../public/images/projects/portfolio.png';
import openseaProject from '../../public/images/projects/opensea.png';
import dnftProject from '../../public/images/projects/dnft.png';

import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { FaDatabase } from 'react-icons/fa';

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
  EffectFlip,
  EffectCards,
  EffectCreative,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/effect-cards';

import { Canvas } from '@react-three/fiber';
import Blob from '@/components/Blob';

const FramerImage = motion(Image);

const ProcessingProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  Database,
}: any) => {
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
        <span className=' flex items-center mr-3 text-sm font-medium text-green-700 dark:text-white mb-3'>
          <span className='flex animate-pulse w-2.5 h-2.5 bg-teal-600 rounded-full mr-1.5 flex-shrink-0'></span>
          Processing
        </span>

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

          <Link href={Database} target='_blank'>
            {' '}
            <FaDatabase className='w-8 h-8 ml-2' />
          </Link>

          <Link
            href={link}
            target='_blank'
            className='relative inline-block text-lg group ml-4'
          >
            <span className='relative z-10 block px-5 py-3  overflow-hidden font-medium leading-tight text-gray-800 dark:text-gray-50 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white dark:group-hover:text-black dark:border-none'>
              <span className='absolute inset-0 dark:bg-gray-900 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
              <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-50 group-hover:-rotate-180 ease'></span>
              <span className='relative'>Visit Project</span>
            </span>
            <span
              className='absolute  bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-gray-50 rounded-lg group-hover:mb-0 group-hover:mr-0'
              data-rounded='rounded-lg'
            ></span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }: any) => {
  //! hover effect 추가 디자인 변경사항도 한번 보자 youtube 버튼을 넣어서 바로 영상을 볼 수 있게 하자
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
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {summary}
        </p>
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
        <title>YouJun | Projects</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />

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

          <div className='mb-20'>
            <ProcessingProject
              title='Contract NFT Market'
              summary='A feature-rich Crypto NFT Market App using NextJS, Tailwind CSS, Prisma, MySQL, tanStack, useForm, SWR, etherJS, Moralis, NextAuth . 
              Create NFTs based on various contract and buy and sell them.'
              link='https://iwon-page-rose.vercel.app/'
              github='https://github.com/YouJun-IWON/iwon-page'
              type='Web3 / Full Stack / Responsive '
              img={iwonProject}
              Database='https://www.prismabuilder.io/schemas/New%20schema/graph'
            />
          </div>

          <div className='lg:hidden'>
            <Swiper
              modules={[
                Navigation,
                Pagination,
                EffectCoverflow,
                A11y,
                // Autoplay,
              ]} // Autoplay A11y
              spaceBetween={50}
              slidesPerView={3}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              // loop={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 4.5,
              }}
              navigation
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <Project
                  title='Clone Starbucks HomePage / LoginPage'
                  link='https://tranquil-kleicha-3eb0ad.netlify.app/'
                  github='https://github.com/YouJun-IWON/starbucks'
                  type='Vanilla JavaScript / CSS'
                  summary='CSS / HTML / SWIPER / Lodash / GSAP / YOUTUBE VIDEO / ScrollMagic / ScrollToPlugin'
                  img={startbucksProject}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='CoinSelector Page'
                  summary='HTML CSS'
                  link='https://sparkling-kulfi-02644b.netlify.app/'
                  github='https://github.com/YouJun-IWON/CoinSelector-with-css-vanilla'
                  type='Vanilla CSS / Responsive'
                  img={CoinSelectorProject}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Clone Ipad Page'
                  summary='HTML CSS JavaScript'
                  link='https://ipad-site.vercel.app/'
                  github='https://github.com/YouJun-IWON/ipad_site'
                  type='Vanilla Javascript CSS / Responsive'
                  img={ipadProject}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Propose Site'
                  summary='Dynamic CSS effect (CSS만을 사용해서 하트모양이 눈처럼 내리는 효과를 구현해봄)'
                  link='https://have-a-nice-jelly.netlify.app/'
                  github='#'
                  type='Vanilla Javascript CSS / Responsive'
                  img={loveProject}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Project
                  title='Movie Search APP'
                  summary='HTML CSS JavaScript (자바스크립트의 class와 상속을 사용해서 react와 같은 구조로 웹페이지를 생성) '
                  link='https://movie-app-lovat-one.vercel.app/#/'
                  github='https://github.com/YouJun-IWON/movie-app'
                  type='Vanilla Javascript CSS / Responsive'
                  img={movieProject}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Project
                  title='Disney+ Page & Google Login'
                  summary='React / Firebase / Google Login / Redux'
                  link='https://react-disney-plus-app-d21d6.web.app/main'
                  github='https://github.com/YouJun-IWON/reat-disney-plus-app-login_improve'
                  type='React / Responsive'
                  img={DisneyProject}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Project
                  title='Blog using NextJS'
                  summary='NextJS + Comment feature'
                  link='https://nextjs-blog-delta-six-87.vercel.app/'
                  github='https://github.com/YouJun-IWON/nextjs-blog'
                  type='NextJS / Responsive'
                  img={NextJSBlogProject}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Project
                  title='Portfolio Web App'
                  summary='NextJS / TailwindCSS / react-particle / little threeJS'
                  link='/'
                  github='https://github.com/YouJun-IWON/Portfolio_site'
                  type='NextJS / Responsive'
                  img={PortfolioProject}
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className='hidden lg:block'>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
            >
              <SwiperSlide className='p-3'>
                <Project
                  title='Clone Starbucks HomePage / LoginPage'
                  link='https://tranquil-kleicha-3eb0ad.netlify.app/'
                  github='https://github.com/YouJun-IWON/starbucks'
                  type='Vanilla JavaScript'
                  summary='CSS / HTML / SWIPER / Lodash / GSAP / YOUTUBE VIDEO / ScrollMagic / ScrollToPlugin'
                  img={startbucksProject}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='CoinSelector Page'
                  summary='HTML CSS'
                  link='https://sparkling-kulfi-02644b.netlify.app/'
                  github='https://github.com/YouJun-IWON/CoinSelector-with-css-vanilla'
                  type='Vanilla CSS / Responsive'
                  img={CoinSelectorProject}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='Clone Ipad Page'
                  summary='HTML CSS JavaScript'
                  link='https://ipad-site.vercel.app/'
                  github='https://github.com/YouJun-IWON/ipad_site'
                  type='Vanilla Javascript CSS / Responsive'
                  img={ipadProject}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='Propose Site'
                  summary='Dynamic CSS effect (CSS만을 사용해서 하트모양이 눈처럼 내리는 효과를 구현해봄)'
                  link='https://have-a-nice-jelly.netlify.app/'
                  github='#'
                  type='Vanilla Javascript CSS / Responsive'
                  img={loveProject}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='Movie Search APP'
                  summary='HTML CSS JavaScript (자바스크립트의 class와 상속을 사용해서 react와 같은 구조로 웹페이지를 생성) '
                  link='https://movie-app-lovat-one.vercel.app/#/'
                  github='https://github.com/YouJun-IWON/movie-app'
                  type='Vanilla Javascript CSS / Responsive'
                  img={movieProject}
                />
              </SwiperSlide>

              <SwiperSlide className='p-3'>
                <Project
                  title='Disney+ Page & Google Login'
                  summary='React / Firebase / Google Login / Redux'
                  link='https://react-disney-plus-app-d21d6.web.app/main'
                  github='https://github.com/YouJun-IWON/reat-disney-plus-app-login_improve'
                  type='React / Responsive'
                  img={DisneyProject}
                />
              </SwiperSlide>

              <SwiperSlide className='p-3'>
                <Project
                  title='Blog using NextJS'
                  summary='NextJS + Comment feature'
                  link='https://nextjs-blog-delta-six-87.vercel.app/'
                  github='https://github.com/YouJun-IWON/nextjs-blog'
                  type='NextJS / Responsive'
                  img={NextJSBlogProject}
                />
              </SwiperSlide>

              <SwiperSlide className='p-3'>
                <Project
                  title='Portfolio Web App'
                  summary='NextJS / TailwindCSS / react-particle / little threeJS'
                  link='/'
                  github='https://github.com/YouJun-IWON/Portfolio_site'
                  type='NextJS / Responsive'
                  img={PortfolioProject}
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
                img={iwonProject}
              />
            </div> */}
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Clone OpenSea'
                summary='web3.js / ethers / mui / emotion / openzeppelin / thirdweb / react / hardhat / solidity'
                link='https://codestates.notion.site/fe0e020d90b0427aa912b92c80cbe939?v=e9275161e140447f894de0d8cf87f2c2&p=50b4f0bb5daf4e49965e64c962df3dca&pm=c'
                github='https://github.com/codestates-beb/beb-08-BOV'
                type='Web3'
                img={openseaProject}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='DNFT market with Chainlink & Polygon'
                summary='NextJS / ethers / wagmi / moralis / web3.js / prisma / NextAuth / tanStack / tailwindcss / mantine '
                link='https://codestates.notion.site/3-e8190ef76f694ef788f41897fc78d9f1?p=d1f20dbd04174a2faefc22bd3318a1c0&pm=c'
                github='https://github.com/codestates-beb/BEB-08-LiFT'
                type='Web3'
                img={dnftProject}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

// const FeaturedProject = ({ type, title, summary, img, link, github }: any) => {
//   return (
//     <article className=' relative w-full flex items-center rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
//       <div className='absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

//       <Link
//         href={link}
//         target='_blank'
//         className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
//       >
//         <FramerImage
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//           src={img}
//           alt={title}
//           className='w-full h-auto'
//         />
//       </Link>

//       <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>

//         <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
//           {type}
//         </span>
//         <Link
//           href={link}
//           target='_blank'
//           className='hover:underline underline-offset-2'
//         >
//           <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
//             {title}
//           </h2>
//         </Link>
//         <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
//           {summary}
//         </p>
//         <div className='mt-2 flex items-center'>
//           <Link href={github} target='_blank' className='w-10'>
//             {' '}
//             <GithubIcon className={undefined} />{' '}
//           </Link>
//           <Link
//             href={link}
//             target='_blank'
//             className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'
//           >
//             {' '}
//             Visit Project{' '}
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };
