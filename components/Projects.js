import data from '../data.json'
import Project from './Project'

const Projects = () => {
  return (
    <div className='relative' id='projects'>
        <div className='h-24 bg-[#000aff] absolute -z-10 top-0 left-0 w-full' />

        <div className="w-[95%] mx-auto ">
          {
            data.map(project => (
              <Project project={project} key={project.id} />
            ))
          }
        </div>

        

        
    </div>
  )
}

export default Projects