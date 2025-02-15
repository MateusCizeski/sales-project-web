import { Seller } from "../seller/Seller.module";

export enum SaleStatus {
    PENDING = 'PENDING',
    COMPLETED = 'COMPLETED',
    CANCELLED = 'CANCELLED',  
}

export interface SalesRecord {
    id: number;
    date: string; // Formato string (ISO 8601)
    amount: number;
    status: SaleStatus;
    sellerId: string;
    seller: Seller;
}