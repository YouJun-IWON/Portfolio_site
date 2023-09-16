import { GithubIcon } from '@/components/Icons';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// project Image
import openseaProject from '../../public/images/projects/opensea.png';
import dnftProject from '../../public/images/projects/dnft.png';

import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const Web3Projects = () => {
  return (
    <>
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
    </>
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
