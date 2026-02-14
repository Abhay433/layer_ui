import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usecase1',
  imports: [],
  templateUrl: './deforestation_mapping.html',
  styleUrl: './deforestation_mapping.css'
})
export class deforestation_mapping {

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
