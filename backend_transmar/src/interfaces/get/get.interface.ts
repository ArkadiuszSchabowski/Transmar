export interface Get<T extends object> {
  getById(id: number): Promise<T | null>;
  getAll(): Promise<T[]>;
}