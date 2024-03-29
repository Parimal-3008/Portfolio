import React from 'react'
import Card from './Card'
import "../components/css/Projects.css";
const  Projects=  React.forwardRef((props, ref) => {
  return (
    <div className="projectsparent2" ref={ref}>
    <div className='projectsname2'>
    <hr className='projecthr' />
    Projects
    <hr className='projecthr' />
    </div>
    <div className='projectsMyDesc'>
     <Card projectname="MyCafe" url="https://github.com/Parimal-3008/MyCafe-combined" techstack="Flutter Node.js Express.js React MongoDB Firebase" 
     description="A food ordering app that allow users to order food items and track their orders."
      />
     <Card projectname="StockX" url="https://github.com/Parimal-3008/StockX" techstack="Node.js Express.js React PostgreSQL" 
     description="Playground for newbie stock traders to buy and sell some of the listed stocks at live price."
      />
     <Card projectname="WeText" url="https://github.com/Parimal-3008/WeText" techstack="Node.js Express.js EJS MongoDB" 
     description="Web application where user can can chat in real time with each other."
      />
     <Card projectname="Portfolio" url="https://github.com/Parimal-3008/Portfolio" techstack="Node.js React" 
     description="My portfolio website to showcase my skills and projects."
      />
     <Card projectname="Chess Clock" url="https://github.com/Parimal-3008/chess-clock" techstack="HTML CSS Javascript" 
     description="Web application where players can set time format of chess game."
      />
     <Card projectname="Clubs" url="https://github.com/Parimal-3008/svnit_clubs" techstack="Flutter Firebase" 
     description="An android application where clubs can post about the upcoming events and post about past year events"
      />
    </div>



    </div>
  )
});

export default Projects