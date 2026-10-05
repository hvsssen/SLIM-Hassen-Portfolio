import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResumeComponent } from "../resume/resume.component";
import { ExperienceComponent } from "../experience/experience.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjectsComponent } from "../projects/projects.component";
import { EducationComponent } from "../education/education.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    RouterLink,
    ResumeComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoElement') video!: ElementRef;

  private typingTimer?: ReturnType<typeof setInterval>;

  ngAfterViewInit() {
    const videoElement = this.video?.nativeElement;

    if (videoElement) {
      setTimeout(() => {
        videoElement.muted = true;
        videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
      }, 500);
    }

    this.initTypingEffect();
  }

  ngOnDestroy() {
    if (this.typingTimer) {
      clearInterval(this.typingTimer);
    }
  }

  /** Types out the name in the hero, unless the visitor prefers reduced motion. */
  private initTypingEffect() {
    const textTwo = document.querySelector('.text-two');
    if (!textTwo) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const text = textTwo.textContent || '';
    textTwo.textContent = '';
    let i = 0;
    this.typingTimer = setInterval(() => {
      if (i < text.length) {
        textTwo.textContent += text.charAt(i);
        i++;
      } else if (this.typingTimer) {
        clearInterval(this.typingTimer);
      }
    }, 100);
  }
}
