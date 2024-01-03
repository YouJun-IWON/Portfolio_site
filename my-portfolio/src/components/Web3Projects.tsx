import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

// project Image
import openseaProject from '../../public/images/projects/opensea.png';
import dnftProject from '../../public/images/projects/dnft.png';
import NearDnftProject from '../../public/images/projects/NearDNFTComponent.png';
import GBIC from '../../public/images/projects/GBIC.png';
import iwonProject from '../../public/images/projects/Iwon.png';
import { motion } from 'framer-motion';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import STOProject from '../../public/images/projects/STO.png';
import HelixProtocol from '../../public/images/projects/HelixProtocol.png';
const FramerImage = motion(Image);

//! STO 덱 연계 및 유튜브 버튼 및, 기사 버튼 생성하기

const Web3Projects = () => {
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
        setSlidesPerView(2);
      }
    };

    handleResize(); // Initial setting
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='mb-32'>
      <span className='font-bold text-4xl md:text-3xl mb-4 inline-block mt-20'>
        Web3 Projects (Total: 5)
      </span>

      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow]}
        slidesPerView={slidesPerView}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
      >
        {/* <SwiperSlide>
          <Project
            title='DNFT Stamp Board Ticket Platform (🥇 대상 수상작)'
            summary='블록체인 기술을 활용하여 인천시의 다양한 문화를 보다 즐겁게 누릴 수 있는 NFT 스탬프 아이디어 / erc1155를 아이디어에 맞춰 제작 했으면 프론트를 전담함 / 대납 서비스와 웹에서 온체인 데이터를 읽어 보다 직관적인 ui로 보여줘서 사용자들이 기존 web2 처럼 편하게 사용할 수 있도록 구성 / 사용자가 쉽고 빠르게 자신만의 stamp 티켓을 여러개 구성 및 관리 할 수 있도록 제작 / 멀티 지갑 연결로 누구나 쉽게 접속 가능하게 구현'
            link='https://lbank-hackathon.vercel.app/'
            github='https://github.com/YouJun-IWON/GBIC-hackathon'
            type='Web3 / Polygon / erc1155 / GBIC 2023 Hackathon / Responsive'
            clip='https://candle-keyboard-dd4.notion.site/DNFT-Ticket-Platform-5aa6658157324768aab0e0ccc7e755b3?pvs=4'
            youtube='https://www.youtube.com/watch?v=wC80FUoNBLg'
            date='2023.10.30 ~ 2023.10.31 (GBIC 2023 해커톤)'
            icons={`${NextJSIcon.src} / ${ReactIcon.src} / ${TypescriptIcon.src} / ${SolidityIcon.src} / ${EtherJSIcon.src} / ${PolygonIcon.src} / ${MoralisIcon.src} / ${HardHatIcon.src} / ${WagmiIcon.src} / ${MotionFramerIcon.src} / ${TailwindCSS.src}`}
            img={GBIC}
          />
        </SwiperSlide> */}

        {/* <SwiperSlide>
          <Project
            title='DNFT Components in Near BOS (🥈 2nd 수상작)'
            summary='Near BOS 생태계에서 DNFT를 만들 수 있는 Component 제작  / Coin price, Weather, Near Social 데이터에 따라 변화되는 DNFT 제작 가능 / 만든 DNFT를 확인할 수 있는 Component 제작 / 오프 체인(Weather, Coin Price), 온체인(Near Social) 데이터에 따라 NFT가 다르게 보여짐 '
            link='https://near.org#/near/widget/ComponentDetailsPage?src=7649ed19fe15dead3bb479bbbf3acd3a2b337eead0999673d20b9935e4d60d8e/widget/dNFTMinting'
            clip='https://candle-keyboard-dd4.notion.site/Near-Protocol-2023-BOS-Collegium-e6549d675d7340fca205c4d137062a7b?pvs=4'
            github='https://github.com/YouJun-IWON/BOS-Contest'
            type='Web3 / Near BOS / Solo Project'
            date='2023.09.14 ~ 2023.09.21 (2023 BOS Collegium)'
            icons={`${NearIcon.src} / ${StyledComponentsIcon.src} / ${ReactIcon.src}`}
            img={NearDnftProject}
          />
        </SwiperSlide> */}

        <SwiperSlide>
          <Project
            title='Helix Protocol - Onestop DEFI Gateway of XRPL'
            summary='XRPL NEW HORIZON Hackathon 출품작 / Ripple의 XRP EVM SideChain을 이용해서 Web3 프로젝트를 펀딩할 수 있는 플랫폼 / metamask(Ethereum Chain)와 GemWallet(Ripple Chain)간 Bridge 기능 / wallet connect와 ethersJS를 통한 체인 고정 및 통신 구축'
            link='https://helix-protocol.vercel.app/'
            github='https://github.com/nam2ee/New-horizon-hackathon-evm-sidechain'
            type='Web3 / Hackathon / Ripple Sidechain / Bridge'
            img={HelixProtocol}
            date='2023.12.02 ~ 2023.12.11'
            clip='https://devpost.com/software/helix-protocol-onestop-defi-gateway-of-xrpl'
            youtube='https://www.youtube.com/watch?v=jkfXC1hPgpA'
            icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${Javascripticon.src} / ${EtherJSIcon.src} / ${WalletConnectIcon.src} / ${TailwindCSS.src} / ${PrismaIcon.src}`}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            title='Youtuber STO POC Platform'
            summary='연세대 블록체인 학회 프로젝트 / 프론트 기획, 디자인, 빌딩 전담 / 네이버 D2SF 투자 심의 서류합격, Hashed의 피칭 / Hyperledger Fabric과 연계 / 다자간 상대매매를 위한 호가창 및 주식 그래프 component 구현 / 페이퍼, 디자인, 백엔드 팀과 소통하면서 poc를 위한 아이디어 구체화 중'
            link='https://youtube-sto-bay.vercel.app/'
            github='https://github.com/YouJun-IWON/Youtube-STO'
            type='Responsive / STO / Web3'
            img={STOProject}
            date='2023.09.29 ~ present'
            clip='https://candle-keyboard-dd4.notion.site/STO-POC-Project-f7a24d29a3ee44f8951eaaf836c639e8?pvs=4'
            youtube='https://www.youtube.com/watch?v=xnMQMO6UtyU'
            icons={`${NextJSIcon.src} / ${TypescriptIcon.src} / ${TailwindCSS.src} / ${MotionFramerIcon.src} / ${SCSSIcon.src} / ${PrismaIcon.src} / ${AmchartsIcon.src}`}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            title='Contract NFT Market'
            summary='높은 확장성을 가진 Smart Contract 기반 Escrow를 기반으로 contract NFT를 생성하고 사고 팔 수 있는 플랫폼, 시간 변화로 인해 상태가 달라지는 DNFT를 발행하고 거래할 수 있는 웹 개발 중 / 현재 Solidity로 Smart Contract 구성중 / SWR으로 long polling 방식의 chat 시스템을 구축 / useForm(Minimize re-rendering), TanStack Query(useMutation, useQuery)등을 사용해 웹페이지 최적화를 진행'
            link='https://iwon-page-rose.vercel.app/'
            github='https://github.com/YouJun-IWON/iwon-page'
            type='Web3 / Full Stack / Responsive / Solo'
            date='2023.06.26 ~ present'
            youtube='https://www.youtube.com/watch?v=L4gYGJqjC9E'
            icons={`${TypescriptIcon.src} / ${ReactIcon.src} / ${NextJSIcon.src} / ${TailwindCSS.src} / ${ZustandIcon.src} / ${MotionFramerIcon.src} / ${ReactQueryIcon.src} / ${SWRIcon.src} / ${PrismaIcon.src} / ${MySQLIcon.src} / ${HardHatIcon.src} / ${MoralisIcon.src}`}
            img={iwonProject}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Project
            title='Dynamic NFT market with Chainlink & Polygon'
            summary='실제 NFT에 저장된 지역 정보에 따라 실제 날씨, 시간 변화로 인해 상태가 달라지는 DNFT를 발행하고 거래할 수 있는 웹 개발 / ChainLink의 Automation 기능을 활용해 NFT의 상태를 현실세계와 연동 / Wagmi를 통해 NFT 발행 및 배포 확인 (polygonScan / Opeasea), 판매, 구매 구현 / 팀장으로서 역할 분배 및 일정 조율, github 설정 (branch/commit 조건 설정) / 프론트 파트 전담'
            link='https://codestates.notion.site/3-e8190ef76f694ef788f41897fc78d9f1?p=d1f20dbd04174a2faefc22bd3318a1c0&pm=c'
            github='https://github.com/codestates-beb/BEB-08-LiFT'
            type='Web3 / Project Leader'
            clip='https://codestates.notion.site/3-e8190ef76f694ef788f41897fc78d9f1?p=d1f20dbd04174a2faefc22bd3318a1c0&pm=c'
            date='2023.03.29 ~ 2023.04.24'
            icons={`${NextJSIcon.src} / ${TailwindCSS.src} / ${MantineIcon.src} / ${ReactQueryIcon.src} / ${PrismaIcon.src} / ${Web3JSIcon.src} / ${HardHatIcon.src} / ${EtherJSIcon.src} / ${SolidityIcon.src} / ${WagmiIcon.src} / ${ChainLinkIcon.src} / ${PolygonIcon.src}`}
            img={dnftProject}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Project
            title='Clone OpenSea with Ethereum'
            summary='solidity로 nft 발행 Smart Contract 작성 및 hardHat 로컬 노드로 테스트 / Web3-react를 통해 metamask와 로그인 연동 / 로그인 조건부 설정(네트워크 제한, 메타마스크 네트워크 변경 감지) / NFT 발행 페이지 제작 및 IPFS 연동 / ether.js를 통한 NFT 발행 with Metamask 및 확인(EtherScan) / 팀장으로서 역할 분배 및 일정 조율, github 설정(Issues, Projects 기능 활용)'
            link='https://codestates.notion.site/fe0e020d90b0427aa912b92c80cbe939?v=e9275161e140447f894de0d8cf87f2c2&p=50b4f0bb5daf4e49965e64c962df3dca&pm=c'
            github='https://github.com/codestates-beb/beb-08-BOV'
            type='Web3 / Project Leader'
            date='2023.03.06 ~ 2023.03.13'
            clip='https://codestates.notion.site/fe0e020d90b0427aa912b92c80cbe939?v=e9275161e140447f894de0d8cf87f2c2&p=50b4f0bb5daf4e49965e64c962df3dca&pm=c'
            icons={`${ReactIcon.src} / ${MaterialUIIcon.src} / ${EmotionIcon.src} / ${Web3JSIcon.src} / ${HardHatIcon.src} / ${EtherJSIcon.src} / ${SolidityIcon.src} / ${EthereumIcon.src}`}
            img={openseaProject}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Web3Projects;

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
import AmchartsIcon from '../../public/images/svgs/skills/amcharts.png';
import WalletConnectIcon from '../../public/images/svgs/skills/walletconnect.svg';

const Project = ({
  title,
  type,
  img,
  link,
  github,
  summary,
  icons,
  date,
  clip,
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
        className='w-full cursor-pointer overflow-hidden rounded-lg border-black border-2'
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
            Visit
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
