import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    try{
        const turnos = await prisma.turnos.findMany({
            orderBy: {
                idTurno: 'asc',
            },
            include: {
                paciente: true,
                medico: true, 
                usuario: true,
                sala: true,
            },
        });

        if (turnos) {
            return NextResponse.json({
                turnos
            });
        } else {
            return NextResponse.json({
                mensaje: 'No hay turnos registrados',
            });
        }
        
    }catch(error){
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export const PUT = async (req: NextRequest) => {
    const requestData = await req.json();
    const turno = requestData;
    
    try {
        const updatedTurno = await prisma.turnos.update({
            where: {
                idTurno: turno.idTurno,
            },
            data: {
                idTurno: turno.idTurno,
                fechaTurno: turno.fechaTurno,
                idPaciente: turno.idPaciente,
                idMedico: turno.idMedico,
                idUsuario: turno.idUsuario,
                idSala: turno.idSala,
            },
        });

        return NextResponse.json({
            mensaje: 'Turno seleccionado modificado',
            turnoInsertado: updatedTurno,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}


export const DELETE = async (req: NextRequest) => {
    const idTurno = req.nextUrl.searchParams.get("IdTurno")

    try {
        const turnoEliminado = await prisma.turnos.delete({
            where: {
                idTurno: parseInt(idTurno as string), // Asegúrate de convertir el ID a un número si es necesario
            },
        });

        return NextResponse.json({
            mensaje: 'Turno seleccionado eliminado',
            turnoEliminado: turnoEliminado,
        });
    } catch (error) {
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}
