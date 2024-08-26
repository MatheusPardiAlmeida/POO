import { Aluguel } from './Aluguel';

export class Locadora {

    private _historicoAlguel: Aluguel[]
    private _nome: string
    private _frotaVeiculos: number

    constructor(historicoAlguel: Aluguel[], nome: string, frotaVeiculos: number) {
        this._historicoAlguel = historicoAlguel
        this._nome = nome
        this._frotaVeiculos = frotaVeiculos
    }

    get nome() {
        return this._nome
    }
    set nome(nome: string) {
        this._nome = nome
    }

    get historicoAlguel() {
        return this._historicoAlguel
    }

    get frotaVeiculos() {     
        return this._frotaVeiculos
    }
    set frotaVeiculos(frotaVeiculos: number) {   
        this._frotaVeiculos = frotaVeiculos
    }


}