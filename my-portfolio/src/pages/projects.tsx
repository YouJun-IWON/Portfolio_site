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
import { BsFillChatDotsFill } from 'react-icons/bs';

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

          <div className='mb-20'>
            <span className='font-bold text-4xl md:text-3xl mb-4 inline-block'>
              Ongoing project
            </span>
            <ProcessingProject
              title='Contract NFT Market'
              summary='useForm(Minimize re-rendering), TanStack Query(useMutation, useQuery)등을 사용해 웹페이지 최적화를 진행 / SWR으로 long polling 방식의 chat 시스템을 구축 / React18의 Suspense on the Server, Transition 적용'
              link='https://iwon-page-rose.vercel.app/'
              github='https://github.com/YouJun-IWON/iwon-page'
              type='Web3 / Full Stack / Responsive / Solo'
              img={iwonProject}
              date='2023.06.26 ~ present'
              Database='https://www.prismabuilder.io/schemas/New%20schema/graph'
              myOpinion='높은 확장성을 가진 contract NFT를 생성하고 사고 팔 수 있는 플랫폼 / 해당 기술과 절차에 대한 특허 등록 완료 / Transaction, Application 생성, 판매, 신청, 신고, 수락, 연기, 거절 기능 활성화 / Metamask를 사용해 NextAuth를 통한 로그인 구현 / 현재 solidity로 Smart Contract 구성중'
              icons={`${TypescriptIcon.src} / ${ReactIcon.src} / ${NextJSIcon.src} / ${TailwindCSS.src} / ${ZustandIcon.src} / ${MotionFramerIcon.src} / ${ReactQueryIcon.src} / ${SWRIcon.src} / ${PrismaIcon.src} / ${MySQLIcon.src} / ${HardHatIcon.src} / ${MoralisIcon.src}`}
            />
          </div>

          <span className='font-bold text-4xl md:text-3xl mb-4 inline-block'>
            Web2 Projects with Solo (in sequence)
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
                  title='Blog using NextJS'
                  summary='NextJS 학습 후 Blog 페이지 구현 / Javascript와 Typescript 두가지 버전으로 제작 / localStorage를 통한 DarkMode 구현 / NextJS 12(Page) 버전으로 제작 후 NextJS 13(App)로 Migration'
                  link='https://nextjs-blog-delta-six-87.vercel.app/'
                  github='https://github.com/YouJun-IWON/nextjs-blog'
                  type='NextJS / Responsive / DarkMode'
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
                  type='NextJS / Responsive / DarkMode'
                  img={PortfolioProject}
                  date='2023.08.10 ~ 2023.08.17'
                  icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${MotionFramerIcon.src} / ${AdobeExpressIcon.src}`}
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
                  type='Vanilla JavaScript / CSS'
                  summary='CSS와 Javascript를 사용해서 동적상호작용이 가능한 animation 구현 / SWIPER, Lodash, GSAP, YOUTUBE VIDEO, ScrollMagic, ScrollToPlugin 적용 / 스크롤 위치 계산, 3D animation, 고정 이미지 배경 구현'
                  img={startbucksProject}
                  icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src}`}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='CoinSelector Page'
                  summary='CSS의 gird 및 flex/block에 대한 학습 및 적용 / nth-child, center position 학습 및 적용'
                  link='https://sparkling-kulfi-02644b.netlify.app/'
                  github='https://github.com/YouJun-IWON/CoinSelector-with-css-vanilla'
                  type='Vanilla CSS / Responsive'
                  img={CoinSelectorProject}
                  icons={`${HTMLicon.src} / ${CSSicon.src}`}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='Clone Ipad Page'
                  summary='데스크탑, 태블릿, 모바일 환경에 따른 반응형 웹 사이트 제작 / 요소의 가시성 관찰 구현 / @keyframes, @media, breakpoints 적용'
                  link='https://ipad-site.vercel.app/'
                  github='https://github.com/YouJun-IWON/ipad_site'
                  type='Vanilla Javascript CSS / Responsive'
                  img={ipadProject}
                  icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src}`}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='Propose Site'
                  summary='CSS만을 사용해서 하트모양이 눈처럼 내리는 효과를 구현 / CSS와 JavaScript를 이용한 애니메이션 구현'
                  link='https://have-a-nice-jelly.netlify.app/'
                  github='#'
                  type='Vanilla Javascript CSS / Responsive'
                  img={loveProject}
                  icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src}`}
                />
              </SwiperSlide>
              <SwiperSlide className='p-3'>
                <Project
                  title='Movie Search APP'
                  summary='자바스크립트의 class와 closer을 사용해서 react와 같은 코드 구조를 만듬 / api 호출 적용 / JavaScript로 먼저 구현 후 TypeScript로 변경'
                  link='https://movie-app-lovat-one.vercel.app/#/'
                  github='https://github.com/YouJun-IWON/movie-app'
                  type='Vanilla Javascript, Typescript, CSS / Responsive'
                  img={movieProject}
                  icons={`${HTMLicon.src} / ${CSSicon.src} / ${Javascripticon.src} / ${TypescriptIcon.src}`}
                />
              </SwiperSlide>

              <SwiperSlide className='p-3'>
                <Project
                  title='Clone Disney+ Page & Google Login'
                  summary='React 학습 후 페이지 구현 / Google Firebase Login를 사용한 auth 구현 / Redux로 상태관리 진행 / Redux toolkit과 persist을 사용해서 login data를 localhost에 저장하고 관리'
                  link='https://react-disney-plus-app-d21d6.web.app/main'
                  github='https://github.com/YouJun-IWON/reat-disney-plus-app-login_improve'
                  type='React / Responsive'
                  img={DisneyProject}
                  icons={`${ReactIcon.src} / ${CSSicon.src} / ${ReduxIcon.src}`}
                />
              </SwiperSlide>

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
            </Swiper>
          </div>

          <span className='font-bold text-4xl md:text-3xl mb-4 inline-block mt-20'>
            Web3 Projects with Team (Codestates)
          </span>
          <div className='grid grid-cols-12 gap-24  gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
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
                title='Clone OpenSea with Ethereum'
                summary='solidity로 nft 발행 Smart Contract 작성 및 hardHat 로컬 노드로 테스트 / Web3-react를 통해 metamask와 로그인 연동 / 로그인 조건부 설정(네트워크 제한, 메타마스크 네트워크 변경 감지) / NFT 발행 페이지 제작 및 IPFS 연동 / ether.js를 통한 NFT 발행 with Metamask 및 확인(EtherScan) / 팀장으로서 역할 분배 및 일정 조율, github 설정(Issues, Projects 기능 활용)'
                link='https://codestates.notion.site/fe0e020d90b0427aa912b92c80cbe939?v=e9275161e140447f894de0d8cf87f2c2&p=50b4f0bb5daf4e49965e64c962df3dca&pm=c'
                github='https://github.com/codestates-beb/beb-08-BOV'
                type='Web3 / Project Leader'
                date='2023.03.06 ~ 2023.03.13'
                icons={`${ReactIcon.src} / ${MaterialUIIcon.src} / ${EmotionIcon.src} / ${Web3JSIcon.src} / ${HardHatIcon.src} / ${EtherJSIcon.src} / ${SolidityIcon.src} / ${EthereumIcon.src}`}
                img={openseaProject}
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                title='Dynamic NFT market with Chainlink & Polygon'
                summary='실제 NFT에 저장된 지역 정보에 따라 실제 날씨, 시간 변화로 인해 상태가 달라지는 DNFT를 발행하고 거래할 수 있는 웹 개발 / ChainLink의 Automation 기능을 활용해 NFT의 상태를 현실세계와 연동 / Wagmi를 통해 NFT 발행 및 배포 확인 (polygonScan / Opeasea), 판매, 구매 구현 / 팀장으로서 역할 분배 및 일정 조율, github 설정 (branch/commit 조건 설정) / 프론트 파트 전담'
                link='https://codestates.notion.site/3-e8190ef76f694ef788f41897fc78d9f1?p=d1f20dbd04174a2faefc22bd3318a1c0&pm=c'
                github='https://github.com/codestates-beb/BEB-08-LiFT'
                type='Web3 / Project Leader'
                date='2023.03.29 ~ 2023.04.24'
                icons={`${NextJSIcon.src} / ${TailwindCSS.src} / ${MantineIcon.src} / ${ReactQueryIcon.src} / ${PrismaIcon.src} / ${Web3JSIcon.src} / ${HardHatIcon.src} / ${EtherJSIcon.src} / ${SolidityIcon.src} / ${WagmiIcon.src} / ${ChainLinkIcon.src} / ${PolygonIcon.src}`}
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

// className='relative
//               before:absolute
//               before:content-[attr(data-tip)] before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-gray-700 before:text-white before:rounded-md before:opacity-0 before:transition-all

//               after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-gray-700 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100'

// svg logo
import HTMLicon from '../../public/images/svgs/skills/html-5-svgrepo-com.svg';
import CSSicon from '../../public/images/svgs/skills/css-3-svgrepo-com.svg';
import Javascripticon from '../../public/images/svgs/skills/js-svgrepo-com.svg';
import TypescriptIcon from '../../public/images/svgs/skills/typescript-icon-svgrepo-com.svg';
import ReactIcon from '../../public/images/svgs/skills/react-svgrepo-com.svg';
import NextJSIcon from '../../public/images/svgs/skills/nextjs-fill-svgrepo-com.svg';
import TailwindCSS from '../../public/images/svgs/skills/tailwindcss-icon-svgrepo-com.svg';
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

const ProcessingProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  Database,
  myOpinion,
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

  const formattedOpinions = myOpinion
    .split(' / ')
    .map((opinion: string, index: number) => (
      <>
        {index === 0 && (
          <div className='my-2 text-semibold text-center'>{opinion}</div>
        )}
        {index !== 0 && (
          <>
            <li key={index} className='py-2 font-light'>
              {opinion}
            </li>
          </>
        )}
      </>
    ));

  const mySummary = summary
    .split(' / ')
    .map((opinion: string, index: number) => (
      <>
        <li key={index} className='py-1'>
          {opinion}
        </li>
      </>
    ));

  return (
    <>
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
          <div className='my-2 font-medium text-dark dark:text-light sm:text-sm flex gap-3 flex-wrap'>
            {svgIcons}
          </div>
          <div className='font-medium text-slate-700 dark:text-slate-300'>
            {date}
          </div>
          <div className='font-medium text-dark dark:text-light sm:text-sm'>
            {mySummary}
          </div>
          <div className='mt-2 flex items-center'>
            <Link href={github} target='_blank' className='w-10'>
              {' '}
              <GithubIcon className={undefined} />{' '}
            </Link>

            <Link href={Database} target='_blank'>
              {' '}
              <FaDatabase className='w-8 h-8 ml-2' />
            </Link>

            <div className='flex flex-col gap-12 items-center'>
              <div className='relative group '>
                <BsFillChatDotsFill className='w-8 h-8 ml-3 group-hover:opacity-70' />
                <div className='absolute hidden group-hover:block top-11 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-2  rounded-md shadow-md z-10 w-[50vh]  divide-y divide-slate-500'>
                  {formattedOpinions}
                </div>
                <div className='after:absolute hidden group-hover:block after:left-1/2 after:top-7 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent  after:transition-all hover:before:opacity-100 hover:after:opacity-100'></div>
              </div>
            </div>

            <Link href='https://www.youtube.com/watch?v=L4gYGJqjC9E'>
              <svg
                className='w-10 h-10 text-red-500 ml-3'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 14'
              >
                <path
                  fill-rule='evenodd'
                  d='M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z'
                  clip-rule='evenodd'
                />
              </svg>
            </Link>

            <Link
              href={link}
              target='_blank'
              className='relative inline-block text-lg md:text-base group ml-4'
            >
              <span className='relative z-10 block px-5 py-3  overflow-hidden font-medium leading-tight text-gray-800 dark:text-gray-50 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg md:px-3  group-hover:text-white dark:group-hover:text-black dark:border-none'>
                <span className='absolute inset-0 dark:bg-gray-900 w-full h-full px-5 py-3 rounded-lg bg-gray-50'></span>
                <span className='absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-50 group-hover:-rotate-180 ease'></span>
                <span className='relative '>Visit Project</span>
              </span>
              <span
                className='absolute  bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 dark:bg-gray-50 rounded-lg group-hover:mb-0 group-hover:mr-0'
                data-rounded='rounded-lg'
              ></span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

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
