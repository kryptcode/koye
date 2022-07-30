import Typewriter from 'typewriter-effect'
import Link from 'next/link'

const styles={
    container: 'md:w-[90%] mx-auto py-32 px-4 md:0',
    greeting: 'text-4xl font-bold mb-14',
    typewriter: 'text-3xl text-[#000aff] font-medium mb-9'
}

const Hero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.greeting}>
            Hello, I'm Koye
        </div>
        <div className={styles.typewriter}>
            <Typewriter
                options={{
                    strings: ['Front End Developer', 'Javascript Developer', 'React Developer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                }}
            />
        </div>

        <div className='space-x-8 flex-wrap mb-8'>
            <Link href='/'>
            <span className='text-5xl'>
                <i className='fa-brands fa-github hover:text-[#161b22] hover:scale-105 transition-all duration-200'></i>
            </span>
            </Link>
            <Link href='/'>
            <span className='text-5xl'>
                <i className='fa-brands fa-linkedin hover:text-blue-900 hover:scale-105 transition-all duration-200 '></i>
            </span>
            </Link>
            <Link href='/'>
            <span className='text-5xl'>
                <i className='fa-brands fa-twitter hover:text-blue-700 hover:scale-105 transition-all duration-200 '></i>
            </span>
            </Link>
        </div>

        <button className='border-[3px]  border-black hover:bg-black hover:text-white px-4 py-2 text-xl font-medium transition-all duration-200 ease-linear'>
            Get in touch
        </button>
    </div>
  )
}

export default Hero