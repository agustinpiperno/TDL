export interface IPaciente {
    idPaciente: string;
    apellido: string;
    nombre: string;
    tipoDocumento: string;
    documento: number;
    direccion: string;
    telefono: string;
    ocupacion: string;
    idPrepaga: string;
}

export const dummyPacienteList : IPaciente[] = [
    {
        idPaciente: new Date().toJSON().toString(),
        apellido: "APELLIDO PRUEBA",
        nombre: "NOMBRE PRUEBA",
        tipoDocumento: "DNI",
        documento: 1,
        direccion: "DIRECCION PRUEBA",
        telefono: "TELEFONO PRUEBA",
        ocupacion: "OCUPACION PRUEBA",
        idPrepaga: "ID PREPAGA PRUEBA",
    },
]