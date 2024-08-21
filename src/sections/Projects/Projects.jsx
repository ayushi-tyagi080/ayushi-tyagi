import styles from './ProjectsStyles.module.css';
import Viberr from '../../assets/assets/viberr.png'
import freshBurger from '../../assets/assets/fresh-burger.png'
import hipsster from '../../assets/assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard';
function Projects(){
    return(
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
            <ProjectCard 
            src={Viberr} 
            link="https://devfolio.co/projects/rakshak-8c93"
            h3="Rakshak"
            p="Army Defence System"/>
            <ProjectCard 
            src={freshBurger} 
            link="https://scintillating-muffin-7bb00c.netlify.app/find-jobs"
            h3="Udyog Saarthi"
            p="Job Portal for PWDs"/>
            <ProjectCard 
            src={hipsster} 
            link=""
            h3="Amthyst Tides"
            p="Ecommerce Clothing Website"/>
            </div>
        </section>
        );
}

export default Projects