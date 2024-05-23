import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography component="div" variant="h5">
                {task.content}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
