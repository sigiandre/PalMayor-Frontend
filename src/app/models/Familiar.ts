import { Persona, PersonaCreate } from './Persona';
import { Usuario } from './Usuario';
import { Anciano } from './Anciano';
export class Familiar {
    Id: Number;
    UsuarioId: Number;
    PersonaId: Number;
    Persona: Persona;
    Usuario: Usuario;
    Ancianos: Anciano[];
}

export class FamiliarCreate {
    UsuarioId: Number;
    Persona: PersonaCreate;
}