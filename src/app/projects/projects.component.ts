import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const video = document.getElementById("background-video") as HTMLVideoElement;
      if (video) {
        video.muted = true; // ✅ Ensure video is muted
      }
    });
  }
}