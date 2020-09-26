import React from 'react';
import SVG from '../components/svg';

const components = {
  SVG: ({ icon, hiddenMobile, width, color, left, top, style }) => (
    <SVG
      icon={icon}
      hiddenMobile={hiddenMobile}
      width={width}
      color={color}
      left={left}
      top={top}
      style={style}
    />
  ),
};

export default components;
