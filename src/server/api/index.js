import server from 'express';
import * as TestController from './controllers/test_controller';
import * as TroopController from './controllers/troop_controller';

const router = server.Router();

router.get('/testa', TestController.getTestA);
router.get('/addtroop', TroopController.addExperimentalData);
router.get('/showAllTroops', TroopController.showAllTroops);
router.get('/moveTroops', TroopController.moveTroops);
router.get('/fight', TroopController.fight);
router.post('/testa', TestController.saveTestA);

export default router;
