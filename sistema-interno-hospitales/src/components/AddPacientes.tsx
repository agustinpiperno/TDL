import React from "react";
import { Button } from "./ui/button";
import {AiOutlinePlus} from "react-icons/ai";

const AddPaciente = () => {
    return (
        <div>
            <Button className="w-full mt-6 " name="btnAddPacientes" type="submit">
                Agregar Paciente 
                <AiOutlinePlus className="ml-2" size={18}/>
            </Button>        
        </div>
    );
};

export default AddPaciente;