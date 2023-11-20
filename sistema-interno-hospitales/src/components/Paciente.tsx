"use client";

import { IPaciente } from "@/types/pacientes";
import { FormEventHandler, use, useState } from "react";
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Button } from "./ui/button";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { editarPaciente } from "@/app/(auth)/pacientes/pacientes";

interface PacienteProps {
    paciente: IPaciente
}

const Paciente: React.FC<PacienteProps> = ({ paciente }) => {
    const router = useRouter();
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [apellidoToEdit, setApellidoToEdit] = useState<string>(paciente.apellido);
    const [nombreToEdit, setNombreToEdit] = useState<string>(paciente.nombre);
    const [tipoDocumentoToEdit, setTipoDocumentoToEdit] = useState<string>(paciente.tipoDocumento);
    const [documentoToEdit, setDocumentoToEdit] = useState<string>(paciente.documento.toString());
    const [direccionToEdit, setDireccionToEdit] = useState<string | null>(paciente.direccion);
    const [telefonoToEdit, setTelefonoToEdit] = useState<string | null>(paciente.telefono);
    const [ocupacionToEdit, setOcupacionToEdit] = useState<string | null>(paciente.ocupacion);
    const [idPrepagaToEdit, setIdPrepagaToEdit] = useState<string | null>(paciente.idPrepaga);


    const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (event) => {
        // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault(); // Evitar la recarga de la página por defecto en el envío del formulario
            // console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Tipo de documento: ${selectedTipoDocumento}, Número de documento: ${documentNumber}, Teléfono: ${telefono}, Ocupación: ${ocupacion}, Prepaga: ${idPrepaga}`);
    
            const pacienteEditar = {
                paciente:{
                    idPaciente: paciente.idPaciente, 
                    apellido: apellidoToEdit,
                    nombre: nombreToEdit,
                    tipoDocumento: tipoDocumentoToEdit,
                    documento: Number(documentoToEdit),
                    direccion: direccionToEdit,
                    telefono: telefonoToEdit,
                    ocupacion: ocupacionToEdit,
                    idPrepaga: idPrepagaToEdit
                }
            };
    
            await editarPaciente(pacienteEditar.paciente);
            
            console.log(pacienteEditar);

            // setApellidoToEdit("");
            // setNombreToEdit("");
            // setTipoDocumentoToEdit("DNI")
            // setDocumentoToEdit("");
            // setDireccionToEdit("");
            // setTelefonoToEdit("");
            // setOcupacionToEdit("");
            // setIdPrepagaToEdit("");
            setOpenModalEdit(false);
            router.refresh();
        };

    return (
        <tr key={paciente.idPaciente}>
            <td>{paciente.idPaciente}</td>
            <td className="w-full">{paciente.apellido}</td>
            <td className="w-full">{paciente.nombre}</td>
            <td className="w-full">{paciente.tipoDocumento}</td>
            <td className="w-full">{paciente.documento}</td>
            <td className="w-full">{paciente.direccion}</td>
            <td className="w-full">{paciente.telefono}</td>
            <td className="w-full">{paciente.ocupacion}</td>
            <td className="w-full">{paciente.idPrepaga}</td>
            <td className="flex gap-5">
                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className='text-blue-500' size={25} />
                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                    <form onSubmit={handleSubmitEdit}>
                        <h3 className='font-bold text-lg text-center'> Editar Paciente </h3>
                        <div className="space-y-1">
                            <div>
                                <label htmlFor="apellido">Apellido: </label>
                                <input
                                    type="text"
                                    placeholder="Apellido"
                                    value={apellidoToEdit}
                                    onChange={(e) => setApellidoToEdit(e.target.value)}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="nombre">Nombre: </label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    value={nombreToEdit}
                                    onChange={(e) => setNombreToEdit(e.target.value)}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="tipoDocumento">Tipo de Documento: </label>
                                <select
                                    value={tipoDocumentoToEdit}
                                    onChange={(e) => setTipoDocumentoToEdit(e.target.value)}>
                                    <option value="DNI">DNI</option>
                                    <option value="PAS">Pasaporte</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="documento">Documento: </label>
                                <input
                                    type="text"
                                    placeholder="Número de documento"
                                    value={documentoToEdit}
                                    onChange={(e) => setDocumentoToEdit(e.target.value)}
                                    pattern="[0-9]*"
                                    maxLength={20}
                                />
                            </div>
                            <div>
                                <label htmlFor="direccion">Dirección: </label>
                                <input
                                    type="text"
                                    placeholder="Dirección"
                                    value={direccionToEdit || ''}
                                    onChange={(e) => setDireccionToEdit(e.target.value)}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="telefono">Teléfono: </label>
                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    value={telefonoToEdit || ''}
                                    onChange={(e) => setTelefonoToEdit(e.target.value)}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="ocupacion">Ocupación: </label>
                                <input
                                    type="text"
                                    placeholder="Ocupación"
                                    value={ocupacionToEdit || ''}
                                    onChange={(e) => setOcupacionToEdit(e.target.value)}
                                    maxLength={50}
                                />
                            </div>
                            <div>
                                <label htmlFor="idPrepaga">Prepaga: </label>
                                <input
                                    type="text"
                                    placeholder="Prepaga"
                                    value={idPrepagaToEdit || ''}
                                    onChange={(e) => setIdPrepagaToEdit(e.target.value)}
                                    maxLength={5}
                                />
                            </div>
                            <div>
                                {/* <button type="submit">Imprimir en consola</button> */}
                                <Button className="w-full mt-6 " name="btnAddPacientes" type="submit">
                                    Editar Paciente
                                    {/* <AiOutlinePlus className="ml-2" size={18} /> */}
                                </Button>
                            </div>
                        </div>
                    </form>


                </Modal>


                <FiTrash2 cursor="pointer" className='text-red-500' size={25} />
            </td>
        </tr>
    )
};

export default Paciente;