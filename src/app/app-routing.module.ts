import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomTableFormEditComponent } from './modules/random-table-form-edit/random-table-form-edit.component';
import { RandomTablePageComponent } from './modules/random-table-page/random-table-page.component';

const routes: Routes = [
  { path: '',
    component:  RandomTablePageComponent,
  },
  {
    path: 'edit',
    component:  RandomTableFormEditComponent,
  },
  { path: '',   redirectTo: '', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
