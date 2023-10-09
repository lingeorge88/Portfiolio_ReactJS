import {FC} from 'react'

const About: FC = () => {
  return (
    <div data-testid="about-container" data-name="about" className='h-130vh font-default text-base font-medium w-full sm:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500'> ✨About Me✨</p>
            </div>
            <p className='text-xl mt-20 font-light'>
            Hello! Welcome to my portfolio page! My name is George, I am a web developer with a background in Medical Laboratory Science. Working as a Medical Laboratory Scientist has helped me develop excellent attention-to-detail skills while working efficiently to ensure targeted turnaround times for patient results. I am excited to carry these skills into the field of software development. 
            </p>
            <br />
            <p className='text-xl font-light'>
              I am committed to lifelong learning and thrilled at the opportunity to constantly learn and implementnew technologies in software development.  I hope to leverage my diverse skill set to offer innovative problem-solving approaches and deliver high-quality solutions to companies and clients. 
            </p>
            </div>
            
            
        
    </div>
  )
}

export default About;