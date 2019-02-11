import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContent as t } from '../data/content';

function SocialIcon({ link, icon }) {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noreferrer noopener">
        <FontAwesomeIcon
          icon={icon}
          style={{ margin: '1px 6px 0', fontWeight: 400, color: '#999' }}
        />
      </a>
    );
  }
}

const c = t.socialLinks;
const Socials = () => (
  <span> 
    {SocialIcon(c.instagram)}
    {SocialIcon(c.facebook)}
    {SocialIcon(c.twitter)}
    {SocialIcon(c.email)}
  </span>
);

SocialIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Socials;
