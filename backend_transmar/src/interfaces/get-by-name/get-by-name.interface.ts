export interface GetByName <T extends object> {
      getByName(name: string): Promise<T | null>;
}
