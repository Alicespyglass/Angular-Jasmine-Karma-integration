/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs' // NB not from rxjs/Observable

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [ HttpModule ],
        declarations: [ TodosComponent ],
        providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
      // 1 - needs to get refernce to server
      // use debug element gets dependency from the component only. This method is quite noisy however. Would use Testbed
      // fixture.debugElement.injector.get(TodoService);
      // NB - TestBed only returns dependencies registered at the module level
      let service = TestBed.get(TodoService);

      spyOn(service, 'getTodos').and.returnValue(Observable.from([ [1,2,3] ]));
      fixture.detectChanges(); // call this after the implementation has been changed with spyOn

      // Assert
      expect(component.todos.length).toBe(3);
  })
});
