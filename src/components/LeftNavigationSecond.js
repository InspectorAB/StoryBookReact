// src/components/LeftNavigation.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './LeftNavigationSecond.css';

const LeftNavigationSecond = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleNavigation = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`left-navigation ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="logo" onClick={toggleNavigation}>
        <img src="logo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#">
            <i className="icon projects"></i>
            {isExpanded && <span>Projects</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon schedules"></i>
            {isExpanded && <span>Schedules</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon facets"></i>
            {isExpanded && <span>Facets</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon connectors"></i>
            {isExpanded && <span>Connectors</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon marketplace"></i>
            {isExpanded && <span>Marketplace</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon chat"></i>
            {isExpanded && <span>Chat</span>}
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon screenshot"></i>
            {isExpanded && <span>Screenshot</span>}
          </a>
        </li>
      </ul>
      <div className="user-profile">
        <img src={user.image} alt={user.name} />
        {isExpanded && (
          <div>
            <span>{user.name}</span>
            <a href="#" className="logout">Logout</a>
          </div>
        )}
      </div>
    </nav>
  );
};

LeftNavigationSecond.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default LeftNavigationSecond;
