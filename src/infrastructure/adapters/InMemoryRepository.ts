import { RepositoryPort } from '../../application/ports/RepositoryPort';

export class InMemoryRepository implements RepositoryPort {
	private items: Array<{ id: number, name: string }> = [];

	async getAllItems(): Promise<Array<{ id: number, name: string }>> {
		return this.items;
	}

	async getItemById(itemId: number): Promise<{ id: number, name: string } | null> {
		return this.items.find(item => item.id === itemId) || null;
	}

	async saveItem(item: { id: number, name: string }): Promise<void> {
		this.items.push(item);
	}
}