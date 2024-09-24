"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
class ItemController {
    constructor(itemAppService) {
        this.itemAppService = itemAppService;
    }
    createItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name } = req.body;
            yield this.itemAppService.createItem(id, name);
            res.status(201).send({ message: 'Item created successfully' });
        });
    }
    getAllItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.itemAppService.getAllItems();
            res.status(200).send(items);
        });
    }
    getItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const item = yield this.itemAppService.getItemById(Number(id));
            if (item) {
                res.status(200).send(item);
            }
            else {
                res.status(404).send({ message: 'Item not found' });
            }
        });
    }
}
exports.ItemController = ItemController;
