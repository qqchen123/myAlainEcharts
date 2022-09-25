import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MychartsTlistComponent } from './tlist.component';

describe('MychartsTlistComponent', () => {
  let component: MychartsTlistComponent;
  let fixture: ComponentFixture<MychartsTlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MychartsTlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MychartsTlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
