import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Blacklist | Home</title>
        <meta name="keywords" content="blacklist" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea unde at debitis mollitia maiores et. Optio quo maiores nam voluptates ipsam ipsum, eos, eum dolorum impedit quibusdam architecto nihil.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea unde at debitis mollitia maiores et. Optio quo maiores nam voluptates ipsam ipsum, eos, eum dolorum impedit quibusdam architecto nihil.</p>
        <Link href="/blacklists">
          <a className={styles.btn}>See The Blacklist Listing</a>
        </Link>
      </div>
    </>
  )
}
