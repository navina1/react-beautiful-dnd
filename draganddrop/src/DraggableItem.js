import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'item',
    item: { id, content },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      {!isDragging && (
        <div
          ref={drag}
          className="draggable-item"
          style={{ opacity: isDragging ? 0.5 : 1, margin: "0.8rem", cursor: "pointer", textAlign: "center", border: "1px dotted red", padding: "0.5rem" }}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default DraggableItem;
