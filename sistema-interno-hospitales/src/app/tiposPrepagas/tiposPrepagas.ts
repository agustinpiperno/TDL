import { IPrepaga } from "@/types/prepaga";

const apiUrl = `http://localhost:3000/api/tiposPrepaga`;

export const getAllPrepagas = async (): Promise<IPrepaga[]> => {
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
        throw new Error('Error al querer obtener los pacientes');
    } 
};