import { Case } from "core/entities/Case/Case";
import { CaseRepository } from "core/entities/Case/CaseRepository";
import { CreateCaseDTO, UpdateCaseDTO } from "core/entities/Case/CaseTypes";

export interface CaseService {
  GetAll(): Promise<Case[]>;
  GetById(id: number): Promise<Case>;
  Create(data: CreateCaseDTO): Promise<Case>;
  Update(data: UpdateCaseDTO): Promise<Case>;
  Delete(id: number): Promise<Case>;
}

export class CaseServiceImpl implements CaseService {
  caseRepo: CaseRepository;

  constructor(cr: CaseRepository) {
    this.caseRepo = cr;
  }

  async GetAll(): Promise<Case[]> {
    return this.caseRepo.GetAll();
  }

  async GetById(id: number): Promise<Case> {
    return this.caseRepo.GetById(id);
  }

  async Create(data: CreateCaseDTO): Promise<Case> {
    return this.caseRepo.Create(data);
  }

  async Update(data: UpdateCaseDTO): Promise<Case> {
    return this.caseRepo.Update(data);
  }

  async Delete(id: number): Promise<Case> {
    return this.caseRepo.Delete(id);
  }
}
