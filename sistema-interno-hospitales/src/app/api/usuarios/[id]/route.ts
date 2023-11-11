import {NextRequest, NextResponse} from "next/server"

interface Params {
    id: string
}

export const GET = async (req: NextRequest, { params } : { params: Params }) => {
    return NextResponse.json(
        {message: `obteniendo usuario con id ${params.id}`}, 
        {status: 200})
}

export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    return NextResponse.json(
        {message: `actualizando usuario con id ${params.id}`}, 
        {status: 200}
    )
}

export const DELETE = async (req: NextRequest, { params }: { params: { id: string } }) => {
    return NextResponse.json(
        {message: `eliminando usuario con id ${params.id}`}, 
        {status: 200}
    )
}

