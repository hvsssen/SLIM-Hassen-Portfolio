import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from "../resume/resume.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, ResumeComponent, SkillsComponent, ProjectsComponent, ContactComponent]
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoElement') video!: ElementRef;

  ngAfterViewInit() {
    const videoElement = this.video.nativeElement;

    setTimeout(() => {
      videoElement.muted = true; // Ensure it's muted for autoplay
      videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
    }, 500); // Small delay to allow rendering
  }
}
