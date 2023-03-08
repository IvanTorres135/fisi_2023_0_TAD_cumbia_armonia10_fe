import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboPropitarioComponent } from './recibo-propitario.component';

describe('ReciboPropitarioComponent', () => {
  let component: ReciboPropitarioComponent;
  let fixture: ComponentFixture<ReciboPropitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciboPropitarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciboPropitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
