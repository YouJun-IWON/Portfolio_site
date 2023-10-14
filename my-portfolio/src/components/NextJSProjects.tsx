import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// project Image

import NextJSBlogProject from '../../public/images/projects/Blog.png';

import PortfolioProject from '../../public/images/projects/portfolio.png';
import YouRelloProject from '../../public/images/projects/YouRello.png';
import CatchitProject from '../../public/images/projects/CatchitWeb.png';

import { motion } from 'framer-motion';

import {
  Navigation,
  Pagination,
  A11y,
  EffectCoverflow,
  Autoplay,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/effect-cards';

const FramerImage = motion(Image);

const NextJSProjects = () => {
  return (
    <>
      <span className='font-bold text-4xl md:text-3xl mb-4 inline-block'>
        NextJS Project
      </span>
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
              title='Blog using NextJS'
              summary='NextJS 학습 후 Blog 페이지 구현 / Javascript와 Typescript 두가지 버전으로 제작 / localStorage를 통한 DarkMode 구현 / NextJS 12(Page) 버전으로 제작 후 NextJS 13(App)로 Migration / Github utterances로 댓글 기능 구현'
              link='https://nextjs-blog-delta-six-87.vercel.app/'
              github='https://github.com/YouJun-IWON/nextjs-blog'
              type=' Responsive / DarkMode'
              img={NextJSBlogProject}
              date='2023.06.16 ~ 2023.06.17'
              icons={`${NextJSIcon.src} / ${Javascripticon.src} / ${TypescriptIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title='Portfolio Web App'
              summary='TailwindCSS 적용 / react-particles, react-type-animation 적용 / framer-motion을 활용한 다양한 Animation 구현 / adobeExpress를 활용한 디자인'
              link='/'
              github='https://github.com/YouJun-IWON/Portfolio_site'
              type='Responsive / DarkMode'
              img={PortfolioProject}
              date='2023.08.10 ~ 2023.08.17'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${MotionFramerIcon.src} / ${AdobeExpressIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title='Advanced Todo Web App'
              summary='react-beautiful-dnd 적용 / GPT 3.5 create context 적용 / appwrite을 활용한 Backend DB 구축 / headlessui를 활용한 디자인 구현 / Zustand를 활용한 state 관리'
              link='https://yourello-myqvy7l6t-youjun-iwon.vercel.app/'
              github='https://github.com/YouJun-IWON/YouEllro'
              type='Responsive / GPT 3.5'
              img={YouRelloProject}
              date='2023.09.08 ~ 2023.09.16'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${ZustandIcon.src} / ${AppWriteIcon.src}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              title='Catchit Application Marketing Page (진행중..)'
              summary='MDX 와 Content Layer을 사용해서 웹페이지 구현 / Supabase를 통한 Postgres database 적용 / appwrite을 활용한 Backend DB 구축 / NextUI 와 Tailwindcss, css를 활용한 디자인 구현 / 앱 상품 기획과 협업하여 업데이트 진행중'
              link='https://catchit-marketing-4a7cf7huk-youjun-iwon.vercel.app/'
              github='https://github.com/YouJun-IWON/Catchit-Marketing-Web'
              type='Responsive / MDX'
              img={CatchitProject}
              date='2023.09.29 ~ present'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${Supabase.src} / ${ContentLayer.src} / ${MDX.src}`}
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
              title='Blog using NextJS'
              summary='NextJS 학습 후 Blog 페이지 구현 / Javascript와 Typescript 두가지 버전으로 제작 / localStorage를 통한 DarkMode 구현 / NextJS 12(Page) 버전으로 제작 후 NextJS 13(App)로 Migration'
              link='https://nextjs-blog-delta-six-87.vercel.app/'
              github='https://github.com/YouJun-IWON/nextjs-blog'
              type='NextJS / Responsive / DarkMode'
              img={NextJSBlogProject}
              icons={`${NextJSIcon.src} / ${Javascripticon.src} / ${TypescriptIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide className='p-3'>
            <Project
              title='Portfolio Web App'
              summary='TailwindCSS 적용 / react-particles, react-type-animation 적용 / framer-motion을 활용한 다양한 Animation 구현 / adobeExpress를 활용한 디자인'
              link='/'
              github='https://github.com/YouJun-IWON/Portfolio_site'
              type='NextJS / Responsive / DarkMode'
              img={PortfolioProject}
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${MotionFramerIcon.src} / ${AdobeExpressIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide className='p-3'>
            <Project
              title='Advanced Todo Web App'
              summary='react-beautiful-dnd 적용 / GPT 3.5 create context 적용 / appwrite을 활용한 Backend DB 구축 / headlessui를 활용한 디자인 구현 / Zustand를 활용한 state 관리'
              link='https://yourello-myqvy7l6t-youjun-iwon.vercel.app/'
              github='https://github.com/YouJun-IWON/YouEllro'
              type='Responsive / GPT 3.5'
              img={YouRelloProject}
              date='2023.09.08 ~ 2023.09.16'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${ZustandIcon.src} / ${AppWriteIcon.src}`}
            />
          </SwiperSlide>
          <SwiperSlide className='p-3'>
            <Project
              title='Catchit Application Marketing Page (진행중..)'
              summary='MDX 와 Content Layer을 사용해서 웹페이지 구현 / Supabase를 통한 Postgres database 적용 / appwrite을 활용한 Backend DB 구축 / NextUI 와 Tailwindcss, css를 활용한 디자인 구현 / 앱 상품 기획과 협업하여 업데이트 진행중'
              link='https://catchit-marketing-4a7cf7huk-youjun-iwon.vercel.app/'
              github='https://github.com/YouJun-IWON/Catchit-Marketing-Web'
              type='Responsive / MDX'
              img={CatchitProject}
              date='2023.09.29 ~ present'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${Supabase.src} / ${ContentLayer.src} / ${MDX.src}`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default NextJSProjects;

// svg logo
import HTMLicon from '../../public/images/svgs/skills/html-5-svgrepo-com.svg';
import CSSicon from '../../public/images/svgs/skills/css-3-svgrepo-com.svg';
import Javascripticon from '../../public/images/svgs/skills/js-svgrepo-com.svg';
import TypescriptIcon from '../../public/images/svgs/skills/typescript-icon-svgrepo-com.svg';
import ReactIcon from '../../public/images/svgs/skills/react-svgrepo-com.svg';
import NextJSIcon from '../../public/images/svgs/skills/nextjs-fill-svgrepo-com.svg';
import TailwindCSS from '../../public/images/svgs/skills/tailwindcss-icon-svgrepo-com.svg';
import SCSSIcon from '../../public/images/svgs/skills/scss-svgrepo-com.svg';
import MaterialUIIcon from '../../public/images/svgs/skills/material-ui-svgrepo-com.svg';
import ReduxIcon from '../../public/images/svgs/skills/redux-svgrepo-com.svg';
import ZustandIcon from '../../public/images/svgs/skills/CompressJPEG.online_500x500-image.png';
import StyledComponentsIcon from '../../public/images/svgs/skills/styled-components-1.svg';
import EmotionIcon from '../../public/images/svgs/skills/emotion.png';
import MantineIcon from '../../public/images/svgs/skills/mantine-seeklogo.com.svg';
import MotionFramerIcon from '../../public/images/svgs/skills/framer-motion.svg';
import ReactQueryIcon from '../../public/images/svgs/skills/react-query-seeklogo.com.svg';
import SWRIcon from '../../public/images/svgs/skills/swr-seeklogo.com.svg';
import GrapeQLIcon from '../../public/images/svgs/skills/graphql-svgrepo-com.svg';
import PrismaIcon from '../../public/images/svgs/skills/light-prisma-svgrepo-com.svg';
import NodeJSIcon from '../../public/images/svgs/skills/node-js-svgrepo-com.svg';
import ExpressIcon from '../../public/images/svgs/skills/express-svgrepo-com.svg';
import NestJSIcon from '../../public/images/svgs/skills/nestjs-svgrepo-com.svg';
import MySQLIcon from '../../public/images/svgs/skills/mysql-svgrepo-com.svg';
import MongoDBIcon from '../../public/images/svgs/skills/mongo-svgrepo-com.svg';
import RedisIcon from '../../public/images/svgs/skills/redis-svgrepo-com.svg';
import SolidityIcon from '../../public/images/svgs/skills/light-solidity-svgrepo-com.svg';
import MoralisIcon from '../../public/images/svgs/skills/Moralis-Symbol.svg';
import EtherJSIcon from '../../public/images/svgs/skills/ethers-seeklogo.com.svg';
import Web3JSIcon from '../../public/images/svgs/skills/web3js-seeklogo.com.svg';
import HardHatIcon from '../../public/images/svgs/skills/hardhat-seeklogo.com.svg';
import TruffleIcon from '../../public/images/svgs/skills/truffle-seeklogo.com.svg';
import WagmiIcon from '../../public/images/svgs/skills/wagmii.png';
import FigmaIcon from '../../public/images/svgs/skills/Figma-logo.svg';
import AdobeExpressIcon from '../../public/images/svgs/skills/Screenshot 2023-08-16 at 1.55.17 PM.png';
import EthereumIcon from '../../public/images/svgs/skills/ethereum-seeklogo.com.svg';
import ChainLinkIcon from '../../public/images/svgs/skills/chainlink-link-logo.svg';
import AppWriteIcon from '../../public/images/svgs/skills/appwrite-seeklogo.com.svg';
import Supabase from '../../public/images/svgs/skills/supabase-seeklogo.com.svg';
import ContentLayer from '../../public/images/svgs/skills/contentlayer.png';
import MDX from '../../public/images/svgs/skills/mdx-seeklogo.com.svg';

const Project = ({
  title,
  type,
  img,
  link,
  github,
  summary,
  icons,
  date,
}: any) => {
  const svgIcons = icons.split(' / ').map((SvgIcon: string, index: number) => (
    <>
      <div key={index}>
        <Image
          src={SvgIcon}
          width={30}
          height={30}
          className={undefined}
          alt=''
        />
      </div>
    </>
  ));

  const mySummary = summary
    .split(' / ')
    .map((opinion: string, index: number) => (
      <li key={index} className='py-1 list-disc'>
        {opinion}
      </li>
    ));

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

        <div className=' font-medium text-dark dark:text-light sm:text-sm flex flex-wrap gap-3'>
          {svgIcons}
        </div>

        <div className='font-medium mt-2 text-slate-700 dark:text-slate-300'>
          {date}
        </div>

        <div className='my-2 font-medium text-dark dark:text-light sm:text-sm'>
          {mySummary}
        </div>
        <div className='mt-2 flex items-center w-full justify-between '>
          <Link
            href={link}
            target='_blank'
            className='underline text-lg font-semibold md:text-base'
          >
            {' '}
            Visit{' '}
          </Link>

          {/* <div className='flex flex-col gap-12 items-center'>
            <div className='relative group '>
              <BsFillChatDotsFill className='w-8 h-8 ml-3 group-hover:opacity-70' />
              <div className='absolute hidden group-hover:block top-11 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-2  rounded-md shadow-md z-10 w-[50vh]  divide-y divide-slate-500'>
                {}
              </div>
              <div className='after:absolute hidden group-hover:block after:left-1/2 after:top-7 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent  after:transition-all hover:before:opacity-100 hover:after:opacity-100'></div>
            </div>
          </div> */}

          <Link href={github} target='_blank' className='w-8 md:w-6 '>
            {' '}
            <GithubIcon className={undefined} />{' '}
          </Link>
        </div>
      </div>
    </article>
  );
};
