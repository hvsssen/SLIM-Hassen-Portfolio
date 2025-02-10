import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import{SkillsComponent} from './skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkillsComponent,CommonModule,RouterOutlet,NavbarComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hassenPortfolio';
}
