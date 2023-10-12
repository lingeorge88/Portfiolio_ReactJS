import  {useState, FC} from 'react';
import {FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
const NavBar: FC = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        },
        
    ]

  return (
        <header className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed mb-5'>
            <div>
                <a href="/" className='text-5xl ml-2 font-signature'>George Lin</a>
            </div>

            <nav>
                <ul className='hidden md:flex'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer font-default capitalize text-base text-gray-500 hover:scale-105 duration-200 hover:text-white'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>

            {nav && (
                <nav>
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {links.map(({ id, link }) => (
                            <li key={id} className='font-default px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white'>
                                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}

export default NavBar
