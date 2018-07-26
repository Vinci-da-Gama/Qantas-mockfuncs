import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../featureCompos/home/home.component';

const userRoute: Routes = [
	{
		path: '',
		component: HomeComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(userRoute)
	],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
