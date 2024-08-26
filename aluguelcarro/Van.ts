import { Veiculo } from "./Veiculo";

export class Van extends Veiculo{

    private _cargaKG:number

    constructor(cargaKG:number,placa:string, cor:string, modelo:string, status:boolean){
        super(placa, cor, modelo, status)
        this._cargaKG = cargaKG;
    }

    get cargaKG(){
        return this._cargaKG;
    }
    set cargaKG(cargaKG:number){
        this._cargaKG = cargaKG;
    }
    
}