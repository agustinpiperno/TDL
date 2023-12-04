"use client";

import NavbarMainPage from "@/components/NavbarMainPage"; // Adjust the path based on your project structure
import "@/styles/globals.css"; // Import your global styles here
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface UserResponse {
	usuario: string | null;
	error: AxiosError | null;
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			const { usuario, error } = await getUser();
			if (error) {
				router.push("/home");
			}
			setIsLoading(false);
		};
		fetchUser();
	}, [router]);

	if (isLoading) {
		return null; // Para que no renderize la pagina hasta que termine getUser
	}

	return (
		<div className="h-screen flex flex-col justify-center items-center bg-blue-950">
			<NavbarMainPage />
			<div className="bg-white p-10 rounded-md shadow-2xl">{children}</div>
		</div>
	);
}

async function getUser(): Promise<UserResponse> {
	try {
		const { data } = await axios.get("/api/auth");
		return {
			usuario: data,
			error: null,
		};
	} catch (e) {
		const error = e as AxiosError;
		return {
			usuario: null,
			error,
		};
	}
}
