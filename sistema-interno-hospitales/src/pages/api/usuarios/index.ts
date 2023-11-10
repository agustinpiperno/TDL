import { NextApiRequest, NextApiResponse } from "next"

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req

    switch (method) {
        case 'GET':
            return res.status(200).json('obteniendo usuarios')
        case 'POST':
            return res.status(200).json('creando usuarios')
        default:
            return res.status(400).json("peticion invalida")
    }
}
