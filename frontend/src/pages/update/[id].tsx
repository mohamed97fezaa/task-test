import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchTaskById, updateTask } from '../../services/taskService';

const UpdateTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('PENDING');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchTaskById(Number(id)).then(task => {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
      });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateTask(Number(id), { title, description, status });
    router.push('/');
  };

  return (
    <div>
      <h1>Update Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="PENDING">PENDING</option>
            <option value="IN_PROGRESS">IN_PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateTask;
