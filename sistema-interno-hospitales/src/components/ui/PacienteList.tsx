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
//                 <th>Action</th>
//         </tr> 
//         {list.map((paciente) => {
//             // console.log(paciente);
//             //console.log(paciente.apellido);
//             return (
//                 <tr key={paciente.idPaciente}>
//                     <td>{`${paciente.apellido}`}</td>
//                     <td>{`${paciente.nombre}`}</td>
//                         <td>
//                         <div>
//                             <input type="button" value="View"/>
//                             <input type="button" value="Edit"/>
//                             <input type="button" value="Delete"/>
//                         </div>
//                         </td>
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((paciente) => (
                        <tr key={paciente.idPaciente}>
                            <td>{`${paciente.apellido}`}</td>
                            <td>{`${paciente.nombre}`}</td>
                            <td>
                                <div>
                                    <input type="button" value="View" className="styledButton"/>
                                    <input type="button" value="Edit" className="styledButton"/>
                                    <input type="button" value="Delete" className="styledButton"/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default PacienteList;