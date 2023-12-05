import { ITipoExamen } from "@/types/tiposExamenes";

const apiUrl = `http://localhost:3000/api/tiposExamen`;

export const getAllTiposExamenes = async (): Promise<ITipoExamen[]> => {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store',
    });

    if(response.ok) {
        const data = await response.json();
        return data.tiposExamenes;
    }else {
        throw new Error('Error al querer obtener los tipos de examenes');
    } 
};