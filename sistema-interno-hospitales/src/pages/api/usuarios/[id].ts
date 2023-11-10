import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {method} = req

    switch (method) {
        case 'GET':
            return res.status(200).json('obteniendo usuario con id')
        case 'PUT':
            return res.status(200).json('actualizando usuario con id')
        case 'DELETE':
            return res.status(200).json('eliminando usuario con id')
        default:
            return res.status(400).json("eliminando usuario con id")
    }
}