import { getAllturnos } from "./turnos";
// import AddTurno from "@/components/Addturnos";
// import ListTurno from "@/components/ListTurno";
import { obtenerUsuarioActual } from "../usuario/usuario";

export default async function CRUDturnos() {

    var turnos = await getAllturnos();
    const usuario = await obtenerUsuarioActual();

    return (
        <main className="max-w-4kx mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">turnos</h1>
            {/* <AddTurno/> */}
        </div>
        {/* <ListTurno turnos={turnos} usuario={usuario}/> */}
        </main>
	);
}