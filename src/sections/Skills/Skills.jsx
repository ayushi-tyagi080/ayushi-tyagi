import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="React.js"/>
        <SkillList src={checkMarkIcon} skill="Node.js"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C/Cpp"/>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="DSA"/>
        <SkillList src={checkMarkIcon} skill="Problem Solving"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux"/>
        <SkillList src={checkMarkIcon} skill="Bootstrap"/>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        <SkillList src={checkMarkIcon} skill="Git"/>
        </div>
        </section>
  )
};
export default Skills