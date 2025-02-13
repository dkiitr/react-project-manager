import React, { useState } from "react";

const NewTask = ({ onAdd }) => {
    const [enteredTask, setEnteredTask] = useState('');

    //using OnChange method for state update and two way data binding with input value attribute
    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    //validation for input value and adding the task
    function handleOnClick() {
        if (enteredTask.trim().length == 0) {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask("");
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 py-1 px-2 rounded-sm bg-stone-200"
                value={enteredTask}
                onChange={handleChange}
            />
            <button
                className="text-stone-800 hover:text-stone-950"
                onClick={handleOnClick}
            >
                Add Task
            </button>
        </div>
    );
};

export default NewTask;
