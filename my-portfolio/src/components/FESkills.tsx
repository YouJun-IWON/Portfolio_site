import React from 'react';
import { motion } from 'framer-motion';
import { ImHtmlFive } from 'react-icons/im';
import Image from 'next/image';

// icons
import HTMLicon from '../../public/images/svgs/skills/html-5-svgrepo-com.svg';
import CSSicon from '../../public/images/svgs/skills/css-3-svgrepo-com.svg';
import Javascripticon from '../../public/images/svgs/skills/js-svgrepo-com.svg';
import TypescriptIcon from '../../public/images/svgs/skills/typescript-icon-svgrepo-com.svg';
import ReactIcon from '../../public/images/svgs/skills/react-svgrepo-com.svg';
import NextJSIcon from '../../public/images/svgs/skills/nextjs-fill-svgrepo-com.svg';
import TailwindCSS from '../../public/images/svgs/skills/tailwindcss-icon-svgrepo-com.svg';
import MaterialUIIcon from '../../public/images/svgs/skills/material-ui-svgrepo-com.svg';
import ReduxIcon from '../../public/images/svgs/skills/redux-svgrepo-com.svg';
import ZustandIcon from '../../public/images/svgs/skills/CompressJPEG.online_500x500-image.png';

import StyledComponentsIcon from '../../public/images/svgs/skills/styled-components-1.svg';

import EmotionIcon from '../../public/images/svgs/skills/emotion.png';
import MantineIcon from '../../public/images/svgs/skills/mantine-seeklogo.com.svg';

const Skill = ({ name, x, y, level, source, className }: any) => {
  return (
    <motion.div
      className={`shadow-lg w-full h-full rounded-2xl ${className} border p-3 border-solid flex hover:animate-pulse flex-col items-center justify-center`}
      whileHover={{ scale: 1.15 }}
      initial={{ x: x, y: y }}
      whileInView={{ x: '0', y: '0', transition: { duration: 0.5 } }}
      // animate={{ x: x, y: y }}
      // transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <Image
        src={source}
        width={300}
        height={300}
        alt='Access Denied'
        className={undefined}
      />
      <span className='font-bold text-lg mt-2'>{name}</span>
      <span className='text-slate-500'>{level}</span>
    </motion.div>
  );
};

//? front-end

//? web3

//? back-end

const FESkills = () => {
  return (
    <div>
      <div
        className='w-full grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0 items-center justify-center
      '
      >
        <Skill
          x='-10vw'
          y='10vw'
          source={HTMLicon}
          name='HTML'
          level='Advanced'
          className='shadow-orange-500'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={CSSicon}
          name='CSS'
          level='Intermediate'
          className='shadow-blue-400'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={Javascripticon}
          name='Javascript'
          level='Advanced'
          className='shadow-yellow-500'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={TypescriptIcon}
          name='Typescript'
          level='intermediate'
          className='shadow-blue-600'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={ReactIcon}
          name='React'
          level='intermediate'
          className='shadow-sky-400'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={NextJSIcon}
          name='NextJS'
          level='intermediate'
          className='shadow-gray-500'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={ReduxIcon}
          name='Redux'
          level='intermediate'
          className='shadow-violet-500'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={ZustandIcon}
          name='Zustand'
          level='intermediate'
          className='shadow-amber-800'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={TailwindCSS}
          name='TailwindCSS'
          level='intermediate'
          className='shadow-emerald-500'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={MaterialUIIcon}
          name='Material UI'
          level='intermediate'
          className='shadow-sky-600'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={StyledComponentsIcon}
          name='Styled Components'
          level='intermediate'
          className='shadow-yellow-600'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={EmotionIcon}
          name='Emotion'
          level='intermediate'
          className='shadow-pink-600'
        />

        <Skill
          x='-10vw'
          y='10vw'
          source={MantineIcon}
          name='Mantine'
          level='intermediate'
          className='shadow-blue-500'
        />

        {/* <motion.div
          className='flex rounded-full font-semibold bg-dark mt-10 text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2 z-10'
          whileHover={{ scale: 1.15 }}
        >
          Web2
        </motion.div>

        <Skill name='Frontend' x='15vw' y='-2vw' /> */}

        {/* <Skill name='CSS' x='10vw' y='10vw' />
        <Skill name='HTML' x='0vw' y='0vw' />
        <Skill name='Javascript' x='20vw' y='6vw' />
        <Skill name='Typescript' x='0vw' y='12vw' />
        <Skill name='NextJs' x='-20vw' y='-15vw' />
        <Skill name='React' x='15vw' y='12vw' />
        <Skill name='Tailwind CSS' x='32vw' y='-5vw' />
        <Skill name='Prisma' x='15vw' y='-12vw' />
        <Skill name='Mui' x='0vw' y='-20vw' />
        <Skill name='Motion Framer' x='0vw' y='-20vw' />
        <Skill name='Redux' x='-25vw' y='18vw' />
        <Skill name='zustand' x='18vw' y='18vw' />
        <Skill name='Remix' x='4vw' y='25vw' />  */}
      </div>
    </div>
  );
};

export default FESkills;
