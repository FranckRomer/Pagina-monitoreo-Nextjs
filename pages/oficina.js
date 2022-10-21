import React from 'react'
import styles from '../styles/Oficina.module.css'
import {AddLight} from '../component/AddLight' 

const Oficina = () => {
  return (
    <div className={styles.OficinaPage}>
      <section className={styles.mapa}>
        <canvas id="mapa"></canvas>
      </section>
      <section className={styles.configuracion}>
        <AddLight></AddLight>
      </section>
    </div>

  )
}

export default Oficina