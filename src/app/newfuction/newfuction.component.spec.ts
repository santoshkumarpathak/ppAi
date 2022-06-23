import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewfuctionComponent } from './newfuction.component';

describe('NewfuctionComponent', () => {
  let component: NewfuctionComponent;
  let fixture: ComponentFixture<NewfuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewfuctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewfuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
