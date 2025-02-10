import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
