import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaycareComponent } from './daycare.component';

const routes: Routes = [{
    path: '',
    component: DaycareComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DaycareRoutingModule { }

export const routedComponents = [
    DaycareComponent
];
