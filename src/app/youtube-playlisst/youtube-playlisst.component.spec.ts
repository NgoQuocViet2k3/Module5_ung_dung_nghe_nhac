import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlaylisstComponent } from './youtube-playlisst.component';

describe('YoutubePlaylisstComponent', () => {
  let component: YoutubePlaylisstComponent;
  let fixture: ComponentFixture<YoutubePlaylisstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlaylisstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlaylisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
