import React from 'react'
import styles from '../styles/home.module.scss';
import HefaStore from '../assets/hefa store.png';
import LandingPage from '../assets/landing page.png';
import LandingPageProperty from '../assets/landing page property.png';
import Card from './organism/portfolio/Card';
export default function Portfolio() {
  return (
    <div className={[styles.Portfolio, 'WrapperContent'].join(' ')}>
        <h1>Portfolio</h1>
        <p>here are the best projects that I can show you</p>
        <hr />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <div className={styles.WrapperImg}>
                <Card animation="300" image={HefaStore} title="online shop(static)" tech={['html', 'css', 'bs']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="300" image={LandingPage} title="landing page healty food" tech={['html', 'css', 'js','bs']}/>
            </div>
            <div className={styles.WrapperImg}>
                <Card animation="500" image={LandingPageProperty} title="landing page property" tech={['html', 'css', 'js','tailwind']}/>
            </div>
        </div>
    </div>
  )
}
