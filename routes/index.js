const {Router} = require('express'); 

const controladores = require('../controllers'); 

const router = Router();

router.get('/', (req, res) => res.send("Bienvenido"));

router.post('/usuarios', controladores.createUser);
router.get('/usuarios', controladores.getAllUsers);

module.exports = router;