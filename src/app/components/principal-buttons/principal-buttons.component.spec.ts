import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalButtonsComponent } from './principal-buttons.component';

describe('PrincipalButtonsComponent', () => {
  let component: PrincipalButtonsComponent;
  let fixture: ComponentFixture<PrincipalButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
