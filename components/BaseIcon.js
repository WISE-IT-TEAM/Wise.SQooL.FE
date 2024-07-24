// src/components/BaseIcon.js
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ title, fill, width, height, className, children, viewBox, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill={fill}
    width={width}
    height={height}
    className={className}
    {...props}
  >
    {title && <title>{title}</title>}
    {children}
  </svg>
  );

  Icon.propTypes = {
    title: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    viewBox: PropTypes.string,
  };

export default Icon;