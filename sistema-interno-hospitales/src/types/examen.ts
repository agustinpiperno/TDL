import { IUsuario } from "./usuario";

export interface IExamen {
  idExamen: number;
  idPaciente: number;
  idUsuario: number; // Esto hace referencia al ID del usuario
  tipoExamen: string;
  observaciones: string | null;
  fechaRealizacion: Date;
  usuario: IUsuario; // Relación con el modelo IUsuario
}