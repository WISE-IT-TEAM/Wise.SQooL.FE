// components/ResizeHandler.js
import React from 'react';
import { ResizeRow, ResizeColumn } from './IconSet';

const ResizeHandler = ({
  onResize,
  minHeight = 320,
  minWidth = 320,
  startHeight,
  startWidth,
  direction = 'horizontal',
  iconClassName = 'fill-slate-400',
  ...props
}) => {
  const handlerClass = `flex ${direction === 'horizontal' ? 'py-2 cursor-row-resize' : 'px-2 cursor-col-resize'} justify-center items-center bg-transparent`;

  const handleMouseDown = (e) => {
    const startPos = direction === 'horizontal' ? e.clientY : e.clientX;
    let animationFrameId;

    const onMouseMove = (e) => {
      const newSize = direction === 'horizontal'
        ? Math.max(startHeight + (e.clientY - startPos), minHeight)
        : Math.max(startWidth + (e.clientX - startPos), minWidth);
      cancelAnimationFrame(animationFrameId);
      onResize(newSize);
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
      {direction === 'horizontal' ? (
        <ResizeRow className={`${iconClassName} w-12 h-4`} />
      ) : (
        <ResizeColumn className={`${iconClassName} w-4 h-12`} />
      )}
    </div>
  );
};

export default ResizeHandler;