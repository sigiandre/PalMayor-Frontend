import { Rol } from './Rol';

export class Usuario {
    Id: Number;
    Correo: string;
    RolId: Number;
    Rol: Rol;
}

export class UsuarioCreate {
    Correo: string;
    Contrasenya: string;
    RolId: Number;
}

