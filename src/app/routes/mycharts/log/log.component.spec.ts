import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MychartsLogComponent } from './log.component';

describe('MychartsLogComponent', () => {
  let component: MychartsLogComponent;
  let fixture: ComponentFixture<MychartsLogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MychartsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
