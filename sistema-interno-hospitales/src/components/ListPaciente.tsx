"use client";
import { IPaciente } from "@/types/pacientes";
import React, { useState } from "react";
import Paciente from "./Paciente";
import { MdOutlineCleaningServices } from "react-icons/md";

interface ListPacienteProps {
    pacientes: IPaciente[]
}

const ListPaciente: React.FC<ListPacienteProps> = ({ pacientes }) => {
    const [apellidoFilter, setApellidoFilter] = useState<string>("");
    const [nombreFilter, setNombreFilter] = useState<string>("");
    const [tipoDocumentoFilter, setTipoDocumentoFilter] = useState<string>("");
    const [documentoFilter, setDocumentoFilter] = useState<string>("");
    const [direccionFilter, setDireccionFilter] = useState<string | null>("");
    const [direccionNullFilter, setDireccionNullFilter] = useState<boolean>(false);
    const [telefonoFilter, setTelefonoFilter] = useState<string | null>("");
    const [telefonoNullFilter, setTelefonoNullFilter] = useState<boolean>(false);
    const [ocupacionFilter, setOcupacionFilter] = useState<string | null>("");
    const [ocupacionNullFilter, setOcupacionNullFilter] = useState<boolean>(false);
    const [prepagaFilter, setPrepagaFilter] = useState<string | null>("");
    const [prepagaNullFilter, setPrepagaNullFilter] = useState<boolean>(false);

    // Lista de todos pacientes que recibimos de la base de datos
    const pacientesFromDatabase: IPaciente[] = pacientes;

    // Filtro para los pacientes
    const filteredPacientes = pacientesFromDatabase.filter(paciente => {
        const apellidoFiltro = paciente.apellido.includes(apellidoFilter);
        const nombreFiltro = paciente.nombre.includes(nombreFilter);
        const tipoDocumentoFiltro = paciente.tipoDocumento.includes(tipoDocumentoFilter);
        const documentoFiltro = paciente.documento.toString().includes(documentoFilter);

        // Filtro de dirección
        var direccionFiltro = !direccionFilter ? true : paciente.direccion?.includes(direccionFilter as string); //Si direccionFilter es undefined ponemos True para que incluya a todos + null
        var direccionNullFiltro;
        if (direccionNullFilter) {
            if (!direccionFilter) {
                direccionFiltro = false; // Lo que hacemos es que si tenemos check checkboxDireccion = true y no estamos filtrando en el campo de dirección solo muestra los dirección = null, pero si tenemos el checkboxDireccion = true y estamos filtrando en el campo de dirección agrega los direccion = null junto con los filtrados
            }
            direccionNullFiltro = paciente.direccion === '';
        }

        //Filtro de teléfono
        var telefonoFiltro = !telefonoFilter ? true : paciente.telefono?.includes(telefonoFilter as string); //Si telefonoFilter es undefined ponemos True para que incluya a todos + null
        var telefonoNullFiltro;
        if (telefonoNullFilter) {
            if (!telefonoFilter) {
                telefonoFiltro = false; // Lo que hacemos es que si tenemos check checkboxTelefono = true y no estamos filtrando en el campo de teléfono solo muestra los teléfonos = null, pero si tenemos el checkboxTeléfono = true y estamos filtrando en el campo de teléfono agrega los teléfono = null junto con los filtrados
            }
            telefonoNullFiltro = paciente.telefono === '';
        }

        //Filtro de Ocupación
        var ocupacionFiltro = !ocupacionFilter ? true : paciente.ocupacion?.includes(ocupacionFilter as string); //Si ocupacionFilter es undefined ponemos True para que incluya a todos + null
        var ocupacionNullFiltro;
        if (ocupacionNullFilter) {
            if (!ocupacionFilter) {
                ocupacionFiltro = false; // Lo que hacemos es que si tenemos check checkboxOcupacion = true y no estamos filtrando en el campo de ocupación solo muestra los ocupación = null, pero si tenemos el checkboxOcupación = true y estamos filtrando en el campo de ocupación agrega los ocupación = null junto con los filtrados
            }
            ocupacionNullFiltro = paciente.ocupacion === '';
        }

        //Filtro de Prepaga
        var prepagaFiltro = !prepagaFilter ? true : paciente.idPrepaga?.includes(prepagaFilter as string); //Si prepagaFilter es undefined ponemos True para que incluya a todos + null
        var prepagaNullFiltro;
        if (prepagaNullFilter) {
            if (!prepagaFilter) {
                prepagaFiltro = false; // Lo que hacemos es que si tenemos check checkboxPrepaga= true y no estamos filtrando en el campo de prepaga solo muestra los prepaga = null, pero si tenemos el checkboxPrepaga = true y estamos filtrando en el campo de prepaga agrega los prepaga = null junto con los filtrados
            }
            prepagaNullFiltro = paciente.idPrepaga === '';
        }

        return apellidoFiltro && nombreFiltro && tipoDocumentoFiltro && documentoFiltro && (direccionFiltro || direccionNullFiltro) && (telefonoFiltro || telefonoNullFiltro) && (ocupacionFiltro || ocupacionNullFiltro) && (prepagaFiltro || prepagaNullFiltro);
    });

    const limpiarFiltros = () => {
        setApellidoFilter('');
        setNombreFilter('');
        setTipoDocumentoFilter('');
        setDocumentoFilter('');
        setDireccionFilter('');
        setDireccionNullFilter(false);
        setTelefonoFilter('');
        setTelefonoNullFilter(false);
        setOcupacionFilter('');
        setOcupacionNullFilter(false);
        setPrepagaFilter('');
        setPrepagaNullFilter(false);
    }

    return (
        <div>
            <div className="overflow-x-auto py-4">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th>id</th> */}
                            <th className="w-max-content px-4 text-center">Apellido</th>
                            <th className="w-max-content px-4 text-center">Nombre</th>
                            <th className="w-max-content px-4 text-center">Tipo Documento</th>
                            <th className="w-max-content px-4 text-center">Documento</th>
                            <th className="w-max-content px-4 text-center">Dirección</th>
                            <th className="w-max-content px-4 text-center">Teléfono</th>
                            <th className="w-max-content px-4 text-center">Ocupación</th>
                            <th className="w-max-content px-4 text-center">Prepaga</th>
                            <th className="w-max-content px-4 text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={apellidoFilter}
                                        onChange={(e) => setApellidoFilter(e.target.value)}
                                        placeholder="Filtrar por apellido">
                                    </input>
                                </div>
                            </td>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={nombreFilter}
                                        onChange={(e) => setNombreFilter(e.target.value)}
                                        placeholder="Filtrar por nombre">
                                    </input>
                                </div>
                            </td>
                            <td>
                                <select
                                    value={tipoDocumentoFilter}
                                    onChange={(e) => setTipoDocumentoFilter(e.target.value)}
                                    className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <option value="">No aplica filtro</option>
                                    <option value="DNI">DNI</option>
                                    <option value="PAS">Pasaporte</option>
                                </select>
                            </td>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={documentoFilter}
                                        onChange={(e) => setDocumentoFilter(e.target.value)}
                                        placeholder="Filtrar por documento">
                                    </input>
                                </div>
                            </td>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={direccionFilter || ''}
                                        onChange={(e) => setDireccionFilter(e.target.value || null)}
                                        placeholder="Filtrar por dirección">
                                    </input>
                                    <label htmlFor="checkbox" className="tooltip-label tooltip-container" data-tooltip="Incluir sin dirección">
                                        <input
                                            type="checkbox"
                                            id="checkboxDireccion"
                                            checked={direccionNullFilter}
                                            onChange={(e) => setDireccionNullFilter(e.target.checked)}
                                        />
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={telefonoFilter || ''}
                                        onChange={(e) => setTelefonoFilter(e.target.value || null)}
                                        placeholder="Filtrar por teléfono">
                                    </input>
                                    <label htmlFor="checkbox" className="tooltip-label tooltip-container" data-tooltip="Incluir sin teléfono">
                                        <input
                                            type="checkbox"
                                            id="checkboxTelefono"
                                            checked={telefonoNullFilter}
                                            onChange={(e) => setTelefonoNullFilter(e.target.checked)}
                                        />
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={ocupacionFilter || ''}
                                        onChange={(e) => setOcupacionFilter(e.target.value || null)}
                                        placeholder="Filtrar por ocupación">
                                    </input>
                                    <label htmlFor="checkbox" className="tooltip-label tooltip-container" data-tooltip="Incluir sin ocupación">
                                        <input
                                            type="checkbox"
                                            id="checkboxOcupacion"
                                            checked={ocupacionNullFilter}
                                            onChange={(e) => setOcupacionNullFilter(e.target.checked)}
                                        />
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="border border-gray-300 rounded-md px-2 py-1 text-sm font-medium text-gray-600">
                                    <input
                                        type="text"
                                        value={prepagaFilter || ''}
                                        onChange={(e) => setPrepagaFilter(e.target.value || null)}
                                        placeholder="Filtrar por prepaga">
                                    </input>
                                    <label htmlFor="checkbox" className="tooltip-label tooltip-container" data-tooltip="Incluir sin prepaga">
                                        <input
                                            type="checkbox"
                                            id="checkboxPrepaga"
                                            checked={prepagaNullFilter}
                                            onChange={(e) => setPrepagaNullFilter(e.target.checked)}
                                        />
                                    </label>
                                </div>
                            </td>
                            <td>
                                <div className="center tooltip-label tooltip-container font-medium" data-tooltip="Limpiar filtros">
                                    <MdOutlineCleaningServices onClick={() => limpiarFiltros()} cursor="pointer" className='text-gray-500' size={25}/>
                                </div>
                            </td>
                        </tr>
                        {filteredPacientes.map((paciente) => <Paciente key={paciente.idPaciente} paciente={paciente} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPaciente;