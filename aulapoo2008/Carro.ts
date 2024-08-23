import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    private _tipo:string

    constructor(tipo:string,placa:string, cor:string, modelo:string, status:boolean){
        super(placa, cor, modelo, status)
        this._tipo = tipo;
    }

    get tipo(){
        return this._tipo;
    }
    set tipo(tipo:string){
        this._tipo = tipo;
    }
}