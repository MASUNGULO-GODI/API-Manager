import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskDetail from './TaskDetail';
import { Spinner } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
        setLoading(false);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleTaskSelect = (task) => {
        setSelectedTask(task);
    };

    if (loading) {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            <h2>Task List</h2>
            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item
                        key={task._id}
                        onClick={() => handleTaskSelect(task)}
                        style={{ cursor: 'pointer' }}
                        className={task.completed ? 'bg-success text-white' : 'bg-light'}
                    >
                        {task.title} - {task.completed ? 'Completed' : 'Pending'}
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {selectedTask && <TaskDetail task={selectedTask} />}
        </div>
    );
};

export default TaskList;
