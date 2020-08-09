import React, { useState } from 'react';
import { Checkbox, Grid, Card, CardContent, IconButton, CardActions, FormControl, InputLabel, Input, Button, Fab } from '@material-ui/core';
import TaskService from '../../services/TaskService';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './Task.css';
import CheckIcon from '@material-ui/icons/Check';

const taskService = new TaskService();

const Task = ({ completed, description, id, changeTaskList }) => {
    const [isCompleted, setIsCompleted] = useState(completed);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedDescInputValue, setUpdatedDescInputValue] = useState(description);
    const [taskDescription, setTaskDescription] = useState(description);

    const changeCompletedStatus = async () => {
        await taskService.updateTask(id, {
            "completed": !isCompleted
        });

        setIsCompleted(!isCompleted);
    }

    const deleteTask = async (e) => {
        const { success } = await taskService.deleteTask(id);
        if (success) {
            changeTaskList(id);
        }
    }

    const updateTask = async (e) => {
        e.preventDefault();
        const response = await taskService.updateTask(id, {
            "description": updatedDescInputValue
        });
        setTaskDescription(response.data.description);
        setIsEditing(!isEditing);
    }
     
    const editToggle = () => {
        setUpdatedDescInputValue(description);
        setIsEditing(!isEditing);
    }

    const updateDescInputValue = (e) => {
        setUpdatedDescInputValue(e.target.value);
    }

    return (
        <Grid item xs={6}>
            <Card variant="outlined">
                <CardContent flex="row">
                    <CardActions>
                        <Checkbox
                            checked={isCompleted}
                            onChange={changeCompletedStatus}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        {!isEditing &&
                            <h1 className={isCompleted ? 'task-done' : ''}>{taskDescription}</h1>
                        }
                        {isEditing &&
                            <form onSubmit={updateTask}>
                                <FormControl>
                                    <InputLabel htmlFor="my-input">Add new task</InputLabel>
                                    <Input value={updatedDescInputValue} onChange={updateDescInputValue}/>
                                </FormControl>
                                <Fab color="primary" type="submit" aria-label="add" size="small">
                                    <CheckIcon/>
                                </Fab>
                            </form>
                        }
                        <IconButton aria-label="delete" onClick={deleteTask}>
                            <DeleteIcon />
                        </IconButton>
                        {!isCompleted &&
                            <IconButton aria-label="delete" 
                                color={isEditing ? 'primary' : 'default'} 
                                onClick={editToggle}
                            >
                                <EditIcon />
                            </IconButton>
                        }
                    </CardActions>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Task;