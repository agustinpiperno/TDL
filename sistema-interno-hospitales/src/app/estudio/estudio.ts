import { IEstudio } from "@/types/estudio";
import {IExamen} from "../../types/examen";

const apiUrl = `http://localhost:3000/api/estudio`;

export const insertarEstudio = async (infoEstudio: IEstudio) : Promise<IEstudio | void> => {

    const estudioNuevo = {
        estudio: {
            tipoEstudio: infoEstudio.tipoEstudio,
            resultado: infoEstudio.resultado,
            examenesIdExamen: infoEstudio.examenesIdExamen
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(estudioNuevo)
        });

        if(response.ok) {
            const data = await response.json();
            return data.pacientes
        }else {
            throw new Error('Error al querer ingresar al paciente');
        } 
    } catch (error) {
        console.error('Error:', error);
    }
};

export const editarEstudio = async (infoEstudio: IEstudio) : Promise<IEstudio | void> => {

    const estudioEditar = {
        estudio:{
            idEstudio: infoEstudio.idEstudio,
            tipoEstudio: infoEstudio.tipoEstudio,
            resultado: infoEstudio.resultado,
            Examen: infoEstudio.Examen
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(estudioEditar)
        });
    
        if (response.ok) {
            const data = await response.json();
            return data
        }else {
            throw new Error('Error al querer editar el estudio');
        } 
    } catch (error) {
        console.error('Error:', error);
    }   
};

export const eliminarEstudio = async (idEstudio: number) : Promise<void> => {
    try {
        const response = await fetch(`${apiUrl}?IdEstudio=${idEstudio}`, {
            method: 'DELETE',
        }); 
        
        if (!response.ok) {
            throw new Error('Error al querer eliminar el estudio');
        }
    } catch (error) {
        console.error('Error:', error);
    }  
};