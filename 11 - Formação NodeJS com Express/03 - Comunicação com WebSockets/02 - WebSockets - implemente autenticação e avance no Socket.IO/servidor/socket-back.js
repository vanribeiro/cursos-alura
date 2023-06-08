import { registrarEventosDocumento } from "./registrarEventos/registrarEventosDocumento.js";
import { registrarEventosInicio } from "./registrarEventos/registrarEventosInicio.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  registrarEventosDocumento(socket, io);
  registrarEventosInicio(socket, io);

});
