"use client"

import { useRouter } from "next/navigation";

export default function index() {

	const router = useRouter()
	router.push("/home")

	return (
		<div className="h-screen flex flex-col justify-center items-center">
		</div>
	);
}
