import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetroSelf } from './metro-self';

describe('MetroSelf', () => {
  let component: MetroSelf;
  let fixture: ComponentFixture<MetroSelf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroSelf],
    }).compileComponents();

    fixture = TestBed.createComponent(MetroSelf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
