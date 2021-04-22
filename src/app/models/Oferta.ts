import { Anciano } from './Anciano';
import { FechaAtencion, FechaAtencionCreate } from './FechaAtencion';

export class Oferta {
    Id: Number;
    Estado: boolean;
    Direccion: string;
    Descripcion: string;
    AncianoId: Number;
    Anciano: Anciano;
    FechaAtenciones: FechaAtencion[];
}

export class OfertaCreate {
    Direccion: string;
    Descripcion: string;
    AncianoId: Number;
    FechaAtenciones: FechaAtencionCreate[];
}
