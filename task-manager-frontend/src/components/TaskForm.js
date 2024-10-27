import React, { useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [due_date, setDueDate] = useState('');
    const [priority, setPriority] = useState('medium');
    const [recurrence, setRecurrence] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/tasks', { title, description, due_date, priority, recurrence });
            alert('Task created successfully!');
            window.location.reload(); // Refresh to show new task
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-4">
            <h3>Create New Task</h3>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter task title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formDueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            value={due_date}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter task description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="select"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                            required
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formRecurrence">
                        <Form.Label>Recurrence</Form.Label>
                        <Form.Control
                            as="select"
                            value={recurrence}
                            onChange={(e) => setRecurrence(e.target.value)}
                        >
                            <option value="">None</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="primary" type="submit">Create Task</Button>
        </Form>
    );
};

export default TaskForm;
