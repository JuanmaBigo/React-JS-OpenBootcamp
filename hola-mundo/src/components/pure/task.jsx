import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
    return (
        <div>
            <h2>Nombre: {task.name}</h2>
            <h3>Descripcion: {task.description}</h3>
            <h4>Level: {task.level}</h4>
            This task is: {task.completed ? "COMPLETED" : "PENDING"}
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

