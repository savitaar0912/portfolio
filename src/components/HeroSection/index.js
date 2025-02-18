import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Bio } from '../../data/constants';

const HeroSection = () => {

    const SocialMediaIcons = styled.div`
    display: flex;
    border: 2px solid rgb(190, 26, 219);
    flex-direction: column;
    border-left-color: transparent;
    border-radius: 0 10px 10px 0px;
    position: fixed;
    top: 30%;
    left: 0px;
    @media (width<960px) {
    top: 33%;
  }

  @media (width < 640px) {
    top: 25%;
  }
`;

    const SocialMediaIcon = styled.div`
    display: flex;
    margin: 0.8rem;
    font-size: 2rem;
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

     @media (width<960px) {
     margin: 0.3rem ;
        svg{
        width: 1.5em;
        height: 1.5em;
    }
  }

  @media (width < 640px) {
     svg{
        width: 1em;
        height: 1em;
    }
  }
    `;

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
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
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='_blank' rel="noopener noreferrer">Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection