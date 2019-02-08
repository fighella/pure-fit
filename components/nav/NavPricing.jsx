import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { pureButton } from '../../utils/buttons';
import { navHeading } from '../../utils/nav';

function bulletSentence(contents, bull = false) {
  let bullets = contents.split('.');

  bullets = bullets.map(item => {
    if (item) {
      return (
        <li>
          {bull}
          {item.trim()}
        </li>
      );
    }
    return false;
  });
  return <ul>{bullets}</ul>;
}

const NavPricing = ({ name, sub_title, terms, price, description }) => (
  <div className="price-block">
    {navHeading(name)}
    <p className="highlight">{sub_title}</p>
    <p>
      {bulletSentence(
        description,
        <FontAwesomeIcon
          icon={faCheck}
          style={{ margin: '1px 6px 0', fontWeight: 400 }}
        />
      )}
    </p>
    <p>
      {terms} {price}
    </p>
    <p>{pureButton('Learn More', '/members')}</p>
  </div>
);

NavPricing.propTypes = {
  name: PropTypes.string.isRequired,
  sub_title: PropTypes.string.isRequired,
  terms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default NavPricing;
