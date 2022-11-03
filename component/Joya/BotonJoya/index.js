import styles from '../../../styles/ZonasJoya.module.css'
import React from 'react'
import Modal from '../../Modal';
import stylesModal from "../../../styles/Modal.module.css"
import axios from "axios";

function BotonJoya(props) {
    const [showModal, setShowModal] = React.useState(false)
    const [dispositivo, setDispositivo] = React.useState([])

    React.useEffect(() => {
        obtenerDatos()
    })


    const obtenerDatos = async () => {
        try {
            const data = await axios.put('/api/dana/infoDisp/findDisp', props.Data)
            
            if (data.data[0] == undefined) {
                setDispositivo({
                    can: props.Data.can,
                    pin: props.Data.pin,
                    percentage: "000",
                    rgb: "xxx"
                })
            } else{
                setDispositivo(data.data[0])
            }
            // console.log(data.data[0]);

        } catch (error) {
            console.log("NO FUNCIONO");
            setDispositivo({
                can: props.Data.can,
                pin: props.Data.pin,
                percentage: "000",
                rgb: "xxx"
            })
        }

    }
    /*
     *  ENVIO DE DATOS
    */

    const EncenderLampara = async (e) => {

        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "100",
            rgb: "xxx",
        }
        console.log(msg)
        EnviarDatos(msg)
    }
    const ApagarLampara = async (e) => {
        const msg = {
            can: e.can,
            pin: e.pin,
            percentage: "000",
            rgb: "xxx",
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

    /* ENVIO DE DATOS */
    const EnviarDatos = async (msg) => {
        try {
            // const res = await axios.put("http://192.168.1.226:3001/sendEsp32", msg);
            const res = await axios.put("/api/dana/infoDisp/sendEsp", msg);
            console.log(res);
        } catch (error) {
            console.log("NO SE PUDO ENVIAR");
            alert("NO SE PUDO ENVIAR, problemas en el envio \nError: " + error)
        }
    }


    // STYLES
    const stylePosicion = {
        left: props.Data.left,
        top: props.Data.top,

    };


    return (
        <>
            <div className={styles.Cubo} style={stylePosicion}>
                {
                    (dispositivo.percentage != "000") ? <button type="" onClick={() => setShowModal(true)}><img src='/images/encendido.png' /></button> : <button type="" onClick={() => setShowModal(true)}><img src='/images/apagado.png' /></button>
                }

            </div>

            {/* MODAL */}
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <section className={stylesModal.ImagenContend}>
                    {
                        (dispositivo.percentage != "000") ? <button type="" onClick={() => ApagarLampara(props.Data)}><img src='/images/encendido.png' /></button> : <button type="" onClick={() => EncenderLampara(props.Data)}><img src='/images/apagado.png' /></button>
                    }
                    {/* <img src="/images/encendido.png" alt="" /> */}
                </section>
                <section className={stylesModal.Data}>
                    Can: {props.Data.can}, Pin: {props.Data.pin}
                </section>
                <section className={stylesModal.BotonesContend}>
                    <button type="" onClick={() => EncenderLampara(props.Data)} >ON</button>
                    <button type="" onClick={() => ApagarLampara(props.Data)}   >OFF</button>
                    {/* <button type="">RGB</button> */}
                </section>
                {props.Tipo == "rgb" ? "hola" : ""}
            </Modal>
        </>
    )
}

export { BotonJoya }