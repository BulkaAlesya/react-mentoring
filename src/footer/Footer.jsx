import React from 'react';
import { FooterBlock, FooterLogoTitle } from './Footer.styled';
import { LogoTitle } from '../header/LogoTitle/LogoTitle';

const Footer = () => {
  return (
  <div>
    <FooterBlock>
      <FooterLogoTitle>
        <LogoTitle></LogoTitle>
      </FooterLogoTitle>
    </FooterBlock>
    </div>
  )
};
export default Footer;
