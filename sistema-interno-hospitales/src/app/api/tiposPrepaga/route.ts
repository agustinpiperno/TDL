import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    try{
        const tiposPrepagas = await prisma.tiposPrepagas.findMany({

        });

        if (tiposPrepagas) {
            return NextResponse.json({
                tiposPrepagas
            });
        } else {
            return NextResponse.json({
                mensaje: 'No hay prepagas registradas',
            });
        }
        
    }catch(error){
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}