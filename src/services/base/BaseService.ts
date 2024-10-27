import { type IService } from "./IService.ts";
import { type IRepository } from "../../repositories/base/IRepository.ts";

export class BaseService<T> implements IService<T> {
  private repository: IRepository<T>;

  constructor(repository: IRepository<T>) {
    this.repository = repository;
  }

  create(item: T): void {
    this.repository.create(item);
  }
  read(): IterableIterator<T> {
    return this.repository.read();
  }
  update(id: number, item: T): void {
    return this.repository.update(id, item);
  }
  delete(id: number): void {
    return this.repository.delete(id);
  }
}
