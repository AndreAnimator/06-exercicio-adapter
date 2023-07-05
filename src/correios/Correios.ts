import ICorreiosTransport from "./ICorreiosTransport";

export default class Correios implements ICorreiosTransport{
    sendCorreios(): void {
        console.log("Enviando produto via correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo produto dos correios");
    }

}