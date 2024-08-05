// components/ResizeHandler.js
import React from 'react';
import { ResizeRow } from './IconSet';

const ResizeHandler = ({
  onResize,
  minHeight = 320,
  startHeight,
  direction = 'horizontal',
  iconWidth = 48,
  iconHeight = 22,
  iconClassName = 'fill-slate-400',
  ...props
}) => {
  const handlerClass = `flex py-3 justify-center cursor-${direction === 'horizontal' ? 'row-resize' : 'col-resize'} bg-transparent`;

  const handleMouseDown = (e) => {
    const startY = e.clientY;
    let animationFrameId;

    const onMouseMove = (e) => {
      const newHeight = Math.max(startHeight + (e.clientY - startY), minHeight);
      cancelAnimationFrame(animationFrameId);
      onResize(newHeight);
    };
    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <div className={handlerClass} onMouseDown={handleMouseDown} {...props}>
      <ResizeRow width={iconWidth} height={iconHeight} className={iconClassName} />
    </div>
  );
};

export default ResizeHandler;
