import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModusTableErrorComponent } from './modus-table-error.component';

describe('ModusTableErrorComponent', () => {
  let component: ModusTableErrorComponent;
  let fixture: ComponentFixture<ModusTableErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModusTableErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModusTableErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
