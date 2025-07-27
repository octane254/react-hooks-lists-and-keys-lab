import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

const App = () => {
    const projects = [
        {
            id: 1,
            name: 'Project One',
            description: 'Description of Project One',
            technologies: ['React', 'JavaScript', 'CSS']
        },
        {
            id: 2,
            name: 'Project Two',
            description: 'Description of Project Two',
            technologies: ['Node.js', 'Express', 'MongoDB']
        },
        // Add more projects as needed
    ];

    return (
        <div>
            <NavBar />
            <ProjectList projects={projects} />
        </div>
    );
};

export default App;
