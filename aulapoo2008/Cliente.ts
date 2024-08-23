import { Aluguel } from "./Aluguel"

export class Cliente {
    private _nome: string
    private _historicoAluguel: Aluguel[]

    constructor(nome:string, historicoAluguel:Aluguel[]) {
        this._nome = nome
        this._historicoAluguel = historicoAluguel
    }

    get nome(){
        return this._nome;
    }

    set nome(nome:string){
        this._nome = nome;
    }
    
    adicionarAluguel(aluguel:Aluguel){
        this._historicoAluguel.push(aluguel);
    }
    
}