import { VoterComponent } from './voter.component';

// import suite of utility methods for testing from angular
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('VoterComponent', () => {

  beforeEach(() => {
      // 3 - declare variables
      let component: VoterComponent;
      let fixture: ComponentFixture<VoterComponent>;

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
      // fixture.nativeElement
      // this is a wrapper around the native native element
      // fixture.debugElement
  });

  it('', () => {
  });
});
