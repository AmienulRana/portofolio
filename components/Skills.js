import { Tech } from './organism/portfolio/Card';
import styles from '../styles/home.module.scss';
export default function Skills() {
  return (
    <div className={'WrapperContent'}>
        <h1 style={{textAlign: 'center'}}>My Skill</h1>
        <hr />
        <div className={styles.Skill}>
            <div className={styles.Frontend}>
                <h2>Front end</h2>
                <div className={styles.Skills}>
                    <Tech.html />
                    <Tech.css />
                    <Tech.js />
                    <Tech.bs />
                    <Tech.tailwind />
                    <Tech.react />
                    <Tech.redux />
                    <Tech.next />
                </div>
            </div>
            <div className={styles.Backend}>
                <h2>Back end</h2>
                <div className={styles.Skills}>
                    <Tech.node />
                    <Tech.express />
                    <Tech.mongodb />
                </div>
            </div>
            <div className={styles.Tools}>
                <h2>Tools</h2>
                <div className={styles.Skills}>
                    <Tech.npm />
                    <Tech.github />
                    <Tech.git />
                </div>
            </div>
            <div className={styles.NextLearn}>
                <h2>Next Tech</h2>
                <div className={styles.Skills}>
                    <Tech.webpack />
                    <Tech.gulp />
                </div>
                <p>The technology above is special for this month</p>
            </div>
        </div>
    </div>
  )
}
