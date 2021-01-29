import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbreedComponent } from './subbreed.component';

describe('SubbreedComponent', () => {
  let component: SubbreedComponent;
  let fixture: ComponentFixture<SubbreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubbreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
