import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';


describe('VoterComponent', () => {
  let fixture: ComponentFixture<VoterComponent>;
  let component: VoterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    // fixture.nativeElement
    fixture.debugElement;

  });

  fit('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges(); // explicitly tell Angular to detect changes and update Dom

    // as well as css selector, could query by directive e.g. By.directive(VoterComponent)
    // could also do queryAll which returns all the elements which match this predicate
    let de = fixture.debugElement.query(By.css('.vote-count')); // de = debugElement
    let el: HTMLElement = de.nativeElement; // nativeElement is of type 'any' so define as a HTML element first

    // Assert
    expect(el.innerText).toContain('21'); // innerText as we're interested in the span
  });

  fit('should highlight the upvote button if I have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  })
});
