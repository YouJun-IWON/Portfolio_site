import Layout from '@/components/layout';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-1.png';
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
            <div className='w-1/2'>
              <h1>Turning Vision Into Reality With Code And Design.</h1>
              <p>
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
