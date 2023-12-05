import { IExamen } from "./examen";

export interface ITipoExamen {
    tipoExamen: string,
    descripcion: string,
    Examenes: IExamen[] | null;
};