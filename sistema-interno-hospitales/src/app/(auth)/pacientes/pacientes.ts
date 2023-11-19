import {IPaciente} from "./../../../types/pacientes";


// const apiUrl = `http://localhost:3000/api/pacientes`;


export const getAllPacientes = async (): Promise<IPaciente[]> => {
    const apiUrl = `http://localhost:3000/api/pacientes`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data.pacientes
};