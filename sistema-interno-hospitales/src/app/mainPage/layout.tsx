import NavbarMainPage from "@/components/NavbarMainPage"; // Adjust the path based on your project structure
import "@/styles/globals.css"; // Import your global styles here

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		 <div className="h-screen flex flex-col justify-center items-center bg-blue-950">
            <NavbarMainPage />
            <div className="flex-1 flex justify-center items-center">
                <div className="bg-white p-20 rounded-md shadow-2xl">{children}</div>
            </div>
        </div>
	);
}
