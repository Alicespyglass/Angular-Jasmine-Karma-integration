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
});
