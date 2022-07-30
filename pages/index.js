import Head from 'next/head'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

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
    </div>
  )
}
