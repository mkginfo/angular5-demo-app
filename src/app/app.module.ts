import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { Content2Component } from './components/content2/content2.component';

import { RountingModule } from './rounting/rounting.module';
import { ChildContentComponent } from './components/child-content/child-content.component';
import { ExportComponent } from './components/export/export.component';
import { ExportService } from './services/export.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoginService } from './common/services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    Content2Component,
    ChildContentComponent,
    ExportComponent],
  imports: [
    BrowserModule,
    RountingModule,
    NgxDatatableModule
  ],
  providers: [ExportService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
