import React from 'react';
const ProjectItem = ({ project }) => {
    if (!project) {
        return <div>Project data not available</div>;
    }
    return (
        <div className="project-item">
            <h3>{project.name || 'Untitled Project'}</h3>
            <p>{project.description || 'No description available'}</p>
            <div className="technologies">
                {project.technologies?.map((tech, index) => (
                    <span key={index}>{tech}</span>
                )) ?? <span>No technologies listed</span>}
            </div>
        </div>
    );
};
export default ProjectItem;