/* eslint-disable import/prefer-default-export */
import { css } from 'styled-components';

const Variables = {
  bodyBg: '#ccc',
  pureBlack: '#111',
  pureBlue: '#767F84',
  pureRed: '#DC9D9D',
  pureReception: '#E4C9BE',
  pureWomens: '#B6ABB1',
  pureMens: '#A3AEB2',
  pureMens2: '#BEBEE4',
  pureSeating: '#E9DAD5'
};

const PureBrand = {
  pureRed: Variables.pureRed,
  pureBlue: Variables.pureBlue
};


const fonts = {
  primary: css`
    text-transform: uppercase;
    font-family: futura-pt, sans-serif;
    line-height: 1em;
    font-weight: 600;
    letter-spacing: 0px;
  `,
  secondary: css`
    font-family: lust-script, sans-serif;
    font-weight: 300;
    text-transform: none;
  `,
  highlight: css`
    font-family: bodoni-urw, serif;
  `,

  p: css`
    font-family: bodoni-urw, serif;
  `,

  small: css`
    font-size: 12px;
  `,

  medium: css`
    font-size: 15px;
  `,

  large: css`
    font-size: 22px;
  `
};

const colors = {
  bg: '#ccc',
  black: '#111',
  blue: '#90B8D4',
  red: '#D49090',
  green: '#99D490',
  pink: '#DC9D9D',
  links: '#90B8D4'
};

export { Variables, PureBrand, fonts, colors };
