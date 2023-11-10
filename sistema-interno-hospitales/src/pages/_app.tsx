// pages/_app.tsx
import Navbar from "@/components/Navbar"; // Adjust the path based on your project structure
import "@/styles/globals.css"; // Import your global styles here
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<div className="h-screen flex flex-col justify-center items-center bg-blue-950">
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
};

export default App;
