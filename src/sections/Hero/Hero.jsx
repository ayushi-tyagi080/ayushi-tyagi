import styles from './HeroStyles.module.css';
import heroImg from '../../assets/assets/hero-img.jpg';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';
import twitterLight from '../../assets/assets/twitter-light.svg';
import twitterDark from '../../assets/assets/twitter-dark.svg';
import linkedinLight from '../../assets/assets/linkedin-light.svg';
import linkedinDark from '../../assets/assets/linkedin-dark.svg';
import githubLight from '../../assets/assets/github-light.svg';
import githubDark from '../../assets/assets/github-dark.svg';
import CV from '../../assets/assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';


function Hero(){
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light'? sun : moon;
    const twitterIcon = theme === 'light'? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light'? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light'? githubLight : githubDark;

    return (<section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer} >
            <img 
            src={heroImg} 
            className={styles.hero} 
            alt="Profile of Ayushi" />
            <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon"
            onClick={toggleTheme} />
            </div>

            <div className={styles.info} >   
                <h1>
                    Ayushi
                    <br/>
                    Tyagi
                </h1>
                <h2>Software Engineer</h2>
                <span>  
                    <a href="" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ayushi-tyagi-380202228/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                    <a href="https://github.com/ayushi-tyagi080" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                    </a>
                    </span>
                    <p className={styles.description}>
                        Passion for creating React web apps, DSA and Problem Solving
                    </p>
                <a href={CV} download>
                    <button className="hover" >Resume</button>
                </a>
            </div>
    </section>);
}
export default Hero;