/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { UserDetailsComponent } from './user-details.component';

// dummy and light weight implmeentation of router class in angular
class RouterStub {
    // component uses navigate method of router class so create a dummy one here
    navigate(params) {
    }
}

class ActivatedRouteStub {
    // remember to initialise by setting as an empty observable
    params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ UserDetailsComponent ],
          // replace router class with RouterStub
          // supply an object instead with 2 properties
          // instructs angular that when it sees Router as one of the parameters
          // in the constructor of a component, to use an instance of Stopclass  RouterStub instead
          providers: [
            { provide: Router, useClass: RouterStub },
            { provide: ActivatedRoute, useClass: ActivatedRouteStub }
          ]
    })
    .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    fit('should create', () => {
        expect(component).toBeTruthy();
    });

    fit('should redirect the user to the users page after saving', () => {
        // 1 - want to spyOn the navigate method of the Router
        let router = TestBed.get(Router);
        let spy = spyOn(router, 'navigate');

        // Act
        component.save();

        // Assert
        expect(spy).toHaveBeenCalledWith(['users']); // users is the object that we should pass to navigate method

    })

});
