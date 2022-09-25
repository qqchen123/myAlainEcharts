import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MychartsFormaComponent } from './forma.component';

describe('MychartsFormaComponent', () => {
  let component: MychartsFormaComponent;
  let fixture: ComponentFixture<MychartsFormaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MychartsFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
