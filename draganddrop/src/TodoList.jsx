import React, { useState, useRef } from 'react';

function TodoList() {
    const [todo, setTodo] = useState([
        { id: generateId(), name: "Task 1" },
        { id: generateId(), name: "Task 2" },
    ]);
    const [ongoing, setOngoing] = useState([
        { id: generateId(), name: "Task 3" },
    ]);
    const [completed, setCompleted] = useState([
        { id: generateId(), name: "Task 4" },
    ]);

    const dragItem = useRef(null);
    const dragOverItem = useRef(null);

    const handleDragStart = (e, position) => {
        dragItem.current = position;
    };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
    };

    const handleDrop = () => {
        const dragFromList = dragItem.current.list;
        const dragToList = dragOverItem.current.list;

        const draggedFromArray = [...dragFromList];
        const draggedToArray = [...dragToList];

        const draggedItemContent = draggedFromArray[dragItem.current.index];
        draggedFromArray.splice(dragItem.current.index, 1);
        draggedToArray.splice(dragOverItem.current.index, 0, draggedItemContent);

        updateState(dragItem.current.type, draggedFromArray);
        updateState(dragOverItem.current.type, draggedToArray);

        dragItem.current = null;
        dragOverItem.current = null;
    };

    const updateState = (type, array) => {
        switch (type) {
            case 'todo':
                setTodo(array);
                break;
            case 'ongoing':
                setOngoing(array);
                break;
            case 'completed':
                setCompleted(array);
                break;
            default:
                break;
        }
    };

    const generateId = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const renderTasks = (tasks, type) => (
        tasks.map((task, index) => (
            <div
                key={task.id}
                className="task border p-2 mb-2 rounded bg-gray-200 cursor-move"
                draggable
                onDragStart={(e) => handleDragStart(e, { list: tasks, index, type })}
                onDragEnter={(e) => handleDragEnter(e, { list: tasks, index, type })}
                onDragEnd={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                {task.name}
            </div>
        ))
    );

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="grid grid-cols-3 gap-4 w-3/4">
                <Column title="Todo" tasks={renderTasks(todo, 'todo')} />
                <Column title="Ongoing" tasks={renderTasks(ongoing, 'ongoing')} />
                <Column title="Completed" tasks={renderTasks(completed, 'completed')} />
            </div>
        </div>
    );
}

const Column = ({ title, tasks }) => (
    <div className="column bg-white p-4 rounded shadow-md min-h-[400px]">
        <h2 className="text-center font-bold mb-4">{title}</h2>
        <div className="flex-grow flex flex-col gap-5 justify-start items-center">
            {tasks}
        </div>
    </div>
);

export default TodoList;
