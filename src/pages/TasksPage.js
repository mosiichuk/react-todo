import { Container, FormControl, InputLabel, Input, Grid, Fab, Typography, Box } from '@material-ui/core/';
import React, { useEffect } from 'react';
import TaskService from '../services/TaskService'
import { useState } from 'react';
import Task from '../components/task/Task';
import AddIcon from '@material-ui/icons/Add';

const taskService = new TaskService();

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [taskDesc, setTaskDesc] = useState('');

    const userName = JSON.parse(localStorage.getItem('user')).name;

    useEffect(() => {
        getTasks();
    }, []);

    const getTasks = async () => {
        let tasksResponse = await taskService.getAllTasks();
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
            <Box mt={3} mb={3}>
                <Typography variant="h4" align="center">
                    Hi {userName}, here is your To-Do list
                </Typography>
            </Box>

            <Box mt={3} mb={3}>
                <form onSubmit={addTask}>
                    <Grid 
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <FormControl>
                            <InputLabel htmlFor="my-input">Add new task</InputLabel>
                            <Input value={taskDesc} onChange={updateTaskDesc} />
                        </FormControl>
                        <Fab color="primary" type="submit" aria-label="add" size="small">
                                <AddIcon />
                        </Fab>
                    </Grid>
                </form>
            </Box>
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
