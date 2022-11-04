import React from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Joya = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joya</title>
        <meta name="description" content="ZonasJoya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainJoya}>
        <div className={styles.Headers}>
          <Link href={"./"} className={styles.LinkHome}>Home</Link>
        </div>

        <h1 className={styles.title}>
          <a href="">Zonas Joya</a>
        </h1>


        <section className={styles.zonas}>

          <Link href={"./Joya/Cochera"} className={styles.Link}>Cochera</Link>
          <Link href={"./Joya/Recamaras"} className={styles.Link}>Recamaras</Link>
          <Link href={"./Joya/Cocina"} className={styles.Link}>Cocina</Link>
          <Link href={"./Joya/Estancia"} className={styles.Link}>Estancia</Link>
          <Link href={"./Joya/Bar"} className={styles.Link}>Bar</Link>
          <Link href={"./Joya/Oficina"} className={styles.Link}>Oficina</Link>
          <Link href={"./Joya/Pasillos"} className={styles.Link}>Pasillos</Link>
          <Link href={"./Joya/Villas"} className={styles.Link}>Villas</Link>

          {/* <a className={styles.oficina} href="./Joya/Cochera"><p>Cochera</p></a>
          <a className={styles.oficina} href="./Joya/Recamaras"><p>Recamaras</p></a>
          <a className={styles.oficina} href="./Joya/Cocina"><p>Cocina</p></a>
          <a className={styles.oficina} href="./Joya/Estancias"><p>Estancia</p></a>
          <a className={styles.oficina} href="./Joya/Bar"><p>Bar</p></a>
          <a className={styles.oficina} href="./Joya/Oficina"><p>Oficina</p></a>
          <a className={styles.oficina} href="./Joya/Pasillos"><p>Pasillos</p></a>
          <a className={styles.oficina} href="./Joya/Villas"><p>Villas</p></a> */}

        </section>
      </main>


    </div>
  )
}

export default Joya