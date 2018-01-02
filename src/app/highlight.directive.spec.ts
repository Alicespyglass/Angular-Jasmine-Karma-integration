/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

// 1 - create a template in the directive component
@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent {
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ] // NB to include both the component and the directives
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges();
  });

  fit('should highlight the first element with Cyan', () => {
      // reference element
      let de = fixture.debugElement.queryAll(By.css('p'))[0];

      // Assert
      expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  fit('should highlight the second element with defaultColor', () => {
      // reference element
      let de = fixture.debugElement.queryAll(By.css('p'))[1];
      let directive = de.injector.get(HighlightDirective);

      // Assert
      expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);

  });


});
