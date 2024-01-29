import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullnameFieldComponent } from './fullname-field.component';

describe('FullnameFieldComponent', () => {
  let component: FullnameFieldComponent;
  let fixture: ComponentFixture<FullnameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullnameFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullnameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
