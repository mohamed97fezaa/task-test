import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchTasks, deleteTask, Task } from '../services/taskService';
import styles from '../styles/Home.module.css';

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Task List</h1>
        <Link href="/create">
          <a>Create Task</a>
        </Link>
      </div>
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <li key={task.id} className={styles.taskItem}>
            <div>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <p className={`${styles.status} ${styles[task.status.toLowerCase()]}`}>
                {task.status}
              </p>
            </div>
            <div className={styles.taskActions}>
              <Link href={`/update/${task.id}`}>
                <a>Edit</a>
              </Link>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
