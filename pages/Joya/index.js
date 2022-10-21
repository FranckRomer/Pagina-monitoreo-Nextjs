import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const Joya = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joya</title>
        <meta name="description" content="Envio de dato Can por medio de http" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Joya</a>
        </h1>

        <section className={styles.zonas}>
          
          <a className={styles.oficina} href="./Joya/paisajismo"><p>paisajismo</p></a>
          <a className={styles.oficina} href="./Joya/residencial"><p>residencial</p></a>
          <a className={styles.oficina} href="./Joya/dentroresidencial"><p>dentroresidencial</p></a>
          
        </section>
      </main>

      
    </div>
  )
}

export default Joya