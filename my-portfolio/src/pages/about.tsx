import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profilePoc from '../../public/youjun.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import FESkills from '@/components/FESkills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';
import BESkills from '@/components/BESkills';
import Web3Skills from '@/components/Web3Skills';
import DesignSkills from '@/components/DesignSkills';

interface AnimatedNumbersProps {
  value: number;
}

const AnimatedNumbers: React.FC<AnimatedNumbersProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <Head>
        <title>YouJun | About</title>
        <meta name='description' content='any description' />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-25'>
          <AnimatedText
            text='신념과 열정으로 끊임없이!'
            className={'mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'}
          />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4  md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                Biograpy
              </h2>
              <p className='font-medium '>
                안녕하세요. 사람간의 신뢰 네트워크를 강화하여 사회와 개인의 삶을 증진시키고자 하는 웹 개발자 이의준입니다. 
                저는 항상 개인과 사회가 이루고 있는 시스템에 관심을 갖고 있었고, 저만의 해답을 얻고자 글(책)을 써왔습니다. 
                그 과정에서 삶의 의미는 곧 자신을 존재하게 하는 시스템의 존재를 증명할 때 비로소 그 가치를 갖게 됨을 알 수 있었습니다. 그리고 그 증명은 사회를 구성하는 구성원들의 연결을 다양하면서도 강화시키는 것이었습니다. 저는 스스로 이런 가치와 목표를 납득했고 다음 두가지의 목표를 달성하려고 합니다.
              </p>

              <p className='my-4 font-medium '>
                첫번째는 사람들이 더욱 빠르고 안전하게 사용할 수 있는 웹 앱/페이지를 제작하는 것입니다. 각 웹 사이트의 목적에 맞춰 사용자들로 하여금 자신의 목적을 최소한의 과정으로 달성하면서 모든 과정이 빠르고 직관적이게 표시되는 것입니다. 동시에 보안적으로 문제가 없어야 하는 것은 물론 서버와 클라이언트의 부담을 적절하게 분배하여 웹이 최대한 온전히 작동될 수 있도록 하는 것입니다. 여기에 사용자에게 긍정적인 인상을 남기는 디자인을 더해 추후 같은 목적을 떠올렸을 때 이 웹이 떠오르게 하는 것입니다.  
              </p>

              <p className='font-medium '>
                두번째는 블록체인을 기반한 웹을 통해 사람들이 갖고 있는 불신의 여지를 최소화하는 것입니다. 현대 사회를 보면 뉴스의 3/4은 사기에 관한 소식이며 사람간의 신뢰는 점점 무너지고 있습니다. 그리고 이는 기존의 몇몇 사람에 의해 쉽게 조작되고 감춰질 수 있었던 중앙화데이터 구조의 한계가 크게 작용하고 있습니다. 저는 이러한 구조적 문제를 해결하기 위해 블록체인이 반드시 필요하다고 생각합니다. 블록체인을 통해 데이터를 주권화시키고 서로를 알고리즘 아래에서 감시하게 한다면, 그리고 이것이 사람들에게 쉽게 인지된다면 기존의 구조적 문제를 해결함과 동시에 큰 도약을 할 수 있을 것이라 생각합니다. 
              </p>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'></div>
              <Image
                src={profilePoc}
                alt='youjun'
                className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              ></Image>
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 md:items-center md:gap-10 md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={89}></AnimatedNumbers>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                PageSpeed Insights Score
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={19} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                  projects completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl mb:mt-32'>
            Skills
          </h2>
          <h2 className='font-bold text-4xl mt-10 w-full  md:text-3xl mb:mt-32 '>
            Frontend
          </h2>
          <FESkills />

          <h2 className='font-bold text-4xl mt-10 w-full  md:text-3xl mb:mt-32 '>
            Design Tools
          </h2>
          <DesignSkills />

          <h2 className='font-bold text-4xl mt-10 w-full  md:text-3xl mb:mt-32'>
            Backend
          </h2>
          <BESkills />

          <h2 className='font-bold text-4xl mt-10 w-full  md:text-3xl mb:mt-32'>
            Web3 (Blockchain)
          </h2>
          <Web3Skills />

          <Experience />
          {/* <Education /> */}
        </Layout>
      </main>
    </div>
  );
};

export default about;
