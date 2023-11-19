import { IPaciente } from "@/types/pacientes";
import React from "react";
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
                            <th>Documento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map((paciente) => (
                            <tr key={paciente.id}>
                                <td>{paciente.apellido}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.documento}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPaciente;