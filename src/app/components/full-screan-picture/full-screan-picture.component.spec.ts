import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreanPictureComponent } from './full-screan-picture.component';

describe('FullScreanPictureComponent', () => {
  let component: FullScreanPictureComponent;
  let fixture: ComponentFixture<FullScreanPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullScreanPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreanPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
