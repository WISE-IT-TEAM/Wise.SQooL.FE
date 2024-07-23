// src/components/Icon.js
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ fill, width, height, className, children, viewBox, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill={fill}
    width={width}
    height={height}
    className={className}
    {...props}
  >
    {children}
  </svg>
  );

  Icon.propTypes = {
    fill: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    viewBox: PropTypes.string,
  };

  Icon.defaultProps = {
    fill: 'currentColor',
    width: 24,
    height: 24,
    className: '',
    viewBox: '0 0 24 24',
  };

export default Icon;