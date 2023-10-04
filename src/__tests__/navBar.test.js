import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';

describe('NavBar Component', () => {
    test('should render my name in the navBar', () => {
      render(<NavBar />);
      expect(screen.getByText('George Lin')).toBeInTheDocument();
    });


    test('should render correct link texts', ()=> {
        render(<NavBar/>);
        expect(screen.getByText('home')).toBeInTheDocument();
        expect(screen.getByText('about')).toBeInTheDocument();
        expect(screen.getByText('portfolio')).toBeInTheDocument();
        expect(screen.getByText('skills')).toBeInTheDocument();
        expect(screen.getByText('contact')).toBeInTheDocument();
    })
})
