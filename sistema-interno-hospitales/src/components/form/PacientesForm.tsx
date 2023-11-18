"use client";
import { useState } from "react";
import { IPaciente, dummyPacienteList } from "../ui/Paciente.type";
import PacienteList from "../ui/PacienteList";

const PacientesForm = () => {
    // return <div>HOLA</div>
    const [pacienteList, setPacienteList] = useState(
        dummyPacienteList as IPaciente[]
    );
    
    return (
        <>
        <article className="article-header">
            <header>
                <h1>HOLA</h1>
            </header>
        </article>

        <section className="section-content">
            <div>
                conteniddo
                <PacienteList list={pacienteList}/>
            </div>
        </section>   
        </>
    );
};

export default PacientesForm;