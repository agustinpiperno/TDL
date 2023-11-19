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
                            <th>Tipo Documento</th>
                            <th>Documento</th>
                            <th>Dirección</th>
                            <th>Teléfono</th>
                            <th>Ocupación</th>
                            <th>Prepaga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.map((paciente) => (
                            <tr key={paciente.idPaciente}>
                                <td>{paciente.idPaciente}</td>
                                <td>{paciente.apellido}</td>
                                <td>{paciente.nombre}</td>
                                <td>{paciente.tipoDocumento}</td>
                                <td>{paciente.documento}</td>
                                <td>{paciente.direccion}</td>
                                <td>{paciente.telefono}</td>
                                <td>{paciente.ocupacion}</td>
                                <td>{paciente.idPrepaga}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPaciente;