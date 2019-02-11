import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import Link from 'next/link'


class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = { is_hovered: false };
  }
  activateDropdown = v => {
    return this.props.active(v);
  };
  hideDropdown = v => {
    return this.props.active('');
  };
  render() {
    const nav = this.props.nav_items.filter(isDesktop).map((nav, index) => (
      <NavItem key={index}>
        <Link
          href={nav.link}
          ><a 
          className="nav-link"
          onMouseOver={() => this.activateDropdown(nav.name)}
          onClick={() => this.hideDropdown()}
        >
          {nav.icon ? nav.icon : nav.name}
          </a>
        </Link>
      </NavItem>
    ));
    return nav;
  }
}

function navHeading(text, link = false) {
  var element = <strong className="heading">{text}</strong>;
  if (link !== false) {
    element = (
      <strong className="heading">
        <a href={link} alt={text}>
          {text} &raquo;
        </a>
      </strong>
    );
  }
  return element;
}

function isDesktop(item) {
  return item.desktop !== false;
}
export { NavList, navHeading };
