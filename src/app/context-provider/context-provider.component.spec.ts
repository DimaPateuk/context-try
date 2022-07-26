import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextProviderComponent } from './context-provider.component';

describe('ContextProviderComponent', () => {
  let component: ContextProviderComponent;
  let fixture: ComponentFixture<ContextProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
