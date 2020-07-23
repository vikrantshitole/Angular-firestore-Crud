import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoInputDataComponent } from './Components/demo-input-data/demo-input-data.component';
import { ViewDataComponent } from './Components/view-data/view-data.component';
import { EditDataComponent } from './Components/edit-data/edit-data.component';

const routes: Routes = [
  {
    path: '',
    component: DemoInputDataComponent,
  },
  {
    path: 'view',
    component: ViewDataComponent,
  },
  {
    path: 'edit',
    component: EditDataComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
