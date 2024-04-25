import SkillsProps from "./types"
import './skills.css'

const Skills: React.FC<SkillsProps> = ( props ) => {
  const { skills } = props;
  return (
    <ul className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill" key={index}>{skill}</div>
      ))}
    </ul>
  )
}

export default Skills;