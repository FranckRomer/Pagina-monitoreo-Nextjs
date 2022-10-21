import React from 'react'
import styles from '../styles/Pruebas.module.css'
import axios from "axios";
import AddLight from "../component/AddLight"

const Pruebas = () => {
    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    }, [equipo])

    

    const obtenerDatos = async () => {
        try {
            const data = await axios.get('http://192.168.1.226:3001/sendEsp32/getDispositivos')
            // console.clear()
            // console.log(data.data)
            setEquipo(data.data)
        } catch (error) {
            console.log("NO FUNCIONO");
        }

    }
    
    const [newData, setNewData] = React.useState({
        can: "",
        pin: "",
        percentage: "",
        rgb: ""
    })

    const CrearLampara = async (e) => {
        e.preventDefault();
        console.log(newData);
        try {
            const res = await axios.put("http://192.168.1.226:3001/sendEsp32", newData);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }
    ///////////////////////////////////////////////////////////////

    /* ENVIO DE DATOS */ 
    const EnviarDatos = async (msg) =>{
        try {
            const res = await axios.put("http://192.168.1.226:3001/sendEsp32", msg);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }

    const CambiarStdLampara = async (e) => {
        if (e.percentage == "100") {
            e.percentage = "000"
        } else{
            e.percentage = "100"
        }
        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: e.percentage,
            rgb: e.rgb,
        }
        console.log(msg)
        EnviarDatos(msg)
    }

    const EncenderLampara = async (e) => {

        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "100",
            rgb: e.rgb,
        }
        console.log(msg)
        EnviarDatos(msg)
    }
    const ApagarLampara = async (e) => {
        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "000",
            rgb: e.rgb,
        }
        console.log(msg)
        EnviarDatos(msg)       
    }
    const ColoresLampara = async (e) => {
        let valueR = ((Math.floor(Math.random() * 16).toString(16)).toUpperCase());
        let valueG = ((Math.floor(Math.random() * 16).toString(16)).toUpperCase());
        let valueB = ((Math.floor(Math.random() * 16).toString(16)).toUpperCase());
        console.log(valueR + valueG + valueB)
        let id_RGB = valueR + valueG + valueB

        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "100",
            rgb: id_RGB,
        }
        console.log(msg)
        EnviarDatos(msg)        
    }

    
    ///////////////////////////////////////////////////////
    return (
        
        <div className={styles.Pruebas}>
            {/*--------------- Crear Lampara ---------------*/}
            {/* <AddLight></AddLight> */}
            <section className={styles.AddDisp}>
                <h1>Crear nuevo Foco</h1>
                <form onSubmit={CrearLampara} className={styles.inputcontainer}>
                    <input
                        type="" name="CAN" placeholder='CAN'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                can: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="PIN" placeholder='PIN'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                pin: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="PORCENTAJE" placeholder='PORCENTAJE'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                percentage: e.target.value,
                            })
                        }>
                    </input>
                    <input
                        type="" name="RGB" placeholder='RGB'
                        onChange={(e) =>
                            setNewData({
                                ...newData,
                                rgb: e.target.value,
                            })
                        }>
                    </input>

                    <button type="" >AGREGAR</button>
                </form>
            </section>

            {/*--------------- BOTONES ---------------*/}
            <section className={styles.botones}>
                <h1>Focos</h1>
                
                <ul className={styles.FocosContain}>
                    {
                        equipo.map((item, index) => (
                            <li className={styles.Focos} key={index} >
                                <div className={styles.btnFoco}>
                                    <div >{item.percentage == "100" ? <button type="img" onClick={() => CambiarStdLampara(item)} > <img src='/images/encendido.png'/> </button> : <button type="img" onClick={() => CambiarStdLampara(item)}> <img src='/images/apagado.png'/> </button>}</div>
                                    <p>Can: {item.can}, Pin: {item.pin} </p>
                                    {/* <p>{item.rgb}</p> */}
                                </div>
                                <button className={styles.Encender} onClick={() => EncenderLampara(item)}>ON</button>
                                <button className={styles.Apagar} onClick={() => ApagarLampara(item)}>OFF</button>
                                {item.rgb != "xxx" ? <button className={styles.Rgbs} onClick={() => ColoresLampara(item)}><p>{item.rgb}</p></button> : ""}
                            </li>
                        ))
                    }
                </ul>
            </section>

        </div>
    )
}

export default Pruebas