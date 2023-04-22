import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AListItemsComponent } from './a-list-items.component';

describe('AListItemsComponent', () => {
  let component: AListItemsComponent;
  let fixture: ComponentFixture<AListItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AListItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
