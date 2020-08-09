import { Container, FormControl, InputLabel, Input, Button, Grid, Card, CardContent } from '@material-ui/core/';
import React, { useEffect } from 'react';
import TaskService from '../services/TaskService'
import { useState } from 'react';
import Task from '../components/task/Task';

const taskService = new TaskService();

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [taskDesc, setTaskDesc] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        let tasksResponse = await taskService.getAllTasks();
        console.log(tasksResponse.data);
        setTasks(tasksResponse.data);
    }

    const updateTaskDesc = (e) => {
        setTaskDesc(e.target.value);
    }

    const addTask = async (e) => {
        e.preventDefault();
        const {success, data} = await taskService.addTask({
            "description": taskDesc,
        });
        setTaskDesc('');

        if(success) {
            setTasks([...tasks, data]);
        }
    }

    const changeTaskList = (taskId) => {
        const filteredTasks = tasks.filter(task => task._id !== taskId)
        setTasks(filteredTasks);
    }
    
    return (
        <Container>
            <div className="App">
                <h1>Todo list</h1>
            </div>

            <form onSubmit={addTask}>
                <FormControl>
                    <InputLabel htmlFor="my-input">Add new task</InputLabel>
                    <Input value={taskDesc} onChange={updateTaskDesc} />
                </FormControl>
                <Button variant="contained" type="submit" color="primary">
                    Add
                </Button>
            </form>
            <Grid container justify="center" spacing={3}>
                {tasks.map(task => (
                    <Task
                        key={task._id}
                        id={task._id}
                        description={task.description}
                        completed={task.completed}
                        changeTaskList={changeTaskList}
                    />
                ))}
            </Grid>
        </Container>
    );
}

export default TasksPage;
