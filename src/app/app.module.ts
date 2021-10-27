import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ResumeComponent } from './resume/resume.component';
import { HeaderComponent } from './header/header.component';
import { ProjectComponent } from './project/project.component';
import { NumberPipe } from './header/number.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ResumeComponent,
    HeaderComponent,
    ProjectComponent,
    NumberPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
