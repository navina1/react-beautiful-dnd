// Column.js
import React from 'react';
import { Typography, List, Container } from '@mui/material';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

function Column({ column, tasks }) {
    return (
        <Container>
            <Typography component="div" variant="h5" margin={5}>
                {column.title}
            </Typography>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <List>
                            {tasks.map((task, index) => (
                                <Task key={task.id} task={task} index={index} />
                            ))}
                            {provided.placeholder}
                        </List>
                    </div>
                )}
            </Droppable>
        </Container>
    );
}

export default Column;
