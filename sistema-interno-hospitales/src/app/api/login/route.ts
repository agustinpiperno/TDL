import {NextRequest, NextResponse} from "next/server"
import prisma from "../../../../prisma/client"

export const GET = async (req: NextRequest) => {
    const usuario = req.nextUrl.searchParams.get("usuario")
    const contraseña = req.nextUrl.searchParams.get("contraseña")

    try{
        const user = await prisma.usuarios.findFirst({
            where: {
                username: usuario,
                contrasena: contraseña,
            },
        });

        if (user) {
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