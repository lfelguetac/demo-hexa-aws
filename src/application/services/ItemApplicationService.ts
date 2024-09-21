import { RepositoryPort } from '../ports/RepositoryPort';
import { Item } from '../../domain/entities/Item';
import { ItemService } from '../../domain/services/ItemService';

export class ItemApplicationService {
    private itemService: ItemService;

    constructor(repository: RepositoryPort) {
        this.itemService = new ItemService(repository);
    }

    async createItem(id: number, name: string): Promise<void> {
        const newItem = new Item(id, name);
        await this.itemService.saveItem(newItem);
    }

    async getAllItems(): Promise<Item[]> {
        return await this.itemService.getAllItems();
    }

    async getItemById(id: number): Promise<Item | null> {
        return await this.itemService.getItemById(id);
    }
}