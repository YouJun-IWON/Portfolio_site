import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './Lilcon';
import Link from 'next/link';

interface DetailsPropr {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
  blockchainLink?: string;
}
const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  blockchainLink,
}: DetailsPropr) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target='_blank'
            className='text-primary capitalize dark:text-primaryDark'
          >
            @{company}
          </a>{' '}
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
          {time} | {address}
        </span>
        <br />
        {blockchainLink && (
          <Link
            href={blockchainLink}
            target='_blank'
            className='text-blue-500 hover:underline-offset-1 hover:underline'
          >
            🔗 Material Link
          </Link>
        )}
        <p className='font-medium w-full md:text-sm'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
        ></motion.div>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            position='FrontEnd Developer'
            company='메리 댕냥스마스'
            companyLink='https://pets-mas.vercel.app/login'
            time='2023.12.12-2023.12.23'
            address='Online'
            blockchainLink='https://pets-mas.vercel.app/login'
            work='반려동물 크리스마스 에디션 AI 프로필 생성 서비스 개발 / 디자이너, 기획자, 백엔드 개발자와 소통하여 온전한 서비스로서 배포 및 마케팅 진행 / 130명의 유저 확보'
          />

          <Details
            position='FrontEnd Developer'
            company='XRPL NEW HORIZON Hackathon'
            companyLink='https://newhorizon.devpost.com/'
            time='2023.12.03-2023.12.11'
            address='Online'
            blockchainLink='https://devpost.com/software/helix-protocol-onestop-defi-gateway-of-xrpl'
            work='Web3 플랫폼 런치패드 개발 / Ripple의 evm sidechain을 이용해서 Metamask로 Ripple 블록체인에 올라가 있는 web3 프로젝트에 투자 가능한 플랫폼의 프론트 개발'
          />

          <Details
            position='Full Stack Developer / Designer / Product Manager'
            company='Klaymakers 2023 Global Virtual Hackathon'
            companyLink='https://dorahacks.io/hackathon/klaymakers23/buidl'
            time='2023.11.20-2023.12.01'
            address='Online'
            blockchainLink='https://dorahacks.io/buidl/8274'
            work='2nd 수상 (상금 10,000$) / 웹소켓 통신을 활용한 NFT Poker 카드 게임을 제작 및 기획'
          />

          <Details
            position='Leader'
            company='GBIC Incheon Hackathon'
            companyLink='https://gbichackathon.com/'
            time='2023.10.30-2023.10.31'
            address='인천 송도 컨벤시아'
            blockchainLink='https://candle-keyboard-dd4.notion.site/DNFT-Ticket-Platform-5aa6658157324768aab0e0ccc7e755b3?pvs=4'
            work='대상 수상 (상금 6,000,000 ￦) / 아이디어 기획 및 디자인, 프론트 전담, Web3 지갑 연결 및 기능 활용, erc1155 를 아이디어에 맞춰 재구성 후 백엔드와 협업, 팀원들과 역할 분담 및 시간 조율'
          />
          <Details
            position='Member'
            company='Blockchain At YONSEI (BAY)'
            companyLink='https://www.blockchainatyonsei.com/'
            time='2023.09-Present'
            address='서울특별시 서대문구 연세로 50 연세대학교'
            work='STO POC 의 Product 팀에 소속 되어 플랫폼 개발 / LSDfi에서 AAVE 코인 생태계에 관한 리서치 진행 / 2024년 학회 임원 / 연세대 IT 기획 학회(ISSU)랑 연합으로 진행할 프로덕트 빌딩 팀의 팀장 '
          />
          <Details
            position='Collegium Sailor / Near BOS Contributor'
            company='Near Protocol / BOS contest'
            companyLink='https://near.org/'
            time='2023.08-2023.10'
            address=''
            blockchainLink='https://x.com/ludium_official/status/1706263961166049702?s=20'
            work='2nd 수상 (상금 540 Near) / Ludium에서 진행하는 Web3 Contributor 프로그램에 참가 / 교육 수료 후 near BOS contest에 참가'
          />
          <Details
            position='Development Team Leader '
            company='Univer / 유니버'
            companyLink='https://catchit-marketing-4a7cf7huk-youjun-iwon.vercel.app/'
            time='2023.08-Present'
            address='서울시 동대문구 경희대로 26 삼의원창업센터 204호'
            work='대표 웹사이트 제작 및 Catchit 서비스 앱에 사용자들을 유입시키기 위한 웹 앱 개발 중 / 기업 링크 페이지는 현재 제작 중 / Full Stack 개발자로 근무 중'
          />
          <Details
            position='entrepreneur'
            company='IWON'
            companyLink='https://iwon-page-rose.vercel.app/'
            time='2023-Present'
            address=''
            work='contract NFT를 생성하고 사고 팔 수 있는 플랫폼 개발 중 (학회 내에서 구체화 중)'
          />
          <Details
            position='Project Leader'
            company='codestates blockchain course'
            companyLink='https://www.codestates.com/course/blockchain'
            time='2022-2023'
            address='서울특별시 강남구 테헤란로 415'
            blockchainLink='https://candle-keyboard-dd4.notion.site/Blockchain-bddca30150574398a2f00a829da37011'
            work='Bitcoin whitepaper / Ethereum whitepaper / DLT / DDB /Wallet & Account / UniSwap / Consensus Algorithms / Merkle tree / Tap root / Bloom Filter / DAG / DHT / IPFS / DID / SSI / Solidity / Security / Web3.js / Infura / Trilemma / Zero-Knowledge Proofs ...'
          />
          <Details
            position='Brunch Writer'
            company='Kakao Corp.'
            companyLink='https://brunch.co.kr/@iwonyoujun'
            time='2022-2023'
            address=''
            work="50+편의 글 기재 / 약 5000+ 명의 독자 / 객관적인 과학적, 사회적, 인류역사적 사실을 논리적으로 전개하여 추상적이고 주관적인 존재들을 정의내리는 과정에 대한 내용/ '나의 삶을 생각하기론' 이라는 제목의 작품 출품 / 2번째 작품(가명: '내가 생각하기론') 연재중 "
          />
          <Details
            position='driver'
            company='military service'
            companyLink='#'
            time='2019-2021'
            address='Aviation maintenance battalion'
            work='12000km 무사고 운전 경력'
          />

          <Details
            position='Global Business School'
            company='Gachon univ.'
            companyLink='https://www.gachon.ac.kr/kor/index.do'
            time='2017-마지막 학기'
            address='경기도 성남시 수정구 성남대로 1342'
            work='마케팅 원론 / 노사관계론 / 국제경영 / 인간심리의 이해 / 회계 원리 / 글로벌의 이해 / 중급회계 / 소비자행동 / 혁신과 전략 / 기업재무 / 조직행동 / 기업가 정신 / 기업과 리더십 / 브랜드 매니지먼트 / 비즈니스 애널리틱스 / 비즈니스와 통계 / 프로그래밍 기초'
          />

          <Details
            position='Industrial Engineering'
            company='Gachon univ.'
            companyLink='https://www.gachon.ac.kr/kor/index.do'
            time='2017-마지막 학기'
            address='경기도 성남시 수정구 성남대로 1342'
            work='실용통계학 / 경영학원론 / 웹프로그래밍 / 정보사회의 윤리 / 고전과 미디어 스토리 텔링 /  산업경영공학개론 / 경영수학 / 프로그래밍언어 / 과학기술글쓰기 / 물류관리 / 경제학원론 / 논리적사고 / 서비스공학 / 생산운영관리 / 인간공학 및 실험 / 로봇공학 / 소프트웨어 생태계 / 문제해결기법(c언어) / 생산계획 및 통제 / 품질실험계획실무 / 데이터베이스시스템 / 고객관계관리 / motion&time study / 산업공학 종합설계 / 기술경영 / 데이터 엔지니어링 / 로지스틱공학'
          />

          {/* 
<Details
            position='Trainer'
            company='(주) 팀원짐 헬스장'
            companyLink='https://team1.modoo.at/'
            time='2021-2022'
            address='경기도 광명시 디지털로17'
            work="근육 근막이완 / 세일즈 교육 / 2, 3분할 운동 / 생활체육 기본 / 식단프로그램 / 전신운동프로그램 교육 이수 및 시험 통과 / 바디 프로필 사진 촬영"
          /> */}

          {/* <Details
            position='Software Engineer'
            company='Google'
            companyLink='#'
            time='2022-Present'
            address='Mountain View, CA'
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
