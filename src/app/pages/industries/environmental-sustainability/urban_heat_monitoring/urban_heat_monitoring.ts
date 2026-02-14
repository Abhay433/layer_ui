import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase4',
  imports: [],
  templateUrl: './urban_heat_monitoring.html',
  styleUrl: './urban_heat_monitoring.css'
})
export class urban_heat_monitoring {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/industries/environmental-sustainability']);
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
