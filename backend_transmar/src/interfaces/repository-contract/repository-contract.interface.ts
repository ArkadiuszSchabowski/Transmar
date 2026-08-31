import { Add } from "../add/add.interface";
import { Get } from "../get/get.interface";
import { Remove } from "../remove/remove.interface";
import { Update } from "../update/update.interface";

export interface RepositoryContract<TEntity extends object>
  extends Add<TEntity>, Get<TEntity>, Update<TEntity>, Remove {
}