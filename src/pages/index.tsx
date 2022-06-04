import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { useClientRect } from '../hooks/useClientRect';
import styles from '../styles/Home.module.css';

const Top: NextPage = () => {
  const TopHero =  dynamic(() => import('../components/top/TopHero'), { ssr: false });
  return (
    <article>
      <TopHero />
    </article>
  )
}

export default Top;