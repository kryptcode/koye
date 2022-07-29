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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>

      <Nav />
      <Hero />
    </div>
  )
}
