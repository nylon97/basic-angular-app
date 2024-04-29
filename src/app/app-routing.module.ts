import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourthComponent } from './components/fourth-component/fourth.component';

const routes: Routes = [
  { path: 'first-component', loadChildren: () => import('src/app/components/first-component/first-routing.module').then(m => m.FirstRoutingModule) },
  { path: 'second-component', loadChildren: () => import('src/app/components/second-component/second-routing.module').then((m) => m.SecondRoutingModule) },
  { path: 'third-component', loadChildren: () => import('src/app/components/third-component/third-routing.module').then((m) => m.ThirdRoutingModule) },
  { path: 'fourth-component', loadChildren: () => import('src/app/components/fourth-component/fourth-routing.module').then((m) => m.FourthRoutingModule) },
  // { path: 'fourth-component', component: FourthComponent },
  { path: '**', loadChildren: () => import('src/app/components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
