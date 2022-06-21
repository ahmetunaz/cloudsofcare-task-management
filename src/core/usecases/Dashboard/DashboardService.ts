import { Dashboard } from "../../entities/Dashboard/Dashboard";
import { DashboardRepository } from "../../entities/Dashboard/DashboardRepository";

export interface DashboardService {
  GetDashboardData(userId: number): Promise<Dashboard>;
}

export class DashboardServiceImpl implements DashboardService {
  dashboardRepo: DashboardRepository;

  constructor(dr: DashboardRepository) {
    this.dashboardRepo = dr;
  }

  async GetDashboardData(userId: number): Promise<Dashboard> {
    return this.dashboardRepo.GetAll(userId);
  }
}
