"use client";
import { IExamen } from "@/types/examen";
import Examen from "./Examen";


interface ListExamenProps {
    examenes: IExamen[]
}

const ListPaciente: React.FC<ListExamenProps> = ({ examenes }) => {

    return (
        <>
            {examenes.map((examen) => <Examen key={examen.idExamen} examen={examen} />)}
        </>
    );
};

export default ListPaciente;