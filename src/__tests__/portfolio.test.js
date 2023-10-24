import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../components/Portfolio'; 


global.open = jest.fn();

describe('Portfolio Component', () => {
  it('renders correctly', () => {
    render(<Portfolio />);
    expect(screen.getByText('🎨 Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Check out some of my work! Youtube video walkthrough for some of the projects are available at 🎥')).toBeInTheDocument();
  });

  it('displays portfolio items with correct title and description', () => {
    render(<Portfolio />);
    const portfolioTitles = [
      'Retro Rush',
      'Poké Trader',
      'Portfolio website',
      'Bookworms',
      '5 Day Weather Forecast',
      'MongoConnectFriends',
    ];

    const portfolioDescriptions = [
      'A unique fullstack E-commerce website featuring throwback graphics and the React-Redux library for state management',
      'A full stack MERN application that allows Pokemon TCG enthusiasts to save and show off their card portfolio',
      'A modern single page web application built with ReactJS, TailwindCSS and React Scroll to display my skills and projects',
      "A full stack application that utilizes Google Books API to allow avid readers to discover new books and saving their book collections online!",
      "A classic 5-day weather forecast application utilizing only HTML, CSS, Bootstrap, Javascript and the OpenWeatherMap API",
      'A REST API built with MongoDB and the Mongoose Express Package',
    ];

    portfolioTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    portfolioDescriptions.forEach((description) => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('opens correct URLs when demo and code buttons are clicked', () => {
    render(<Portfolio />);
    const demoButtons = screen.getAllByText('Demo');
    const codeButtons = screen.getAllByText('Code');

    fireEvent.click(demoButtons[0]);
    expect(global.open).toHaveBeenCalledWith('https://retro-rush-38883.netlify.app/', '_blank');

    fireEvent.click(codeButtons[0]);
    expect(global.open).toHaveBeenCalledWith('https://github.com/lingeorge88/8bitGamesV2', '_blank');
  });
});