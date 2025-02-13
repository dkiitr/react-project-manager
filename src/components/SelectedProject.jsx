import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({
    project,
    onDeleteProject,
    onAddTask,
    onDeleteTask,
    tasks,
}) => {
    //Changing Date Format
    let formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
    });

    //filtering the tasks according to projectID

    const projectTasks = tasks.filter(task => task.projectId === project.id )

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300 ">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">
                        {project.title}
                    </h1>
                    <button
                        className="text-stone-600 hover:text-stone-950 font-bold"
                        onClick={onDeleteProject}
                    >
                        DELETE
                    </button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">
                    {project.description}
                </p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={projectTasks} />
        </div>
    );
};

export default SelectedProject;
