import React from 'react'
import SkillsItems from './SkillsItems'

import cpp from '../assets/cpp.png';
import css from '../assets/css.png';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import mu5 from '../assets/mu5.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import sass from '../assets/sass.png';
import typescript from '../assets/typescript.png';


const Skills = () => {
    return (
        <div id='experience'>
            <h2>Skills & Experience</h2>
            <section>
                <SkillsItems icon={javascript} name='Javascript' />
                <SkillsItems icon={typescript} name='Typescript' />
                <SkillsItems icon={react} name='React' />
                <SkillsItems icon={node} name='Node' />
                <SkillsItems icon={redux} name='Redux' />
                <SkillsItems icon={sass} name='Sass' />
                <SkillsItems icon={mu5} name='Material UI' />
                <SkillsItems icon={html} name='Html' />
                <SkillsItems icon={css} name='Css' />
                <SkillsItems icon={git} name='Git' />
                <SkillsItems icon={figma} name='Figma' />
                <SkillsItems icon={cpp} name='Cpp' />
            </section>



        </div>
    )
}

export default Skills