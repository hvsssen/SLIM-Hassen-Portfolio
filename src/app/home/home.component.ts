import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoElement') video!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    const videoElement = this.video.nativeElement;

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          videoElement.muted = true; // Assure que la vidéo est bien muette
          videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
        }, 500);
      }
    });

    // Forcer la lecture de la vidéo si elle est en pause
    setTimeout(() => {
      if (videoElement.paused) {
        videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
      }
    }, 1000);
  }
}
