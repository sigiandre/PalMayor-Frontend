import { Persona, PersonaCreate } from './Persona';
import { Familiar } from './Familiar';
import { AncianoABVC, AncianoABVCCreate } from './AncianoABVC';

export class Anciano {
    Id: Number;
    PersonaId: Number;
    Persona: Persona;
    FamiliarId: Number;
    Familiar: Familiar;
    AncianoABVCs: AncianoABVC[];
}

export class AncianoCreate {
    FamiliarId: Number;
    Persona: PersonaCreate;
    AncianoABVCs: AncianoABVCCreate[];
}