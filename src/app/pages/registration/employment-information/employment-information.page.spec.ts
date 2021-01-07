import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmploymentInformationPage } from './employment-information.page';

describe('EmploymentInformationPage', () => {
  let component: EmploymentInformationPage;
  let fixture: ComponentFixture<EmploymentInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmploymentInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
