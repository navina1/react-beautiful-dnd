import React, { useState, useRef } from 'react';

function TodoList() {
    const [todo, setTodo] = useState([
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
    ]);
    const [ongoing, setOngoing] = useState([
        { id: 3, name: "Task 3" },
    ]);
    const [completed, setCompleted] = useState([
        { id: 4, name: "Task 4" },
    ]);

    const dragTask = useRef(null);
    const draggedOverTask = useRef(null);

    const handleDragStart = (task, column) => {
        dragTask.current = { task, column };
    };

    const handleDragEnter = (task, column) => {
        draggedOverTask.current = { task, column };
    };

    const handleDrop = () => {
        if (!dragTask.current || !draggedOverTask.current) return;

        const dragColumn = dragTask.current.column;
        const dropColumn = draggedOverTask.current.column;

        if (dragColumn !== dropColumn) {
            // Remove task from the original column
            const updatedDragColumn = dragColumn.filter(item => item.id !== dragTask.current.task.id);
            if (dragTask.current.column === todo) setTodo(updatedDragColumn);
            else if (dragTask.current.column === ongoing) setOngoing(updatedDragColumn);
            else if (dragTask.current.column === completed) setCompleted(updatedDragColumn);

            // Add task to the new column
            const updatedDropColumn = [...dropColumn, dragTask.current.task];
            if (draggedOverTask.current.column === todo) setTodo(updatedDropColumn);
            else if (draggedOverTask.current.column === ongoing) setOngoing(updatedDropColumn);
            else if (draggedOverTask.current.column === completed) setCompleted(updatedDropColumn);

            dragTask.current = null;
            draggedOverTask.current = null;
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="grid grid-cols-3 gap-4 w-3/4">
                <Column
                    title="Todo"
                    tasks={todo}
                    onDragStart={(task) => handleDragStart(task, todo)}
                    onDragEnter={(task) => handleDragEnter(task, todo)}
                    onDrop={handleDrop}
                />
                <Column
                    title="Ongoing"
                    tasks={ongoing}
                    onDragStart={(task) => handleDragStart(task, ongoing)}
                    onDragEnter={(task) => handleDragEnter(task, ongoing)}
                    onDrop={handleDrop}
                />
                <Column
                    title="Completed"
                    tasks={completed}
                    onDragStart={(task) => handleDragStart(task, completed)}
                    onDragEnter={(task) => handleDragEnter(task, completed)}
                    onDrop={handleDrop}
                />
            </div>
        </div>
    );
}

const Column = ({ title, tasks, onDragStart, onDragEnter, onDrop }) => (
    <div
        className="bg-white p-4 rounded shadow-md min-h-[400px]"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
    >
        <h2 className="text-center font-bold mb-4">{title}</h2>
        {tasks.map(task => (
            <div
                key={task.id}
                className="border p-2 mb-2 rounded bg-gray-200 cursor-move"
                draggable
                onDragStart={() => onDragStart(task)}
                onDragEnter={() => onDragEnter(task)}
            >
                {task.name}
            </div>
        ))}
    </div>
);

export default TodoList;
