import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    // {
    //     path: 'home',
    //     component: HomeComponent
    // },
    // {
    //     path: 'about',
    //     component: AboutComponent
    // },
    // {
    //     path: 'courses',
    //     component: CoursesComponent
    // },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
