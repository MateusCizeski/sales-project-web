import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SalesRecord } from '../models/SalesRecord.module';

@Injectable({
    providedIn: 'root',
})

export class SalesRecordService {
    private baseUrl = 'http://localhost:3000/sales'
    
    constructor(private http: HttpClient) { }

    getSalesRecords(): Observable<SalesRecord[]> {}
}