import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/Department.service';
import { Department } from '../../models/department/Department.module';

@Component({
  selector: 'app-department-list',
  imports: [],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }
}
