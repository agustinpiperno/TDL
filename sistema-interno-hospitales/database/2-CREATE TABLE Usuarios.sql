DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'Usuarios') THEN
        CREATE TABLE Usuarios (
            idUsuario SERIAL PRIMARY KEY,
            apellido VARCHAR(50) NOT NULL,
			nombre VARCHAR(50) NOT NULL,
            tipoDocumento VARCHAR(3) NOT NULL,
			documento INT NOT NULL,
			direccion VARCHAR(3),
			telefono VARCHAR(50),
            contrasena VARCHAR(255)
        );
    END IF;
END $$;