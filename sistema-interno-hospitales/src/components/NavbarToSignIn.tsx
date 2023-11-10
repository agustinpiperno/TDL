import { Stethoscope } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const NavbarToSignIn = () => {
	return (
		<div className="bg-zinc-100 py-2 border-s-zinc-200 fixed w-full z-10 top-0">
			<div className="container flex items-center justify-between">
				<Link href="/home">
					<Stethoscope />
				</Link>
				<Link className={buttonVariants()} href="/sign-in">
					Inicia sesión
				</Link>
			</div>
		</div>
	);
};
export default NavbarToSignIn;
