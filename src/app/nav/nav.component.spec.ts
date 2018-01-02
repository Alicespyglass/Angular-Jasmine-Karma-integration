import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ RouterTestingModule ],
        declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
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
