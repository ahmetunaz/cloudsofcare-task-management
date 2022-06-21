import { Dashboard } from "../../entities/Dashboard/Dashboard";
import { DashboardRepository } from "../../entities/Dashboard/DashboardRepository";
import services from "../Services";

export class DashboardRepositoryImpl implements DashboardRepository {
  async GetAll(userId: number): Promise<Dashboard> {
    const item = await services.api.getDashboardData(userId);
    return new Dashboard(
      item.userCurrentTasks,
      item.userAssignments,
      item.userTasks,
      item.taskPerCases,
      item.caseWithTask
    );
  }
}
