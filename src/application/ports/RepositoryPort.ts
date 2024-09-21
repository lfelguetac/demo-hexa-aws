export interface RepositoryPort {
	getAllItems(): Promise<Array<{ id: number, name: string }>>;
	getItemById(itemId: number): Promise<{ id: number, name: string } | null>;
	saveItem(item: { id: number, name: string }): Promise<void>;
}