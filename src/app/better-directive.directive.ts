import { Directive, OnInit, Renderer, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  @Input() defaultBackground: string = "transparent";
  @Input() hoveredBackground: string = "orange";

  @HostBinding("style.backgroundColor") backgroundColorVariable: string = this.defaultBackground;

  constructor(private elRef: ElementRef, private renderer: Renderer) { }

  ngOnInit(){
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'background', 'orange');
  }

  @HostListener('mouseenter') myMouseOver(eventData: Event){
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'background', 'orange');
    this.backgroundColorVariable = this.hoveredBackground;
  }
  @HostListener('mouseleave') myMouseLeave(eventData: Event){
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'background', 'transparent');
    this.backgroundColorVariable = this.defaultBackground;
  }
}

// SEE BETTER-DIRECTIVE-TEMPLATE COMPONENT FOR THE HTML CODE
