import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivAddComponent } from './univ-add.component';

describe('UnivAddComponent', () => {
  let component: UnivAddComponent;
  let fixture: ComponentFixture<UnivAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
