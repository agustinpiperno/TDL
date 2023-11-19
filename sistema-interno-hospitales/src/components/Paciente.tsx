import { IPaciente } from "@/types/pacientes";

interface PacienteProps {
    paciente: IPaciente
}

const Paciente: React.FC<PacienteProps> = ({paciente}) => {
    return(
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
    )
};

export default Paciente;