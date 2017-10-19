import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { ModelTesterParentComponent } from './model-tester-parent/model-tester-parent.component';
import { OutputTesterParentComponent } from './output-tester-parent/output-tester-parent.component';
import { OutputTesterChildComponent } from './output-tester-parent/output-tester-child/output-tester-child.component';
import { ReferenceExampleComponent } from './reference-example/reference-example.component';
import { NgContentParentComponent } from './ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './ng-content-parent/ng-content-child/ng-content-child.component';
import { LifecyclesComponent } from './lifecycles/lifecycles.component';
import { ModelTesterComponent } from './model-tester-parent/model-tester-child/model-tester.component';
import { NgforPracticeComponent } from './ngfor-practice/ngfor-practice.component';
import { HighlightDirectiveComponent } from './highlight-directive/highlight-directive.component';
import { BasicHighlightDirective } from './highlight-directive/basic-highlight-directive';
import { BetterDirectiveDirective } from './better-directive.directive';
import { BetterDirectiveTemplateComponent } from './better-directive-template/better-directive-template.component';
import { SwitchComponent } from './switch/switch.component';







@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    StringInterpolationComponent,
    EventBindingComponent,
    EventBindingComponent,
    EventBindingComponent,
    DirectivePracticeComponent,
    ModelTesterComponent,
    OutputTesterParentComponent,
    OutputTesterChildComponent,
    ReferenceExampleComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    LifecyclesComponent,
    ModelTesterParentComponent,
    NgforPracticeComponent,
    HighlightDirectiveComponent,
    BasicHighlightDirective,
    BetterDirectiveDirective,
    BetterDirectiveTemplateComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
