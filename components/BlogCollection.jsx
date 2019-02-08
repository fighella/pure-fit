import React, { useState } from 'react';
import Measure from 'react-measure';
import styled from 'styled-components';
import PureData from '../utils/src';
import { ContentData } from './ContentData';
import { AppContent as t } from '../data/content';
import WorkshopBlock from './evolve/Block';
import BlogBlock from './journal/Block';

const Blocks = props => {
  const { blockWidth, data, customHeader } = props;

  const cols = data.map(content => {
    let block;
    if (content.workshop_type === 'Workshop') {
      block = (
        <WorkshopBlock
          type={content.workshop_type}
          title={content.title}
          id={content.id}
          handle={content.slug}
          bg={content.hero_image.url}
          subtitle={content.custom_dates}
          blockWidth={blockWidth}
        />
      );
    } else {
      block = (
        <BlogBlock
          type="Journal"
          category={content.category}
          handle={content.slug}
          teaser={content.teaser}
          title={content.title}
          bg={content.hero_image.url}
          subtitle={content.custom_dates}
          blockWidth={blockWidth}
        />
      );
    }
    return <FlexCol>{block}</FlexCol>;
  });

  const header = customHeader ? (
    <CustomHeader>{customHeader}</CustomHeader>
  ) : (
    <Header>
      <div className="schedule-heading">
        <h2 className="superHeader">{t.evolve_your_practice}</h2>
        <p>{t.evolve_your_practice_subtitle}</p>
      </div>
    </Header>
  );

  const [dimensions, setDimensions] = useState({ width: -1, height: -1 });
  const evolver =
    data && data.length >= 1 ? (
      <div>
        {header}
        <div style={{ overflow: 'scroll' }}>
          <FlexRow width={dimensions.width}>{cols}</FlexRow>
        </div>
        <a href={t.journal.path} style={{ color: '#333' }}>
          &laquo; Read Our Journal
        </a>
        {'  |  '}
        <a href="/evolve" style={{ color: '#333' }}>
          See All Workshops &raquo;
        </a>
      </div>
    ) : (
      <br />
    );
  return (
    <Measure
      bounds
      onResize={contentRect => {
        setDimensions(contentRect.bounds);
      }}
    >
      {({ measureRef }) => <Evolve ref={measureRef}>{evolver}</Evolve>}
    </Measure>
  );
};

const BlogCollection = props => {
  const ContentBlocks = ContentData(Blocks, PureData);
  return <ContentBlocks {...props} />;
};

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
`;

const FlexCol = styled.div`
  width: 30%;
  min-height: 100%;
  margin-bottom: 1em;
  align-items: stretch;
  @media (max-width: 700px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Evolve = styled.div`
  padding: 3em;
  display: block;
  text-align: center;
`;

const Header = styled.div`
  padding: 2em;
`;

const CustomHeader = styled.h3`
  text-align: left;
  font-size: 1.1em;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-family: futura-pt, sans-serif;
  margin-bottom: 0.8em;
`;

export default BlogCollection;
