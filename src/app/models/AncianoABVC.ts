import { Anciano } from './Anciano';
import { ABVC } from './ABVC';

export class AncianoABVC {
    AncianoId: Number;
    ABVCId: Number;
    Anciano: Anciano;
    ABVC: ABVC;
}

export class AncianoABVCCreate {
    abvcId: Number;
}