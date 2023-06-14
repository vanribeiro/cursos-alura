import { registrarEventosCadastro } from "./registrarEventos/cadastro.js";
import { registrarEventosDocumento } from "./registrarEventos/documento.js";
import { registrarEventosInicio } from "./registrarEventos/inicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosInicio(socket, io);
});
