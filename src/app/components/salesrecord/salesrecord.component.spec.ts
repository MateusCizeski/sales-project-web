import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrecordComponent } from './salesrecord.component';

describe('SalesrecordComponent', () => {
  let component: SalesrecordComponent;
  let fixture: ComponentFixture<SalesrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesrecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
