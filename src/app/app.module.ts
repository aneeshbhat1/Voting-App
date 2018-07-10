import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatePollComponent } from './createPoll.component';
import { PollListComponent } from './pollList.component';
import { ViewPollComponent } from './viewPoll.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePollComponent,
    PollListComponent,
    ViewPollComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
