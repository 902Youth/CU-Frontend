import SkillsProps from "./types"
import './Skills.css'

import { useDispatch } from 'react-redux';
import { selectSkill } from '../../redux/skills/skillsSlice';

const Skills: React.FC<SkillsProps> = ( props ) => {
  const { skills, route } = props;

  // const currRoute = window.location.pathname

  const dispatch = useDispatch();

  const handleSkillClick = (skill: string) => {
    dispatch(selectSkill(skill));
  };

  // const handleRemove = (skill: string) => {

  // }

  return (
    <ul className="skills-container">
      {skills.map((skill, index) => (
        <>
        <div className="skill" key={index} onClick={() => handleSkillClick(skill)}>{skill}</div>
        {route === '/about' || route === '/profile-setup' && (
          <span className="deleteButton">x</span>
        )}
        </>
        
      ))}
    </ul>
  )
}

export default Skills;