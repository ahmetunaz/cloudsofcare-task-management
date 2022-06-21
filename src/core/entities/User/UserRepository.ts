import { User } from "./User";

export interface UserRepository {
  GetAll(limit: number, after: string): Promise<User[]>;
  GetById(id: number): Promise<User>;
}
