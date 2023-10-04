import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../components/Skills';

test('Skills component renders correctly', () => {
    render(<Skills />);
    
   
    expect(screen.getByText('💻 Skills')).toBeInTheDocument();
    
  
    const skillItems = screen.getAllByRole('img');
    expect(skillItems).toHaveLength(9); 
    
 
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('ReactJS')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('GraphQL')).toBeInTheDocument();
    expect(screen.getByText('Git Version Control')).toBeInTheDocument();
    expect(screen.getByText('NodeJS')).toBeInTheDocument();
    expect(screen.getByText('ExpressJS')).toBeInTheDocument();
    
});