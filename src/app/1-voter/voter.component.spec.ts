// import suite of utility methods for testing from angular
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
    // 3 - declare variables
    let fixture: ComponentFixture<VoterComponent>;
    let component: VoterComponent;

    beforeEach(() => {
        // 1 - create a dynamic module and put our component in it as we would in a real world application
        // call TestBed and the method on it which takes a metadata object
        TestBed.configureTestingModule({
          declarations: [ VoterComponent ]
        });

        // 2 - create an instance of the component
        // 4 - then can set fixture and component as an instance of the fixture
        fixture = TestBed.createComponent(VoterComponent);
        component = fixture.componentInstance;

        // this returns a html element which is the root dom element for this component
        // debugElement is a wrapper around the native native element
        // fixture.nativeElement
        // fixture.debugElement
    })

    it('should render total votes', () => {
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

    it('should highlight the upvote button if I have upvoted', () => {
        component.myVote = 1;
        fixture.detectChanges();

        let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

        expect(de.classes['highlighted']).toBeTruthy();
    })

    // Test for event binding
    it('should increase total votes when I click the upvote button', () => {
        let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

        // first arg = event, second arg = object that represents additional data about the event. Not needed in this instance
        button.triggerEventHandler('click', null);

        // Assert
        expect(component.totalVotes).toBe(1);
    })
});
