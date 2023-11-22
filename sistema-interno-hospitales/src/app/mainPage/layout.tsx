"use client"

import NavbarMainPage from "@/components/NavbarMainPage"; // Adjust the path based on your project structure
import "@/styles/globals.css"; // Import your global styles here
import { useEffect } from "react";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation"

interface UserResponse{
    usuario: string | null;
    error: AxiosError | null
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
const router = useRouter()

useEffect(() => {
    (async () => {
        const {usuario, error} = await getUser()
        if(error){
            router.push("/home")
            return
        }
    })
}, [router])
	return (
		 <div className="h-screen flex flex-col justify-center items-center bg-blue-950">
            <NavbarMainPage />
            <div className="flex-1 flex justify-center items-center">
                <div className="bg-white p-20 rounded-md shadow-2xl">{children}</div>
            </div>
        </div>
	);
}

async function getUser(): Promise<UserResponse>{
    console.log("aaaaa")
    try{
        const {data} = await axios.get("/api/auth")
        return {
            usuario: data,
            error: null,
        }
    }
    catch(e){
        const error = e as AxiosError
        return {
            usuario: null,
            error,
        }
    }
}