import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginUsuarioComponent } from './seguridad/login-usuario/login-usuario.component';
import { SignUpComponent } from './seguridad/sign-up/sign-up.component';
import { SecurityModule } from './seguridad/security.module';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [

      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },

      ]
    },

    { path: 'security', 
    loadChildren: () => import('./seguridad/security.module').then(m =>m.SecurityModule) 
    }

  
    

    ];
  

  

