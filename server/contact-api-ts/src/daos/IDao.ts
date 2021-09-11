export interface IDao<T> {
  get: () => Promise<T[]>;
  getByQuery: (query: any) => Promise<T[]>;
  
  getSingle: (_id: string) => Promise<T | null>;
  add: (product: T) => Promise<T>;
  update: (_id: string, product: T) => Promise<T>;
  delete: (_id: string) => Promise<void>;
}

