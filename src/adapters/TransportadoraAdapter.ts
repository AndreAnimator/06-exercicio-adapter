import Transportadora from "../transportadora/Transportadora"
import ICorreiosTransport from "../correios/ICorreiosTransport";

export default class TransportadoraAdapter implements ICorreiosTransport{
    constructor(private transportadora : Transportadora){
        console.log("Adaptando transportadora no correio");
    }
    sendCorreios(): void {
        return this.transportadora.send();
    }
    receiveCorreios(): void {
        return this.transportadora.receive();
    }
    
}