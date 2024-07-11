import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getAllTasks(): Promise<Task[]>;
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
