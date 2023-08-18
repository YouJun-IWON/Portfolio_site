import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial:{
    opacity:1,
  },
  animate: {
    opacity:1,
    transition:{
      dalay:0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial:{
    opacity:0,
    y:50
  },
  animate: {
    y:0,
    opacity:1,
    transition:{
      duration:1,
    }
  }
}

interface AnimatedTextProps {
  text: string;
  className: string;
  project?: boolean;
}

const AnimatedText = ({ text, className = '', project }: AnimatedTextProps) => {



  if(project) {
    return (
      <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 ml-3'>
        <motion.h1
          className={` inline-block w-full text-dark lg:text-cyan-300 dark:text-light font-bold capitalize text-8xl ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(' ').map((word, index) => (
          <motion.span key={word + '-' + index} className='inline-block' variants={singleWord}>
            {index === 1 ? <span className='text-cyan-300 '>{word}</span> : word} &nbsp;  
            </motion.span>
          ))}
        </motion.h1>
      </div>)
  }


  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h1
        className={` inline-block w-full text-dark dark:text-light font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
        <motion.span key={word + '-' + index} className='inline-block' variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
