import { Persona } from './Persona';
import { Especialidad } from './Especialidad';
import { Grado } from './Grado';

export class Enfermero {
    Id: Number;
    Colegiatura: string;
    Universidad: string;
    Experiencia: string;
    personaId: Number;
    EspecialidadId: Number;
    GradoId: Number;
    Persona: Persona;
    Especialidad : Especialidad;
    Grado: Grado
}