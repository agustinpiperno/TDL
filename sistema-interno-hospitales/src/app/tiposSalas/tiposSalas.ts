import { ISalas } from "@/types/salas";

const apiUrl = `http://localhost:3000/api/tiposSalas`;

export const getAllSalas = async (): Promise<ISalas[]> => {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store',
    });

    if(response.ok) {
        const data = await response.json();
        return data.tiposPrepagas;
    }else {
        throw new Error('Error al querer obtener las salas');
    } 
};