import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'first-component', loadChildren: () => import('src/app/components/first-component/first-routing.module').then(m => m.FirstRoutingModule) },
  { path: 'second-component', loadChildren: () => import('src/app/components/second-component/second-routing.module').then((m) => m.SecondRoutingModule) },
  { path: '**', loadChildren: () => import('src/app/components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
