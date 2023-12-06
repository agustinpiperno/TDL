"use client";
import { IEstudio } from "@/types/estudio";
import Estudio from "./Estudio";


interface ListEstudioProps {
    estudios: IEstudio[] | null
}

const ListEstudio: React.FC<ListEstudioProps> = ({ estudios }) => {

    return (
        <>
            {estudios?.map((estudio) => <Estudio key={estudio.idEstudio} estudio={estudio} />)}
        </>
    );
};

export default ListEstudio;