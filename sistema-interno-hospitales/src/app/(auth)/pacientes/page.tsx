import { getAllPacientes } from "./pacientes";
import AddPaciente from "@/components/AddPacientes";
import ListPaciente from "@/components/ListPaciente";

export default async function CRUDPacientes() {
    // // var pacientes = await getAllPacientes();
    // // console.log(pacientes)
    
    // return (
	// 	<div className="w-full">
    //         {/* <CRUDPacientesForm pacientes={pacientes} /> */}
    //         <CRUDPacientesForm />
	// 	</div>
	// );

    var pacientes = await getAllPacientes();
    console.log(pacientes)

    return (
        <main className="max-w-4kx mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Pacientes</h1>
            <AddPaciente/>
        </div>
        <ListPaciente pacientes={pacientes}/>
        </main>
	);
}