export interface IPaciente {
    id: string,
    apellido: string,
    nombre: string,
    tipoDocumento: string,
    documento: number,
    direccion: string | null,
    telefono: string | null,
    ocupacion: string | null,
    idPrepaga: string | null,
};