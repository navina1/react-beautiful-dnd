const initialData = {
    tasks: {
      'task-101': { id: 'task-101', content: 'Take out the garbage' },
      'task-102': { id: 'task-102', content: 'Watch my favorite show' },
      'task-103': { id: 'task-103', content: 'Charge my phone' },
      'task-104': { id: 'task-104', content: 'Cook dinner' },
    },
    columns: {
      'column-101': {
        id: 'column-101',
        title: 'To do',
        taskIds: ['task-101', 'task-102', 'task-103', 'task-104'],
      },
    },
    columnOrder: ['column-101'],
  };
  
  export default initialData;
  