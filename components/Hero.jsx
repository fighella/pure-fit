import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import Router from 'next/router'

const Hero = props => {
  const [dimensions, setDimensions] = useState({ width: -1, height: -1 });
  const { faded, compact, close, custom_imgs, imgs, subtitle } = props;
  const bottomFade = faded ? <BottomFade /> : false;
  const spaced = compact ? false : <VerticalSpacing />;
  const closeButton = close ? (
    <CloseButton onClick={() => Router.Back()}>X</CloseButton>
  ) : (
    false
  );
  return (
    <React.Fragment>
      <Measure
        bounds
        onResize={contentRect => {
          setDimensions(contentRect.bounds);
        }}
      >
        {({ measureRef }) => (
          <HeroComponent
            ref={measureRef}
            width={dimensions.width}
            imgs={
              custom_imgs
                ? custom_imgs[0]
                : 'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/' +
                  imgs[0] +
                  '.jpg'
            }
            compact={compact}
          >
            {closeButton}
            <HeroPosition compact={compact}>
              <HeroTitle compact={compact} width={dimensions.width}>
                {props.title.split('with')[0]}
              </HeroTitle>
              <HeroSubTitle>{subtitle}</HeroSubTitle>
            </HeroPosition>
            {bottomFade}
          </HeroComponent>
        )}
      </Measure>
      {spaced}
    </React.Fragment>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired
};

export default Hero;

const whiteness = '245,245,245';
const fullWidth = 'width: 100%';
const colorWhite = 'color: #fff';

const BottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 7vh;
  background: linear-gradient(
    rgba(${whiteness}, 0),
    rgba(${whiteness}, 0.35),
    rgba(${whiteness}, 1)
  );
  z-index: 4;
`;
const FlexCenterCol = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const HeroComponent = styled(FlexCenterCol)`
  position: ${props => (props.compact ? 'relative' : 'absolute')};
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  min-height: 400px;
  height: ${props => (props.compact ? '13vh' : '40vh')};
  background-color: rgba(0, 0, 0, 0.7);
  background-size: cover;
  background-image: url(${props => props.imgs});
  background-position: center center;
  font-size: ${props => (props.width >= 500 ? '18px' : '10px')};
`;

const VerticalSpacing = styled.div`
  position: relative;
  height: ${props => (props.compact ? '15vh' : '32vh')};
  ${fullWidth};
`;

const CenterDiv = styled.div`
  text-align: center;
  margin: 0 auto;
`;
const HeroPosition = styled(CenterDiv)`
  ${props => (props.compact ? 'padding-top: 2em; padding-bottom: 2em;' : '')};
`;

const HeroTitle = styled.h1`
  ${colorWhite};
  display: block;
  text-align: center;
  font-family: futura-pt, sans-serif;
  font-size: ${props => (props.compact ? '4em' : '5em')};
  font-style: normal;
  margin: 0 auto;
  text-shadow: 0 0 130px #111;
  ${props =>
    props.compact
      ? 'font-weight: 450; text-transform: uppercase'
      : 'font-weight: 450;text-transform: uppercase; letter-spacing: 1.4rem;'};
  ${props => props.width >= 500 || 'letter-spacing: 0px'};
`;

const HeroSubTitle = styled.div`
  ${colorWhite}
`;

const CloseButton = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #333;
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
