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

    const playVideo = () => {
      videoElement.muted = true; // Mute pour éviter les restrictions d'autoplay
      videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
    };

    // Jouer la vidéo dès qu'elle est prête
    videoElement.addEventListener('canplaythrough', playVideo);

    // Forcer la lecture toutes les 2 secondes si elle est en pause
    setInterval(() => {
      if (videoElement.paused) {
        playVideo();
      }
    }, 2000);

    // Relancer la vidéo lors des changements de route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        setTimeout(playVideo, 300);
      }
    });

    // Relancer la vidéo si l'utilisateur revient sur la page
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && videoElement.paused) {
        playVideo();
      }
    });

    // Forcer la lecture au bout de 500ms
    setTimeout(playVideo, 500);
  }
}
