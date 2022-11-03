import { UpdateReg, FindReg, horaActual } from "../../../../funcionesCrud"

//
function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
            y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}
////////////////////////////////////////////////////////////////
export default async function findDisp(req, res) {
    let body = req.body
    let can = body.can
    let pin = body.pin
    // console.log("---------------------------------")
    // console.log("Llego un mensaje a findDisp: ");
    // console.log(body);
    if (!body.can) {
        can = 0
        pin = 0
    } 
    let result = await FindReg(can, pin, "DISPOSITIVOS")
    result = sortJSON(result, 'pin', 'asc');
    result = sortJSON(result, 'can', 'asc');
    // console.log(result);
    res.status(200).json(result)
}
