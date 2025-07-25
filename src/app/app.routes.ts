import { Routes } from '@angular/router';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { ContactComponent } from './contact/contact.component';
import { Notfound } from './notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: About,title:'About' },
    { path: 'portfolio', component: Portfolio,title:'Portfolio' },
    { path: 'contact', component: ContactComponent,title:'Contact' },
    { path: '**', component: Notfound }
];
