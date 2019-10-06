import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container
} from 'reactstrap';
import { NavList } from '../utils/nav';
import AppNav from '../data/nav';
import NavSchedule from './nav/NavSchedule';

class PureNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      // Hardcode Menu Name for Dev
      activeMenu: ''
    };
  }

  showDropdown = e => {
    this.setState({
      activeMenu: e
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const sub = this.state.isOpen || (
      <SubNav
        active_menu_item={this.state.activeMenu}
        active={this.showDropdown}
        classes={this.props.classes}
        loaded={this.props.loaded}
      />
    );
    return (
      <Navbar
        color="dark"
        expand="md"
        style={{ zIndex: 150, backgroundColor: '#000000', border: 'none' }}
      >
        <NavbarBrand href="/" style={{ margin: 0, padding: 0 }}>
          <svg width="220px" height="58px" viewBox="0 0 1869 428" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
          <path d="M565.92,350 L565.92,189 L633.08,189 C665.28,189 682.99,206.71 682.99,232.47 C682.99,258.23 665.28,276.17 633.08,276.17 L577.42,276.17 L577.42,350 L565.92,350 Z M577.42,265.59 L631.93,265.59 C657.23,265.59 671.49,253.63 671.49,232.47 C671.49,211.54 657.23,199.58 631.93,199.58 L577.42,199.58 L577.42,265.59 Z M827.1266,352.76 C789.4066,352.76 762.4966,327.92 762.4966,281.23 L762.4966,189 L773.9966,189 L773.9966,281.23 C773.9966,319.87 794.4666,341.95 827.1266,341.95 C859.7866,341.95 880.0266,320.1 880.0266,281.23 L880.0266,189 L891.5266,189 L891.5266,281.23 C891.5266,327.92 864.3866,352.76 827.1266,352.76 Z M982.9932,350 L982.9932,189 L1054.5232,189 C1086.0332,189 1103.7432,206.25 1103.7432,231.55 C1103.7432,254.32 1089.7132,270.88 1063.9532,273.87 L1116.6232,350 L1103.2832,350 L1050.8432,274.79 L994.4932,274.79 L994.4932,350 L982.9932,350 Z M994.4932,264.21 L1053.6032,264.21 C1077.9832,264.21 1092.2432,252.71 1092.2432,231.78 C1092.2432,211.31 1077.9832,199.58 1053.6032,199.58 L994.4932,199.58 L994.4932,264.21 Z M1198.4298,350 L1198.4298,189 L1306.5298,189 L1306.5298,199.58 L1209.9298,199.58 L1209.9298,258 L1289.7398,258 L1289.7398,268.81 L1209.9298,268.81 L1209.9298,339.42 L1310.2098,339.42 L1310.2098,350 L1198.4298,350 Z M1504.1664,350 L1504.1664,189 L1611.1164,189 L1611.1164,199.58 L1515.6664,199.58 L1515.6664,260.07 L1594.5564,260.07 L1594.5564,270.88 L1515.6664,270.88 L1515.6664,350 L1504.1664,350 Z M1694.073,350 L1694.073,189 L1705.573,189 L1705.573,350 L1694.073,350 Z M1842.8096,350 L1842.8096,199.58 L1785.3096,199.58 L1785.3096,189 L1911.8096,189 L1911.8096,199.58 L1854.3096,199.58 L1854.3096,350 L1842.8096,350 Z" id="PURE-FIT"  fill="#fff"></path>
              <path
                d="M309.162884,327.761696 C308.02162,323.844127 291.092869,300.152163 275.685804,284.108786 C269.979483,278.139157 259.327685,272.729181 253.431153,266.013349 C243.920619,255.006846 221.85618,217.696667 212.535856,206.130511 C212.535856,206.130511 211.204382,185.609913 207.400168,176.468919 C204.356797,169.006883 195.797316,164.15656 195.797316,164.15656 C193.704999,141.770452 195.797316,136.920129 193.324577,114.720572 C191.802892,100.542704 184.194464,89.536201 181.911936,68.6425006 C181.911936,68.6425006 183.0532,67.3366443 183.814043,64.9114827 C184.765097,62.2997701 183.814043,59.6880576 183.243411,56.3301415 C182.672779,52.0394708 183.0532,47.1891475 182.482568,43.4581296 C182.292358,41.5926206 181.341304,35.9960938 180.20004,35.9960938 C179.629408,35.9960938 180.009829,38.6078063 179.439197,44.2043332 C179.439197,44.7639859 179.248987,43.2715787 178.488144,42.8984769 C178.297933,42.711926 178.297933,48.8681056 177.917512,53.1587762 C177.156669,60.0611594 175.444773,70.6945605 175.254562,75.9179856 C175.064352,82.6338179 175.064352,94.7596261 175.634984,101.475458 C176.395826,108.377842 179.819619,121.622955 180.20004,128.525338 C180.580461,135.427722 176.966458,158.186931 176.966458,158.186931 C176.966458,158.186931 170.118874,167.701027 169.358031,185.423362 C168.597188,205.757409 169.16782,187.10232 168.406978,213.405996 C168.406978,213.405996 159.086654,226.091457 149.766331,238.403816 C136.641793,255.566499 133.218001,261.349577 123.897678,270.30402 C118.571778,275.340894 108.871034,279.445014 96.5073391,288.959109 C83.5730126,298.846307 71.0191075,317.501396 59.9868878,326.828941 C59.226045,327.575145 57.3239382,329.067552 56.9435168,330.186857 C56.7533062,330.933061 56.1826741,337.648893 56.9435168,338.581648 C59.4162557,341.753013 69.1170006,340.820258 69.6876327,340.820258 C72.3505822,340.633708 73.4918463,340.074055 73.682057,339.1413 C73.8722677,338.395097 71.5897395,338.208546 70.8288968,337.648893 C68.9267899,336.156486 69.497422,328.507899 69.497422,328.507899 C84.1436447,316.008989 100.501763,305.935241 126.750838,290.078415 C145.581696,278.69881 170.499295,257.245457 170.499295,257.245457 C170.879717,274.781241 170.689506,271.050223 171.450349,290.264966 C172.020981,302.577325 176.776248,333.917875 176.966458,340.633708 C176.966458,343.618522 174.303509,348.655396 172.972034,351.45366 C172.401402,352.759516 171.260138,354.625025 169.738452,355.930881 C166.885292,358.542594 165.744028,359.475348 166.31466,360.035001 C167.075503,360.594653 172.211191,357.423288 173.732877,355.930881 C173.732877,355.930881 173.162245,357.236737 172.401402,359.102246 C171.450349,361.340857 170.499295,363.579468 171.450349,363.95257 C172.211191,364.139121 173.732877,362.460162 174.68393,360.967755 C176.015405,359.102246 177.34688,356.117432 177.34688,356.117432 C177.917512,356.117432 179.439197,356.677085 180.20004,357.423288 C180.20004,357.423288 180.580461,359.475348 180.770672,361.340857 C181.151094,363.392917 181.911936,365.071875 182.86299,365.071875 C184.194464,365.071875 184.194464,363.019815 184.004254,361.340857 C183.814043,359.84845 183.814043,357.79639 183.814043,357.79639 C187.047625,357.982941 187.808467,360.967755 189.330153,362.460162 C190.661628,363.766019 191.802892,363.766019 192.183313,363.579468 C193.134367,363.019815 191.802892,361.340857 191.042049,359.84845 C190.281206,358.542594 189.330153,356.677085 189.330153,356.677085 C189.330153,356.677085 192.373524,357.423288 192.944156,355.557779 C193.134367,355.184677 191.802892,354.811576 190.471417,354.251923 C189.330153,353.69227 188.188889,353.132618 188.188889,353.132618 C187.047625,348.468845 186.286782,346.603336 185.71615,342.872318 C185.335729,340.820258 184.384675,337.462342 184.384675,335.783384 C184.004254,324.030678 185.145518,319.740007 185.71615,309.666259 C185.906361,306.494894 186.286782,297.167349 186.286782,291.011169 C185.71615,269.184714 186.857414,259.297517 186.857414,259.297517 C186.857414,259.297517 189.900785,248.477565 191.42247,245.119649 C191.42247,245.119649 217.100913,257.99166 250.387783,285.04154 C286.337602,314.330031 297.750243,326.082738 297.750243,326.082738 C297.750243,326.082738 298.320875,333.917875 296.608979,336.343037 C296.608979,336.343037 294.516661,337.462342 294.516661,338.021995 C294.706872,339.514402 296.9894,340.260606 299.271928,340.633708 C303.836985,341.19336 309.923727,340.447157 310.87478,339.327851 C312.016044,338.208546 310.113937,331.306163 309.162884,327.761696"
                id="Path"
                fill="#fff"
              />
              <path
                d="M185.589844,358.125654 C111.217466,358.125654 50.7304688,298.802469 50.7304688,225.861068 C50.7304688,152.919668 111.217466,93.5964827 185.589844,93.5964827 C259.962221,93.5964827 320.449219,152.919668 320.449219,225.861068 C320.449219,298.802469 259.962221,358.125654 185.589844,358.125654 M185.589844,111.318818 C121.298633,111.318818 68.8004837,162.620314 68.8004837,225.861068 C68.8004837,288.915271 121.108422,340.403319 185.589844,340.403319 C249.881055,340.403319 302.379204,289.101822 302.379204,225.861068 C302.379204,162.620314 249.881055,111.318818 185.589844,111.318818"
                id="Shape"
                fill="#fff"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </NavbarBrand>
        <NavbarToggler onClick={() => this.toggle()}>
          {this.state.isOpen ? 'X' : '|||'}
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar onClick={() => this.toggle()}>
            <br />
            <NavList nav_items={AppNav.main} active={this.showDropdown} />
          </Nav>
        </Collapse>
        {sub}
      </Navbar>
    );
  }
}

const SubNav = props => {
  var megamenu, mega_display, active_menu_item, dropdowns;
  // set vars
  [active_menu_item, mega_display, dropdowns] = [
    props.active_menu_item,
    '',
    AppNav.main
  ];
  function hasMega(item) {
    return item.has_mega !== false && item.name === active_menu_item;
  }
  megamenu = dropdowns
    .filter(item => hasMega(item))
    .map((menu_item, index) => (
      <span key={index}>
        {menu_item.name === 'Schedule' ? (
          <NavSchedule classes={props.classes} loaded={props.loaded} />
        ) : (
          menu_item.mega
        )}
      </span>
    ));
  if (
    active_menu_item !== '' &&
    active_menu_item !== 'Contact' &&
    active_menu_item !== 'Team'
  ) {
    mega_display = (
      <div
        // onClick={() => props.active('')}
        id="sub-nav"
        onMouseLeave={() => props.active('')}
      >
        <Container fluid>{megamenu}</Container>
        <br />
      </div>
    );
  }
  return mega_display;
};

export default PureNavBar;
