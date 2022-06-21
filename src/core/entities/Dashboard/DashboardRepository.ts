import { Dashboard } from "./Dashboard";

export interface DashboardRepository {
  GetAll(userId: number): Promise<Dashboard>;
}
