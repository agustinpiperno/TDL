import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export const POST = async (req: NextRequest) => {
    const requestData = await req.json();
    const estudio = requestData.estudio;
console.log(estudio)
    try {
        const insertEstudio = await prisma.estudios.create({
            data: {
                tipoEstudio: estudio.tipoEstudio,
                resultado: estudio.resultado,
                examenesIdExamen: estudio.examenesIdExamen,
            },
        })

        return NextResponse.json({
            mensaje: 'Estudio nuevo insertado',
            estudioInsertado: insertEstudio,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export const PUT = async (req: NextRequest) => {
    const requestData = await req.json();
    const estudio = requestData.estudio;

    try {
        const updatedExamen = await prisma.estudios.update({
            where: {
                idEstudio: estudio.idEstudio,
            },
            data: {
                tipoEstudio: estudio.tipoEstudio,
                resultado: estudio.resultado
            },
        });

        return NextResponse.json({
            mensaje: 'Examen seleccionado modificado',
            examenModificado: updatedExamen,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export const DELETE = async (req: NextRequest) => {
    const idEstudio = req.nextUrl.searchParams.get("IdEstudio")

    try {
        const estudioEliminado = await prisma.estudios.delete({
            where: {
                idEstudio: parseInt(idEstudio as string), // Asegúrate de convertir el ID a un número si es necesario
            },
        });

        return NextResponse.json({
            mensaje: 'Estudio seleccionado eliminado',
            examenEliminado: estudioEliminado,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}