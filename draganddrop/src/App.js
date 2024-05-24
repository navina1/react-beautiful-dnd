// App.js
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem';
import DroppableArea from './DraggableArea';

const App = () => {
  const [list1Items, setList1Items] = useState([
    { id: 'item1', content: 'Item 1' },
    { id: 'item2', content: 'Item 2' },
  ]);

  const [list2Items, setList2Items] = useState([
    { id: 'item3', content: 'Item 3' },
    { id: 'item4', content: 'Item 4' },
  ]);

  const handleDrop = (item, listId) => {
    if (listId === 'list1') {
      setList1Items([...list1Items, item]);
      setList2Items(list2Items.filter((listItem) => listItem.id !== item.id));
    } else {
      setList2Items([...list2Items, item]);
      setList1Items(list1Items.filter((listItem) => listItem.id !== item.id));
    }
  };

  
  

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        {/* <div className="draggable-container">
          <DraggableItem id="item1" content="Item 1" />
          <DraggableItem id="item2" content="Item 2" />
          <DraggableItem id="item3" content="Item 3" />
          <DraggableItem id="item4" content="Item 4" />
        </div> */}
        <div className="droppable-container">
          <DroppableArea id="list1" items={list1Items} onDrop={handleDrop} />
          <DroppableArea id="list2" items={list2Items} onDrop={handleDrop} />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
