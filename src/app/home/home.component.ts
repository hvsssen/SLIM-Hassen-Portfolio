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
      videoElement.muted = true; // Mute pour autoriser l'autoplay
      videoElement.play().catch((err: any) => console.log('Autoplay blocked:', err));
    };

    // Attendre un court délai après l'affichage du composant
    setTimeout(() => {
      playVideo();
    }, 500);

    // Vérifier périodiquement si la vidéo est en pause et tenter de la relancer
    setInterval(() => {
      if (videoElement.paused) {
        playVideo();
      }
    }, 2000);

    // Relancer la vidéo à chaque changement de route vers /home
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        playVideo();
      }
    });
  }
}
