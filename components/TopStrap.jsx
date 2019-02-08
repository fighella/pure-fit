import React, { useState } from 'react';
import Measure from 'react-measure';
import styled from 'styled-components';
import Socials from './Socials';
import { AppContent as t } from '../data/content';
import { PureBrand } from '../styles/variables';

const TopStrap = () => {
  const [dimensions, setDimensions] = useState({ width: -1, height: -1 });
  return (
    <Measure
      bounds
      onResize={contentRect => {
        setDimensions(contentRect.bounds);
      }}
    >
      {({ measureRef }) => (
        <Strap ref={measureRef}>
          <LeftStrap width={dimensions.width}>
            <HideMobile width={dimensions.width}>{t.title}</HideMobile>
            <Spacer width={dimensions.width} />
            <NewToYogaLink href="/new">{t.new_to_yoga}</NewToYogaLink>
          </LeftStrap>
          <RightStrap width={dimensions.width}>
            <Socials />
            <Spacer />
            <BookInHeaderButton
              target="_blank"
              rel="noreferrer noopener"
              href={t.mindbody_link}
            >
              {t.book_a_class}
            </BookInHeaderButton>
          </RightStrap>
        </Strap>
      )}
    </Measure>
  );
};

const Strap = styled.div`
  z-index: 20;
  position: relative;
  background: #222;
  color: #fff;
  padding: 0 3px;
  font-size: 12.5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RightStrap = styled.div`
  display: ${props => (props.width <= 500 ? 'none' : 'block')};
`;

const LeftStrap = styled.div`
  ${props => (props.width <= 500 ? 'text-align: center; width: 100%;' : false)};
`;

const HideMobile = styled.div`
  ${props =>
    props.width <= 500 ? 'display: none;' : 'display: inline-block;'};
`;

const NewToYogaLink = styled.a`
  color: ${PureBrand.pureRed};
  ${props => (props.width <= 500 ? 'text-align: center;' : false)};
`;

const Spacer = styled.span`
  ${props => (props.width <= 500 ? 'display: none;' : false)};
  display: inline-block;
  width: 10px;
`;

const BookInHeaderButton = styled.a`
  color: #111;
  letter-spacing: 1px;
  font-size: 10px;
  font-weight: 500;
  padding: 3px 22px;
  background: ${PureBrand.pureRed};
`;

export default TopStrap;
