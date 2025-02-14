import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/Department.module';

@Injectable({
    providedIn: 'root',
})

export class DepartmentService {
    private baseUrl = 'http://localhost:3000/sales'
    
    constructor(private http: HttpClient) { }

    getSalesRecords(): Observable<Department[]> {}
}