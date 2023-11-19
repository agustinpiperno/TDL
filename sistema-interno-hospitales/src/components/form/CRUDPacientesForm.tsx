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


const CRUDPacientesForm = () => {
	return (
        <h1>HOLA</h1>
	);
};

export default CRUDPacientesForm;
