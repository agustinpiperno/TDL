import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    const nombreMedico = req.nextUrl.searchParams.get("nombreMedico")
    const apellidoMedico = req.nextUrl.searchParams.get("apellidoMedico")

    if (nombreMedico && apellidoMedico) {
        try{
            const medico = await prisma.medicos.findFirst({
                where: {
                    nombre: nombreMedico,
                    apellido: apellidoMedico,
                },
            });
 
            if (medico) {
                return NextResponse.json({
                    medico
                });
            } else {
                return NextResponse.json({
                    mensaje: 'No hay medico registrado',
                });
            }
        } catch (error) {
            return NextResponse.json({
                error: 'Error al procesar la solicitud',
            });
        }
    }
} 

