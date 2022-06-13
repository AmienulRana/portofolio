import styles from '../../../styles/home.module.scss';
import { DiHtml5, DiCss3, DiBootstrap, DiReact, DiJavascript1, DiGulp } from 'react-icons/di'; 
import { SiExpress, SiRedux, SiTailwindcss, SiMongodb, SiNextdotjs, SiNpm, SiGithub, SiGit, SiWebpack } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import Image from 'next/image'
export const Tech = {
    html: DiHtml5,
    css:  DiCss3,
    bs:   DiBootstrap,
    js: DiJavascript1,
    react:DiReact,
    node: FaNodeJs,
    express: SiExpress,
    redux: SiRedux,
    tailwind: SiTailwindcss,
    mongodb: SiMongodb,
    next:SiNextdotjs,
    npm: SiNpm,
    github: SiGithub,
    git: SiGit,
    gulp:DiGulp,
    webpack:SiWebpack
}
function Card({image, title, tech, animation}) {
    const RenderTech = tech.map(item => Tech[item]);
  return (
    <>
        <figure>
            <Image src={image} placeholder="blur" width={300} height={200} data-aos="fade-up" data-aos-duration={animation} />
            <figcaption>{title}</figcaption>
        </figure>
        <div className={styles.Tech}>
            {RenderTech.map(Item => <Item />)}
        </div>
    </>
  )
}

export default Card