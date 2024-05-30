import SkillsProps from "./types"
import './Skills.css'

import { useDispatch } from 'react-redux';
import { selectSkill } from '../../redux/skills/skillsSlice';

const Skills: React.FC<SkillsProps> = ( props ) => {
  const { skills } = props;

  const dispatch = useDispatch();

  const handleSkillClick = (skill: string) => {
    dispatch(selectSkill(skill));
  };

  return (
    <ul className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill" key={index} onClick={() => handleSkillClick(skill)}>{skill}</div>
      ))}
    </ul>
  )
}

export default Skills;