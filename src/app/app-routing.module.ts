import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { CustomerEditComponent } from './pages/customer-edit/customer-edit.component';

const routes: Routes = [
  // usando o path para dar uma rota e ele da um erro pq temos que importar conforme acima 
  { path:'customer-list',component:CustomerListComponent},
  { path:'customer-edit',component:CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

