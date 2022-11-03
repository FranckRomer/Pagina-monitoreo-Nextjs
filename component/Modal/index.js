import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/Modal.module.css"

export default function Modal({show,onClose, children}){
    const [isBrowser, setIsBrowser] = React.useState(false)

    useEffect(()=>{
        setIsBrowser(true)
    },[])

    const handleClose = (e) =>{
        e.preventDefault();
        onClose();
    }

    const modalContent = show ? (
        <div className={styles.Overlay}>
            <div className={styles.Modal}>
                <div className={styles.Header}>
                    <button onClick={handleClose}>❌</button>
                </div>
                <div className={styles.Body}>
                    {children}
                </div>
            </div>
        </div>
    ):null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        )
    } else {
        return null;
    }
}