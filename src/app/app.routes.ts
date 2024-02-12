import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { DescriptionComponent } from './components/description/description.component';

export const routes: Routes = [
    {path: 'profile', component: ProfileComponent, pathMatch: 'full'},
    {path: 'description', component: DescriptionComponent, pathMatch: 'full'},
    {path: '', component: ProfileComponent}
];
