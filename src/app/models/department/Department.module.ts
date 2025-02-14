import { Seller } from "./Seller.module";

export interface Department {
    id: string;
    name: string;
    create_at?: string;
    updated_at?: string;
    sellers: Seller[];
  }