import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from '../../components/department-list/department-list.component';

@NgModule({
    declarations: [DepartmentListComponent],
    imports: [CommonModule],
    exports: [DepartmentListComponent]
})

export class DepartmentModule {}