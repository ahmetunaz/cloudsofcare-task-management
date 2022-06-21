import { Case } from "./Case";
import { CreateCaseDTO, UpdateCaseDTO } from "./CaseTypes";

export interface CaseRepository {
  GetAll(): Promise<Case[]>;
  GetById(id: number): Promise<Case>;
  Create(data: CreateCaseDTO): Promise<Case>;
  Update(data: UpdateCaseDTO): Promise<Case>;
  Delete(id: number): Promise<number>;
}
