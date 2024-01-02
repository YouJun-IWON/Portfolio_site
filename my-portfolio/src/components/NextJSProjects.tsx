import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// project Image

import NextJSBlogProject from '../../public/images/projects/Blog.png';

import PortfolioProject from '../../public/images/projects/portfolio.png';
import MerryCatProject from '../../public/images/projects/MerryCat.png';
import Catchit from '../../public/images/projects/Catchit.png';
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

const FramerImage = motion(Image);

const NextJSProjects = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        // Mobile
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1400) {
        // Tablet
        setSlidesPerView(2);
      } else {
        // PC
        setSlidesPerView(3);
      }
    };

    handleResize(); // Initial setting
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <span className='font-bold text-4xl md:text-3xl mb-4 inline-block'>
        NextJS Project (Total: 6)
      </span>
      <div>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          slidesPerView={slidesPerView}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Project
              title='반려동물 Christmas Edition AI Profile 생성 플랫폼'
              summary='도메인 구매, 사업자 등록 완료 후 서비스 배포 / 카카오 로그인 및 공유 기능 / 약 130여명의 유저 확보 / 추후 다양한 굿즈 제작이 가능하도록 기능 확장 및 마케팅 보강 예정'
              link='https://www.pets-mas.com'
              github='https://github.com/YouJun-IWON/Catchit-Marketing-Web'
              youtube='https://www.youtube.com/watch?v=mBvLnZIfWoA'
              type='Responsive / Real Service Deployment / AI Generation Platform'
              img={MerryCatProject}
              date='2023.12.12 ~ 2023.12.23'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${ZustandIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title='Catchit Application Marketing Page'
              summary='스타트업 Univer 에서 상반기에 출시할 앱의 마케팅 페이지 제작중'
              link='https://catchit-business.vercel.app/'
              github='https://github.com/YouJun-IWON/Catchit-Marketing-Web'
              type='Responsive'
              img={Catchit}
              date='2023.12.30 ~ present'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${MotionFramerIcon.src} / ${Supabase.src} / ${PrismaIcon.src} / ${ZustandIcon.src}`}
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
              title='Blog Marketing Page'
              summary='MDX 와 Content Layer을 사용해서 웹페이지 구현 (속도 및 SEO 최적화) / Supabase를 통한 Postgres database 적용 / NextUI 와 Tailwindcss, css를 활용한 디자인 구현 / Motion Framer UI 응용'
              link='https://catchit-marketing-4a7cf7huk-youjun-iwon.vercel.app/'
              github='https://github.com/YouJun-IWON/Catchit-Marketing-Web'
              type='Responsive / MDX'
              img={CatchitProject}
              date='2023.09.29 ~ 2023.10.10'
              icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${MotionFramerIcon.src} / ${Supabase.src} / ${ContentLayer.src} / ${MDX.src}`}
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
import AmchartsIcon from '../../public/images/svgs/skills/amcharts.png';
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
  youtube,
  clip,
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
        className='w-full border-black border-2 cursor-pointer overflow-hidden rounded-lg'
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

          {clip && (
            <Link href={clip} target='_blank'>
              <svg
                className='w-6 h-6 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 12 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6'
                />
              </svg>
            </Link>
          )}

          {youtube && (
            <Link href={youtube} target='_blank'>
              <svg
                className='w-10 h-10 text-red-500 ml-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 14'
              >
                <path
                  fillRule='evenodd'
                  d='M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          )}

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
