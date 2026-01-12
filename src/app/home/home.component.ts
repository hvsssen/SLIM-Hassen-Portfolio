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
      videoElement.muted = true;
      videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
    }, 500);

    this.initAnimations();
  }

  initAnimations() {
    // Typing effect for text
    const textTwo = document.querySelector('.text-two');
    if (textTwo) {
      const text = textTwo.textContent || '';
      textTwo.textContent = '';
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          textTwo.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    }

    // Floating particles
    this.createFloatingParticles();

    // Mouse parallax effect
    document.addEventListener('mousemove', (e) => {
      const content = document.querySelector('.home-content') as HTMLElement;
      if (content) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        content.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
      }
    });
  }

  createFloatingParticles() {
    const home = document.querySelector('.home');
    if (!home) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'home-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 15 + 's';
      particle.style.animationDuration = (10 + Math.random() * 10) + 's';
      home.appendChild(particle);
    }
  }
}
