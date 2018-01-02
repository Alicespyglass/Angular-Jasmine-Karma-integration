 /* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule.withRoutes([]) ],
        declarations: [ AppComponent ],
        schemas: [ NO_ERRORS_SCHEMA ] // NB - this is useful for complex components with lots of children so they won't have to all be declared, however, may miss some
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should have a router-outlet', () => {
      // get reference to router-outlet element
      let de = fixture.debugElement.query(By.directive(RouterOutlet));

      // Assert
      expect(de).not.toBeNull();
  });

});
