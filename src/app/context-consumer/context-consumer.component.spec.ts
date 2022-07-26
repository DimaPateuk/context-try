import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextConsumerComponent } from './context-consumer.component';

describe('ContextConsumerComponent', () => {
  let component: ContextConsumerComponent;
  let fixture: ComponentFixture<ContextConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextConsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
