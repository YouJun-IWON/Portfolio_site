import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  BrunchIcon,
  SunIcon,
  TistoryIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import Image from 'next/image';
import InstagramIcon from '../../public/images/svgs/Instagram_logo_2016.svg';
interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`absolute left-0 -bottom-0.5 h-[1px] inline-block w-0 bg-dark group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }: any) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={`absolute left-0 -bottom-0.5 h-[1px] inline-block w-0 bg-light group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed rounded-2xl translate-x-[13%] lg:bg-light/75 shadow-lg  shadow-teal-500/50 w-[80%] px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:px-12 sm:px-8 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent md:shadow-none dark:bg-black/65 dark:shadow-teal-500/50'>
      <button
        className='-ml-10 flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden bg-blur'>
        <nav>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='mx-4' />
          <CustomLink href='/hobby' title='Hobby' className='ml-4' />
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a
            href='https://reasonjun.tistory.com/'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-3'
          >
            <TistoryIcon className={undefined} />
          </motion.a>
          <motion.a
            href='https://github.com/YouJun-IWON'
            target={'_blank'}
            className='w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon className={undefined} />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/lee-euijun-30099721b/'
            target={'_blank'}
            className='w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon className={undefined} />
          </motion.a>
          <motion.a
            href='https://brunch.co.kr/@iwonyoujun'
            target={'_blank'}
            className='w-6 mx-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <BrunchIcon className={undefined} />
          </motion.a>
          <motion.a
            href='/'
            target={'_blank'}
            className='w-6 ml-3'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image
              src={InstagramIcon}
              width={400}
              height={300}
              alt='Access Denied'
              className={undefined}
            />
          </motion.a>

          <button
            onClick={() => {
              setMode(mode === 'light' ? 'dark' : 'light');
            }}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '30%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink
              href='/'
              title='Home'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/about'
              title='About'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/hobby'
              title='Hobby'
              className=''
              toggle={handleClick}
            />
          </nav>

          <nav className='flex items-center justify-center mt-2  flex-wrap'>
            <motion.a
              href='/'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mr-3 sm:mx-1'
            >
              <TistoryIcon className={undefined} />
            </motion.a>
            <motion.a
              href='/'
              target={'_blank'}
              className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon className={undefined} />
            </motion.a>
            <motion.a
              href='/'
              target={'_blank'}
              className='w-6 mx-3 sm:mx-1'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon className={undefined} />
            </motion.a>
            <motion.a
              href='/'
              target={'_blank'}
              className='w-6 mx-3 sm:mx-1'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <BrunchIcon className={undefined} />
            </motion.a>
            <motion.a
              href='/'
              target={'_blank'}
              className='w-6 ml-3 sm:mx-1'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={InstagramIcon}
                width={400}
                height={300}
                alt='Access Denied'
                className={undefined}
              />
            </motion.a>

            <button
              onClick={() => {
                setMode(mode === 'light' ? 'dark' : 'light');
              }}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div> */}
    </div>
  );
};

export default NavBar;
