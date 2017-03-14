import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomateComponent } from './roomate.component';

describe('RoomateComponent', () => {
  let component: RoomateComponent;
  let fixture: ComponentFixture<RoomateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
