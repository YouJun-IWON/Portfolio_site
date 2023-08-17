import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './Lilcon';

interface DetailsPropr {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}
const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
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
            position='Industrial Engineering'
            company='Gachon univ.'
            companyLink='https://www.gachon.ac.kr/kor/index.do'
            time='2017-present'
            address='경기도 성남시 수정구 성남대로 1342'
            work='실용통계학 / 경영학원론 / 웹프로그래밍 / 정보사회의 윤리 / 고전과 미디어 스토리 텔링 /  산업경영공학개론 / 경영수학 / 프로그래밍언어 / 과학기술글쓰기 / 물류관리 / 경제학원론 / 논리적사고 / 서비스공학 / 생산운영관리 / 인간공학 및 실험 / 로봇공학 / 소프트웨어 생태계 / 문제해결기법(c언어) / 생산계획 및 통제 / 품질실험계획실무 / 데이터베이스시스템 / 고객관계관리 / motion&time study / 산업공학 종합설계 / 기술경영 / 데이터 엔지니어링 / 로지스틱공학'
          />

          <Details
            position='Global Business School'
            company='Gachon univ.'
            companyLink='https://www.gachon.ac.kr/kor/index.do'
            time='2017-present'
            address='경기도 성남시 수정구 성남대로 1342'
            work='마케팅 원론 / 노사관계론 / 국제경영 / 인간심리의 이해 / 회계 원리 / 글로벌의 이해 / 중급회계 / 소비자행동 / 혁신과 전략 / 기업재무 / 조직행동 / 기업가 정신 / 기업과 리더십 / 브랜드 매니지먼트 / 비즈니스 애널리틱스 / 비즈니스와 통계 / 프로그래밍 기초'
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
            position='Trainer'
            company='(주) 팀원짐 헬스장'
            companyLink='https://team1.modoo.at/'
            time='2021-2022'
            address='경기도 광명시 디지털로17'
            work="근육 근막이완 / 세일즈 교육 / 2, 3분할 운동 / 생활체육 기본 / 식단프로그램 / 전신운동프로그램 교육 이수 및 시험 통과 / 바디 프로필 사진 촬영"
          />

          <Details
            position='Brunch Writer'
            company='Kakao Corp.'
            companyLink='https://brunch.co.kr/@iwonyoujun'
            time='2022-2023'
            address=''
            work="50편의 글 기재 / 약 4000+ 명의 독자 / 객관적인 과학적 / 사회적 / 인류역사적 사실을 논리적으로 전개하여 추상적이고 주관적인 존재들을 정의내리는 과정에 대한 내용/ '나의 삶을 생각하기론' 이라는 제목의 작품 출품 / 2번째 작품(가명: '내가 생각하기론') 연재중 "
          />

          <Details
            position='Project Leader'
            company='codestates blockchain course'
            companyLink='https://www.codestates.com/course/blockchain'
            time='2022-2023'
            address='서울특별시 강남구 테헤란로 415'
            work="(https://candle-keyboard-dd4.notion.site/Blockchain-bddca30150574398a2f00a829da37011) / Bitcoin whitepaper / Ethereum whitepaper / DLT / DDB /Wallet & Account / UniSwap / Consensus Algorithms / Merkle tree / Tap root / Bloom Filter / DAG / DHT / IPFS / DID / SSI / Solidity / Security / Web3.js / Infura / Trilemma / Zero-Knowledge Proofs ..."
          />

          <Details
            position='entrepreneur'
            company='IWON'
            companyLink='https://iwon-page-rose.vercel.app/'
            time='2023-Present'
            address=''
            work="특허 출원 번호: 10-2022-0099680 / Polygon 기반 contract NFT를 생성하고 사고 팔 수 있는 플랫폼 개발 중"
          />

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
