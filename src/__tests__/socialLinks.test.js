import React from 'react';
import { render,screen } from '@testing-library/react';
import SocialLinks from '../components/SocialLinks';
import '@testing-library/jest-dom'; 

describe('SocialLinks', () => {
    it('renders a list of social links', () => {
      const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/your-username' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/your-username' },
        { name: 'Twitter', url: 'https://twitter.com/your-username' },
        { name: 'Youtube', url: 'https://youtube.com/your-username' },
      ];
      const { getByTestId } = render(<SocialLinks socialLinks={socialLinks} />);
      const socialLinksList = screen.getByTestId('social-links-list');
      expect(socialLinksList.children.length).toBe(socialLinks.length);
      socialLinks.forEach((link, index) => {
        const socialLink = socialLinksList.children[index];
        expect(socialLink).toHaveAttribute('href', link.url);
        expect(socialLink).toHaveTextContent(link.name);
      });
    });
  });