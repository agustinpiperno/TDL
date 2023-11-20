const WelcomeBanner = () => {
    
    const nombreUsuario = "Usuario"
    return (
        <div className="py-2 border-s-zinc-200 w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                Bienvenido {nombreUsuario}
            </div>
        </div>
    );
};
export default WelcomeBanner;
