const styles = {
    container: 'flex flex-col-reverse space-y-10 md:space-y-0 md:flex-row justify-evenly z-2 mb-32 shadow-md shadow-black/10',
    textWrapper: 'py-5 md:py-10 px-8 flex flex-col justify-between flex-1',
    heading: 'text-4xl md:text-6xl font-bold mb-8',
    description: 'text-lg font-medium mb-6',
    techsContainer: 'text-md flex flex-wrap gap-x-4 mb-8',
    techs: 'bg-white text-sm md:text-md p-1 md:p-2',
    buttonsWrapper: 'space-x-6 text-lg mb-2 font-semibold',
    liveBtn: 'py-2 px-4 md:px-8 border border-black bg-black text-white',
    codeBtn: 'py-2 px-4 md:px-8 border border-black',
    imageContainer: 'bg-[#f8fafc] flex items-center justify-center flex-1',
    image: 'md:w-[95%] md:rounded-md shadow-xl shadow-black/40'
}

const Project = ({ project }) => {
  return (
    <div className={styles.container}>
        <div className={styles.textWrapper} style={{ backgroundColor: project.bg}}>
            <h2 className={styles.heading}>
                    {project.name}
            </h2>
            <p className={styles.description}>
                  {project.description}
            </p>
            <div className={styles.techsContainer}>
                {
                    project.techs.map(tech => (
                        <span className={styles.techs} key={tech.id}>
                            {tech}
                        </span>
                    ))
                }
                
            </div>
            <div className={styles.buttonsWrapper}>
                <a href={project.live_url} target="_blank" rel="noreferrer">
                <button className={styles.liveBtn}>
                    View Live
                </button>
                </a>
                <a href={project.code_url} target="_blank" rel="noreferrer">
                <button className={styles.codeBtn}>
                    See Code
                </button>
                </a>
            </div>
        </div>
        <div className={styles.imageContainer}>
            <img src={project.img} alt="" className={styles.image} />
        </div>
    </div>
  )
}

export default Project