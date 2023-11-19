import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    // return NextResponse.json(
    //     {message: "obteniendo usuarios"}, 
    //     {status: 200})
    const pacientes = await prisma.pacientes.findMany()
    return NextResponse.json({
        pacientes
    }) 
}