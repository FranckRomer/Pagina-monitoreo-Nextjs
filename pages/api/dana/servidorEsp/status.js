import {UpdateReg, FindReg, horaActual} from "../../../../funcionesCrud"

export default function status(req, res) {
    let body = req.body
    console.log("---------------------------------")
    console.log("Llego un mensaje a status: ");
    console.log(body);
    body.hora = horaActual();
    body.heardBeat = true;
    UpdateReg(body, "STATUS")
    res.status(200).json({ name: 'STATUS' })
  }
  