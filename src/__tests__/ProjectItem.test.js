   import React from 'react';
   import { render } from '@testing-library/react';
   import ProjectItem from '../components/ProjectItem';

  test('renders projects', () => {
    const sampleProjects = [
    {
        id: 1,
        name: "Portfolio Website",
        description: "My personal portfolio site",
        technologies: ["React", "JavaScript", "CSS"]
    },
    {
        id: 2,
        name: "E-commerce App",
        description: "Online shopping platform",
        technologies: ["Node.js", "Express", "MongoDB"]
    }
]});
