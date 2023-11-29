import {IPaciente} from "../../types/pacientes";

const apiUrl = `http://localhost:3000/api/pacientes`;

export const getAllPacientes = async (): Promise<IPaciente[]> => {
    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store',
    });

    if(response.ok) {
        const data = await response.json();
        return data.pacientes
    }else {
        throw new Error('Error al querer obtener los pacientes');
    } 
};

export const insertarPaciente = async (infoPaciente: IPaciente) : Promise<IPaciente | void> => {

    const pacienteNuevo = {
        paciente:{
            apellido: infoPaciente.apellido,
            nombre: infoPaciente.nombre,
            tipoDocumento: infoPaciente.tipoDocumento,
            documento: Number(infoPaciente.documento),
            direccion: infoPaciente.direccion,
            telefono: infoPaciente.telefono,
            ocupacion: infoPaciente.ocupacion,
            idPrepaga: infoPaciente.idPrepaga
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pacienteNuevo)
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


export const editarPaciente = async (infoPaciente: IPaciente) : Promise<IPaciente | void> => {

    const pacienteEditar = {
        paciente:{
            idPaciente: infoPaciente.idPaciente,
            apellido: infoPaciente.apellido,
            nombre: infoPaciente.nombre,
            tipoDocumento: infoPaciente.tipoDocumento,
            documento: Number(infoPaciente.documento),
            direccion: infoPaciente.direccion,
            telefono: infoPaciente.telefono,
            ocupacion: infoPaciente.ocupacion,
            idPrepaga: infoPaciente.idPrepaga
        }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pacienteEditar)
        });
    
        if (response.ok) {
            const data = await response.json();
            return data.pacientes
        }else {
            throw new Error('Error al querer editar al paciente');
        } 
    } catch (error) {
        console.error('Error:', error);
    }   
};

export const eliminarPaciente = async (idPaciente: number) : Promise<void> => {
    try {
        const response = await fetch(`${apiUrl}?IdPaciente=${idPaciente}`, {
            method: 'DELETE',
        }); 
        
        if (!response.ok) {
            throw new Error('Error al querer eliminar al paciente');
        }
    } catch (error) {
        console.error('Error:', error);
    }  
};