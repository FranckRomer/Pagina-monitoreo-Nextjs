import React from 'react'
import styles from '../../styles/Pruebas.module.css'
import axios from "axios";

const InterfaceBtn = () => {
    const [equipo, setEquipo] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('');

    React.useEffect(() => {
        obtenerDatos()
    }, [equipo])



    const obtenerDatos = async () => {
        try {
            const data = await axios.put('/api/dana/infoDisp/findDisp')
            setEquipo(data.data)
            // console.log(data.data);
        } catch (error) {
            console.log("NO FUNCIONO");
        }

    }


    /* ENVIO DE DATOS */
    const EnviarDatos = async (msg) => {
        try {
            // const res = await axios.put("http://192.168.1.226:3001/sendEsp32", msg);
            const res = await axios.put("/api/dana/infoDisp/sendEsp", msg);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
        }
    }

    const CambiarStdLampara = async (e) => {
        if (e.percentage == "100") {
            e.percentage = "000"
        } else {
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
    
    

    const onSearchValueChange = (event) => {
        console.log(event.target.value.toLowerCase())
        setSearchValue(event.target.value.toLowerCase())
    }
    const filteredData = equipo.filter((el) => {
        //if no input the return the original
        if (searchValue === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            // console.log(el.element);
            return el.can.toLowerCase().includes(searchValue)
        }
    })

    return (
        <section className={styles.botones}>
            <h1>Focos</h1>

            <div className={styles.inputcontainer}>
                <input 
                    type="input"  placeholder="Buscar" name="name" id='name' required 
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
                <br/>
                <label htmlFor="name" className="form__label">Buscar CAN</label>
            </div>
            



            <ul className={styles.FocosContain}>
                {
                    filteredData.map((item, index) => (
                        <li className={styles.Focos} key={index} >
                            <div className={styles.btnFoco}>
                                <div >{item.percentage == "100" ? <button type="img" onClick={() => CambiarStdLampara(item)} > <img src='/images/encendido.png' /> </button> : <button type="img" onClick={() => CambiarStdLampara(item)}> <img src='/images/apagado.png' /> </button>}</div>
                                <p>Can: {item.can}, Pin: {item.pin} </p>
                            </div>
                            <button className={styles.Encender} onClick={() => EncenderLampara(item)}>ON</button>
                            <button className={styles.Apagar} onClick={() => ApagarLampara(item)}>OFF</button>
                            {item.rgb != "xxx" ? <button className={styles.Rgbs} onClick={() => ColoresLampara(item)}><p>{item.rgb}</p></button> : ""}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export { InterfaceBtn }