import styles from '../styles/home.module.scss';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
export default function Banner(){
    return(
        <div className={[styles.Banner, 'WrapperContent'].join(' ')}>
            <div className={styles.Medsos}data-aos="fade-up" data-aos-duration="400">
                <a href="https://www.linkedin.com/in/amienul-rana-704681218/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/AmienulRana" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>
            </div>
            <h1 data-aos="fade-up" data-aos-duration="600">Hello, i&apos;am Amienul Rana</h1>
            <h2 data-aos="fade-up" data-aos-duration="800">Freelance frontend developer based in Medan, Indonesia.
                Highly experienced in maintenance & developing websites.</h2>
            <p data-aos="fade-up" data-aos-duration="1000">I am a Front end developer who has more than 1 year of experience and also has good coding skills in creating or developing applications with high performance and neat architecture. I also have experience in Back end developer position.</p>
        </div>
    )
}