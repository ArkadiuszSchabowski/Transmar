export interface Update<T extends object> {
  update(id: number, data: Partial<T>): Promise<T>;
}