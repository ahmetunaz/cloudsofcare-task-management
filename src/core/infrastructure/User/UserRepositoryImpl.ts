import { User } from "../../entities/User/User";
import { UserRepository } from "../../entities/User/UserRepository";
import services from "../Services";

class UserDTO {
  id: number = 0;
  name: string = "";
  email: string = "";
  role: string = "";
}

export class UserRepositoryImpl implements UserRepository {
  async GetById(id: number): Promise<User> {
    const item: UserDTO = await services.api.getUser(id);
    return new User(item.id, item.name, item.email, item.role);
  }
  async GetAll(): Promise<User[]> {
    const items = await services.api.getUsers();
    return items.map(
      (item: UserDTO) => new User(item.id, item.name, item.email, item.role)
    );
  }
}
