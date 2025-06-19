import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetroSelfServices } from './metro-self-services';

describe('MetroSelfServices', () => {
  let component: MetroSelfServices;
  let fixture: ComponentFixture<MetroSelfServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroSelfServices],
    }).compileComponents();

    fixture = TestBed.createComponent(MetroSelfServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
