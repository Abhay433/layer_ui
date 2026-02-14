import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase2',
  imports: [],
  templateUrl: './satellite_change_detection.html',
  styleUrl: './satellite_change_detection.css'
})
export class satellite_change_detection {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/defence']);
  }



  goToIndustries() {
    this.router.navigate(['/'], { fragment: 'industries-section' });
  }

 

  goToHowWeWork() {
    this.router.navigate(['/how-we-work']).then(() => {
      window.scrollTo(0, 0); // top se open ho
    });
 }

}
