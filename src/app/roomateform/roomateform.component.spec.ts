import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomateformComponent } from './roomateform.component';

describe('RoomateformComponent', () => {
  let component: RoomateformComponent;
  let fixture: ComponentFixture<RoomateformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomateformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
