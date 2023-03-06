const styles = {
    container: 'bg-[#000aff] text-white py-24 px-6 md:px-0',
    wrapper: 'md:w-[90%] mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 justify-evenly md:space-x-10',
    heading: 'text-5xl lg:text-6xl font-bold mb-6 text-[#ffe713] '
}

const About = () => {
  return (
    <div id="about" className={styles.container}>
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.heading}>About.</h1>
                <p className="text-lg md:text-xl">
                    👋 Hi! I'm Koye, a passionate frontend developer based in Abuja, Nigeria. I strive to construct web applications that are appealing in design while maintaining their functionality. I've been working as a frontend developer for over a year. I always build projects to hone my skills.
                </p>
            </div>
            <div>
                <p className="text-lg mb-8 md:text-xl">
                    Currently, I'm pursuing a bachelor's degree in Computer Science and Economics. I am interested in JavaScript technologies. Some frontend technologies that I have worked with and would like to work with in the future are Next.Js, React, Recoil, Thirdweb SDK, Styled components, Tailwind CSS, Firebase, Vite etc.
                </p>
                <p className="text-lg md:text-xl">
                    I'm actively seeking roles where I can broaden my knowledge and utilize my skills. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
