import React from 'react'
import styles from '../../styles/Pruebas.module.css'
import axios from "axios";

function AddLight() {
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
            const res = await axios.put("http://192.168.1.226:3000/api/dana/infoDisp/sendEsp", newData);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }

    return (

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

    )
}
export { AddLight }