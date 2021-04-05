import React, { useState } from 'react';
import { Button } from '../ButtonElements';
import Video from '../../video/video.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='/video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made East</HeroH1>
          <HeroP>
            Sign up for a new account today and receive %250 in credit towards
            your next payment
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='about'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
