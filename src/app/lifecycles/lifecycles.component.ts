import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycles',
  templateUrl: './lifecycles.component.html',
  styleUrls: ['./lifecycles.component.css']
})
export class LifecyclesComponent implements OnInit {

// THE TYPES OF LIFECYCLES
//
//ngOnChanges - this fires when the component is rendered and also
//              when a bound @Input property changes
//
//ngOnInit - this is fired when the component is initialized BUT NOT RENDERED
//           (therefore we cannot see it yet, it has only been initialized)
//           the properties can be accessed once initialized.
//           ngInit runs AFTER the contructor runs
//
//ngDoCheck - this is fired a lot because it's fired everytime angular detects a change
//            in the component.
//            Also will fire on events (such as a click)


  constructor() { }

  ngOnInit() {
  }

}
