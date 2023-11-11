import { GET } from "@/app/api/usuarios/route";
import { NextRequest } from "next/server";


export const verificarUsuario = async (username: string, password: string) => {
    console.log(username)
    console.log(password)

    const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'GET',
        // Puedes agregar headers u otras configuraciones aquí
    });
    
    if (response.ok) {
        const data = await response.json();
        // Haz algo con los datos recibidos, por ejemplo:
        console.log(data);
    } else {
        // Manejo de errores si la respuesta no es exitosa
        throw new Error('Error en la solicitud');
    }
};