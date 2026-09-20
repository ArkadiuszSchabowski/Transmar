export interface GetAll<T extends object> {
      getAll(): Promise<T[]>;
}
