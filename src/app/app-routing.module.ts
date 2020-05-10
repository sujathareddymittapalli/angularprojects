import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmazonComponent } from './amazon/amazon.component';
import{Amazon2Component} from './amazon2/amazon2.component';
import{HimalayaComponent}from './himalaya/himalaya.component';

const routes: Routes = [
  
  {
  path:'',
  component:AmazonComponent
},
{
path:'amazon2',
component:Amazon2Component
},
{
  path:'himalaya',
  component:HimalayaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
