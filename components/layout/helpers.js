import styled from 'styled-components';
import { fonts } from '../../styles/variables';
import { PureBrand } from '../../styles/variables';
import { Container } from 'reactstrap';

export const StandardBlock = styled.div`
  padding: 2em 0 3em;
  background: #1D1F24;
  width: 100%; 
  margin: 0 auto;
  p, h1, h2, h3, h4, h5  {color: #fff;}
`
export const BannerTitle = styled.h3`
  @media (max-width: 700px) {
    font-size: 40px !important;
    letter-spacing: 1px !important;
    line-height: 1em;
  }
`

export const BannerButton = styled.a`
  background: #101010 !important;
  color: #fff !important;
  display: inline-block;
  padding: 4px 8px;
  border-radius: 0 !important;
`

export const DarkBlock = styled.div`
  margin: 0;
  background: #1D1F24;
  p, h1, h2, h3, h4, h5  {color: #fff;}
`

export const FootNote = styled.p`
  font-size: 12px;
  margin: 1em auto;
  text-align: center;
  font-style: italic;
`;

export const CustomContainer = styled(Container)`
  padding: ${props => (props.fullWidth ? 0 : false)};
  @media (max-width: 800px) {
    min-width: 98% !important;
    max-width: 98% !important;
  }
`;

export const FaqElement = styled.li`
  transition: all 0.5s;
  margin: 0;
  padding: 0;
  color: ${PureBrand.omDarkBlue};
  list-style: none;
  font-size: 18px;

  padding: 1em;
  ${props =>
    props.open ? 'border-left: 6px solid ' + PureBrand.omCoral + '; padding-left: 2em;' : ''}
`;
export const Faqs = styled.ul`
  margin: 1em auto;
  padding: 0;
`;

export const FaqQuestion = styled.span`
  cursor: pointer;
  display: block;
  font-weight: bold;
`;

export const FaqAnswer = styled.span`
  display: ${props => (props.open ? 'block' : 'none')};
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 4em;
  max-width: 60%;
  margin: 0.5em auto;
  ${fonts.highlight}
`;


export const Strap = styled.div`
  z-index: 20;
  position: relative;
  background: #111;
  color: #fff;
  padding: 2px 3px;
  font-size: 12.5px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RightStrap = styled.div`
  display: ${props => (props.width <= 500 ? 'none' : 'block')};
`;

export const LeftStrap = styled.div`
  ${props => (props.width <= 500 ? 'text-align: center; width: 100%;' : false)};
`;

export const HideMobile = styled.div`
  ${props =>
    props.width <= 500 ? 'display: none;' : 'display: inline-block;'};
`;

export const NewToYogaLink = styled.a`
  color: ${PureBrand.pureRed};
  ${props => (props.width <= 500 ? 'text-align: center;' : false)};
`;

export const Spacer = styled.span`
  ${props => (props.width <= 500 ? 'display: none;' : false)};
  display: inline-block;
  width: 10px;
`;

export const BookInHeaderButton = styled.a`
  color: #111;
  letter-spacing: 1px;
  font-size: 10px;
  font-weight: 500;
  padding: 3px 22px;
  background: #333;
`;

export const ScheduleBlock = styled(StandardBlock)``;
export const ScheduleDownloadBlock = styled(StandardBlock)`  background: #111;`;