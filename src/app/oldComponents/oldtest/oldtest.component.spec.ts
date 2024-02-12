import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldtestComponent } from './oldtest.component';

describe('OldtestComponent', () => {
  let component: OldtestComponent;
  let fixture: ComponentFixture<OldtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldtestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OldtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
