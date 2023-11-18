import { IPaciente } from "./Paciente.type";

type Props = {
    list: IPaciente[]
}

// const PacienteList = (props: Props) =>{
//     const {list} = props;
//     return <div>ES UN PACIENTELIST PAGE

//     <table>
//         <tr>
//             <th>Apellido</th>
//             <th>Nombre</th>
//         </tr> 
//         {list.map((paciente) => {
//             // console.log(paciente);
//             //console.log(paciente.apellido);
//             return (
//                 <tr key={paciente.idPaciente}>
//                     <td>{`${paciente.apellido}`}</td>
//                     <td>{`${paciente.nombre}`}</td>
//                 </tr>
//             )
//         })}

//     </table>
//     </div>


// }

const PacienteList = (props: Props) => {
    const { list } = props;
    return (
        <div>
            ES UN PACIENTELIST PAGE
            <table>
                <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((paciente) => (
                        <tr key={paciente.idPaciente}>
                            <td>{`${paciente.apellido}`}</td>
                            <td>{`${paciente.nombre}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default PacienteList;