import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWithConsumerComponent } from './other-with-consumer.component';

describe('OtherWithConsumerComponent', () => {
  let component: OtherWithConsumerComponent;
  let fixture: ComponentFixture<OtherWithConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherWithConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherWithConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
