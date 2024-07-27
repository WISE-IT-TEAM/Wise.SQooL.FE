import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={isDragging ? 'dragging' : ''}
      style={{
        padding: '8px',
        margin: '4px',
        backgroundColor: isDragging ? 'var(--drag-background-color)' : '#fff',
        color: isDragging ? 'var(--drag-text-color)' : '#000',
        border: '1px solid',
        borderColor: isDragging ? 'var(--drag-background-color)' : '#ddd',
        cursor: 'move',
      }}
    >
      {text}
    </div>
  );
};

export default DraggableItem;