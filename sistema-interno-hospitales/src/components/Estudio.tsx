"use client";

import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import { IEstudio } from "@/types/estudio";
import { editarEstudio, eliminarEstudio } from "@/app/estudio/estudio";


interface EstudioProps {
    estudio: IEstudio
}

const Estudio: React.FC<EstudioProps> = ({ estudio }) => {
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
    const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);

    const [tipoEstudioToEdit, setTipoEstudioToEdit] = useState<string>(estudio.tipoEstudio);
    const [resultadoToEdit, setResultadoToEdit] = useState<string | null>(estudio.resultado)
    const router = useRouter();

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {

    };

    const handleTipoEstudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoEstudioToEdit(event.target.value);
    };

    const handleResultadosChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setResultadoToEdit(event.target.value);
    };

    const editEstudio = async () => {
        const estudioEditar = {
            estudio: {
                idEstudio: estudio.idEstudio,
                tipoEstudio: tipoEstudioToEdit,
                resultado: resultadoToEdit === '' ? null : resultadoToEdit,
                examenesIdExamen: estudio.Examen?.idExamen,
                Examen: estudio.Examen
            }
        };

        await editarEstudio(estudioEditar.estudio);

        setOpenModalEdit(false);

        router.refresh();
    }

    const handleDeleteExamen = async (isEstudio: number) => {
        await eliminarEstudio(isEstudio);
        setOpenModalDelete(false);
        router.refresh();
    };

    return (
        <div className="p-4 border border-slate-300 my-3 flexk justify-between gap-5 items-start">
            <table className="w-full">
                <tbody>
                    <tr key={estudio.idEstudio}>
                        <td className="text-left whitespace-nowrap inline-block">{estudio.tipoEstudio}: </td>
                        <td className="text-left whitespace-nowrap inline-block">&nbsp;{estudio.resultado}</td>
                        <td className="text-right">
                            <div className="flex justify-end items-center gap-5">
                                <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className='text-blue-500' size={20} />
                                <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
                                    <form onSubmit={handleSubmit} className="text-left">
                                        <div className="space-y-1">
                                            <div>
                                                <label htmlFor="tipoEstudio">Tipo de Estudio: </label>
                                                <input
                                                    type="text"
                                                    placeholder="Tipo de estudio"
                                                    value={tipoEstudioToEdit}
                                                    onChange={handleTipoEstudioChange}
                                                    maxLength={50}
                                                />
                                            </div>
                                            <div className="w-full max-w-screen-md mx-auto">
                                                <textarea
                                                    style={{ width: '765px', height: '250px' }}
                                                    className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                                                    placeholder="Escribe las observaciones aquí..."
                                                    value={resultadoToEdit || ''}
                                                    onChange={handleResultadosChange}
                                                    rows={6}
                                                    maxLength={100}
                                                />
                                                <p className="mt-2 text-gray-500">
                                                    Caracteres: {resultadoToEdit?.length} / 50 <br /> Palabras: {resultadoToEdit?.length == 0 ? 0 : resultadoToEdit?.trim().split(/\s+/).length}
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                    <div>
                                        <Button className="w-full mt-6 " name="btnEditExamen" type="submit" onClick={() => editEstudio()}>
                                            Editar Estudio
                                        </Button>
                                    </div>
                                </Modal>

                                <FiTrash2 onClick={() => setOpenModalDelete(true)} cursor="pointer" className='text-red-500' size={20} />
                                <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
                                    <h3 className="text-lg">¿Estas seguro que desea eliminar a este estudio?</h3>
                                    <div className="modal-action flex justify-end">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="flex gap-5">
                                                        <Button className="w-full mt-6 bg-red-500" name="btnConfirmDeleteExamen" type="submit" onClick={() => handleDeleteExamen(estudio.idEstudio)}>
                                                            Si
                                                        </Button>
                                                        <Button className="w-full mt-6" name="btnCancelDeleteExamen" type="submit" onClick={() => setOpenModalDelete(false)}>
                                                            No
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Modal>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Estudio;