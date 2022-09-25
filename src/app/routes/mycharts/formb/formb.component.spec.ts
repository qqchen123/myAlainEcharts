import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MychartsFormbComponent } from './formb.component';

describe('MychartsFormbComponent', () => {
  let component: MychartsFormbComponent;
  let fixture: ComponentFixture<MychartsFormbComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MychartsFormbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsFormbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
