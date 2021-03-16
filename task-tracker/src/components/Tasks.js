import { useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'New job appointment',
      day: 'Feb 4th at 2:22',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at Univeristy',
      day: 'Feb 5th at 4:44',
      reminder: true,
    },
    {
      id: 3,
      text: 'Groceries shopping',
      day: 'Feb 6th at 3:33',
      reminder: false,
    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
