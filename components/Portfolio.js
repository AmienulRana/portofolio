import React from 'react'
import styles from '../styles/home.module.scss';
import HefaStore from '../assets/hefa store.png';
import LandingPage from '../assets/landing page.png';
import LandingPageProperty from '../assets/landing page property.png';
import InvitationsDigital from '../assets/undangan digital.png';
import TopupGame from '../assets/topupgame.png';
import Card from './organism/portfolio/Card';
import Marketplace from '../assets/marketplace.jpg';

export default function Portfolio() {
  return (
    <div className={[styles.Portfolio, 'WrapperContent'].join(' ')}>
        <h1>Portfolio</h1>
        <p>here are the best projects that I can show you</p>
        <hr />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className={styles.WrapperImg}>
                <Card animation="300" image={HefaStore} title="Online shop(static)" tech={['html', 'css', 'bs']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="300" image={LandingPage} title="Landing page healty food" tech={['html', 'css', 'js','bs']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="500" image={LandingPageProperty} title="Landing page property" tech={['html', 'css', 'js','tailwind']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="500" image={InvitationsDigital} title="Undangan berbasis QrCode" tech={['css', 'react','mongodb', 'express', 'node']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="700" image={TopupGame} title="Website topup game" tech={['css', 'typesript','mongodb', 'express', 'node']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="700" image={Marketplace} title="Marketplace" tech={['vuejs', 'tailwind', 'mongodb', 'express', 'node']}/>
            </div>
        </div>
    </div>
  )
}
