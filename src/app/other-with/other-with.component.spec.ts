import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWithComponent } from './other-with.component';

describe('OtherWithComponent', () => {
  let component: OtherWithComponent;
  let fixture: ComponentFixture<OtherWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
