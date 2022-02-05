import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDraftComponent } from './show-draft.component';

describe('ShowDraftComponent', () => {
  let component: ShowDraftComponent;
  let fixture: ComponentFixture<ShowDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDraftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
