import { User } from "./User";

export interface UserRepository {
  GetAll(): Promise<User[]>;
  GetById(id: number): Promise<User>;
}
