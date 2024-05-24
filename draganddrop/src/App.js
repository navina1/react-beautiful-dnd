import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from './DraggableItem';
import DraggableArea from "./DraggableArea"
import { Button } from '@mui/material';

const App = () => {
  const [lists, setLists] = useState({
    list1: [
      { id: 'item1', content: 'Item 1' },
      { id: 'item2', content: 'Item 2' },
    ],
    list2: [
      { id: 'item3', content: 'Item 3' },
      { id: 'item4', content: 'Item 4' },
    ]
  });

  const handleDrop = (item, targetListId) => {
    const sourceListId = Object.keys(lists).find((listId) =>
      lists[listId].some((listItem) => listItem.id === item.id)
    );

    if (sourceListId === targetListId) {
      return; // No action needed if item is dropped in the same list
    }

    setLists((prevLists) => ({
      ...prevLists,
      [sourceListId]: prevLists[sourceListId].filter(
        (listItem) => listItem.id !== item.id
      ),
      [targetListId]: [...prevLists[targetListId], item],
    }));
  };

  const addNewList = () => {
    const newListId = `list${Object.keys(lists).length + 1}`;
    setLists((prevLists) => ({
      ...prevLists,
      [newListId]: []
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Button variant="contained" color="primary" onClick={addNewList} style={{margin: '20px'}}>
          Add New List
        </Button>
        <div className="droppable-container" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          {Object.keys(lists).map((listId) => (
            <DraggableArea
              key={listId}
              id={listId}
              items={lists[listId]}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
