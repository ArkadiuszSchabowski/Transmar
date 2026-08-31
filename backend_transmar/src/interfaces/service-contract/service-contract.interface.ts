import { Add } from "../add/add.interface";
import { Get } from "../get/get.interface";
import { Update } from "../update/update.interface";
import { Remove } from "../remove/remove.interface";

export interface ServiceContract<TAddDto extends object, TGetDto extends object, TUpdateDto extends object>
  extends Add<TAddDto>, Get<TGetDto>, Update<TUpdateDto>, Remove {

}