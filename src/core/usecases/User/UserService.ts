import { User } from "../../entities/User/User";
import { UserRepository } from "../../entities/User/UserRepository";

export interface UserService {
  GetUser(id: number): Promise<User>;
  GetUsers(): Promise<User[]>;
}

export class UserServiceImpl implements UserService {
  userRepo: UserRepository;

  constructor(ur: UserRepository) {
    this.userRepo = ur;
  }

  async GetUser(id: number): Promise<User> {
    return this.userRepo.GetById(id);
  }

  async GetUsers(): Promise<User[]> {
    return this.userRepo.GetAll();
  }
}
