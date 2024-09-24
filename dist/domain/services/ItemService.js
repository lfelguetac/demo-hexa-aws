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
exports.ItemService = void 0;
const Item_1 = require("../entities/Item");
class ItemService {
    constructor(repository) {
        this.repository = repository;
    }
    getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.repository.getAllItems();
            return items.map(item => new Item_1.Item(item.id, item.name));
        });
    }
    getItemById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.repository.getItemById(itemId);
            return item ? new Item_1.Item(item.id, item.name) : null;
        });
    }
    saveItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.saveItem({ id: item.id, name: item.name });
        });
    }
}
exports.ItemService = ItemService;
