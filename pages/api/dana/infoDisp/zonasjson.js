import Data from "../../../../joyaData.json"

export default function handler(req, res) {
    console.log("Llego un mensaje a zonasjson///////////////")
    const response = Data
    res.status(200).json(response)
}
  