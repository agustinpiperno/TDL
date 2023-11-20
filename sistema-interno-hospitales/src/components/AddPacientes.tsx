"use client";
import React, { FormEventHandler, useState } from "react";
import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IPaciente } from "@/types/pacientes";
import { insertarPaciente } from "@/app/(auth)/pacientes/pacientes";
import { useRouter } from "next/navigation";

const AddPaciente = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newPacienteValue, setNewPacienteValue] = useState<string>('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [selectedTipoDocumento, setSelectedTipoDocumento] = useState('DNI');
    const [documentNumber, setDocumentNumber] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [idPrepaga, setIdPrepaga] = useState('');




    const handlerSubmitNewPaciente: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(newPacienteValue);
        setNewPacienteValue("");
    }


    const handleNombreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleApellidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setApellido(event.target.value);
    };

    const handleTipoDocumentoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTipoDocumento(event.target.value);
    };

    const handleDocumentNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputDocumentNumber = event.target.value;
        // Validar si el valor ingresado es solo números (usando expresión regular)
        if (/^\d*$/.test(inputDocumentNumber) || inputDocumentNumber === '') {
            setDocumentNumber(inputDocumentNumber);
        }
    };

    const handleDireccionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDireccion(event.target.value);
    };

    const handleTelefonoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelefono(event.target.value);
    };

    const handleOcupacionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOcupacion(event.target.value);
    };

    const handleIdPrepagaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIdPrepaga(event.target.value);
    };

    /*https://youtu.be/wi2xdrpmJNk */
    // const handleSubmit = () => {
    //     console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Doc: ${selectedTipoDocumento}, NumeroDoc: ${documentNumber}`);
    //     setNombre("");
    //     setModalOpen(false);
    // };

    const registrarPaciente = async (values: IPaciente) => {
		// var respuesta = await insertarUsuario(values);
		// if(respuesta === 'El email ingresado ya se encuentra en uso'){
		// 	setErrorMessage(respuesta);
		// }else{
		// 	setErrorMessage('');
		// }
        var respuesta = await insertarPaciente(values);
        // console.log(respuesta);
        // console.log(values);
	};

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Evitar la recarga de la página por defecto en el envío del formulario
        // console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Tipo de documento: ${selectedTipoDocumento}, Número de documento: ${documentNumber}, Teléfono: ${telefono}, Ocupación: ${ocupacion}, Prepaga: ${idPrepaga}`);

        const pacienteAlta = {
            paciente:{
                idPaciente: 0, //Automaticamente lo setea la base de datos
                apellido: apellido,
                nombre: nombre,
                tipoDocumento: selectedTipoDocumento,
                documento: Number(documentNumber),
                direccion: direccion,
                telefono: telefono,
                ocupacion: ocupacion,
                idPrepaga: idPrepaga
            }
        };

        await registrarPaciente(pacienteAlta.paciente);
        
        setApellido("");
        setNombre("");
        setApellido("");
        setSelectedTipoDocumento("DNI")
        setDocumentNumber("");
        setDireccion("");
        setTelefono("");
        setOcupacion("");
        setIdPrepaga("");
        setModalOpen(false);
        router.refresh();
    };

    // const FormSchema = z.object({
    //     email: z.string().min(1, "Se requiere un email").email("Email invalido"),
    //     password: z
    //         .string()
    //         .min(1, "Se requiere una contraseña")
    //         .min(8, "La contraseña debe tener al menos 8 caracteres"),
    // });

    // const form = useForm<z.infer<typeof FormSchema>>({
    //     resolver: zodResolver(FormSchema),
    // });

    // const onSubmit = (values: z.infer<typeof FormSchema>) => {
    //     console.log(values);
    // };

    return (
        <div>
            <Button className="w-full mt-6 " name="btnAddPacientes" type="submit"
                onClick={() => setModalOpen(true)}>
                Agregar Paciente
                <AiOutlinePlus className="ml-2" size={18} />
            </Button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>

                {/* <div>
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={handleApellidoChange}
                    />
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                    />
                    <select value={selectedTipoDocumento} onChange={handleTipoDocumentoChange}>
                        <option value="DNI">DNI</option>
                        <option value="PASS">Pasaporte</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Número de documento"
                        value={documentNumber}
                        onChange={handleDocumentNumberChange}
                        pattern="[0-9]*"
                    />
                    <button onClick={handleSubmit}>Imprimir en consola</button>
                </div> */}
                <form onSubmit={handleSubmit}>
                    <div className="space-y-1">
                        <div>
                            <label htmlFor="apellido">Apellido: </label>
                            <input
                                type="text"
                                placeholder="Apellido"
                                value={apellido}
                                onChange={handleApellidoChange}
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <label htmlFor="nombre">Nombre: </label>
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={handleNombreChange}
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <label htmlFor="tipoDocumento">Tipo de Documento: </label>
                            <select value={selectedTipoDocumento} onChange={handleTipoDocumentoChange}>
                                <option value="DNI">DNI</option>
                                <option value="PAS">Pasaporte</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="documento">Documento: </label>
                            <input
                                type="text"
                                placeholder="Número de documento"
                                value={documentNumber}
                                onChange={handleDocumentNumberChange}
                                pattern="[0-9]*"
                                maxLength={20}
                            />
                        </div>
                        <div>
                            <label htmlFor="direccion">Dirección: </label>
                            <input
                                type="text"
                                placeholder="Dirección"
                                value={direccion}
                                onChange={handleDireccionChange}
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono: </label>
                            <input
                                type="text"
                                placeholder="Teléfono"
                                value={telefono}
                                onChange={handleTelefonoChange}
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <label htmlFor="ocupacion">Ocupación: </label>
                            <input
                                type="text"
                                placeholder="Ocupación"
                                value={ocupacion}
                                onChange={handleOcupacionChange}
                                maxLength={50}
                            />
                        </div>
                        <div>
                            <label htmlFor="idPrepaga">Prepaga: </label>
                            <input
                                type="text"
                                placeholder="Prepaga"
                                value={idPrepaga}
                                onChange={handleIdPrepagaChange}
                                maxLength={5}
                            />
                        </div>
                        <div>
                            {/* <button type="submit">Imprimir en consola</button> */}
                            <Button className="w-full mt-6 " name="btnAddPacientes" type="submit">
                                Agregar Paciente
                                <AiOutlinePlus className="ml-2" size={18} />
                            </Button>
                        </div>
                    </div>
                </form>


            </Modal>

        </div >
    );
};

export default AddPaciente;