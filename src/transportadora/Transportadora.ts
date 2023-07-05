import ITransportadoraTransport from "./ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{
    send(): void {
        console.log("Enviando via transportadora");
    }
    receive(): void {
        console.log("Recebendo via transportadora");
    }
    
}