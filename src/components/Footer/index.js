import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  //background: linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%);
`;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 25px;
  color: ${({ theme }) => theme.primary};
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.div`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.5);
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  svg{
    width: 1.5em;
    height: 1.5em;
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Shashank Singh</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon>
            <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a href={Bio.youtube} target="_blank" rel="noopener noreferrer">
              <YouTubeIcon />
            </a>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a href={Bio.insta} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a href={Bio.twitter} target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </SocialMediaIcon>
          <SocialMediaIcon>
            <a href={Bio.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          2025 Shashank Singh. All rights reserved. &copy;
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;