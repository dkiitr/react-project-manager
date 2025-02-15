import React, { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectState, setProjectState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    //Adding a NewTask
    function handleAddTask(text) {
        setProjectState((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                id: taskId,
                projectId: prevState.selectedProjectId,
            };
            return {
                ...prevState,
                tasks: [newTask, ...prevState.tasks],
            };
        });
    }

    //Deleting the Task
    function handleDeleteTask(id) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== id),
            };
        });
    }

    // to get the NewProject Component UI
    function handleStartAddProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    //Adding(Saving) new Project into Projects Array  passing onAdd props to NewProject component
    function handleAddProject(project) {
        const newProject = { ...project, id: Math.random() };
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    //Cancelling new Project

    function handleCancelProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }

    //showing Selected Project
    function handleSelectProject(id) {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    //Deleting Selected Project
    function handleDeleteProject() {
        setProjectState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== projectState.selectedProjectId
                ),
            };
        });
    }

    //finding selected project
    let selectedProject = projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId
    );

    let content = (
        <SelectedProject
            project={selectedProject}
            onDeleteProject={handleDeleteProject}
            onDeleteTask={handleDeleteTask}
            onAddTask={handleAddTask}
            tasks={projectState.tasks}
        />
    );
    if (projectState.selectedProjectId === null) {
        content = (
            <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelProject}
            />
        );
    } else if (projectState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }
    return (
        <main className="h-screen my-8 flex gap-16">
            <ProjectSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectState.selectedProjectId}
            />
            {content}
        </main>
    );
}

export default App;
