import React from 'react';
import ProjectItem from './ProjectItem';
const ProjectList = ({ projects = [] }) => {
    // Handle cases where projects might be undefined/null
    if (!projects || projects.length === 0) {
        return <div>No projects to display</div>;
    }
    return (
        <div>
            {projects.map(project => (
                <ProjectItem 
                    key={project.id} 
                    project={project} 
                />
            ))}
        </div>
    );
};
export default ProjectList;