import 'dotenv/config';
import { registrarEventosCadastro } from './registrarEventos/cadastro.js';
import { registrarEventosDocumento } from './registrarEventos/documento.js';
import { registrarEventosInicio } from './registrarEventos/inicio.js';
import { registrarEventosLogin } from './registrarEventos/login.js';
import io from './servidor.js';
import { autorizarUsuario } from './middlewares/autorizarUsuario.js';

// nsp = namespace

const nspUsuarios = io.of('/usuarios');

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on('connection', (socket) => {
  registrarEventosDocumento(socket, nspUsuarios);
  registrarEventosInicio(socket, nspUsuarios);
});

io.of('/').on('connection', (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
