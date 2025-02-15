import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department/Department.module';

@Injectable({
    providedIn: 'root'
  })
  export class DepartmentService {
    private apiUrl = 'http://localhost:3000/departments';
  
    constructor(private http: HttpClient) {}
  
    getDepartments(): Observable<Department[]> {
      return this.http.get<Department[]>(this.apiUrl);
    }
  }