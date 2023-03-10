import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMovieDetailsComponent } from './show-movie-details.component';

describe('ShowMovieDetailsComponent', () => {
  let component: ShowMovieDetailsComponent;
  let fixture: ComponentFixture<ShowMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
