import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Envio Can</title>
        <meta name="description" content="Envio de dato Can por medio de http" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         <a href="">Dana 4.0</a>
        </h1>

        <section className={styles.zonas}>
          
          <a className={styles.oficina} href="./oficina"><p>Oficina</p></a>
          <a className={styles.oficina} href="./pruebas"><p>Pruebas</p></a>
          <a className={styles.oficina} href="./Joya"><p>Joya</p></a>
          
        </section>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
