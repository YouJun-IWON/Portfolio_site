import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// project Image
import GBIC from '../../public/images/projects/GBIC.png';
import NearDnftProject from '../../public/images/projects/NearDNFTComponent.png';
import Klaymakers from '../../public/images/projects/Klaymakers.png';

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
      <div className='mb-20 flex flex-col gap-16'>
        <span className='font-bold text-4xl md:text-3xl inline-block'>
          Projects with Hackathon's Prize 🏆
        </span>
        <ProcessingProject
          title='NFT Collection Poker Game KlayOne (🥈 2nd 수상작)'
          summary='Klaytn의 NFT Collection을 활용하여 NFT Poker 카드를 생성하고 해당 카드로 게임을 할 수 있는 플랫폼 / 토큰과 코인을 각 게임방 Smart Contract에 걸고 게임을 진행 / Backend, Web socket, frontend을 전담하고 기획, 디자인을 주도 함 / Discord UI/UX를 응용해서 사용자들이 빠르고 쉽게 NFT poker 게임을 즐길 수 있게 구현 / 사람들이 소유하고 있는 NFT Collection을 다양한 카드 게임으로 즐길 수 있도록 개발 중'
          link='https://dorahacks.io/buidl/8274'
          github='https://github.com/YouJun-IWON/NFT-Card-Game'
          type='Web3 / Klaytn / KIP-17 / Klaymakers 2023 Global Virtual Hackathon / 10,000$ / Web Socket'
          youtube='https://www.youtube.com/watch?v=mJl-_VGiVn8&t=1s'
          img={Klaymakers}
          date='2023.11.20 ~ 2023.12.01 (Klaymakers 2023 Global Virtual Hackathon)'
          clip='https://candle-keyboard-dd4.notion.site/NFT-Poker-Card-Game-9b14ff10d5104b6d8f81a36c0b6f336b?pvs=4'
          myOpinion='Deck: https://drive.google.com/file/d/1D3wfK0rNqIrQxAgCGHbqks3uitKUyp3L/view / Winners: https://www.youtube.com/watch?v=h5kudIWPhec / Presentation: https://www.youtube.com/watch?v=dapCK2tNcKE&t=571s'
          icons={`${NextJSIcon.src} / ${ReactIcon.src} / ${TypescriptIcon.src} / ${SolidityIcon.src} / ${EtherJSIcon.src} / ${KlaytnIcon.src} / ${SocketIoIcon.src} / ${TailwindCSS.src} / ${ZustandIcon.src}`}
        />

        <ProcessingProject
          title='DNFT Stamp Board Ticket Platform (🥇 대상 수상작)'
          summary='블록체인 기술을 활용하여 인천시의 다양한 문화를 보다 즐겁게 누릴 수 있는 NFT 스탬프 아이디어 / erc1155를 아이디어에 맞춰 제작, IPFS 일부 GET,POST API, 프론트를 전담함 / 대납 서비스와 웹에서 온체인 데이터를 읽어 보다 직관적인 ui로 보여줘서 사용자들이 기존 web2 처럼 편하게 사용할 수 있도록 구성 / 사용자가 쉽고 빠르게 자신만의 stamp 티켓을 여러개 구성 및 관리 할 수 있도록 제작 / 멀티 지갑 연결로 누구나 쉽게 접속 가능하게 구현'
          link='https://lbank-hackathon.vercel.app/'
          github='https://github.com/YouJun-IWON/GBIC-hackathon'
          type='Web3 / Polygon / erc1155 / GBIC 2023 Hackathon / Responsive / 6,000,000￦ ROA CORE'
          youtube='https://www.youtube.com/watch?v=wC80FUoNBLg'
          img={GBIC}
          date='2023.10.30 ~ 2023.10.31 (GBIC 2023 해커톤)'
          clip='https://candle-keyboard-dd4.notion.site/DNFT-Ticket-Platform-5aa6658157324768aab0e0ccc7e755b3?pvs=4'
          icons={`${NextJSIcon.src} / ${ReactIcon.src} / ${TypescriptIcon.src} / ${SolidityIcon.src} / ${EtherJSIcon.src} / ${PolygonIcon.src} / ${MoralisIcon.src} / ${HardHatIcon.src} / ${WagmiIcon.src} / ${MotionFramerIcon.src} / ${TailwindCSS.src}`}
        />
        <ProcessingProject
          title='DNFT Components in Near BOS (🥈 2nd 수상작)'
          summary='Near BOS 생태계에서 DNFT를 만들 수 있는 Component 제작  / Coin price, Weather, Near Social 데이터에 따라 변화되는 DNFT 제작 가능 / 만든 DNFT를 확인할 수 있는 Component 제작 / 오프 체인(Weather, Coin Price), 온체인(Near Social) 데이터에 따라 NFT가 다르게 보여짐'
          link='https://near.org#/near/widget/ComponentDetailsPage?src=7649ed19fe15dead3bb479bbbf3acd3a2b337eead0999673d20b9935e4d60d8e/widget/dNFTMinting'
          github='https://github.com/YouJun-IWON/BOS-Contest'
          type='Web3 / Near BOS Collegium Contest / Solo Project / 540 Near'
          img={NearDnftProject}
          date='2023.09.14 ~ 2023.09.21 (2023 BOS Collegium Contest)'
          clip='https://candle-keyboard-dd4.notion.site/Near-Protocol-2023-BOS-Collegium-e6549d675d7340fca205c4d137062a7b?pvs=4'
          icons={`${NearIcon.src} / ${StyledComponentsIcon.src} / ${ReactIcon.src}`}
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
import NearIcon from '../../public/images/svgs/skills/near-protocol-near-logo.svg';
import KlaytnIcon from '../../public/images/svgs/skills/klaytn-logo.svg';
import SocketIoIcon from '../../public/images/svgs/skills/Socket-io.png';

const ProcessingProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  clip,
  myOpinion,
  icons,
  date,
  youtube,
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

  // const formattedOpinions = myOpinion
  //   .split(' / ')
  //   .map((opinion: string, index: number) => (
  //     <>
  //       {index === 0 && (
  //         <div className='my-2 text-semibold text-center'>{opinion}</div>
  //       )}
  //       {index !== 0 && (
  //         <>
  //           <li key={index} className='py-2 font-light'>
  //             {opinion}
  //           </li>
  //         </>
  //       )}
  //     </>
  //   ));

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
          className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full border-black border-2'
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

            {clip && (
              <Link href={clip} target='_blank'>
                <svg
                  className='w-6 ml-2 h-6 text-gray-800 dark:text-white'
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

            {/* <div className='flex flex-col gap-12 items-center'>
              <div className='relative group '>
                <BsFillChatDotsFill className='w-8 h-8 ml-3 group-hover:opacity-70' />
                <div className='absolute hidden group-hover:block top-11 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-2  rounded-md shadow-md z-10 w-[50vh] break-words  divide-y divide-slate-500'>
                  {formattedOpinions}
                </div>
                <div className='after:absolute hidden group-hover:block after:left-1/2 after:top-7 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-b-gray-700 after:border-l-transparent after:border-t-transparent after:border-r-transparent  after:transition-all hover:before:opacity-100 hover:after:opacity-100'></div>
              </div>
            </div> */}

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
