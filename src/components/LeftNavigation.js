// src/components/LeftNavigation.js
import React from 'react';
import PropTypes from 'prop-types';
import './LeftNavigation.css';

const LeftNavigation = ({ items }) => {
  return (
    <nav className="left-navigation">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

LeftNavigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LeftNavigation;
