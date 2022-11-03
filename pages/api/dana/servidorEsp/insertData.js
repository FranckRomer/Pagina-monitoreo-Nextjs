import {UpdateReg, FindReg, horaActual} from "../../../../funcionesCrud"

export default async function insetData(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje al insetData: ");
    console.log(body);
    body.hora = horaActual();  
    // 
    let result = false
    if (body.rgb != "xxx" ) {
        // BUSCAR SI HAY REGISTRO
        result = await FindReg(body.can, body.pin, "DISPOSITIVOS")
        console.log(result[0])
        if (result[0]) {
            body.rgb = result[0].rgb
            body.percentage = result[0].percentage
        }
    }

    UpdateReg(body, "DISPOSITIVOS")
    res.status(200).json({ name: result[0] })
  }
  

  