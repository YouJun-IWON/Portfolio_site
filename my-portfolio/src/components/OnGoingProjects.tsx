import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// project Image
import iwonProject from '../../public/images/projects/Iwon.png';

import { motion } from 'framer-motion';
import { FaDatabase } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import 'swiper/css/effect-cards';

const FramerImage = motion(Image);

const OnGoingProjects = () => {
  return (
    <>
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
    </>
  );
};

export default OnGoingProjects;

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
