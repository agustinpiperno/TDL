import { IPaciente } from "@/types/pacientes";
import React from "react";
import Paciente from "./Paciente";
interface ListPacienteProps {
    pacientes: IPaciente[]
}

const ListPaciente: React.FC<ListPacienteProps> = ({ pacientes }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Apellido</th>
                            <th>Nombre</th>
                            <th>Tipo Documento</th>
                            <th>Documento</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Ocupación</th>
                            <th>Prepaga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map((paciente) => <Paciente key={paciente.idPaciente} paciente={paciente}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPaciente;