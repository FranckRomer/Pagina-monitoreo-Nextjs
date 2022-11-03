import React from 'react'
import styles from '../styles/Oficina.module.css'
import { AddLight } from '../component/AddLight'

const Oficina = () => {
  const [oficina, setOficina] = React.useState({

  })

  return (
    <>
      <div className={styles.Headers}>
        <a className={styles.LinkHome} href="./">Home</a>
      </div>
      <div className={styles.OficinaPage}>
        
      </div>
    </>

  )
}

export default Oficina