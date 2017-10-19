import { Directive, OnInit, ElementRef } from '@angular/core';
@Directive({
  selector: "[appBasicHighlight]" //note that for directives we use camel case
                                  //square brackets indicate it's attribute style
                                  //lack of brackets means it's element style
})
export class BasicHighlightDirective implements OnInit{
  //private makes the 'element' variable accessible outside the constructor in this class
  constructor(private element: ElementRef){

  }

  ngOnInit(){
    this.element.nativeElement.style.background = 'blue';
  }
}
