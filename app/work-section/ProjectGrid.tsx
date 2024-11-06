import React from 'react'
import { devProjects, ProjectProps } from './projectDetails'
import ProjectCard from './ProjectCard'

const ProjectGrid = () => {
  return (
    <>
      <div>
        {devProjects.map((project: ProjectProps) => (
          <ProjectCard
            key={project.id}
            id={project.id} 
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectGrid
