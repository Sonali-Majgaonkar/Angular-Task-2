import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OneComponent } from './one/one.component';
import { InputFormatDirective } from './shared/directive/input-format-directive';
import { FourComponent } from './four/four.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordDirectiveDirective } from './shared/password-directive.directive';
import { LikeComponent } from './like/like.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './shared/pipe/summary.pipe';
import { UsCodePipe } from './shared/pipe/usCode.pipe';
import { CustomTitle } from './shared/pipe/custom-title.pipe';
import { InputTitleCaseDirective } from './shared/directive/input-titlecase-directive';
import { FormComponent } from './form/form.component';
import { Assignment2AComponent } from './assignment2-a/assignment2-a.component';
import { Assignment2BComponent } from './assignment2-b/assignment2-b.component';
import { ChartFormationComponent } from './chart-formation/chart-formation.component';
import { AccordiantComponent } from './accordiant/accordiant.component';
import { ProductTaskComponent } from './product-task/product-task.component'
import { FiveComponent } from './five/five.component';
import { CountControllerComponent } from './count-controller/count-controller.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    InputFormatDirective,
    FourComponent,
    PasswordDirectiveDirective,
    LikeComponent,
    PipeComponent,
    SummaryPipe,
    UsCodePipe,
    CustomTitle,
    InputTitleCaseDirective,
    FormComponent,
    Assignment2AComponent,
    Assignment2BComponent,
    ChartFormationComponent,
    AccordiantComponent,
    ProductTaskComponent,
    FiveComponent,
    CountControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
