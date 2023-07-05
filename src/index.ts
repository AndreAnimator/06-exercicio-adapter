import ICorreiosTransport from "./correios/ICorreiosTransport"
import Correios from "./correios/Correios"
import ITransportadoraTransport from "./transportadora/ITransportadoraTransport"
import Transportadora from "./transportadora/Transportadora"
import TransportadoraAdapter from "./adapters/TransportadoraAdapter"

const transporte : ICorreiosTransport = new Correios();
transporte.sendCorreios();
transporte.receiveCorreios;

const transporte2 : ITransportadoraTransport = new Transportadora();
transporte2.send();
transporte2.receive();

const transporte3 : ICorreiosTransport = new TransportadoraAdapter(new Transportadora);
transporte3.sendCorreios();
transporte3.receiveCorreios();