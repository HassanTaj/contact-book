export interface IProductDao<T> {
	get: () => Promise<T[]>;
	getOne: (_id: string) => Promise<T | null>;
	add: (product: T) => Promise<T>;
	update: (_id: string, product: T) => Promise<T>;
	delete: (_id: string) => Promise<void>;
}
