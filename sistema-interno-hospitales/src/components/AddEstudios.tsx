"use client";
import React, { FormEventHandler, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { IExamen } from "@/types/examen";
import { IEstudio } from "@/types/estudio";
import { insertarEstudio } from "@/app/estudio/estudio";

interface ExamenProps {
    examen: IExamen
}

const AddEstudio: React.FC<ExamenProps> = ({ examen }) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [tipoEstudioToAdd, setTipoEstudioToAdd] = useState<string>('');
    const [resultadoToAdd, setResultadoToAdd] = useState<string | null>('');

    const handleTipoEstudioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoEstudioToAdd(event.target.value);
    };

    const handleResultadosChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setResultadoToAdd(event.target.value);
    };

    const registrarEstudio = async (values: IEstudio) => {
        await insertarEstudio(values);
    };

    const addEstudio = async () => {
        const estudioAlta = {
            estudio: {
                idEstudio: 0,
                tipoEstudio: tipoEstudioToAdd,
                resultado: resultadoToAdd,
                examenesIdExamen: examen.idExamen,
                Examen: null
            }
        };

        await registrarEstudio(estudioAlta.estudio);

        setTipoEstudioToAdd("")
        setResultadoToAdd("");
        setModalOpen(false);
        router.refresh();
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {

    };

    return (
        <div>
            <div className="center tooltip-label tooltip-container font-medium" data-tooltip="Agregar estudio">
                <AiOutlinePlus onClick={() => setModalOpen(true)} cursor="pointer" className='text-green-800' size={25} />
            </div>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmit} className="text-left">
                    <div className="space-y-1">
                        <div>
                            <label htmlFor="tipoEstudio">Tipo de Estudio: </label>
                            <input
                                type="text"
                                placeholder="Tipo de estudio"
                                value={tipoEstudioToAdd}
                                onChange={handleTipoEstudioChange}
                                maxLength={50}
                            />
                        </div>
                        <div className="w-full max-w-screen-md mx-auto">
                            <textarea
                                style={{ width: '765px', height: '250px' }}
                                className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                                placeholder="Escribe las observaciones aquí..."
                                value={resultadoToAdd || ''}
                                onChange={handleResultadosChange}
                                rows={6}
                                maxLength={100}
                            />
                            <p className="mt-2 text-gray-500">
                                Caracteres: {resultadoToAdd?.length} / 50 <br /> Palabras: {resultadoToAdd?.length == 0 ? 0 : resultadoToAdd?.trim().split(/\s+/).length}
                            </p>
                        </div>
                    </div>
                </form>
                <div>
                    <Button className="w-full mt-6 " name="btnAddEstudio" type="submit" onClick={() => addEstudio()}>
                        Agregar Estudio
                        <AiOutlinePlus className="ml-2" size={18} />
                    </Button>

                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </Modal>

        </div >
    );
};

export default AddEstudio;