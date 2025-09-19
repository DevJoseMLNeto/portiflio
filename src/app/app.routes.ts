import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GitHubComponent } from './pages/git-hub/git-hub.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';


export const routes: Routes = [
    {path:"", redirectTo: "home", pathMatch: "full"},
    {component: HomeComponent, path:"home"},
    {component: GitHubComponent, path:"gitHub"},
    {component: SobreMimComponent, path:"sobreMim"},
    {component:ProjectsComponent, path:"projetos"}
];
