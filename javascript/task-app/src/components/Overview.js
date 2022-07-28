import React from "react";

const Overview = (props) => {
    const { tasks } = props;

    return (
        <ul>
            {tasks.map((task, idx) => {
                return <div key={task.id}>
                    {idx+1}. {task.text} <button onClick={(e) => props.deleteTask(e)}>Delete</button>
                </div>
            })}
        </ul>
    );
};

export default Overview;