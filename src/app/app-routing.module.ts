import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingScreenComponent } from './component/landing-screen/landing-screen.component';
import { SelectMoveComponent } from './component/select-move/select-move.component';
import { ShowResultComponent } from './component/show-result/show-result.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home-page',
        pathMatch: 'full'
    },
    {
        path: 'home-page',
        component: LandingScreenComponent
    },
    {
        path: 'select-move',
        component: SelectMoveComponent
    },
    {
        path: 'show-result',
        component: ShowResultComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
