import { Aluguel } from "./Aluguel";
import { Cliente } from "./Cliente";

export class PessoaFisica extends Cliente {
    private _cpf: number
    
    constructor(cpf:number, nome:string, historicoAluguel:Aluguel[]){
        super(nome, historicoAluguel);
        this._cpf = cpf;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf:number){
        this._cpf = cpf;
    }

}