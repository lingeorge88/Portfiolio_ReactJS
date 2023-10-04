import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import About from "../components/About";

describe('Test that the About section renders correctly', () => {
    it('renders the component', () => {
      const { getByText, getByRole } = render(<About />);
      
      // Check if the title is present
      expect(screen.getByText("✨About Me✨")).toBeInTheDocument();
  
      // Check if the introduction text is present
      expect(screen.getByText(/Hello! Welcome to my portfolio page!/)).toBeInTheDocument();
  
      // Check if the container div has the correct attributes
      const container = screen.getByTestId('about-container');
      expect(container).toHaveClass('h-130vh');
      expect(container).toHaveClass('font-default');
      // ... add more checks as necessary
    });
  });