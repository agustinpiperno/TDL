"use client"
import { Stethoscope } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from 'react';

const NavbarMainPage = () => {
    return (
    <div className="bg-zinc-100 py-2 border-s-zinc-200 w-full z-10 top-0">
        <div className="container flex items-center justify-start space-x-60 h-10">
                <Link href="/home">
                    <Stethoscope />
                </Link>
                <DropdownMenu >
                    <DropdownMenuTrigger className="focus:outline-none">Turnos</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <Link href="/administrarTurnos">
                            <DropdownMenuItem>Administrar Turnos</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">Pacientes</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <Link href="/administrarPacientes">
                            <DropdownMenuItem>Administrar Pacientes</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">Salas</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <Link href="/administrarSalas">
                            <DropdownMenuItem>Administrar Salas</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <Link href="/administrarCuenta">
                        <DropdownMenuTrigger>Mi Cuenta</DropdownMenuTrigger>
                    </Link>
                </DropdownMenu>
            </div>
        </div>
    );
};
export default NavbarMainPage;
