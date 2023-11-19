"use client";
import { useState } from "react";
import { IPaciente, PageEnum, dummyPacienteList } from "../ui/Paciente.type";
import PacienteList from "../ui/PacienteList";
import AddPaciente from "../ui/AddPaciente";

const PacientesForm = () => {
    // return <div>HOLA</div>
    const [pacienteList, setPacienteList] = useState(
        dummyPacienteList as IPaciente[]
    );
    
    const [shownPage, setShownPage] = useState(PageEnum.list);
    
    const onAddPacienteClickHnd = () => {
        setShownPage(PageEnum.add)
    };

    const showListPage = () =>{
        setShownPage(PageEnum.list)
    };

    const addPaciente = (data: IPaciente) =>{
        setPacienteList([...pacienteList, data])
    };

    return (
        <>
        <article className="article-header">
            <header>
                <h1>HOLA</h1>
            </header>
        </article>

        <section className="section-content">

            {shownPage === PageEnum.list && (
                <>
                    <input type="button" value="Agregar Paciente" className="styledButton" onClick={onAddPacienteClickHnd}/>
                    <PacienteList list={pacienteList}/>
                </>
            )}

            {shownPage === PageEnum.add && <AddPaciente onBackBtnClickHnd={showListPage} onsubmitClickHnd={addPaciente}/>}
        </section>   
        </>
    );
};

export default PacientesForm;