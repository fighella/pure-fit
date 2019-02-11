import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContent } from '../data/content';
import { fonts, colors } from '../styles/variables';
import { AppLocations } from '../data/locations';
import Head from 'next/head'
import Layout from '../components/Layout';

const t = AppContent.about;

class AboutPage extends Component {
  render() {
    return (
      <Layout>
       <Head>
        <title>
          About Pure Yoga Ottawa | Our Story | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`Our Story | Ottawa's Favorite Yoga | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Discover the story behind Pure Yoga Ottawa" />
        <meta property="og:url" content="https://www.pureyogaottawa.com/about/" />
      </Head>
      <div style={{ background: '#fff' }}>
        <WhatIs />
        <Benefits />
        <Sweat />
        <svg
          style={{
            margin: '0 auto 10em',
            display: 'block',
            maxWidth: '80%',
            width: 420,
            height: 116
          }}
          viewBox="0 0 1869 428"
          version="1.1"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <path
              d="M432.870013,281 L432.870013,158.5 L483.970013,158.5 C508.470013,158.5 521.945013,171.975 521.945013,191.575 C521.945013,211.175 508.470013,224.825 483.970013,224.825 L441.620013,224.825 L441.620013,281 L432.870013,281 Z M441.620013,216.775 L483.095013,216.775 C502.345013,216.775 513.195013,207.675 513.195013,191.575 C513.195013,175.65 502.345013,166.55 483.095013,166.55 L441.620013,166.55 L441.620013,216.775 Z M639.755012,283.1 C611.055012,283.1 590.580012,264.2 590.580012,228.675 L590.580012,158.5 L599.330012,158.5 L599.330012,228.675 C599.330012,258.075 614.905012,274.875 639.755012,274.875 C664.605012,274.875 680.005012,258.25 680.005012,228.675 L680.005012,158.5 L688.755012,158.5 L688.755012,228.675 C688.755012,264.2 668.105012,283.1 639.755012,283.1 Z M766.49001,281 L766.49001,158.5 L820.91501,158.5 C844.89001,158.5 858.36501,171.625 858.36501,190.875 C858.36501,208.2 847.69001,220.8 828.09001,223.075 L868.16501,281 L858.01501,281 L818.11501,223.775 L775.24001,223.775 L775.24001,281 L766.49001,281 Z M775.24001,215.725 L820.21501,215.725 C838.76501,215.725 849.61501,206.975 849.61501,191.05 C849.61501,175.475 838.76501,166.55 820.21501,166.55 L775.24001,166.55 L775.24001,215.725 Z M938.550008,281 L938.550008,158.5 L1020.80001,158.5 L1020.80001,166.55 L947.300008,166.55 L947.300008,211 L1008.02501,211 L1008.02501,219.225 L947.300008,219.225 L947.300008,272.95 L1023.60001,272.95 L1023.60001,281 L938.550008,281 Z M1217.22001,281 L1217.22001,224.3 L1169.62001,158.5 L1180.12001,158.5 L1221.77001,216.075 L1263.77001,158.5 L1273.74501,158.5 L1225.97001,224.125 L1225.97001,281 L1217.22001,281 Z M1388.405,274.875 C1417.455,274.875 1440.38,251.425 1440.38,219.75 C1440.38,188.075 1417.455,164.8 1388.405,164.8 C1359.355,164.8 1336.255,188.075 1336.255,219.75 C1336.255,251.425 1359.355,274.875 1388.405,274.875 Z M1388.405,283.1 C1353.58,283.1 1327.33,256.15 1327.33,219.75 C1327.33,183.525 1353.58,156.4 1388.405,156.4 C1422.88,156.4 1449.305,183.525 1449.305,219.75 C1449.305,256.15 1422.88,283.1 1388.405,283.1 Z M1580.24,283.1 C1545.765,283.1 1518.64,256.675 1518.64,219.75 C1518.64,182.825 1545.59,156.4 1580.24,156.4 C1595.465,156.4 1609.465,160.775 1620.14,169 L1620.14,178.275 C1608.765,169.35 1594.765,164.8 1580.94,164.8 C1550.84,164.8 1527.565,187.55 1527.565,219.925 C1527.565,251.95 1551.015,274.875 1580.24,274.875 C1595.465,274.875 1609.29,270.15 1618.39,260.525 L1618.39,210.825 L1627.14,210.825 L1627.14,263.85 C1616.815,275.05 1600.89,283.1 1580.24,283.1 Z M1691.575,281 L1747.05,157.8 L1755.1,157.8 L1810.4,281 L1801.3,281 L1785.2,245.3 L1716.775,245.3 L1700.675,281 L1691.575,281 Z M1719.925,237.6 L1782.05,237.6 L1751.075,169.175 L1719.925,237.6 Z"
              id="PURE-YOGA"
              fill="#000000"
            />
            <path
              d="M309.162884,327.761696 C308.02162,323.844127 291.092869,300.152163 275.685804,284.108786 C269.979483,278.139157 259.327685,272.729181 253.431153,266.013349 C243.920619,255.006846 221.85618,217.696667 212.535856,206.130511 C212.535856,206.130511 211.204382,185.609913 207.400168,176.468919 C204.356797,169.006883 195.797316,164.15656 195.797316,164.15656 C193.704999,141.770452 195.797316,136.920129 193.324577,114.720572 C191.802892,100.542704 184.194464,89.536201 181.911936,68.6425006 C181.911936,68.6425006 183.0532,67.3366443 183.814043,64.9114827 C184.765097,62.2997701 183.814043,59.6880576 183.243411,56.3301415 C182.672779,52.0394708 183.0532,47.1891475 182.482568,43.4581296 C182.292358,41.5926206 181.341304,35.9960938 180.20004,35.9960938 C179.629408,35.9960938 180.009829,38.6078063 179.439197,44.2043332 C179.439197,44.7639859 179.248987,43.2715787 178.488144,42.8984769 C178.297933,42.711926 178.297933,48.8681056 177.917512,53.1587762 C177.156669,60.0611594 175.444773,70.6945605 175.254562,75.9179856 C175.064352,82.6338179 175.064352,94.7596261 175.634984,101.475458 C176.395826,108.377842 179.819619,121.622955 180.20004,128.525338 C180.580461,135.427722 176.966458,158.186931 176.966458,158.186931 C176.966458,158.186931 170.118874,167.701027 169.358031,185.423362 C168.597188,205.757409 169.16782,187.10232 168.406978,213.405996 C168.406978,213.405996 159.086654,226.091457 149.766331,238.403816 C136.641793,255.566499 133.218001,261.349577 123.897678,270.30402 C118.571778,275.340894 108.871034,279.445014 96.5073391,288.959109 C83.5730126,298.846307 71.0191075,317.501396 59.9868878,326.828941 C59.226045,327.575145 57.3239382,329.067552 56.9435168,330.186857 C56.7533062,330.933061 56.1826741,337.648893 56.9435168,338.581648 C59.4162557,341.753013 69.1170006,340.820258 69.6876327,340.820258 C72.3505822,340.633708 73.4918463,340.074055 73.682057,339.1413 C73.8722677,338.395097 71.5897395,338.208546 70.8288968,337.648893 C68.9267899,336.156486 69.497422,328.507899 69.497422,328.507899 C84.1436447,316.008989 100.501763,305.935241 126.750838,290.078415 C145.581696,278.69881 170.499295,257.245457 170.499295,257.245457 C170.879717,274.781241 170.689506,271.050223 171.450349,290.264966 C172.020981,302.577325 176.776248,333.917875 176.966458,340.633708 C176.966458,343.618522 174.303509,348.655396 172.972034,351.45366 C172.401402,352.759516 171.260138,354.625025 169.738452,355.930881 C166.885292,358.542594 165.744028,359.475348 166.31466,360.035001 C167.075503,360.594653 172.211191,357.423288 173.732877,355.930881 C173.732877,355.930881 173.162245,357.236737 172.401402,359.102246 C171.450349,361.340857 170.499295,363.579468 171.450349,363.95257 C172.211191,364.139121 173.732877,362.460162 174.68393,360.967755 C176.015405,359.102246 177.34688,356.117432 177.34688,356.117432 C177.917512,356.117432 179.439197,356.677085 180.20004,357.423288 C180.20004,357.423288 180.580461,359.475348 180.770672,361.340857 C181.151094,363.392917 181.911936,365.071875 182.86299,365.071875 C184.194464,365.071875 184.194464,363.019815 184.004254,361.340857 C183.814043,359.84845 183.814043,357.79639 183.814043,357.79639 C187.047625,357.982941 187.808467,360.967755 189.330153,362.460162 C190.661628,363.766019 191.802892,363.766019 192.183313,363.579468 C193.134367,363.019815 191.802892,361.340857 191.042049,359.84845 C190.281206,358.542594 189.330153,356.677085 189.330153,356.677085 C189.330153,356.677085 192.373524,357.423288 192.944156,355.557779 C193.134367,355.184677 191.802892,354.811576 190.471417,354.251923 C189.330153,353.69227 188.188889,353.132618 188.188889,353.132618 C187.047625,348.468845 186.286782,346.603336 185.71615,342.872318 C185.335729,340.820258 184.384675,337.462342 184.384675,335.783384 C184.004254,324.030678 185.145518,319.740007 185.71615,309.666259 C185.906361,306.494894 186.286782,297.167349 186.286782,291.011169 C185.71615,269.184714 186.857414,259.297517 186.857414,259.297517 C186.857414,259.297517 189.900785,248.477565 191.42247,245.119649 C191.42247,245.119649 217.100913,257.99166 250.387783,285.04154 C286.337602,314.330031 297.750243,326.082738 297.750243,326.082738 C297.750243,326.082738 298.320875,333.917875 296.608979,336.343037 C296.608979,336.343037 294.516661,337.462342 294.516661,338.021995 C294.706872,339.514402 296.9894,340.260606 299.271928,340.633708 C303.836985,341.19336 309.923727,340.447157 310.87478,339.327851 C312.016044,338.208546 310.113937,331.306163 309.162884,327.761696"
              id="Path"
              fill="#000000"
            />
            <path
              d="M185.589844,358.125654 C111.217466,358.125654 50.7304688,298.802469 50.7304688,225.861068 C50.7304688,152.919668 111.217466,93.5964827 185.589844,93.5964827 C259.962221,93.5964827 320.449219,152.919668 320.449219,225.861068 C320.449219,298.802469 259.962221,358.125654 185.589844,358.125654 M185.589844,111.318818 C121.298633,111.318818 68.8004837,162.620314 68.8004837,225.861068 C68.8004837,288.915271 121.108422,340.403319 185.589844,340.403319 C249.881055,340.403319 302.379204,289.101822 302.379204,225.861068 C302.379204,162.620314 249.881055,111.318818 185.589844,111.318818"
              id="Shape"
              fill="#000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
        <br />
        <Where />
      </div>
      </Layout>
    );
  }
}

const WhatIs = () => {
  const c = t.what_is;
  return (
    <Centered>
      <MainHeading>{c.title}</MainHeading>
      <SubHeading>{c.sub_title}</SubHeading>
      <div>
        <FlexP>{c.contents[0]}</FlexP>
      </div>
      <Relative>
        <Flare fontSize={'11em'}>Pure Story</Flare>
        <ImgGrid height={320}>
          <Block width={20} height={100}>
            <MainHeading
              style={{
                position: 'absolute',
                textAlign: 'right',
                bottom: 0,
                right: '-100%',
                transformOrigin: 'bottom left',
                transform: 'rotate(-90deg)'
              }}
            >
              Grow
            </MainHeading>
          </Block>
          <Block width={60} height={100} bg={c.imgs[3]} />
        </ImgGrid>
        <ImgGrid>
          <Block width={100} height={52} bg={c.imgs[0]} />
          <Block width={40} height={40}>
            <Block width={100} height={100} bg={c.imgs[1]} />
            <MainHeading style={{ textAlign: 'right' }}>TheDream</MainHeading>
          </Block>
          <Block width={30} height={48} bg={c.imgs[2]} />
          <Block width={10} height={48}>
            <MainHeading
              style={{
                position: 'absolute',
                top: '6%',
                left: '-30%',
                textAlign: 'right',
                transform: 'rotate(90deg)'
              }}
            >
              Practice
            </MainHeading>
          </Block>
        </ImgGrid>
      </Relative>
      <div>
        <FlexP>{c.contents[1]}</FlexP>
      </div>
    </Centered>
  );
};

const Where = () => {
  const c = t.where;
  const locs = AppLocations.all.map((i, index) => {
    return (
      <FlexCol>
        <Loc>
          <p>
            <h4>{i.name}</h4>
            {i.address}
            <br />
            {i.phone}
          </p>
        </Loc>
      </FlexCol>
    );
  });
  return (
    <div>
      <Centered>
        <MainHeading>{c.title}</MainHeading>
        <SubHeading>{c.sub_title}</SubHeading>
        <FlexRow>{locs}</FlexRow>
      </Centered>
    </div>
  );
};

const Benefits = () => {
  const c = t.benefits;
  const contents = c.contents.map((p, index) => {
    return <FlexP>{p}</FlexP>;
  });
  return (
    <Centered>
      <MainHeading>{c.title}</MainHeading>
      <SubHeading>{c.sub_title}</SubHeading>
      <div>{contents}</div>
    </Centered>
  );
};

const Sweat = () => {
  const c = t.sweat;
  const contents = c.contents.map((p, index) => {
    return <FlexP>{p}</FlexP>;
  });
  return (
    <Centered>
      <Relative>
        <Flare>Yoga</Flare>
        <ImgGrid height={320}>
          <Block width={60} height={100} bg={c.imgs[3]} />
          <Block width={20} height={100} />
        </ImgGrid>
        <ImgGrid>
          <Block width={100} height={52} bg={c.imgs[0]} />
          <Block width={10} height={48} />
          <Block width={30} height={48} bg={c.imgs[2]} />
          <Block width={40} height={40}>
            <Block width={100} height={100} bg={c.imgs[1]} />
          </Block>
        </ImgGrid>
      </Relative>
      <div>{contents}</div>
    </Centered>
  );
};

// Styles
const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 3em;
  width: ${props => (props.width ? props.width : '100%')};
`;
const FlexCol = styled.div`
  width: ${props => (props.width ? props.width : '23%')};
  text-align: center;
`;

const Centered = styled.div`
  text-align: center;
  padding: 2em 0;
`;

const MainHeading = styled.h1`
  ${fonts.highlight};
  font-size: 3em;
  z-index: 100;
`;

const Flare = styled.h1`
  display: block;
  position: absolute;
  z-index: 300;
  ${fonts.primary};
  font-weight: 300;
  bottom: 50%;
  right: 8%;
  text-align: right;
  letter-spacing: 22px;
  color: #fff;
  font-size: 15em;
  font-size: ${props => (props.fontSize ? props.fontSize : '15em')};
`;

const SubHeading = styled.h2`
  ${fonts.primary};
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
`;

const FlexP = styled.p`
  max-width: 75%;
  line-height: 2.2em;
  margin: 2em auto 2.3em;
  a {
    text-decoration: underline;
    color: ${colors.blue};
    padding: 0 6px;
    transition: all 0.5s;
    &:hover {
      background: ${colors.blue};
      color: #333;
      text-decoration: none;
    }
  }
`;

const Loc = styled.div`
  padding: 1em 0 0.5em;
  font-family: ${fonts.secondary};
  width: 100%;
  color: ${colors.blue};
  h4 {
    ${fonts.highlight};
    font-weight: 550;
  }
`;

const ImgGrid = styled.div`
  width: 80%;
  margin: 0 auto;
  height: ${props => props.height || '600'}px;
  justify-content: center;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.5%;
`;

const Block = styled.div`
  border: 3px solid #fff;
  position: relative;
  clear: both;
  width: ${props => props.width || 0}%;
  height: ${props => props.height || 0}%;
  background-position: center center;
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Relative = styled.div`
  position: relative;
`;

export default AboutPage;