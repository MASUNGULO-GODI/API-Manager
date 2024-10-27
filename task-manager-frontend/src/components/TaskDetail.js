import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

const TaskDetail = ({ task }) => {
    const markAsCompleted = async () => {
        try {
            await axios.put(`http://localhost:5000/tasks/${task._id}`, { ...task, completed: true });
            alert('Task marked as completed!');
        } catch (error) {
            console.error("Error marking task as completed:", error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${task._id}`);
            alert('Task deleted successfully!');
            window.location.reload(); // Refresh to update the list
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text>Due Date: {new Date(task.due_date).toLocaleDateString()}</Card.Text>
                <Card.Text>Priority: {task.priority}</Card.Text>
                <Button variant="success" onClick={markAsCompleted}>Complete</Button>
                <Button variant="danger" onClick={handleDelete} className="ml-2">Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default TaskDetail;
