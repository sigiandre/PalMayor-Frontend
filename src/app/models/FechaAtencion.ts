import { RangoHora } from './RangoHora';

export class FechaAtencion {
    Id: Number;
    Fecha: Date;
    RangoHoraId: Number;
    RangoHora: RangoHora;
}

export class FechaAtencionCreate {
    Fecha: Date;
    RangoHoraId: Number;
}