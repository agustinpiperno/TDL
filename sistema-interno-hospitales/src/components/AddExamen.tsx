"use client";
import React, { FormEventHandler, useState } from "react";
import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { IExamen } from "@/types/examen";
import { insertarExamen } from "@/app/examen/examen";
import { IUsuario } from "@/types/usuario";

interface IdsPacienteUsuario {
    IdPaciente: number,
    usuario: IUsuario
}

const AddExamen: React.FC<IdsPacienteUsuario> = ({ IdPaciente, usuario }) => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedTipoExamen, setSelectedTipoExamen] = useState('PERIO');
    const [observaciones, setObservaciones] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleTipoExamenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTipoExamen(event.target.value);
    };

    const handleObservacionesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setObservaciones(e.target.value);
    };

    const registrarExamen = async (values: IExamen) => {
        var respuesta = await insertarExamen(values);
    };

    const addExamen = async () => {

        const currentDate: Date = new Date();

        const exameneAlta = {
            examen: {
                idExamen: 0, //Automaticamente lo setea la base de datos
                idPaciente: IdPaciente,
                idUsuario: usuario.idUsuario,
                tipoExamen: selectedTipoExamen,
                observaciones: observaciones,
                fechaRealizacion: currentDate,
                usuario: usuario
            }
        };

        await registrarExamen(exameneAlta.examen);

        setSelectedTipoExamen("PERIO")
        setObservaciones("");
        setModalOpen(false);
        router.refresh();
    }

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {

    };

    return (
        <div>
            <Button className="w-full mt-6 " name="btnAddExamen" type="submit"
                onClick={() => setModalOpen(true)}>
                Agregar Examen
                <AiOutlinePlus className="ml-2" size={18} />
            </Button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmit} className="text-left">
                    <div className="space-y-1">
                        <div>
                            <label htmlFor="tipoExamen">Tipo de Examen: </label>
                            <select
                                value={selectedTipoExamen}
                                onChange={handleTipoExamenChange}>
                                <option value="PERIO">Periodico</option>
                                <option value="VISTA">Vista</option>
                            </select>
                        </div>

                        <div className="w-full max-w-screen-md mx-auto">

                            <textarea
                                style={{ width: '765px', height: '250px' }}
                                className="w-full p-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
                                placeholder="Escribe las observaciones aquí..."
                                value={observaciones}
                                onChange={handleObservacionesChange}
                                rows={6}
                                maxLength={200}
                            />
                            <p className="mt-2 text-gray-500">
                                Caracteres: {observaciones.length} / 200 <br /> Palabras: {observaciones.length == 0 ? 0 : observaciones.trim().split(/\s+/).length}
                            </p>
                        </div>
                    </div>
                </form>
                <div>
                    <Button className="w-full mt-6 " name="btnAddExamen" type="submit" onClick={() => addExamen()}>
                        Agregar Examen
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

export default AddExamen;