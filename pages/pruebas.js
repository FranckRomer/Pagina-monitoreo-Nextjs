import React from 'react'
import styles from '../styles/Pruebas.module.css'
import { AddLight } from '../component/AddLight'
import { InterfaceBtn } from '../component/InterfaceBtns';

const Pruebas = () => {
    

    ///////////////////////////////////////////////////////
    return (
        <>
            <div className={styles.Headers}>
                <a className={styles.LinkHome} href="./">Home</a>
            </div>
            <div className={styles.Pruebas}>
                
                {/*--------------- Crear Lampara ---------------*/}
                
                
                <AddLight />
            
                {/*--------------- BOTONES ---------------*/}
                <InterfaceBtn />            
            
            </div>
        </>
    )
}

export default Pruebas