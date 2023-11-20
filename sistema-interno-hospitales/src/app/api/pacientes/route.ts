import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"
interface Params {
    idPaciente: number
}

export const GET = async (req: NextRequest) => {
    // return NextResponse.json(
    //     {message: "obteniendo usuarios"}, 
    //     {status: 200})
    // const pacientes = await prisma.pacientes.findMany()
    const pacientes = await prisma.pacientes.findMany({
        orderBy: {
          idPaciente: 'asc',
        },
      });
    return NextResponse.json({
        pacientes
    }) 
}

export const POST = async (req: NextRequest) => {
    const requestData = await req.json();
    const paciente = requestData.paciente;

    try{
          const user = await prisma.pacientes.create({
            data: {
                apellido: paciente.apellido,
                nombre: paciente.nombre,
                tipoDocumento: paciente.tipoDocumento,
                documento : paciente.documento,
                direccion: paciente.direccion,
                telefono: paciente.telefono,
                ocupacion: paciente.ocupacion,
                idPrepaga: paciente.idPrepaga,
            },
          })
        
          console.log(user);
          return NextResponse.json({
            mensaje: 'Usuario autenticado correctamente',
            usuario: user,
        });
    }catch(error){
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export const PUT = async (req: NextRequest) => {
    const requestData = await req.json();
    const paciente = requestData.paciente;
    console.log(paciente)
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

    // try{
    //     const updatedPaciente = await prisma.pacientes.update({
    //         where: {
    //           idPaciente: paciente.idPaciente,
    //         },
    //         data: {
    //           apellido: paciente.apellido,
    //           nombre: paciente.nombre,
    //           tipoDocumento: paciente.tipoDocumento,
    //           documento: paciente.documento,
    //           direccion: paciente.direccion,
    //           telefono: paciente.telefono,
    //           ocupacion: paciente.ocupacion,
    //           idPrepaga: paciente.idPrepaga,
    //         },
    //       });
        
    //       console.log(updatedPaciente);
    //       return NextResponse.json({
    //         mensaje: 'Usuario autenticado correctamente',
    //         usuario: updatedPaciente,
    //     });
    // }catch(error){
    //     return NextResponse.json({
    //         error: 'Error al procesar la solicitud',
    //     });
    // }


    return NextResponse.json({
      mensaje: 'Usuario autenticado correctamente',
  });
}
