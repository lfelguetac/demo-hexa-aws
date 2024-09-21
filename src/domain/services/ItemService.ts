import { RepositoryPort } from '../../application/ports/RepositoryPort';
import { Item } from '../entities/Item';

export class ItemService {
	constructor(private repository: RepositoryPort) {}

	async getAllItems(): Promise<Item[]> {
		const items = await this.repository.getAllItems();
		return items.map(item => new Item(item.id, item.name));
	}

	async getItemById(itemId: number): Promise<Item | null> {
		const item = await this.repository.getItemById(itemId);
		return item ? new Item(item.id, item.name) : null;
	}

	async saveItem(item: Item): Promise<void> {
		await this.repository.saveItem({ id: item.id, name: item.name });
	}
}