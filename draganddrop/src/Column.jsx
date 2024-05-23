import React from 'react';
import { Typography, List, ListItem } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Column = ({ column, tasks }) => {
  return (
    <div>
      <Typography component="div" variant="h5" margin={5}>
        {column.title}
      </Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <ListItem key={task.id} sx={{ marginBottom: 2 }}>
                <Task key={task.id} task={task} index={index} />
              </ListItem>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
