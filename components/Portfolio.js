import React from 'react'
import styles from '../styles/home.module.scss';
import HefaStore from '../assets/hefa store.png';
import LandingPage from '../assets/landing page.png';
import LandingPageProperty from '../assets/landing page property.png';
import InvitationsDigital from '../assets/undangan digital.png';
import TopupGame from '../assets/topupgame.png';
import Card from './organism/portfolio/Card';
import Marketplace from '../assets/marketplace.jpg';

export const Portfolio = [
    {
        animation: '300',
        image: HefaStore,
        title: "Online shop(static)",
        tech: ['html','css', 'js']
    },
    {
        animation: '300',
        image: LandingPage,
        title: "Landing page healty food",
        tech: ['html','css', 'js', 'bs']
    },
    {
        animation: '500',
        image: LandingPageProperty,
        title: "Landing page property",
        tech: ['html','css', 'js', 'tailwind']
    },
    {
        animation: '500',
        image: InvitationsDigital,
        title: "Undangan berbasis QrCode",
        tech: ['react','css', 'mongodb', 'express', 'node']
    },
    {
        animation: '700',
        image: TopupGame,
        title: "Website topup game",
        tech: ['next','css', 'typesript', 'mongodb', 'express']
    },
    {
        animation: '300',
        image: HefaStore,
        title: "Marketplace",
        tech: ['vuejs', 'tailwind', 'mongodb', 'express', 'node']
    },
]

export default function Portfolio() {
  return (
    <div className={[styles.Portfolio, 'WrapperContent'].join(' ')}>
        <h1>Portfolio</h1>
        <p>here are the best projects that I can show you</p>
        <hr />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className={styles.WrapperImg}>
                <Card animation="700" image={Marketplace} title="" tech={[]}/>
            </div>
        </div>
    </div>
  )
}
