import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className='md:w-[90%] mx-auto py-32 px-4 md:0'>
        <div className='text-4xl font-bold mb-14'>
            Hello, I'm Koye
        </div>
        <div className='text-3xl text-[#000aff] font-medium mb-9'>
            <Typewriter
                options={{
                    strings: ["Front End Developer", "Javascript Developer", "React Developer", "Web Developer"],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>

        <div className='space-x-8 flex-wrap cursor-pointer mb-8'>
            <span className='text-5xl'>
                <i className="fa-brands fa-github hover:text-[#161b22] hover:scale-105 transition-all duration-200"></i>
            </span>
            <span className='text-5xl'>
                <i className="fa-brands fa-linkedin hover:text-blue-900 hover:scale-105 transition-all duration-200 "></i>
            </span>
            <span className='text-5xl'>
                <i className="fa-brands fa-twitter hover:text-blue-700 hover:scale-105 transition-all duration-200 "></i>
            </span>
        </div>

        <button className='border-[3px]  border-black hover:bg-black hover:text-white px-4 py-2 text-xl font-medium transition-all duration-200 ease-linear'>
            Get in touch
        </button>
    </div>
  )
}

export default Hero