import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdNumberPage } from './id-number.page';

describe('IdNumberPage', () => {
  let component: IdNumberPage;
  let fixture: ComponentFixture<IdNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdNumberPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
