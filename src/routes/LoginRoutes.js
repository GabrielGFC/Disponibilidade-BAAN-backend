import express from 'express';
import loginController from '../controllers/LoginController.js';

const router = express.Router();


router.post('/usuarioLogin', UsuarioController.login, () => { /* #swagger.tags = ['Usuario'] */});
router.get('/login', loginController.logout, () => { /* #swagger.tags = ['Usuario'] */});

export default router;
