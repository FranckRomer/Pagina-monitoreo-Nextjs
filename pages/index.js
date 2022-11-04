import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

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
          
          <Link href={"./Joya"} className={styles.Link}>Joya</Link>
          <Link href={"./pruebas"} className={styles.Link}>Pruebas</Link>
          {/* <a className={styles.oficina} href="./Joya"><p>Joya</p></a>
          <a className={styles.oficina} href="./pruebas"><p>Pruebas</p></a> */}
          
          
        </section>
      </main>

      
    </div>
  )
}
