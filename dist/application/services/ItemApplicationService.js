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
exports.ItemApplicationService = void 0;
const Item_1 = require("../../domain/entities/Item");
const ItemService_1 = require("../../domain/services/ItemService");
class ItemApplicationService {
    constructor(repository) {
        this.itemService = new ItemService_1.ItemService(repository);
    }
    createItem(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const newItem = new Item_1.Item(id, name);
            yield this.itemService.saveItem(newItem);
        });
    }
    getAllItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itemService.getAllItems();
        });
    }
    getItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itemService.getItemById(id);
        });
    }
}
exports.ItemApplicationService = ItemApplicationService;
