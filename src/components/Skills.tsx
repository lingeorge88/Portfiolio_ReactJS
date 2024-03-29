import {FC} from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import github from '../assets/github.png';
import expressJS from '../assets/expressjs.jpg';
import graphQL from '../assets/graphql.png';



const Skills :FC = () => {

const skills =[
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500',
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
    },
    {
        id: 4,
        src: react,
        title: 'ReactJS',
        style: 'shadow-blue-600',
    },
    
    {
        id: 6,
        src: tailwind,
        title: 'Tailwind CSS',
        style: 'shadow-sky-500',
    },
    {
        id: 7,
        src: graphQL,
        title: 'GraphQL',
        style: 'shadow-pink-400',
    },
    {
        id: 8,
        src: github,
        title: 'Git Version Control',
        style: 'shadow-gray-500',
    },
    {
        id: 5,
        src: node,
        title: 'NodeJS',
        style: 'shadow-green-500',
    },
    {
        id: 9,
        src: expressJS,
        title: 'ExpressJS',
        style: 'shadow-white',
    },

]

return (
    <section id='skills' className='h-130vh sm:h-screen font-default text-base bg-gradient-to-b from-gray-800 to to-black w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <header>
                <h1 className='text-4xl font-bold border-b-4 border-indigo-500 p-2 inline'>💻 Skills</h1>
                <p className='py-6'>
                    These are the technologies I have worked with! For more details, 
                    click the icon to the left for a copy of my resume!
                </p>
            </header>
            <ul className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    skills.map(({ id, src, title, style }) => (
                        <li key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={title} className='w-20 mx-auto' />
                            <p className='mt-4'>{title}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
)
}

export default Skills