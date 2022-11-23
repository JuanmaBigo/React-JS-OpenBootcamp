import React, { useState, useEffect } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

    const defaultTask = new Task(
        "Example",
        "Default description",
        false,
        LEVELS.NORMAL
    );

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified');
        setLoading(false);
        return () => {
            console.log('TaskList component is going to unmount...');
        };
    }, [tasks]);


    const changeCompleted = (id) => {
        console.log('Change state of task with id: ' + id);
    }

    return (
        <div>
            <div> <h1>Your Tasks: </h1></div>
            {/* Aplicar un for/map para mostrar las tareas */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
