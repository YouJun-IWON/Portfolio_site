import AnimatedText from '@/components/AnimatedText';
import GymComponent from '@/components/Gym';
import Gym from '@/components/Gym';
import TransitionEffect from '@/components/TransitionEffect';
import WritingComponent from '@/components/Writing';
import Layout from '@/components/layout';
import Head from 'next/head';
import React from 'react';

const hobby = () => {
  return (
    <>
      <Head>
        <title>You Jun | Articles</title>
      </Head>
      {/* <ParticlesContainer /> */}
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center '>
        
        <Layout className='pt-30'>
     
        <div className='flex flex-col gap-10'>


       <GymComponent />
      <WritingComponent />
        </div>

        </Layout>
      </main>
    </>
  );
};

export default hobby;
