import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    try{
        const tiposExamenes = await prisma.tiposExamenes.findMany({

        });

        if (tiposExamenes) {
            return NextResponse.json({
                tiposExamenes
            });
        } else {
            return NextResponse.json({
                mensaje: 'No hay tipos de examenes registrados',
            });
        }
        
    }catch(error){
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}