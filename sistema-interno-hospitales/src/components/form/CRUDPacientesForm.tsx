"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { ComboBox } from "../ui/combo";
import { useState } from "react";
import { insertarUsuario } from "@/app/(auth)/registro/registro";
import AddPaciente from "../AddPacientes";
import ListPaciente from "../ListPaciente";


const CRUDPacientesForm = () => {
	return (
        <main className="max-w-4kx mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Pacientes</h1>
            <AddPaciente/>
        </div>
        <ListPaciente/>
        </main>
	);
};

export default CRUDPacientesForm;