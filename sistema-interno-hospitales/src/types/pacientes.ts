import { IExamen } from "./examen";
import { IPrepaga } from "./prepaga";

export interface IPaciente {
    idPaciente: number,
    apellido: string,
    nombre: string,
    tipoDocumento: string,
    documento: number,
    direccion: string | null,
    telefono: string | null,
    ocupacion: string | null,
    idPrepaga: string | null,
    Examenes: IExamen[] | null; // Relación inversa con Exámenes
    tipoPrepaga: IPrepaga | null;
};