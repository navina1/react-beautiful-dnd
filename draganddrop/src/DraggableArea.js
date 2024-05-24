// DroppableArea.js
import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const DroppableArea = ({ id, items, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'item',
    drop: (item) => onDrop(item, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className="droppable-area"
      style={{ background: isOver ? 'lightblue' : 'lightgray', height: '10rem', textAlign: 'center', marginTop: '20px' }}
    >
      <h3>List {id}</h3>
      <ul>
        {items.map((item) => (
          <DraggableItem key={item.id} id={item.id} content={item.content} />
        ))}
      </ul>
    </div>
  );
};

export default DroppableArea;
