"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";

const AddPaciente = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div>
            <Button className="w-full mt-6 " name="btnAddPacientes" type="submit"
                onClick={() => setModalOpen(true)}>
                Agregar Paciente
                <AiOutlinePlus className="ml-2" size={18} />
            </Button>

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                modal for add paciente
            </Modal>

        </div>
    );
};

export default AddPaciente;