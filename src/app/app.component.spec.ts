 /* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule.withRoutes([]) ],
        declarations: [ AppComponent ]
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

  fit('should have a link to todos page', () => {
      // get reference to router-link element
      // plural naming for queryAll - expecting lots of links to search to find todos
      let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

      // expect it to be true if index comes back >-1
      // pass in findIndex predicate - looking in properties property of href
      let index = debugElements.findIndex(de => de.properties['href'] === '/todos');

      // Assert
      expect(index).toBeGreaterThan(-1);
  })
});
