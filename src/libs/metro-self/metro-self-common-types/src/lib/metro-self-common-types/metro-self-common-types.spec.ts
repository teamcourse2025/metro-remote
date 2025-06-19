import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetroSelfCommonTypes } from './metro-self-common-types';

describe('MetroSelfCommonTypes', () => {
  let component: MetroSelfCommonTypes;
  let fixture: ComponentFixture<MetroSelfCommonTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetroSelfCommonTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(MetroSelfCommonTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
