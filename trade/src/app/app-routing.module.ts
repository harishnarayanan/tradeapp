import { PagesModule, pageRoutes } from './pages/pages.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = pageRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
