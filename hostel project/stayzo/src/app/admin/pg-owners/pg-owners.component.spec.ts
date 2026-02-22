import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgOwnersComponent } from './pg-owners.component';

describe('PgOwnersComponent', () => {
  let component: PgOwnersComponent;
  let fixture: ComponentFixture<PgOwnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgOwnersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PgOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
