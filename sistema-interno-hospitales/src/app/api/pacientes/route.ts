import { NextRequest, NextResponse } from "next/server"
import prisma from "../../../../prisma/client"
interface Params {
    idPaciente: number
}

export const GET = async (req: NextRequest) => {
    try {
        const pacientes = await prisma.pacientes.findMany({
            orderBy: {
                idPaciente: 'asc',
            },
            include: {
                Examenes: true, // Trae todos los datos del Examen asociado al paciente
            },
        });
        return NextResponse.json({
            pacientes
        })
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export const POST = async (req: NextRequest) => {
    const requestData = await req.json();
    const paciente = requestData.paciente;

    try {
        const insertPaciente = await prisma.pacientes.create({
            data: {
                apellido: paciente.apellido,
                nombre: paciente.nombre,
                tipoDocumento: paciente.tipoDocumento,
                documento: paciente.documento,
                direccion: paciente.direccion,
                telefono: paciente.telefono,
                ocupacion: paciente.ocupacion,
                idPrepaga: paciente.idPrepaga,
            },
        })

        return NextResponse.json({
            mensaje: 'Paciente nuevo insertado',
            pacienteInsertado: insertPaciente,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export const PUT = async (req: NextRequest) => {
    const requestData = await req.json();
    const paciente = requestData.paciente;

    try {
        const updatedPaciente = await prisma.pacientes.update({
            where: {
                idPaciente: paciente.idPaciente,
            },
            data: {
                apellido: paciente.apellido,
                nombre: paciente.nombre,
                tipoDocumento: paciente.tipoDocumento,
                documento: paciente.documento,
                direccion: paciente.direccion,
                telefono: paciente.telefono,
                ocupacion: paciente.ocupacion,
                idPrepaga: paciente.idPrepaga,
            },
        });

        return NextResponse.json({
            mensaje: 'Paciente seleccionado modificado',
            pacienteInsertado: updatedPaciente,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}


export const DELETE = async (req: NextRequest) => {
    const idPaciente = req.nextUrl.searchParams.get("IdPaciente")

    try {
        const pacienteEliminado = await prisma.pacientes.delete({
            where: {
                idPaciente: parseInt(idPaciente as string), // Asegúrate de convertir el ID a un número si es necesario
            },
        });

        return NextResponse.json({
            mensaje: 'Paciente seleccionado eliminado',
            pacienteEliminado: pacienteEliminado,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}
