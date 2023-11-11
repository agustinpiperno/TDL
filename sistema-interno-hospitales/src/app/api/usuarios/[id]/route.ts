import {NextRequest, NextResponse} from "next/server"

interface Params {
    params: {
        id: string
    }
}

export const GET = async (req: NextRequest, { params } : Params) => {
    return NextResponse.json(
        {message: `obteniendo usuario con id ${params.id}`}, 
        {status: 200})
}

export const PUT = async (req: NextRequest,  { params } : Params) => {
    return NextResponse.json(
        {message: `actualizando usuario con id ${params.id}`}, 
        {status: 200}
    )
}

export const DELETE = async (req: NextRequest,  { params } : Params) => {
    return NextResponse.json(
        {message: `eliminando usuario con id ${params.id}`}, 
        {status: 200}
    )
}

