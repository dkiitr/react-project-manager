import React from "react";
import Button from "./Button";

const ProjectSidebar = ({ onStartAddProject, projects, selectedProjectId, onSelectProject }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 text-stone-200 font-bold uppercase md:text-xl">
                Your Project
            </h2>
            <div>
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <ul className="mt-6">
                {projects &&
                    projects.map((project) => {
                        let cssClasses =
                            "w-full py-1 px-2 my-1  text-left rounded-sm hover:text-stone-200 hover:bg-stone-800";
                        if (project.id === selectedProjectId) {
                            cssClasses += " bg-stone-800 text-stone-200";
                        } else {
                            cssClasses += " text-stone-400";
                        }
                        return (
                            <li key={project.id}>
                                <button className={cssClasses} onClick={()=>onSelectProject(project.id)}>
                                    {project.title}
                                </button>
                            </li>
                        );
                    })}
            </ul>
        </aside>
    );
};

export default ProjectSidebar;
