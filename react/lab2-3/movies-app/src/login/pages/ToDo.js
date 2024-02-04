import React, { useState } from "react";
import Gbtn from "../UtilsBoxes/BtnsLogin";
import Text from "../UtilsBoxes/Text";
import "./styles.css";
//mui i,ports
import { Container } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Divider from '@mui/material/Divider';


function ToDo() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const AddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const DelTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const TaskDone = (index) => {
        const x = document.getElementById(index);

        x.classList.add("done-task");




    };

    return (
        <Container maxWidth="xl" className="logreg-box">
            <h1>ToDo</h1>
            <Text
                label="Add new task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <Gbtn
                variant="contained"
                color="primary"
                onClick={AddTask}
                text="Add"
            />

            <List>
                {tasks.map((task, index) => (
                    <>
                        <ListItem key={index} >
                            <ListItemText primary={task} id={index} />
                            <IconButton aria-label="delete" onClick={() => DelTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                            <Gbtn
                                variant="outlined"
                                color="success"
                                onClick={() => TaskDone(index)}
                                text="Done"
                            />
                        </ListItem>
                        <Divider />
                    </>

                ))}

            </List>
        </Container>
    );
}

export default ToDo;
