import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MychartsLoginComponent } from './login.component';

describe('MychartsLoginComponent', () => {
  let component: MychartsLoginComponent;
  let fixture: ComponentFixture<MychartsLoginComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MychartsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
