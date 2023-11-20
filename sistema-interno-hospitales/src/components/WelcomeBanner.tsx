const WelcomeBanner = () => {
    const nombreUsuario = "Usuario"
    return (
        <div className="bg-zinc-100 py-2 border-s-zinc-200 fixed w-full z-10 top-0">
            <div className="container flex items-center justify-between">
                Bienvenido `${nombreUsuario}`
            </div>
        </div>
    );
};
export default WelcomeBanner;
