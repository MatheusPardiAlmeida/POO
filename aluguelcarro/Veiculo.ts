export class Veiculo {
    private _placa:string;
    private _cor:string;
    private _modelo:string;
    private _status:boolean;

    constructor(placa:string, cor:string, modelo:string, status:boolean){
        this._placa = placa;
        this._cor = placa;
        this._modelo = modelo;
        this._status = status;
    }

    get placa(){
        return this._placa;
    }
    set placa(placa:string){
        this._placa = placa;
    }

    get cor(){
        return this._cor;
    }
    set cor(cor:string){
        this._cor = cor;
    }

    get modelo(){
        return this._modelo;
    }
    set modelo(modelo:string){
        this._modelo = modelo;
    }

    get status(){
        return this._status;
    }
    set status(status:boolean){
        this._status = status;
    }
}