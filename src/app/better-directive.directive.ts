import { Directive, OnInit, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  
  constructor(private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit(){
    this.renderer.setElementStyle(this.elRef.nativeElement, 'background', 'orange');
  }
}
