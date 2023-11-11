import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    // return NextResponse.json(
    //     {message: "obteniendo usuarios"}, 
    //     {status: 200})
    const usuarios = await prisma.usuarios.findMany()
    return NextResponse.json({
        usuarios
    }) 
}

export const POST = async (req: NextRequest) => {
    // return NextResponse.json(
    //     {message: "creando usuarios"}, 
    //     {status: 200})
    
    const requestData = await req.json();
    const credenciales = requestData.credenciales;

    return NextResponse.json({
        credenciales: credenciales 
    })
}

export async function GET_USER(username: string, password: string) {
    const usuarios = await prisma.usuarios.findMany()
    console.log(usuarios)
    return NextResponse.json({
        message: 'getting usuario'
    }) 
}