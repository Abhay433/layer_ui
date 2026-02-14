import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase1',
  templateUrl: './crop_health_monitoring.html',
  styleUrls: ['./crop_health_monitoring.css'] 
})
export class crop_health_monitoring {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/mining']);
  }

  goToContact() {
    // Aapka contact page ka link
    this.router.navigate(['/contact']);
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