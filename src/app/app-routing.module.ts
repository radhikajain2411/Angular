import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';


const routes: Routes = [
  {
    component : AboutComponent,
    path:'about',
    children:[
      {path:"company",component:AboutCompanyComponent},
      {path:"me",component:AboutMeComponent}
    ]
  },
  {
    component : UserComponent,
    path:'user'
  },
  {
    component : HomeComponent,
    path:''
  },
  {
    component : FormComponent,
    path:'form'
  },
  {
    component : ErrorPageComponent,
    path:'**'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ArrayofComponents = [
    AboutMeComponent,
    AboutCompanyComponent,
    AboutComponent,
    HomeComponent,
    UserComponent,
    FormComponent,
    ErrorPageComponent
]