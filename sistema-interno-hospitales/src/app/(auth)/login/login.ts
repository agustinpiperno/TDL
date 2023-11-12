import { GET } from "@/app/api/usuarios/route";
import { NextRequest } from "next/server";


export const verificarUsuario = async (username: string, password: string) => {
    const credenciales = {
        credenciales:{
            usuario: username,
            contraseña: password
        }
    };

    console.log(JSON.stringify(credenciales))

    const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credenciales)
    });
    
    if (response.ok) {
        const data = await response.json();
        console.log('Mensaje POST ok con + ' + data.mensaje);
    } else {
        throw new Error('Error en la solicitud');
    }
};