import { Aluguel } from "./Aluguel";
import { Cliente } from "./Cliente";

export class Empresa extends Cliente {
    private _cnpj: number
    
    constructor(cnpj:number, nome:string, historicoAluguel:Aluguel[]){
        super(nome, historicoAluguel);
        this._cnpj = cnpj;
    }

    get cnpj(){
        return this._cnpj;
    }

    set cnpj(cnpj:number){
        this._cnpj = cnpj;
    }

}