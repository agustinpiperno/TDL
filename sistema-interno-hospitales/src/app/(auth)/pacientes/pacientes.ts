import {IPaciente} from "./../../../types/pacientes";


// const apiUrl = `http://localhost:3000/api/pacientes`;


export const getAllPacientes = async (): Promise<IPaciente[]> => {
    const apiUrl = `http://localhost:3000/api/pacientes`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        cache: 'no-store',
    });
    const data = await response.json();
    return data.pacientes
};

export const insertarPaciente = async (infoPaciente: IPaciente) : Promise<IPaciente[]> => {

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
    console.log(JSON.stringify(pacienteNuevo))

    const response = await fetch('http://localhost:3000/api/pacientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pacienteNuevo)
    });

    const data = await response.json();
    return data.pacientes

    // try{
    //     const response = await fetch('http://localhost:3000/api/pacientes', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(pacienteNuevo)
    //     });
        
    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('Mensaje POST ok con + ' + data.mensaje);
    //         return data.mensaje
    //     } else {
    //         throw new Error('Error en la solicitud');
    //     } 
    // }catch (error) {
    //     console.error('Error al obtener los datos:', error);
    // }
    
    
};


export const editarPaciente = async (infoPaciente: IPaciente) : Promise<IPaciente> => {

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

    console.log(JSON.stringify(pacienteEditar))

    const response = await fetch('http://localhost:3000/api/pacientes', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pacienteEditar)
    });

    const data = await response.json();
    return data.pacientes

    // console.log(JSON.stringify(pacienteEditar))

    // const response = await fetch(`http://localhost:3000/api/pacientes/${infoPaciente.idPaciente}`, {
    //     method: 'PUT',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(pacienteEditar)
    // });

    // const data = await response.json();
    // return data.pacientes    
};