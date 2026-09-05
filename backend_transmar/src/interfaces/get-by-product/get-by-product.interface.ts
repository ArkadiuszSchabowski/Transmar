export interface GetByProduct<T extends object> {
      getByProduct(name: string): Promise<T[] | null>;
}
