import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seller } from '../models/seller/Seller.module';

@Injectable({
    providedIn: 'root',
})

export class SellerService {
    private baseUrl = 'http://localhost:3000/sellers';

    constructor(private http: HttpClient) { }

    getSellers(): Observable<Seller[]> {
        
    }
}