import express from 'express';
import bodyParser from 'body-parser';
import { InMemoryRepository } from './adapters/InMemoryRepository';
import { ItemApplicationService } from '../application/services/ItemApplicationService';
import { ItemController } from './controllers/ItemController';

const app = express();
app.use(bodyParser.json());

const repository = new InMemoryRepository();
const itemAppService = new ItemApplicationService(repository);
const itemController = new ItemController(itemAppService);

app.post('/items', (req, res) => itemController.createItem(req, res));
app.get('/items', (req, res) => itemController.getAllItems(req, res));
app.get('/items/:id', (req, res) => itemController.getItemById(req, res));

const PORT = process.env.PORT || 3000;
export=app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});