import styles from "../styles/home.module.scss";
import { MdOutlineWork } from "react-icons/md";
function Education() {
  return (
    <div className={[styles.Education, "WrapperContent"].join(" ")}>
      <h1>Experience</h1>
      <hr />
      <div
        className={styles.WrapperHistory}
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <div className={styles.FirstContent}>
          <div className={styles.Year}>
            <h4></h4>
          </div>
          <div className={styles.Content}>
            <MdOutlineWork />
          </div>
        </div>
        <div className={styles.History}>
          <div className={styles.Year}>
            <h3>july - oktober 2021</h3>
          </div>
          <div className={styles.Content}>
            <h3>Internship as full stack developer | DILo Medan</h3>
            <ul>
              <li>Work as a team or individually</li>
              <li>
                Build and develop website using Reactjs, ExpressJs, and Mongodb
              </li>
              <li>
                Collaborate with other Developers and UI/UX to update the
                website and create new features.
              </li>
              <li>
                Metting with DILo Manager in digital invitation website builder
                as my final project
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
