import React from 'react'
import styles from '../../../styles/ZonasJoya.module.css'
import { BotonJoya } from '../../../component/Joya/BotonJoya'
import Data from "../../../joyaData.json"
import Image from 'next/image'
import Link from 'next/link'
const DataCochera = Data.Cochera
// const DataCochera = Data.Cochera
const Cochera = () => {
  // Ilumninarias
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
  // RGB's
  const [rgbs, setRgbs] = React.useState([
    DataCochera.rgb.rgb1,
    DataCochera.rgb.rgb2,
    DataCochera.rgb.rgb3,
  ])
  // Motores's
  const [motores, setMotores] = React.useState([
    DataCochera.motores.motor1
  ])


  // /**
  //  * 
  //  */
  // const [dispositivo, setDispositivo] = React.useState([])

  // React.useEffect(() => {
  //   obtenerDatos()
  // })


  // const obtenerDatos = async () => {
  //   try {
  //     const data = await axios.put('/api/dana/infoDisp/findDisp')
  //     setDispositivo(data.data[0])

  //     if (data.data[0] == undefined) {
  //       setDispositivo({
  //         can: props.Data.can,
  //         pin: props.Data.pin,
  //         percentage: "000",
  //         rgb: "xxx"
  //       })
  //     } else {
  //       // setDispositivo(data.data[0])
  //       setDispositivo({
  //         can: data.data[0].can,
  //         pin: data.data[0].pin,
  //         percentage: data.data[0].percentage,
  //         rgb: data.data[0].rgb
  //       })
  //     }
  //     // console.log(data.data[0]);

  //   } catch (error) {
  //     console.log("NO FUNCIONO");

  //   }

  // }


  /**
   * 
   */

  return (
    <div className={styles.Zona}>
      <header className={styles.Headers}>
        <Link href={"/Joya"} className={styles.LinkHome}>Zonas</Link>
      </header>
      <main>
        <section className={styles.Imagen} >
          <img src="/images/joya/zonas/cochera.jpg" />
        </section>
        {/* Iluminarias */}
        <section>
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
        {/* RGBS */}
        <section>
          {
            rgbs.map((item, index) => (
              <BotonJoya
                Data={item}
                Tipo={"rgb"}
                key={index}
              />
            ))
          }
        </section>


        {/* MOTORES */}
        <section>
          {
            motores.map((item, index) => (
              <BotonJoya
                Data={item}
                Tipo={"motor"}
                key={index}
              />
            ))
          }
        </section>
      </main>
    </div>
  )
}

export default Cochera