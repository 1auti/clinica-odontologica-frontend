import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [
  {
    path: "",
    data: {
      title: "Profile",
      urls: [{ title: "Profile", url: "/profile" }, { title: "Profile" }],
    },
    component: ProfileComponent,
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    SlickCarouselModule
  ]
})
export class ProfileModule { }
