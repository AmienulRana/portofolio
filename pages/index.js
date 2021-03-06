import Head from 'next/head'
import styles from '../styles/home.module.scss'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Education from '../components/Education';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Amienul Rana</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar />
      <Banner />
      <Education />
      <Portfolio />
      <Skills />
    </div>
  )
}
