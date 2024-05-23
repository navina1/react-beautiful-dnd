import React from 'react';
import { Card, CardContent, Typography,ListItem } from '@mui/material';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index }) {
    console.log("task2", task)
    return (
        <Draggable draggableId={task.id} index={index}>

            {(provided) => (

                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListItem key={task.id}>
                        <Card sx={{ display: 'flex', width: '100%', marginBottom: 2 }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography component="div" variant="h5">
                                    {task.id}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {task.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </ListItem>
                </div>
            )
            }
        </Draggable >
    );
}

export default Task;