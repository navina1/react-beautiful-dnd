// Task.js
import React from 'react';
import { Card, CardContent, Typography, ListItem } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index }) {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListItem>
                        <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography component="div" variant="h5">
                                    {task.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                </div>
            )}
        </Draggable>
    );
}

export default Task;
