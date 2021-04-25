const { Router } = require('express');

const PrevencaoController = require('./controllers/PrevencaoController');
const UsuarioController = require('./controllers/UsuarioController');
const LocalizacaoController = require('./controllers/LocalizacaoController');
const ConsultaController = require('./controllers/ConsultaConstroller');
const AgendaController = require('./controllers/AgendaController');

const routes = Router();

routes.get('/prevencoes/:id', PrevencaoController.SelecionarPreven);
routes.get('/prevencoes', PrevencaoController.Selecionar);
routes.post('/prevencoes', PrevencaoController.Inserir);
routes.put('/prevencoes/:id', PrevencaoController.Update);
routes.delete('/prevencoes/:id', PrevencaoController.Delete);

routes.get('/usuario', UsuarioController.Login);
routes.get('/usuarios', UsuarioController.Selecionar);
routes.post('/usuarios', UsuarioController.Inserir);
routes.put('/usuarios/:id', UsuarioController.Update);
routes.delete('/usuarios/:id', UsuarioController.Delete);

routes.post('/locais', LocalizacaoController.Inserir);

module.exports = routes;