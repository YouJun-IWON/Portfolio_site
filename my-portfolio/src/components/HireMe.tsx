import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircularText
          className={'fill-dark dark:fill-light animate-spin-slow'}
        />
        <MotionLink
          href='mailto:tndhworl1998@gmail.com'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light border-transparent md:w-12 md:h-12 md:text-[10px] dark:border dark:border-solid dark:border-light'
          whileHover={{
            backgroundColor: [
              '#121212',
              'rgba(131,58,180,1)',
              'rgba(253,29,29,1)',
              'rgba(252,176,69,1)',
              'rgba(131,58,180,1)',
              '#121212',
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
          Hire Me
        </MotionLink>
      </div>
    </div>
  );
};

export default HireMe;
