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
                            {/* <th>id</th> */}
                            <th className="w-max-content px-4 text-center">Apellido</th>
                            <th className="w-max-content px-4 text-center">Nombre</th>
                            <th className="w-max-content px-4 text-center">Tipo Documento</th>
                            <th className="w-max-content px-4 text-center">Documento</th>
                            <th className="w-max-content px-4 text-center">Dirección</th>
                            <th className="w-max-content px-4 text-center">Teléfono</th>
                            <th className="w-max-content px-4 text-center">Ocupación</th>
                            <th className="w-max-content px-4 text-center">Prepaga</th>
                            <th className="w-max-content px-4 text-center">Acciones</th>
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