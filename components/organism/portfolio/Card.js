import styles from "../../../styles/home.module.scss";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiReact,
  DiJavascript1,
  DiSass,
} from "react-icons/di";
import {
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiNpm,
  SiGithub,
  SiGit,
  SiWebpack,
  SiVuedotjs,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Image from "next/image";
export const Tech = {
  html: DiHtml5,
  css: DiCss3,
  bs: DiBootstrap,
  js: DiJavascript1,
  react: DiReact,
  node: FaNodeJs,
  express: SiExpress,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  mongodb: SiMongodb,
  next: SiNextdotjs,
  npm: SiNpm,
  github: SiGithub,
  git: SiGit,
  vuejs: SiVuedotjs,
  typesript: SiTypescript,
  sass: DiSass,
  webpack: SiWebpack,
};
function Card({ image, title, tech, animation, link }) {
  const RenderTech = tech.map((item) => Tech[item]);
  return (
    <>
      <figure>
          <Image
            src={image}
            placeholder="blur"
            width={300}
            height={200}
            data-aos="fade-up"
            data-aos-duration={animation}
            alt={title}
          />
        <figcaption>{title}</figcaption>
      </figure>
      <a href={link} target="_blank" className={styles.Tech} rel="noreferrer">
        <div>
          {RenderTech.map((Item, i) => (
            <Item key={i} />
          ))}
        </div>
      </a>

    </>
  );
}

export default Card;
