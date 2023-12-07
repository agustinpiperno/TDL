"use client";

import { ITurno } from "@/types/turnos";
import { FormEventHandler, use, useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Button } from "./ui/button";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editarTurno, eliminarTurno } from "@/app/turnos/turnos";
import { VscNotebook } from "react-icons/vsc";
import { string } from "zod";
import { ISalas } from "@/types/salas";
import { getAllSalas } from "@/app/tiposSalas/tiposSalas";

interface TurnoProps {
    turno: ITurno
}

const Turno: React.FC<TurnoProps> = ({ turno }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [pacienteToEdit, setPacienteToEdit] = useState<string>(turno.idPaciente.toString());
    // const [apellidoToEdit, setApellidoToEdit] = useState<string>(turno.apellido);
    // const [nombreToEdit, setNombreToEdit] = useState<string>(turno.nombre);
    // const [documentoToEdit, setDocumentoToEdit] = useState<string>(turno.documento.toString());
    const [fechaToEdit, setFechaToEdit] = useState<string>(turno.fechaTurno.toString());
    const [medicoToEdit, setMedicoToEdit] = useState<string>(turno.idMedico.toString());
    // const [apellidoToEdit, setApellidoToEdit] = useState<string>(turno.apellido);
    // const [nombreToEdit, setNombreToEdit] = useState<string>(turno.nombre);
    const [salaToEdit, setSalaToEdit] = useState<string>(turno.idSala.toString());
    const [salas, setSalas] = useState<ISalas[] | null>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const { push } = useRouter();

    const ocultarCartelError = () => {
        if (pacienteToEdit !== null && fechaToEdit !== null && medicoToEdit !== null && salaToEdit !== null) {
            setErrorMessage('');
        }
    }

    const handlePacienteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPacienteToEdit(event.target.value);
        ocultarCartelError();
    };

    const handleFechaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFechaToEdit(event.target.value);
        ocultarCartelError();
    };

    const handleMedicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMedicoToEdit(event.target.value);
        ocultarCartelError();
    };

    const handleSalaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSalaToEdit(event.target.value);
        ocultarCartelError();
    };

    // const handleDocumentNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const inputDocumentNumber = event.target.value;
    //     // Validar si el valor ingresado es solo números (usando expresión regular)
    //     if (/^\d*$/.test(inputDocumentNumber) || inputDocumentNumber === '') {
    //         setDocumentoToEdit(inputDocumentNumber);
    //     }
    //     ocultarCartelError();
    // };

    const formatearDatosTurnos = (datoTurno: string | null, textoNULL: string) => {
        return datoTurno === null ? <span className="cursiva gris">{textoNULL}</span> : datoTurno === '' ? <span className="cursiva gris">{textoNULL}</span> : datoTurno;
    }

    const editTurno = async () => {
        if (pacienteToEdit !== null && fechaToEdit !== null && medicoToEdit !== null && salaToEdit !== null) {
            setErrorMessage('Por favor, complete el apellido, nombre y documento del turno');
            return;
        } else {
            setErrorMessage('');
        }

        const turnoEditar = {
            turno: {
                idTurno: turno.idTurno,
                idPaciente: Number(pacienteToEdit),
                idMedico: Number(medicoToEdit),
                idSala: Number(salaToEdit),
                fechaTurno: new Date(fechaToEdit),
                idUsuario: turno.idUsuario,
            }
        };

        await editarTurno(turnoEditar.turno);

        setOpenModalEdit(false);

        router.refresh();
    }

    //POR EL MOMENTO LO DEJO COMENTADO
    const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (event) => {
        // event.preventDefault(); // Evitar la recarga de la página por defecto en el envío del formulario

        // const turnoEditar = {
        //     turno: {
        //         idTurno: turno.idTurno,
        //         apellido: apellidoToEdit,
        //         nombre: nombreToEdit,
        //         tipoDocumento: tipoDocumentoToEdit,
        //         documento: Number(documentoToEdit),
        //         direccion: direccionToEdit,
        //         telefono: telefonoToEdit,
        //         ocupacion: ocupacionToEdit,
        //         idPrepaga: idPrepagaToEdit
        //     }
        // };

        // await editarTurno(turnoEditar.turno);

        // setOpenModalEdit(false);

        // router.refresh();
    };

    const handleDeleteTurno = async (idTurno: number) => {
        await eliminarTurno(idTurno);
        setOpenModalDelete(false);
        router.refresh();
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await getAllPrepagas();
    //             setPrepagas(data);
    //         } catch (error) {
    //             console.error('Error al obtener las prepagas:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <tr key={turno.idTurno}>
            {/* <td>{turno.idTurno}</td> */}
            <td className="w-max-content px-4 text-center">{turno.idPaciente}</td>
            <td className="w-max-content px-4 text-center">{turno.fechaTurno.toString()}</td>
            <td className="w-max-content px-4 text-center">{turno.idMedico}</td>
            <td className="w-max-content px-4 text-center">{turno.idSala}</td>
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className='text-blue-500' size={25} />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEdit}>
                        <h3 className='font-bold text-lg text-center'> Editar Turno </h3>
                        <div className="space-y-1">
                            <div>
                                <label htmlFor="paciente">idPaciente: </label>
                                <input
                                    type="text"
                                    placeholder="idPaciente"
                                    value={pacienteToEdit}
                                    onChange={handlePacienteChange}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="fechaTurno">Fecha del Turno: </label>
                                <input
                                    type="text"
                                    placeholder="fechaTurno"
                                    value={fechaToEdit}
                                    onChange={handleFechaChange}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="medico">idMedico: </label>
                                <input
                                    type="text"
                                    placeholder="idMedico"
                                    value={medicoToEdit}
                                    onChange={handleMedicoChange}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="sala">Sala: </label>
                                <select
                                    value={salaToEdit}
                                    onChange={handleSalaChange}>
                                    {salas.map((salas: ISalas, index: number) => (
                                        <option key={index} value={salas.idSala}>
                                            {salas.idSala}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>
                    <div>
                        <Button className="w-full mt-6 " name="btnEditTurnos" type="submit" onClick={() => editTurno()}>
                            Editar Turno
                        </Button>
                    </div>
                </Modal>

                <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor="pointer" className='text-red-500' size={25} />
                <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                    <h3 className="text-lg">¿Estas seguro que desea eliminar a este turno?</h3>
                    <div className="modal-action flex justify-end">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="flex gap-5">
                                        <Button className="w-full mt-6 bg-red-500" name="btnConfirmDeleteTurno" type="submit" onClick={() => handleDeleteTurno(turno.idTurno)}>
                                            Si
                                        </Button>
                                        <Button className="w-full mt-6" name="btnCancelDeleteTurno" type="submit" onClick={() => setOpenModalDelete(false)}>
                                            No
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal>
            </td>
        </tr>
    )
};

export default Turno;