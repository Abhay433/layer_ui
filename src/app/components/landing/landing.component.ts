
import { CommonModule } from '@angular/common'; 
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit {
  // Video element ko access karne ke liye
  @ViewChild('myVideo') videoElement!: ElementRef;

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.muted = true; // Browser policy ke liye
    video.play().catch((error:any) => {
      console.log("Video autoplay failed:", error);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  
}