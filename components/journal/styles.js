import styled from 'styled-components';
import { fonts } from '../../styles/variables';

const SubTitle = styled.h2`
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.4em;
  opacity: 0.8;
`;

const JournalCategory = styled.p`
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.85em;
  margin: 1em 0;
`;

const JournalTitle = styled.h1`
  ${fonts.highlight};
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 3.2em;
  line-height: 1.1em;
`;

const Author = styled.p`
  font-size: 1em;
  line-height: 1.6em;
  strong {
    font-weight: 650;
    text-decoration: underline;
  }
`;

const ImgHolder = styled.div`
  margin: 1.8em 0;
  max-width: 100%;
`;

const JournalContent = styled.div`
  p {
    font-size: 1.05em;
    line-height: 1.8em;
  }
`;

export {
  JournalContent,
  JournalCategory,
  JournalTitle,
  SubTitle,
  Author,
  ImgHolder
};
