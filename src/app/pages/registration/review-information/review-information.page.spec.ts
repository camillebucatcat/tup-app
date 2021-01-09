import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewInformationPage } from './review-information.page';

describe('ReviewInformationPage', () => {
  let component: ReviewInformationPage;
  let fixture: ComponentFixture<ReviewInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
