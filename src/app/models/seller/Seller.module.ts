import { Department } from "./Department.module";
import { SalesRecord } from "./SalesRecord.module";

export interface Seller {
    id: string;
    name: string;
    email: string;
    birthDate: string;
    baseSalary: number;
    departmentId: string;
    department: Department;
    create_at?: string;
    updated_at?: string;
    sales: SalesRecord[];
  }