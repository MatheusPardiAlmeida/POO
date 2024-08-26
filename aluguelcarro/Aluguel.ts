import { Cliente } from "./Cliente"
import { Veiculo } from "./Veiculo"

export class Aluguel {
    private _locador: Cliente[];
    private _veiculo: Veiculo[];
    private _qtdDiarias: number;
    private _valorTotal:number;
    private _statusAluguel: boolean;

    constructor(locador: Cliente[], veiculo: Veiculo[], qtdDiarias:number, valorTotal:number, statusAluguel:boolean) {
        this._locador = locador;
        this._veiculo = veiculo;
        this._qtdDiarias = qtdDiarias;
        this._valorTotal = valorTotal;
        this._statusAluguel = statusAluguel;
        
    }

    get locador(){
        return this._locador;
    }

    get veiculo(){
        return this._veiculo;
    }

    get qtdDiarias(){
        return this._qtdDiarias;
    }
    set qtdDiarias(qtdDiarias:number){
        this._qtdDiarias = qtdDiarias;
    }

    get valorTotal(){
        return this._valorTotal;
    }
    set valorTotal(valorTotal:number){
        this._valorTotal = valorTotal;
    }

    get statusAluguel(){
        return this._statusAluguel;
    }
    set statusAluguel(statusAluguel:boolean){
        this._statusAluguel = statusAluguel;
    }

    encerrarAluguel(){
        this._statusAluguel = false
    }

    prorrogarDiarias(dias: number){
        this._qtdDiarias += dias;
    }
}