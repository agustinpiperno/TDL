import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    try{
        const tiposSalas = await prisma.tiposSalas.findMany({

        });
        if (tiposSalas) {
            return NextResponse.json({
                tiposSalas
            });
        } else {
            return NextResponse.json({
                mensaje: 'No hay salas registradas',
            });
        }
        
    }catch(error){
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}