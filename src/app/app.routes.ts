import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'projects', component: ProjectsComponent}
    ,{path : 'home', component : HomeComponent}
    ,{path :'contact', component : ContactComponent},
    {path:'skills', component:SkillsComponent}
];
