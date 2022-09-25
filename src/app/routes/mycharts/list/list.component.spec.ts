import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MychartsListComponent } from './list.component';

describe('MychartsListComponent', () => {
  let component: MychartsListComponent;
  let fixture: ComponentFixture<MychartsListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MychartsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
