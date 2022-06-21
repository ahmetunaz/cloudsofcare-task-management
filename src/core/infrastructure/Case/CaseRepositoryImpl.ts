import {
  CaseDTO,
  CreateCaseDTO,
  UpdateCaseDTO,
} from "core/entities/Case/CaseTypes";
import { Case } from "core/entities/Case/Case";
import { CaseRepository } from "core/entities/Case/CaseRepository";

import services from "../Services";
import { serializeDTO } from "helpers/utils";

export class CaseRepositoryImpl implements CaseRepository {
  async GetAll(): Promise<Case[]> {
    const items = await services.api.getCases();

    return items.map((item: CaseDTO) => new Case(item.id, item.name));
  }

  async GetById(id: number): Promise<Case> {
    const item = await services.api.getCase(id);

    return new Case(item.id, item.name);
  }

  async Create(data: CreateCaseDTO): Promise<Case> {
    const serializedData = serializeDTO(CreateCaseDTO, data);

    const item: CaseDTO = await services.api.createCase(serializedData);
    return new Case(item.id, item.name);
  }

  async Update(data: UpdateCaseDTO): Promise<Case> {
    const serializedData = serializeDTO(UpdateCaseDTO, data);

    const item: CaseDTO = await services.api.updateCase(serializedData);
    return new Case(item.id, item.name);
  }

  async Delete(id: number): Promise<number> {
    await services.api.deleteCase(id);

    return id;
  }
}
