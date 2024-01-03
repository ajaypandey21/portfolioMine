import React from 'react';
import SkillIcon from './SkillIcon'; // Assuming you have a reusable SkillIcon component
import htmlIcon from '../util/img/html-icon.svg';
import cssIcon from '../util/img/css-icon.svg';
import jsIcon from '../util/img/javascript.svg';
import reactIcon from '../util/img/react-js-icon.svg';
import pythonIcon from '../util/img/python.svg';
import djangoIcon from '../util/img/django-icon.svg';
import nodeIcon from '../util/img/icons8-nodejs-144.png';
import mongoIcon from '../util/img/mongodb.png';

const skillsData = [
  { id: 1, icon: htmlIcon, name: 'HTML' },
  { id: 2, icon: cssIcon, name: 'CSS' },
  { id: 3, icon: jsIcon, name: 'JavaScript' },
  { id: 4, icon: reactIcon, name: 'React' },
  { id: 5, icon: pythonIcon, name: 'Python' },
  { id: 6, icon: djangoIcon, name: 'Django' },
  { id: 7, icon: nodeIcon, name: 'Nodejs' },
  { id: 8, icon: mongoIcon, name: 'MongoDB' },
];

const Skills = () => {
  return (
    <>
      <h1 id="skill" className='head text-center p-5'>SKILLS</h1>
      <div className='grid pb-5'>
        {skillsData.map(skill => (
          <SkillIcon key={skill.id} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </>
  );
};

export default Skills;
