export interface Add<T extends object> {
  add(dto: T): Promise<void>;
}