import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import Nav from '../components/Nav'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Koye | Frontend Web Developer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <About />
      <Projects />

    </div>
  )
}
