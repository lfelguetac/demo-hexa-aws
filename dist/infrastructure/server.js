"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const InMemoryRepository_1 = require("./adapters/InMemoryRepository");
const ItemApplicationService_1 = require("../application/services/ItemApplicationService");
const ItemController_1 = require("./controllers/ItemController");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const repository = new InMemoryRepository_1.InMemoryRepository();
const itemAppService = new ItemApplicationService_1.ItemApplicationService(repository);
const itemController = new ItemController_1.ItemController(itemAppService);
app.post('/items', (req, res) => itemController.createItem(req, res));
app.get('/items', (req, res) => itemController.getAllItems(req, res));
app.get('/items/:id', (req, res) => itemController.getItemById(req, res));
const PORT = process.env.PORT || 3000;
module.exports = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
