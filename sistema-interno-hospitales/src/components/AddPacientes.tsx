"use client";
import React, { FormEventHandler, useState } from "react";
import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const AddPaciente = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newPacienteValue, setNewPacienteValue] = useState<string>('');

    const handlerSubmitNewPaciente: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        console.log(newPacienteValue);
        setNewPacienteValue("");
    }

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
            {/* <Form {...form}>
                    <form onSubmit={handlerSubmitNewPaciente}>
                        <h3 className="font-bold text-lg">
                            Agregar nuevo Paciente
                        </h3>
                        <div className="modal-action">
                            <input
                                value={newPacienteValue}
                                onChange={(e) => setNewPacienteValue(e.target.value)}
                                type="text"
                                placeholder="Apellido"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <Button className="btn" type="submit">
                            submin
                        </Button>
                    </form>
                </Form> */}
                <form onSubmit={handlerSubmitNewPaciente}>
                    <h3 className="font-bold text-lg">
                        Agregar nuevo Paciente
                    </h3>
                    <div className="modal-action">
                        <input 
                            value={newPacienteValue}
                            onChange={(e) => setNewPacienteValue(e.target.value)}
                            type="text"
                            placeholder="Apellido"
                            className="input input-bordered w-full" 
                        />
                    </div>

                    <Button className="btn" type="submit">
                        submin
                    </Button>
                </form>
            </Modal>

        </div >
    );
};

export default AddPaciente;