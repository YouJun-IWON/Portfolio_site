import Layout from '@/components/layout';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full '>
            <div className='w-1/2'>
              <Image
                src={profilePic}
                alt='YouJun'
                className='2-full h-auto'
              ></Image>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <h1></h1>
              <AnimatedText
                text='Turning Vision Into Reality With Code And Design.'
                className='!text-6xl !text-left'
              />
              <p className='my-4 text-base font-medium'>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='/dummy.pdf' target={'_blank'}>
                  Resume
                </Link>
                <Link href='mailto:tndhworl1998@gmail.com' target={'_blank'}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
