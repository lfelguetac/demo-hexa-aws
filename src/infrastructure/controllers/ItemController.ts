import { Request, Response } from 'express';
import { ItemApplicationService } from '../../application/services/ItemApplicationService';

export class ItemController {
	private itemAppService: ItemApplicationService;

	constructor(itemAppService: ItemApplicationService) {
		this.itemAppService = itemAppService;
	}

	async createItem(req: Request, res: Response): Promise<void> {
		const { id, name } = req.body;
		await this.itemAppService.createItem(id, name);
		res.status(201).send({ message: 'Item created successfully' });
	}

	async getAllItems(req: Request, res: Response): Promise<void> {
		const items = await this.itemAppService.getAllItems();
		res.status(200).send(items);
	}

	async getItemById(req: Request, res: Response): Promise<void> {
		const { id } = req.params;
		const item = await this.itemAppService.getItemById(Number(id));
		if (item) {
			res.status(200).send(item);
		} else {
			res.status(404).send({ message: 'Item not found' });
		}
	}
}