import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPerfilComponent } from './registro-perfil.component';

describe('RegistroPerfilComponent', () => {
  let component: RegistroPerfilComponent;
  let fixture: ComponentFixture<RegistroPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
