import { useState } from "react";
import { IPaciente } from "./Paciente.type";

type Props = {
    onBackBtnClickHnd: () => void;
    onsubmitClickHnd: (data: IPaciente) => void
};

const AddPaciente = (props: Props) => {

    const [apellido, setApellido] = useState("");
    const [nombre, setNombre] = useState("");

    const { onBackBtnClickHnd,  onsubmitClickHnd} = props;

    const onApellidoChangeHnd = (e: any) => {
        setApellido(e.target.value)
    };

    const onNombreChangeHnd = (e: any) => {
        setNombre(e.target.value)
    };

    const onsubmitBtnClickHnd = (e: any) =>{
        //ACA ESCRIBIR VALIDACIONES
        e.preventDefault();
        const data: IPaciente = {
            idPaciente: new Date().toJSON().toString(),
            apellido: apellido,
            nombre: nombre,
            tipoDocumento: "",
            documento: 0,
            direccion: "",
            telefono: "",
            ocupacion: "",
            idPrepaga: ""
        }

        onsubmitClickHnd(data);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Agregar Paciente</h3>
            </div>
            <form onSubmit={onsubmitBtnClickHnd}>
                <div>
                    <label>Apellido: </label>
                    <input type="text" value={apellido} onChange={onApellidoChangeHnd} />
                </div>
                <div>
                    <label>Nombre: </label>
                    <input type="text" value={nombre} onChange={onNombreChangeHnd}/>
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHnd} />
                    <input type="submit" value="Agregar Paciente" />
                </div>
            </form>
        </div>
    );
};

export default AddPaciente;