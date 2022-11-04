import React from 'react'
import styles from '../../../styles/ZonasJoya.module.css'
import { BotonJoya } from '../../../component/Joya/BotonJoya'
import Data from "../../../joyaData.json"
import Link from 'next/link'
const DataCochera = Data.Cochera
// const DataCochera = Data.Cochera
const Bar = () => {
  const [iluminarias, setIluminarias] = React.useState([
    DataCochera.iluminarias.iluminaria1,
    DataCochera.iluminarias.iluminaria2,
    DataCochera.iluminarias.iluminaria3,
    DataCochera.iluminarias.iluminaria4,
    DataCochera.iluminarias.iluminaria5,
    DataCochera.iluminarias.iluminaria6,
    DataCochera.iluminarias.iluminaria6,
    DataCochera.iluminarias.iluminaria7,
    DataCochera.iluminarias.iluminaria8,
    DataCochera.iluminarias.iluminaria9,
    DataCochera.iluminarias.iluminaria10,
    DataCochera.iluminarias.iluminaria11,
    DataCochera.iluminarias.iluminaria12,
    DataCochera.iluminarias.iluminaria13,
    DataCochera.iluminarias.iluminaria14,
    DataCochera.iluminarias.iluminaria15,
    DataCochera.iluminarias.iluminaria16, //prueba
  ])
  // console.log(iluminarias);

  return (
    <div className={styles.Zona}>
      <header className={styles.Headers}>
        {/* <a className={styles.LinkHome} href="./">Zonas</a> */}
        <Link href={"/Joya"} className={styles.LinkHome}>Zonas</Link>
      </header>
      <main>
        <section className={styles.Imagen} >
          <img src="/images/joya/zonas/bar.jpg" />
        </section>
        <section >
          {
            iluminarias.map((item, index) => (
              <BotonJoya
                Data={item}
                Tipo={"foco"}
                key={index}
              />
            ))
          }
        </section>
      </main>
    </div>
  )
}

export default Bar