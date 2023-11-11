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
    
    // const requestData = await req.json();
    // const credenciales = requestData.credenciales;

    // return NextResponse.json(
    //     {message: credenciales.usuario}, 
    //     {status: 200})

    // return NextResponse.json({
    //     credenciales: credenciales 
    // })

    const requestData = await req.json();
    const credenciales = requestData.credenciales;

    try{
        const usuario = await prisma.usuarios.findFirst({
            where: {
                username: credenciales.usuario,
                contrasena: credenciales.contraseña,
            },
        });

        if (usuario) {
            // El usuario existe en la base de datos
            return NextResponse.json({
                mensaje: 'Usuario autenticado correctamente',
                usuario: usuario,
            });
        } else {
            // El usuario no existe en la base de datos
            return NextResponse.json({
                mensaje: 'Credenciales incorrectas',
            });
        }
        
    }catch(error){
        return NextResponse.json({
            error: 'Error al procesar la solicitud',
        });
    }
}

export async function GET_USER(username: string, password: string) {
    const usuarios = await prisma.usuarios.findMany()
    console.log(usuarios)
    return NextResponse.json({
        message: 'getting usuario'
    }) 
}