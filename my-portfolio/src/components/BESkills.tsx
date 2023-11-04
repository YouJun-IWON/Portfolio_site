import React from 'react';
import { motion } from 'framer-motion';
import { ImHtmlFive } from 'react-icons/im';
import Image from 'next/image';

// icons
import GrapeQLIcon from '../../public/images/svgs/skills/graphql-svgrepo-com.svg';
import PrismaIcon from '../../public/images/svgs/skills/light-prisma-svgrepo-com.svg';
import NodeJSIcon from '../../public/images/svgs/skills/node-js-svgrepo-com.svg';
import ExpressIcon from '../../public/images/svgs/skills/express-svgrepo-com.svg';
import NestJSIcon from '../../public/images/svgs/skills/nestjs-svgrepo-com.svg';
import MySQLIcon from '../../public/images/svgs/skills/mysql-svgrepo-com.svg';
import MongoDBIcon from '../../public/images/svgs/skills/mongo-svgrepo-com.svg';
import RedisIcon from '../../public/images/svgs/skills/redis-svgrepo-com.svg';
import PostgresqlIcon from '../../public/images/svgs/skills/postgresql-icon.svg';

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
        className='min-h-[23vh]'
        alt='Access Denied'
        
      />
      <span className='font-bold text-lg mt-2'>{name}</span>
      <span className='text-slate-500 dark:text-slate-300'>{level}</span>
    </motion.div>
  );
};

//? front-end

//? web3

//? back-end

const BESkills = () => {
  return (
    <div>
      <div
        className='w-full grid grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0 items-center justify-center
      '
      >
        <Skill
          x='10vw'
          y='10vw'
          source={PrismaIcon}
          name='Prisma'
          level='Advanced'
          className='shadow-sky-900'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={GrapeQLIcon}
          name='GraphQL'
          level='Intermediate'
          className='shadow-pink-500'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={NodeJSIcon}
          name='NodeJS'
          level='Basic'
          className='shadow-lime-500'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={ExpressIcon}
          name='Express'
          level='Basic'
          className='shadow-gray-500'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={NestJSIcon}
          name='NestJS'
          level='Basic'
          className='shadow-red-500'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={MySQLIcon}
          name='MySQL'
          level='Intermediate'
          className='shadow-teal-700'
        />

<Skill
          x='10vw'
          y='10vw'
          source={PostgresqlIcon}
          name='Postgresql'
          level='Intermediate'
          className='shadow-cyan-800'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={MongoDBIcon}
          name='MongoDB'
          level='Intermediate'
          className='shadow-green-500'
        />

        <Skill
          x='10vw'
          y='10vw'
          source={RedisIcon}
          name='Redis'
          level='Basic'
          className='shadow-red-600'
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

export default BESkills;
