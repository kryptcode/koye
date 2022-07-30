import Link from 'next/link'

const styles = {
  button: 'cursor-pointer hover:underline',
  container: 'md:w-[90%] mx-auto flex justify-between items-end py-6 px-4 md:px-0',
  navContainer: 'space-x-6 uppercase hidden md:inline-block font-medium',
  logo: 'text-3xl font-bold text-[#000aff]',
}

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        KA.
      </div>
      <div className={styles.navContainer}>
        <Link href='/'>
        <span className={styles.button}>home</span>
        </Link>
        <Link href='#about'>
        <span className={styles.button}>about me</span>
        </Link>
        <Link href='#projects'>
        <span className={styles.button}>projects</span>
        </Link>
      </div>
    </div>
  )
}

export default Nav