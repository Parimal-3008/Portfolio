import React from 'react'
import Card from './Card'
import "./Projects.css"
function Projects() {
  return (
    <div className="projectsparent2">
    <div className='projectsname2'>
    <hr className='projecthr' />
    Projects
    <hr className='projecthr' />
    </div>
    <div className='projectsMyDesc'>
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
     <Card />
    </div>



    </div>
  )
}

export default Projects