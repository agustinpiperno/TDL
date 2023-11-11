import {NextRequest, NextResponse} from "next/server"

export const GET = async (req: NextRequest) => {
    return NextResponse.json(
        {message: "obteniendo usuarios"}, 
        {status: 200})
}

export const POST = async (req: NextRequest) => {
    return NextResponse.json(
        {message: "creando usuarios"}, 
        {status: 200})
}
