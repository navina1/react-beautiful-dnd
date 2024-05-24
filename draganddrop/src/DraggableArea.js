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
      style={{ background: isOver ? 'lightblue' : 'lightgray', height: '10rem', textAlign: 'center', marginTop: '20px', padding: '10px', border: '1px solid black' }}
    >
      <h3>{id}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item.id}>
            <DraggableItem id={item.id} content={item.content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DroppableArea;
