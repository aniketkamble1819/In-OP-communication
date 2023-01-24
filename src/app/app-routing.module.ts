import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"parent", component:ParentComponent},
  {path:"child", component:ChildComponent},
  {path:"user", component:UserComponent},
  {path:"admin", component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
