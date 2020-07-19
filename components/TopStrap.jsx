import React, { useState } from 'react';
import Measure from 'react-measure';
import Socials from './Socials';
import { Strap, LeftStrap, RightStrap, BookInHeaderButton, HideMobile, Spacer, NewToYogaLink } from '../components/layout/helpers';
import { AppContent as t } from '../data/content';


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
            <NewToYogaLink href="/">{t.new_to_yoga}</NewToYogaLink>
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


export default TopStrap;
