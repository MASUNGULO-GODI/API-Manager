import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <Container fluid>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
            </Navbar>
            <Container className="mt-4">
                <h1 className="text-center">Manage Your Tasks</h1>
                <TaskForm />
                <TaskList />
            </Container>
        </Container>
    );
};

export default App;
