import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from '../components/content/content.component';
import { Content2Component } from '../components/content2/content2.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ChildContentComponent } from '../components/child-content/child-content.component';
import { ExportComponent } from '../components/export/export.component';

const routes: Routes = [
  {path: '', component: ContentComponent},
  {path : 'content', component: ContentComponent},
  {
    path : 'content2',
    component: Content2Component,
    children: [
        {path : '', component: ContentComponent},
        {path : 'content', component: ContentComponent},
        {path : 'content2', component: Content2Component},
        {path : 'child', component: ChildContentComponent}
    ]
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      // , {enableTracing: true, useHash: true} // enableTracing: true <-- debugging purposes only)
    )],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RountingModule { }
