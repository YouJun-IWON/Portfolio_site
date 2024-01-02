import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// project Image
import startbucksProject from '../../public/images/projects/starbucks.png';
import CoinSelectorProject from '../../public/images/projects/coinSeletor.png';
import ipadProject from '../../public/images/projects/ipad.png';
import loveProject from '../../public/images/projects/love.png';
import movieProject from '../../public/images/projects/movie.png';
import NextJSBlogProject from '../../public/images/projects/Blog.png';
import DisneyProject from '../../public/images/projects/disney+.png';
import PortfolioProject from '../../public/images/projects/portfolio.png';
import YoutubeCloneProject from '../../public/images/projects/youtube.png';

import { motion } from 'framer-motion';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FramerImage = motion(Image);

const ReactProjects = () => {
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
      <span className='font-bold text-4xl mt-32 md:text-3xl mb-4 inline-block'>
        Vanilla JS & React Project (Total: 7)
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
              title='Clone Starbucks HomePage / LoginPage'
              link='https://tranquil-kleicha-3eb0ad.netlify.app/'
              github='https://github.com/YouJun-IWON/starbucks'
              type='Vanilla JavaScript / CSS'
              summary='CSS와 Javascript를 사용해서 동적상호작용이 가능한 animation 구현 / SWIPER, Lodash, GSAP, YOUTUBE VIDEO, ScrollMagic, ScrollToPlugin 적용 / 스크롤 위치 계산, 3D animation, 고정 이미지 배경 구현'
              date='2023.05.01 ~ 2023.05.10'
              img={startbucksProject}
              icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              title='CoinSelector Page'
              summary='CSS의 gird 및 flex/block에 대한 학습 및 적용 / nth-child, center position 학습 및 적용'
              link='https://sparkling-kulfi-02644b.netlify.app/'
              github='https://github.com/YouJun-IWON/CoinSelector-with-css-vanilla'
              type='Vanilla CSS / Responsive'
              date='2023.05.11 ~ 2023.05.11'
              img={CoinSelectorProject}
              icons={`${HTMLicon.src} / ${CSSicon.src}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              title='Clone Ipad Page'
              summary='데스크탑, 태블릿, 모바일 환경에 따른 반응형 웹 사이트 제작 / 요소의 가시성 관찰 구현 / @keyframes, @media, breakpoints 적용'
              link='https://ipad-site.vercel.app/'
              github='https://github.com/YouJun-IWON/ipad_site'
              type='Vanilla Javascript CSS / Responsive'
              date='2023.05.15 ~ 2023.05.24'
              img={ipadProject}
              icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              title='Propose Site'
              summary='CSS만을 사용해서 하트모양이 눈처럼 내리는 효과를 구현 / CSS와 JavaScript를 이용한 애니메이션 구현'
              link='https://have-a-nice-jelly.netlify.app/'
              github='#'
              date='2023.05.25 ~ 2023.05.26'
              type='Vanilla Javascript CSS / Responsive'
              img={loveProject}
              icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src}`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              title='Movie Search APP'
              summary='자바스크립트의 class와 closer을 사용해서 react와 같은 코드 구조를 만듬 / api 호출 적용 / JavaScript로 먼저 구현 후 TypeScript로 변경'
              link='https://movie-app-lovat-one.vercel.app/#/'
              github='https://github.com/YouJun-IWON/movie-app'
              type='Vanilla Javascript, Typescript, CSS / Responsive'
              date='2023.05.27 ~ 2023.06.03'
              img={movieProject}
              icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src} / ${TypescriptIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title='Clone Disney+ Page & Google Login'
              summary='React 학습 후 페이지 구현 / Google Firebase Login를 사용한 auth 구현 / Redux로 상태관리 진행 / Redux toolkit과 persist을 사용해서 login data를 localhost에 저장하고 관리'
              link='https://react-disney-plus-app-d21d6.web.app/main'
              github='https://github.com/YouJun-IWON/reat-disney-plus-app-login_improve'
              type='React / Responsive'
              img={DisneyProject}
              date='2023.06.06 ~ 2023.06.15'
              icons={`${ReactIcon.src} / ${CSSicon.src} / ${ReduxIcon.src}`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Project
              title='Clone Youtube Page'
              summary='SCSS 적용 및 학습 / Vite + React 적용 및 학습 / React Context로 변수 처리 / axios instance 활용'
              link='https://effortless-tartufo-02141c.netlify.app/'
              github='https://github.com/YouJun-IWON/react-sass-youtube-app'
              type='Vite + React / Responsive'
              img={YoutubeCloneProject}
              date='2023.08.28 ~ 2023.09.02'
              icons={`${ReactIcon.src} / ${SCSSIcon.src}`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ReactProjects;

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
import PolygonIcon from '../../public/images/svgs/skills/polygon-matic-logo (1).svg';

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
