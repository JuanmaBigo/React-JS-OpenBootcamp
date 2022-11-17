import React from "react";
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
    
    const changeState = (id) => {
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
